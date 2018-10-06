module.exports = (sequelize, DataTypes) => {

    //We create table name as tbl_superviserandemployer using  stdsuperviserfone object
    const stdsuperviserfone = sequelize.define('tbl_superviserandemployer', {
        empid:{ type:DataTypes.STRING(),
         primaryKey: true
        },
        //theses are the main atributes in our table.
        empname:DataTypes.STRING(),
        empadress: DataTypes.STRING(),
        supervisername: DataTypes.STRING(),
        supervisertitle: DataTypes.STRING(),
        superviseremail:DataTypes.STRING(),
        superviserphone:DataTypes.STRING(),
        startdate:DataTypes.STRING(),
        enddate:DataTypes.STRING(),
        hours:DataTypes.INTEGER(),
        tasks:DataTypes.STRING(),
        learningthings:DataTypes.STRING(),
        externalsupervisername:DataTypes.STRING(),
        dateof:DataTypes.STRING(),
        StudentId:DataTypes.STRING()







    });

//we should return modern obeject to the controler class 
//to connect this db model with front and and to crete tables
    return  stdsuperviserfone;
};
