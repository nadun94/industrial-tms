
module.exports = (sequelize, DataTypes) => {
    const ssh_disabled_list = sequelize.define('vcenter_alarms_enabled_list', {
        ID:{ type:DataTypes.INTEGER(),
         primaryKey: true,
         autoIncrement: true,
        },
        Date: DataTypes.DATEONLY,
        host: DataTypes.STRING(50),
        vcenter: DataTypes.STRING(50),
        timestamp: {
            type:DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });


    return ssh_disabled_list;
};
