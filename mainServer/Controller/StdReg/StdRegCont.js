module.exports = function (app, Sequelize, sequelize, db) {
    // const Op = Sequelize.Op;

    db.stdregdet = require('../../Model/RegStudent')(sequelize, Sequelize)
    sequelize.sync();


    app.route('/stddetreg')
        .post((req, res) => {
            if(req.body.stdid==null || req.body.stdid==""){
                res.send(JSON.stringify({
                    'message': "Please Enter StudentID!!!!"
                }))
            }else if(req.body.name==null || req.body.name==""){
                res.send(JSON.stringify({
                    'message': "Please Enter Name!!!!"
                }))
            }else if(req.body.nic==null || req.body.nic==""){
                res.send(JSON.stringify({
                    'message': "Please Enter NIC!!!!"
                }))
            }else if(req.body.addr==null || req.body.addr==""){
                res.send(JSON.stringify({
                    'message': "Please Enter Address!!!!"
                }))
            }else if(req.body.tel==null || req.body.tel==""){
                res.send(JSON.stringify({
                    'message': "Please Enter Phone NUmber!!!!"
                }))
            }else if(req.body.cmpny==null || req.body.cmpny==""){
                res.send(JSON.stringify({
                    'message': "Please Enter company!!!!"
                }))
            }else if(req.body.intrnpos==null || req.body.intrnpos==""){
                res.send(JSON.stringify({
                    'message': "Please Enter Position!!!!"
                }))
            }else if(req.body.intrndur==null || req.body.intrndur==""){
                res.send(JSON.stringify({
                    'message': "Please Enter duration!!!!"
                }))
            }else{
                db.stdregdet.create({
                    stdid: req.body.stdid,
                    name: req.body.name,
                    nic: req.body.nic,
                    address: req.body.addr,
                    tel: req.body.tel,
                    company: req.body.cmpny,
                    intern_position: req.body.intrnpos,
                    intern_duration: req.body.intrndur,
                    status: req.body.stat
                }).then(data => {
    
                    res.send(JSON.stringify({
                        "record": data,
                        'message': "You have been Registered Successfully!!!!"
                    }))
                }).catch((err) => {
                    console.log(err);
                    res.send(JSON.stringify({
                        'message': "Error"
                    }))
                });
            }
            
        })

        app.route('/getallstddetreg')
        .get((req, res) => {
            db.stdregdet.findAll({
            }).then(data => {

                res.send(JSON.stringify({
                    "record": data
                }))
            })
        })

        app.route('/getallstddetreg/:para')
        .get((req, res) => {
            console.log(req.params.para);
            db.stdregdet.findAll({
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

}