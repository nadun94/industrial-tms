module.exports = (sequelize, DataTypes) => {
    const dailyview = sequelize.define('dailyview', {
        studentid:{ type:DataTypes.STRING(),
         primaryKey: true
        },
        empname:DataTypes.STRING(),
        empadress: DataTypes.STRING(),
        contactnumber: DataTypes.STRING(),
        emailadress: DataTypes.STRING(),
        internshiptitle:DataTypes.STRING(),
        specialization:DataTypes.STRING(),
        from:DataTypes.STRING(),
        to:DataTypes.STRING(),
        TrainingParty:DataTypes.INTEGER(),
        description:DataTypes.STRING(),
        fromd:DataTypes.STRING(),
        tod:DataTypes.STRING(),
        






    });


    return dailyview;
};
