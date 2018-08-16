module.exports = function (app, Sequelize, sequelize, db) {
    // const Op = Sequelize.Op;

    db.stdregdet = require('../../Model/RegStudent')(sequelize, Sequelize)
    sequelize.sync();


    app.route('/stddetreg')
        .post((req, res) => {
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
            })
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