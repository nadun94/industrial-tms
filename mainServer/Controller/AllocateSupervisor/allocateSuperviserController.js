
module.exports = function (app, Sequelize, sequelize, db)
{

    db.studentDetails = require('../../Model/RegStudent')(sequelize, Sequelize)
    db.studentDetails2 = require('../../Model/stdfilli-1')(sequelize, Sequelize)
    db.supervisorDetails = require('../../Model/addCompanySupervisors/addSupervisors')(sequelize, Sequelize)
    db.assignSupervisor = require('../../Model/assignSupervisor/assignSupervisor')(sequelize, Sequelize)
    sequelize.sync();



    app.route('/getstudent/:para')
        .get((req, res) => {
            console.log(req.params.para);
            db.studentDetails.find({
            }).then(data => {

                res.send(JSON.stringify({
                    "stdid": data.stdid,"name":data.name,"email":data.email,"mobilephone":data.mobilephone,
                    "semester":data.semester,"gpa":data.gpa,
                    "company":data.company,"intern_position":data.intern_position

                }))
            })
        })

    app.route('/getsupervisor/:para')
        .get((req, res) => {
            console.log(req.params.para);
            db.supervisorDetails.find({
            }).then(data => {

                res.send(JSON.stringify({
                    "supervisorId": data.supervisorId, "supervisername": data.supervisername,
                    "supervisertitle":data.supervisertitle,"assignedProject":data.assignedProject
                }))
            })
        })


    app.route('/getallstudentlist')
        .get((req, res) => {
            console.log(req.params.para);
            db.studentDetails.findAll({
            }).then(data => {

                res.send(JSON.stringify({
                    "stdid": data.stdid,"name":data.name

                }))
            })
        })


    app.route('/getallsupervisorslist')
        .get((req, res) => {
            console.log(req.params.para);
            db.supervisorDetails.findAll({
            }).then(data => {

                res.send(JSON.stringify({
                    "supervisorId": data.supervisorId, "supervisername": data.supervisorId
                }))
            })
        })


    app.route('/assignsupervisor')
        .post((req, res) => {
            db.assignSupervisor.create({
                assignId:req.body.assignId,
                studentId:req.body.studentId,
                supervisorId:req.body.supervisorId,
                studentName:req.body.studentName,
                supervisorName:req.body.supervisorName,
                }).then(newSuperallocate => {
                    console.log(newSuperallocate)
                    res.send(JSON.stringify({
                    "record": newSuperallocate,
                    'message': "Successfully created the record."
                }))
            })
        })
}

