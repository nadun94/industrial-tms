
module.exports = (sequelize, DataTypes) => {
    const ssh_disabled_list = sequelize.define('ssh_disabled_list', {
        ID:{ type:DataTypes.INTEGER(),
         primaryKey: true,
         autoIncrement: true,
        },
        Date: DataTypes.DATE,
        vcenter: DataTypes.STRING(50),
        host: DataTypes.STRING(50),
        exception_flag: DataTypes.TINYINT(),
        user: DataTypes.STRING(35),
    });


    return ssh_disabled_list;
};
