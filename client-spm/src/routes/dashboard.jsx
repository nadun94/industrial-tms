import Home from "views/Home/Home.jsx";
import Icons from "views/Icons/Icons.jsx";
import TableList from "views/TableList/TableList.jsx";
import UserPage from "views/UserPage/UserPage.jsx";
import superi5 from "../views/supervisor-i5/Supervisor_i5";

import reg from "../views/Test/Test.jsx";
import EmployeeReg from "../views/EmployeeReg/EmployeeReg.jsx";

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
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList
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
    path: "/EmployeeReg",
    name: "Employee Resgister",
    icon: "files_paper",
    component: EmployeeReg
  },
  { redirect: true, path: "/", pathTo: "/home", name: "Dashboard" }
];
export default dashRoutes;
