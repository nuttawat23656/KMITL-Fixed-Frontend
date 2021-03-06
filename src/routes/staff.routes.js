import Index from "views/examples/Manager_view/Index";
import Profile from "components/Staff/Profile";
import Assignjob from "components/Staff/Assignjob";
import Listitem from "components/Staff/Listitem";
import Listitem2 from "components/Staff/Listitem2";
import Changepassword from "components/Staff/Changepassword";
import History from "components/Staff/History";
import Editprofile from "components/Staff/Editprofile";
import Contacts from "components/Staff/Contacts";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-chart-bar-32 text-orange",
    component: Index,
    layout: "/staff",
  },
  {
    path: "/Profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/staff",
  },
  {
    path: "/Changpassword",
    name: "Changpassword",
    icon: "ni ni-key-25 text-brown",
    component: Changepassword,
    layout: "/staff",
  },
  {
    path: "/Listitem",
    name: "Listitem",
    icon: "ni ni-active-40 text-red",
    component: Listitem,
    layout: "/staff",
  },
  {
    path: "/History",
    name: "History",
    icon: "ni ni-collection text-pink",
    component: History,
    layout: "/staff",
  },
  {
    path: "/Contacts",
    name: "Contacts",
    icon: "ni ni-world text-indigo",
    component: Contacts,
    layout: "/staff",
  },
];
export default routes;
