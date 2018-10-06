
var mongoose = require('../../Model/Form-i5_mongo/form_i5.js');

var FormI5Model = mongoose.model('form_i5');

var SupervisorFormI5 = function(){

    //insert order
  this.insertFormi5 = (data)=>{
        return new Promise((resolve,reject)=>{
                var i5= new FormI5Model({
                    
                    studentID:data.studentID,
                    student_name:data.student_name,
                    employer_name:data.employer_name,
                    supervisor_name:data.supervisor_name,
                    descrip_work_diff:data.descrip_work_diff,
                    student_performance:data.student_performance,
                    student_work_habits:data.student_work_habits,
                    descrip_positive_pc:data.descrip_positive_pc,
                    descrip_pc_hep_pd:data.descrip_pc_hep_pd,
                    descrip_effective_for_org_intern:data.descrip_effective_for_org_intern,
                    descrip_sugst_ip:data.descrip_sugst_ip,
                    descrip_comnt_frm_org:data.descrip_comnt_frm_org,
                    descrip_comnt_frm_org_fac_advsr:data.descrip_comnt_frm_org_fac_advsr,
                    student_overall_perfrm:data.student_overall_perfrm

                })

                i5.save().then(
                    ()=>{
                        resolve({status:200,message:"New Form is filled."})
                    }).catch(()=>{
                        reject({status:500,message:"Error inserting data"})
                    })
        
    })
}



}

module.exports= new SupervisorFormI5();