import Detail from "../app/components/detail/detail.js";
import DefaultLayout from "../app/components/layout";

import axios from 'axios'

const token=localStorage.getItem('token');
const routes = [
  {
    path: "/detail",
    exact: true,
    component: Detail,
  }
];
export default routes;