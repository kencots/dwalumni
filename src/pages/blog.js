import BlogListing from "../app/components/blog";
import BlogPost from "../app/components/blog/post";
import DefaultLayout from "../app/components/layout";
import axios from "axios";

const token=localStorage.getItem('token');
console.log(token);
const routes = [
  {
    path: "/blog",
    exact: true,
    layout: DefaultLayout,
    component: BlogListing,
    preLoadData: async ({ api }) =>{
      return axios({
        method : 'GET',
        url : 'http://localhost:8000/api/skill/',
        headers : {
          'Content-Type':'application/json',
          'Authorization':"JWT "+token
        }
      });
    }
  },
  {
    path: "/blog/:id",
    layout: DefaultLayout,
    component: BlogPost,
    preLoadData: async ({match, api}) => {
      const { params } = match;
      return api.fetch(`https://www.atyantik.com/wp-json/wp/v2/posts/${params.id}`, { swcache: 20000 });
    },
  }
];

export default routes;