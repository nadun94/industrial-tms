import Home from "views/Home/Home.jsx";
import superi5 from "../views/supervisor-i5/Supervisor_i5";
import student_form1 from "../views/stdform1-ys/fillform_1";
import form6 from "../views/formi-6/form6";

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
  },
  { redirect: true, path: "/", pathTo: "/home", name: "Dashboard" }
];
export default dashRoutes;
