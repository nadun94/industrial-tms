module.exports = function (app, Sequelize, sequelize, db) {


    db.internalTraining = require('../../Model/InternDiary/internalTrainingInfo')(sequelize, Sequelize);
    db.monthlyDiary = require('../../Model/InternDiary/monthlyDiary')(sequelize, Sequelize)
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
            //console.log(req.body);
            db.internalTraining.update({
                approve: "Approved"},
                {where: {
                    recordId: req.body.recordId
                 }}
            ).then(record => {

                res.send(JSON.stringify({
                    "status": "200",
                    "data": record,
                    'message': "Successfully approved record."
                }))
            }).catch( (error) => {
                res.send(JSON.stringify({
                    "status": "500",
                    'message': "Error approving record."
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

    app.route('/monthly_diary/delete/:id')
        .get((req, res) => {
            db.monthlyDiary.destroy({
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

    app.route('/monthly_diary')
        .post((req, res) => {
            db.monthlyDiary.create({
                student_id: req.body.student_id,
                month: req.body.month,
                summery:req.body.summery ,
                remarks:req.body.remarks,
                status: req.body.status
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

    app.route('/monthly_diary/:id')
        .get((req, res) => {
            db.monthlyDiary.findAll({
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

    app.route('/monthly_diary/remarksAdd')
        .post((req, res) => {
            //console.log(req.body);
            db.monthlyDiary.update({
                    status:"approved" ,remarks:req.body.remarks},
                {where: {
                        recordId: req.body.recordId,

                    }}
            ).then(record => {

                res.send(JSON.stringify({
                    "status": "200",
                    "data": record,
                    'message': "Remarks added successfully."
                }))
            }).catch( (error) => {
                res.send(JSON.stringify({
                    "status": "500",
                    'message': "Error adding remarks."
                }))
                console.log(error+"---InternalTrainingInfo/approve")
            })
        });
}