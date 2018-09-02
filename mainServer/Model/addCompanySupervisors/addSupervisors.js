module.exports = (sequelize, DataTypes) => {
    const addSupervisor = sequelize.define('tbl_companySupervisor', {
        supervisorId:{ type:DataTypes.STRING(),
            primaryKey: true
        },
        supervisorName:DataTypes.STRING(),
        supervisorTitle:DataTypes.STRING(),
        assignedProject:DataTypes.STRING(),

    });

    return  addSupervisor;
};