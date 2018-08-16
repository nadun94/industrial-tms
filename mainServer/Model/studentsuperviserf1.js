module.exports = (sequelize, DataTypes) => {
    const stdsuperviserfone = sequelize.define('tbl_superviserandemployer', {
        empid:{ type:DataTypes.STRING(),
         primaryKey: true
        },
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
        dateof:DataTypes.STRING()






    });


    return  stdsuperviserfone;
};
