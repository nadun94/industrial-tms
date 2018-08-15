module.exports = function (app, Sequelize, sequelize, db) {
    // const Op = Sequelize.Op;

    db.usertbl = require('../../Model/User')(sequelize, Sequelize)
    sequelize.sync();

    app.route('/login')
        .post((req, res) => {

            db.usertbl.count({
                    where: {
                        username: req.body.username,
                        password: req.body.password
                    }
                })
                .then(function (count) {
                    if (count === 1) {
                        db.usertbl.findAll({
                                where: {
                                    username: req.body.username,
                                    password: req.body.password
                                }
                            })
                            .then((result, error) => {
                                if (error) {
                                    // console.log("Error: ",error)
                                    res.send(JSON.stringify({
                                        "Error_status": 500,
                                        "auth":false,
                                        "error": error,
                                        "user": null
                                    }))
                                } else {
                                    // console.log("Date: ",result)
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

    app.route('/create-user')
        .post((req, res) => {
            db.usertbl.create({
                username: req.body.username,
                password: req.body.password,
                type: req.body.type,
                acces_level: req.body.acces_level
            }).then(newUser => {

                res.send(JSON.stringify({
                    "record": newUser,
                    'message': "Successfully created the user."
                }))
            })
        })


}