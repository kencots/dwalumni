import Home from "../app/components/home/home.js";
import DefaultLayout from "../app/components/layout";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    layout: DefaultLayout,
  }
];
export default routes;
