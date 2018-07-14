import Profil from "../app/components/profil/profil.js";

const token=localStorage.getItem('token');
const routes = [
  {
    path: "/profil",
    exact: true,
    component: Profil,
    
  }
];
export default routes;
