import {configureRoutes} from "pawjs/src/utils/bundler";
// routes
// import * as Home from "./pages/home";
import * as Program from "./pages/program";
import * as About from "./pages/about";
import * as Contact from "./pages/contact";
import * as Blog from "./pages/blog";
import * as Profil from "./pages/profil";
import * as Detail from "./pages/detail";
import * as Login from "./pages/login";
import * as Register from "./pages/register";
import * as ProgressiveImageRendering from "./pages/progressive-image-rendering";
import * as Counter from "./pages/counter";


export default configureRoutes([
  Program,
  Login,
  Register,
  Profil,
  Detail,
  Blog
]);