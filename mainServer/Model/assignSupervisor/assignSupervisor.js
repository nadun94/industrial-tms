module.exports = (sequelize, DataTypes) => {
    const supervisorAssign = sequelize.define('tbl_supervisor_assign', {
        assignId:{ type:DataTypes.STRING(),
            primaryKey: true
        },
        studentId:DataTypes.STRING(),
        supervisorId:DataTypes.STRING(),
        studentName:DataTypes.STRING(),
        supervisorName:DataTypes.STRING(),

    });

    return  supervisorAssign;
};
