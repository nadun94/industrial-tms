module.exports = (sequelize, DataTypes) => {
    const usertbl = sequelize.define('tbl_regstudent', {
        stdid:{ type:DataTypes.STRING(),
            primaryKey: true
           },
        name: DataTypes.STRING(),
        nic: DataTypes.STRING(),
        address: DataTypes.STRING(),
        tel: DataTypes.INTEGER(),
        company: DataTypes.STRING(),
        intern_position: DataTypes.STRING(),
        intern_duration: DataTypes.STRING() ,
        status: DataTypes.BOOLEAN()
    });


    return usertbl;
};