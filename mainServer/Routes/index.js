module.exports = function (app) {
  const config = require('../config.js');
  const mysql = require('mysql');
  const Sequelize = require('sequelize');
  const mongoose = require('mongoose');
  const db = {};

  const sequelize = new Sequelize(config.mysql.options)
  sequelize.authenticate()
    .then(() => {
      console.log('Successfully connected to MYSQL')
    })
    .catch((err) => {
      console.log('Error connecting to mysql', err)
      process.exit(1);
    })

config.mysql.client = sequelize;
db.Sequelize = Sequelize;
db.sequelize = sequelize;

  //create user
  require('../Controller/Login/login')(app, Sequelize, sequelize, db)
  require('../Controller/StdReg/StdRegCont')(app, Sequelize, sequelize, db)

  //require formI5 controller
  require('./supervisor_formI5_route/supervisor_formI5_route')(app)

    //add companysupervisor
    require('../Controller/addSupervisors/addSupervisorsController')(app, Sequelize, sequelize, db)

   //allocate supervisor
    require('../Controller/AllocateSupervisor/allocateSuperviserController.js')(app, Sequelize, sequelize, db)



    //Connection to the mysql datatabase
    // const Op = Sequelize.Op;

  //IT16122192(rakshitha)employeeadd

  require('../Controller/studentsuperviser/studentsupervisercontrolerf1')(app, Sequelize, sequelize, db)


  //Connection to the Mogodb
  
mongoose.connect('mongodb://localhost:27017/internship', (err) => {
  if (err) {
      console.log('Error connecting to mongodb')
  }
  console.log('MongoDB connection successfull')
})
}