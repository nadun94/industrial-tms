module.exports = (app)=>{
    var SupervisorFormI6 = require('../../Controller/i6_form/form_1_6.js')

    //Add form i6 details 
    app.route('/fill-formI6')
    .post((req,res)=>{
        console.log(req.body)
        SupervisorFormI6.insertFormi6(req.body) 
        .then((data)=>{
            // res.status(data.status).send({message:data.message})
            res.send(JSON.stringify({'message':'data succesfully saved.'}))
        })
        .catch((err)=>{
            // res.status(data.status).send({message:data.message})
            console.log(err);
            res.send(JSON.stringify({'message':'failed.'}))
        })
        } )

 


}   