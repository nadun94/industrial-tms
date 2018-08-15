
module.exports = (sequelize, DataTypes) => {
    const logUsers = sequelize.define('LogUser', {
        ID:{ type:DataTypes.INTEGER(),
         primaryKey: true,
         autoIncrement: true,
        },
        Date: DataTypes.DATE,
        task: DataTypes.STRING(250),
        status: DataTypes.STRING(15),
        user: DataTypes.STRING(35),
        domain:DataTypes.STRING(20),
        changeNo:DataTypes.STRING(15)
    });


    return logUsers;
};
