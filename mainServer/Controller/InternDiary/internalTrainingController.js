module.exports = function (app, Sequelize, sequelize, db) {


    db.internalTraining = require('../../Model/InternDiary/internalTrainingInfo')(sequelize, Sequelize)
    sequelize.sync();

    app.route('/internalTrainingInfo')
        .post((req, res) => {
            db.internalTraining.create({
                student_id: req.body.student_id,
                trainer: req.body.trainer,
                description: req.body.description,
                from: req.body.from,
                to: req.body.to,
                approve: req.body.approve
            }).then(record => {

                res.send(JSON.stringify({
                    "status": "200",
                    "data": record,
                    'message': "Successfully created record."
                }))
            }).catch( (error) => {
                res.send(JSON.stringify({
                    "status": "500",
                    'message': "Error creating record."
                }))
                console.log(error+"---InternalTrainingInfo")
            })
        });

        app.route('/internalTrainingInfo/approve')
        .post((req, res) => {
            db.internalTraining.update({
                approve: req.body.approve,
                where: {
                    recordId: req.body.recordId
                 }
            }).then(record => {

                res.send(JSON.stringify({
                    "status": "200",
                    "data": record,
                    'message': "Successfully created record."
                }))
            }).catch( (error) => {
                res.send(JSON.stringify({
                    "status": "500",
                    'message': "Error creating record."
                }))
                console.log(error+"---InternalTrainingInfo/approve")
            })
        });

        app.route('/internalTrainingInfo/:id')
        .get((req, res) => {
            db.internalTraining.findAll({
                where: {
                    student_id: req.params.id
                 }
            }).then(data => {

                res.send(JSON.stringify({
                    "data": data
                }))
            }).catch( (error) => {
                res.send(JSON.stringify({
                    "status": "500",
                    'message': "Error searching record."
                }))
                console.log(error+"---InternalTrainingInfo[get]")
            })
        });


    app.route('/internalTrainingInfo/delete/:id')
        .get((req, res) => {
            db.internalTraining.destroy({
                where: {
                    recordId: req.params.id
                }
            }).then(data => {

                res.send(JSON.stringify({
                    "data": data
                }))
            }).catch( (error) => {
                res.send(JSON.stringify({
                    "status": "500",
                    'message': "Error searching record."
                }))
                console.log(error+"---InternalTrainingInfo[get]")
            })
        });

}