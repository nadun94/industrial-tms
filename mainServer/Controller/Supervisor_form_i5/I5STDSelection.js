module.exports = function (app, Sequelize, sequelize, db)
{

db.stdsuperviserfone = require('../../Model/studentsuperviserf1')(sequelize, Sequelize)
db.ys = require('../../Model/stdfilli-1')(sequelize, Sequelize)
 sequelize.sync();




 app.route('/getallstd123')
 .get((req, res) => {
     db.ys.findAll({attributes: ['stdname']}).then((results,error) => {
        
        const pack=[];
        let temp;
        for (var i = 0; i < results.length; i++) {
             temp = results[i].stdname
             console.log(results[i].stdname)
             pack.push(temp)
        }
      
         res.send(JSON.stringify({
             "record": pack
         }))
     })
 })

 app.route('/getemp&spvsr/:para')
 .get((req, res) => {
     db.stdsuperviserfone.findAll({empname: req.params.para}).then(data => {
        console.log(data);
         res.send(JSON.stringify({
             "record": data
         }))
     })
 })

}