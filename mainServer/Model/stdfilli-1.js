
module.exports = (sequelize, DataTypes) => {
    const stdfilli1 = sequelize.define('stdfilli1', {
        studentID:{ type:DataTypes.STRING(50),
         primaryKey: true
        },
        stdname:DataTypes.STRING(50),
        address: DataTypes.STRING(50),
        homephone: DataTypes.STRING(50),
        mobilephone: DataTypes.STRING(50),
        email: DataTypes.STRING(50),
        semester:DataTypes.STRING(50),
        gpa:DataTypes.STRING(50),
        cgpa:DataTypes.STRING(50),
    });


    return stdfilli1;
};
