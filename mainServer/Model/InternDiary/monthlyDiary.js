module.exports = (sequelize, DataTypes) => {
    const diary = sequelize.define('Student_monthlyDiary', {
        recordId:{
            type: DataTypes.INTEGER(),
            autoIncrement: true,
            primaryKey: true
           },
        student_id: DataTypes.STRING(),
        month: DataTypes.STRING(),
        summery: DataTypes.STRING(),
        remarks: DataTypes.STRING(),
        status: DataTypes.STRING(),
       
        
    });


    return diary;
};