module.exports = function(app){
const config = require('../config.js');
const mysql = require('mysql');
const Sequelize = require('sequelize');   
    // const Op = Sequelize.Op;
const db = {};

const sequelize = new Sequelize('itmsdb','root','7517',{
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }})
sequelize.authenticate()
  .then(() => {
    console.log('Successfully connected to MYSQL')
  })
  .catch((err) => {
    console.log('Error connecting to mysql', err)
    process.exit(1);
  })

  //Auto ssh_disable_
  // require('../Tasks/Automatic_ssh_disable/auto_ssh_controller')(app,Sequelize,sequelize,db)

config.mysql.client = sequelize;
db.Sequelize = Sequelize;
db.sequelize = sequelize;

}
