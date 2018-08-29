module.exports = (app)=>{
    var SupervisorFormI5 = require('../../Controller/Supervisor_form_i5/Supervisor_form_i5')

    //Add form i5 details to the database by supervisor
    app.route('/fill-formI5_supervisor')
    .post((req,res)=>{
        console.log(req.body)
        SupervisorFormI5.insertFormi5(req.body) 
        .then((data)=>{
            // res.status(data.status).send({message:data.message})
            res.send(JSON.stringify({'message':'Form-I5 is successfully saved.'}))
        })
        .catch((err)=>{
            console.log(err)
            // res.status(data.status).send({message:data.message})
            res.send(JSON.stringify({'message':'Form-I5 saving failed.'}))
        })
        } )

 


}   