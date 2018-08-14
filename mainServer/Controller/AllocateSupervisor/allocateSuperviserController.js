
module.exports = function (app, Sequelize, sequelize, db)
{

    db.studentDetails = require('../../Model/RegStudent')(sequelize, Sequelize)
    db.supervisorDetails = require('../../Model/studentsuperviserf1')(sequelize, Sequelize)
    db.assignSupervisor = require('../../Model/assignSupervisor/assignSupervisor')(sequelize, Sequelize)
    sequelize.sync();



    app.route('/getallstudentlist/')
        .get((req, res) => {
            console.log(req.params.para);
            db.studentDetails.find({
                where: {
                    $or: [
                        {
                            name:
                                {
                                    $eq: req.params.para
                                }
                        },
                        {
                            stdid:
                                {
                                    $eq:  req.params.para
                                }
                        }
                    ]
                }
            }).then(data => {

                res.send(JSON.stringify({
                    "record": data
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
                    res.send(JSON.stringify({
                    "record": newSuperallocate,
                    'message': "Successfully created the record."
                }))
            })
        })
}

