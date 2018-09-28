module.exports = (sequelize, DataTypes) => {
    const internalTraining = sequelize.define('Student_internalTraining', {
        recordId:{ 
            type: DataTypes.INTEGER(),
            autoIncrement: true,
            primaryKey: true
           },
        student_id: DataTypes.STRING(),   
        trainer: DataTypes.STRING(),
        description: DataTypes.STRING(),
        from: DataTypes.STRING(),
        to: DataTypes.STRING(),
        approve: DataTypes.STRING(),
        
    });


    return internalTraining;
};