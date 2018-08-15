
module.exports = (sequelize, DataTypes) => {
    const usertbl = sequelize.define('tbl_user', {
        username:{ type:DataTypes.STRING(),
         primaryKey: true
        },
        password: DataTypes.STRING(),
        type: DataTypes.STRING(50),
        acces_level: DataTypes.INTEGER(50)

    });


    return usertbl;
};
