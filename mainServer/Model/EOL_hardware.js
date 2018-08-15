
module.exports = (sequelize, DataTypes) => {
    const eol_list = sequelize.define('eol_list', {
        ID: {
            type: DataTypes.INTEGER(),
            primaryKey: true,
            autoIncrement: true,
        },
        host: DataTypes.STRING(50),
        vcenter: DataTypes.STRING(50),
        vendor: DataTypes.STRING(50),
        model: DataTypes.STRING(50),
        eol_date: DataTypes.DATEONLY,
        eos_date: DataTypes.DATEONLY,
        eol_flag: {
            type: DataTypes.TINYINT(),
            defaultValue: 0
        },
        eos_flag: {
            type: DataTypes.TINYINT(),
            defaultValue: 0
        }

    });


    return eol_list;
};
