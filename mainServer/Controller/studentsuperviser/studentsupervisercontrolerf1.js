
module.exports = function (app, Sequelize, sequelize, db)
{

//We use controllers according to the MVC architecture to sed data from database to the frontends.
//Firstly we have to import data base model in to the controler.
db.stdsuperviserfone = require('../../Model/studentsuperviserf1')(sequelize, Sequelize)
db.ys = require('../../Model/stdfilli-1')(sequelize, Sequelize)
 sequelize.sync();



//using this bellow method we can fetch data from database.Here I want get data from student table
//after anter studentid.So I have used post method to add student id and return a json file to the frontend.
app.route('/studentsearch')
        .post((req, res) => {

            db.ys.count({
                    where: {
                       studentID: req.body.studentID
                    }
                })
                .then(function (count) {
                    if (count === 1) {
                        db.ys.findAll({
                                where: {
                                    studentID: req.body.studentID
                                    
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




//used this post method to send data from front end to backend.
 app.route('/addsuperviserandstudent')
        .post((req, res) => {
        db.stdsuperviserfone.create({
        empid:req.body.empid,
        empname:req.body.empname,
        empadress:req.body.empadress,
        supervisername:req.body.supervisername ,
        supervisertitle:req.body.supervisertitle ,
        superviseremail:req.body.superviseremail,
        superviserphone:req.body.superviserphone,
        startdate:req.body.startdate,
        enddate:req.body.enddate,
        hours:req.body.hours,
        tasks:req.body.tasks,
        learningthings:req.body.learningthings,
        externalsupervisername:req.body.externalsupervisername,
        dateof:req.body.dateof,
        StudentId:req.body.StudentId
            }).then(newemployee => {

                res.send(JSON.stringify({
                    "record": newemployee,
                    'message': "Successfully created the record."
                }))
            })
        })
}

