const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Form_i5_supervisor = new schema({

    studentID: {type: String,required: true,unique: true},

    student_name:{type: String,required: true},

    employer_name: {type:String, required:true},

    supervisor_name:{type:String, required:true },

    descrip_work_diff: {type:String},

    student_performance:[{
        category:{type:String},
        status:{type:String, enum:["Above Average","Average","Below Average"]},
        comment:{type:String}
    }],
    student_work_habits:[{
        category:{type:String},
        status:{type:String, enum:["Above Average","Average","Below Average"]},
        comment:{type:String}
    }],

    descrip_positive_pc:{type:String},

    descrip_pc_hep_pd:{type:String},

    descrip_effective_for_org_intern: {type:String},

    descrip_sugst_ip:  {type:String},

    descrip_comnt_frm_org:  {type:String},

    descrip_comnt_frm_org_fac_advsr: {type:String},

    student_overall_perfrm:{type:String, enum:["Outstanding","Very Good", "Good","Margial","Unsatisfactory"]},

    external_supervisor_name:{type:String},
    date_discussed:{type:Date}


});

mongoose.model('form_i5', Form_i5_supervisor)


module.exports = mongoose;