import Home from "views/Home/Home.jsx";
import Icons from "views/Icons/Icons.jsx";
import TableList from "views/TableList/TableList.jsx";
import UserPage from "views/UserPage/UserPage.jsx";
<<<<<<< HEAD
import Diary from "views/InternDiary/InternDiary.jsx";
import MonthlyDiary from "views/MonthlyDiary/MonthlyDiary.jsx";
import MonthlyDiaryRemarks from "views/InternDiaryRemarks/InternDiaryRemarks.jsx";
=======
import superi5 from "../views/supervisor-i5/Supervisor_i5";

import reg from "../views/Test/Test.jsx";
import student_form1 from "../views/stdform1-ys/fillform_1";

>>>>>>> 9980c6d33213a544794b3d1704d6b1746e883ed0
var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "design_app",
    component: Home
  },
  {
    path: "/icons",
    name: "Register Student",
    icon: "design_image",
    component: Icons
  },
  {
    path: "/user-page",
    name: "User file",
    icon: "users_single-02",
    component: UserPage
  },
  
  {
    path: "/intern-Diary",
    name: "Internal Training Info",
    icon: "files_paper",
    component: Diary
  },
  {
    path: "/monthly-Diary",
    name: "Monthly Diary",
    icon: "files_paper",
    component: MonthlyDiary
  },
  {
    path: "/remarks-Diary",
    name: "Monthly Diary Remarks",
    icon: "files_paper",
    component: MonthlyDiaryRemarks
  },
  {
    path: "/supervisor-i5",
    name: "Form I5 for Supervisor",
    icon: "files_paper",
    component: superi5
  },
  {
    path: "/studnent_reg",
    name: "Registration ****",
    icon: "files_paper",
    component: reg
  },
  {
    path: "/student_form",
    name: "student form first fill up",
    icon: "users_single-02",
    component: student_form1
  },
  { redirect: true, path: "/", pathTo: "/home", name: "Dashboard" }
];
export default dashRoutes;
