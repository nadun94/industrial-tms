module.exports = function (app) {
  const config = require('../config.js');
  const mysql = require('mysql');
  const Sequelize = require('sequelize');
  // const Op = Sequelize.Op;
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

  //create user
  require('../Controller/Login/login')(app, Sequelize, sequelize, db)

  config.mysql.client = sequelize;
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

}