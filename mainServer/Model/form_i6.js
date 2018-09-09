const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Form_i6_fill = new schema({

    studentID: {type: String,required: true,unique: true},

    student_name:{type: String,required: true},

    company_overview: {type:String, required:true},

    project_overview:{type:String, required:true },

    

    glossary:[{
        abbreviation:{type:String},
        
        description:{type:String}
    }],
   

    objectives:{type:String},

    procedures:{type:String},

    methodology: {type:String},

    learning :  {type:String},

    method:  {type:String},

    efficent: {type:String},



    sub1:{type:String},
    sub2:{type:String}


});

mongoose.model('form_i6', Form_i6_fill)


module.exports = mongoose;