
var mongoose = require('../../Model/form_i6.js');

var FormI6Model = mongoose.model('form_i6');

var form_i6_fill = function(){

    //insert order
  this.insertFormi6 = (data)=>{
        return new Promise((resolve,reject)=>{
                var i6= new FormI6Model({
                    
                    studentID:data.studentID,
                    student_name:data.student_name,
                    company_overview:data.company_overview,
                    project_overview:data.project_overview,
                    glossary:data.glossary,
                    objectives:data.objectives,
                    procedures :data.procedures,
                    methodology:data.methodology,
                    learning:data.learning,
                    method:data.method,
                    efficent:data.efficent,
                    sub1:data.sub1,
                    sub2:data.sub2
                    

                })

                i6.save().then(
                    ()=>{
                        resolve({status:200,message:"New Form is filled."})
                    }).catch(()=>{
                        reject({status:500,message:"Error inserting data"})
                    })
        
    })
}


// this.searchAllFoods = ()=>{
    
//        return (foodModel.find().sort({ createdAt: -1 }));
         
// }
}

module.exports= new form_i6_fill();