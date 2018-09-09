module.exports = function (app, Sequelize, sequelize, db) {
    // const Op = Sequelize.Op;

    db.internaltraining = require('../../Model/InternDiary/internalTrainingInfo')(sequelize, Sequelize)
     db.monthlydiary = require('../../Model/InternDiary/monthlyDiary')(sequelize, Sequelize)
    sequelize.sync();

    app.route('/internaltrainingsearch')
        .post((req, res) => {

            db.internaltraining.count({
                    where: {
                       recordId: req.body. recordId
                    }
                })
                .then(function (count) {
                    if (count === 1) {
                        db.internaltraining.findAll({
                                where: {
                                     recordId: req.body. recordId
                                    
                                }
                            })
                            .then((result, error) => {
                                if (error) {
                                    console.log("Error: ",error)
                                    res.send(JSON.stringify({
                                        "Error_status": 500,
                                        "auth":false,
                                        "error": error,
                                        "user": null
                                    }))
                                } else {
                                    console.log("Date: ",result)
                                    res.send(JSON.stringify({
                                        "Error_status": 200,
                                        "auth":true,
                                        "error": null,
                                        "user": result
                                    }))
                                }
                            }).catch((err) => {
                                console.log('Error messagge: ' + err)
                            })
                    } else {
                        res.send(JSON.stringify({
                            "Error_status": 200,
                            "auth":false,
                            "error": null,
                            "user": null,
                            "message": 'Check your credentials.'
                        }))
                    }
                   
                });

        })

         app.route('/internaltrainingsearch')
        .post((req, res) => {

            db.monthlydiary.count({
                    where: {
                       recordId: req.body. recordId
                    }
                })
                .then(function (count) {
                    if (count === 1) {
                        db.monthlydiary.findAll({
                                where: {
                                     recordId: req.body. recordId
                                    
                                }
                            })
                            .then((result, error) => {
                                if (error) {
                                    console.log("Error: ",error)
                                    res.send(JSON.stringify({
                                        "Error_status": 500,
                                        "auth":false,
                                        "error": error,
                                        "user": null
                                    }))
                                } else {
                                    console.log("Date: ",result)
                                    res.send(JSON.stringify({
                                        "Error_status": 200,
                                        "auth":true,
                                        "error": null,
                                        "user": result
                                    }))
                                }
                            }).catch((err) => {
                                console.log('Error messagge: ' + err)
                            })
                    } else {
                        res.send(JSON.stringify({
                            "Error_status": 200,
                            "auth":false,
                            "error": null,
                            "user": null,
                            "message": 'Check your credentials.'
                        }))
                    }
                   
                });

        })




}