module.exports = function (app, Sequelize, sequelize, db) {
    // const Op = Sequelize.Op;

    db.addSupervisor = require('../../Model/addCompanySupervisors/addSupervisors')(sequelize, Sequelize)
    sequelize.sync();


    app.route('/addsupervisor')
        .post((req, res) => {
            db.addSupervisor.create({
                supervisorId: req.body.supervisorId,
                supervisorName: req.body.supervisorName,
                supervisorTitle: req.body.supervisorTitle,
                assignedProject: req.body.assignedProject
            }).then(newSupervisor => {

                res.send(JSON.stringify({
                    "record": newSupervisor,
                    'message': "Successfully created the user."
                }))
            })
        })
}