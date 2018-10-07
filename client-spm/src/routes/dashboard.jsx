import Home from "views/Home/Home.jsx";
import superi5 from "../views/supervisor-i5/Supervisor_i5";
import stureg from "../views/StudentReg/Studentreg.jsx";

import EmployeeReg from "../views/EmployeeReg/EmployeeReg.jsx";
import Diaryview from "../views/Diaryview/Diaryview.jsx";
import student_form1 from "../views/stdform1-ys/fillform_1";
import form6 from "../views/formi-6/form6";
import AssignStudentSupervisorUI from "../views/assignSupervisor/AssignStudentSupervisorUI.jsx";
import DisplayFormI5 from "../views/DisplayFormI5/DisplayFormI5";
import InternDiary from "../views/InternDiary/InternDiary";
import MonthDiary from "../views/MonthlyDiary/MonthlyDiary";
import DiaryRemarks from "../views/InternDiaryRemarks/InternDiaryRemarks";

var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "design_app",
    component: Home
  },
  {
    path: "/supervisor-i5",
    name: "Form I5 for Supervisor",
    icon: "files_paper",
    component: superi5
  },
  {
    path: "/StudentReg",
    name: "Student Registration",
    icon: "education_paper",
    component: stureg
  },

  {
    path: "/EmployeeReg",
    name: "Employee Resgister",
    icon: "files_paper",
    component: EmployeeReg
  },
   {
    path: "/Diaryview",
    name: "Diary View",
    icon: "files_paper",
    component:  Diaryview
  },
  {
    path: "/student_form",
    name: "student form first fill up",
    icon: "users_single-02",
    component: student_form1
  },
  {
    path: "/fill-formI6",
    name: "form I 6",
    icon: "users_single-02",
    component: form6
  },{
     path: "/assignsupervisor",
     name: "Assign Supervisor for Student",
     icon: "files_paper",
     component: AssignStudentSupervisorUI
  },

  {
     path: "/displayformi5for_external_supervisor",
     name: "Display form I-5 for External Supervisor",
     icon: "files_paper",
     component: DisplayFormI5
  },
    {
        path: "/InternDiary",
        name: "Intern Diary",
        icon: "files_paper",
        component: InternDiary
    },
    {
        path: "/Monthly_Diary",
        name: "Monthly Diary",
        icon: "files_paper",
        component: MonthDiary
    },
    {
        path: "/MonthlyDiary_remarks",
        name: "Diary Remarks",
        icon: "files_paper",
        component: DiaryRemarks
    },
 
  { redirect: true, path: "/", pathTo: "/home", name: "Dashboard" }
];
export default dashRoutes;
