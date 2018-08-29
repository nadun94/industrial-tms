module.exports = (app)=>{
    var allocateSuper = require('../../Controller/AllocateSupervisor/allocateSuperviserController')

    //Add form i5 details to the database by supervisor
    app.route('/allocateSupervisor')
        .post((req,res)=>{
            console.log(req.body)
            allocateSuper.assignSupervisor(req.body)
                .then((data)=>{
                    // res.status(data.status).send({message:data.message})
                    res.send(JSON.stringify({'message':'passed.'}))
                })
                .catch((err)=>{
                    // res.status(data.status).send({message:data.message})
                    res.send(JSON.stringify({'message':'failed.'}))
                })
        } )




}