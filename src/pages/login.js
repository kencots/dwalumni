import Login from "../app/components/login/login.js";
import DefaultLayout from "../app/components/layout";

const routes= [
	{
		path:"/login",
		exact:true,
		component:Login,
	}
];

export default routes;