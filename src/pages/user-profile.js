import UserProfile from "../app/components/user/user-profile.js";
import DefaultLayout from "../app/components/layout";

const routes = [
  {
    path: "/user-profile",
    exact: true,
    component: UserProfile,
  }
];
export default routes;
