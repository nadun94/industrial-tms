module.exports = (sequelize, DataTypes) => {
    const supervisorAssign = sequelize.define('tbl_supervisor_assign', {
        assignId:{ type:DataTypes.STRING(),
            primaryKey: true
        },
        studentId:DataTypes.STRING(),
        supervisorId:DataTypes.STRING(),


    });

    return  supervisorAssign;
};


