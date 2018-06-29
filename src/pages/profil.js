import Profil from "../app/components/profil/profil.js";
import DefaultLayout from "../app/components/layout";

const routes = [
  {
    path: "/profil",
    exact: true,
    component: Profil,
    layout: DefaultLayout,
  }
];
export default routes;
