import BlogListing from "../app/components/blog";
import BlogPost from "../app/components/blog/post";
import DefaultLayout from "../app/components/layout";
import axios from "axios";

axios({
      method : 'GET',
      url : 'http://192.168.0.9:8000/api/user',
      headers : {
        'Content-Type':'application/json',
        'Authorization':"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImV4cCI6MTU2MTcwODAwMn0.tFSDlCgVffdtip0VDjUFKqByKEqwv2Oh9sfQHOTTR4U"
      }
})
const routes = [
  {
    path: "/blog",
    exact: true,
    layout: DefaultLayout,
    component: BlogListing,
    preLoadData: async ({ api }) =>{
      return axios({
      method : 'GET',
      url : 'http://192.168.0.9:8000/api/user',
      headers : {
        'Content-Type':'application/json',
        'Authorization':"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImV4cCI6MTU2MTcwODAwMn0.tFSDlCgVffdtip0VDjUFKqByKEqwv2Oh9sfQHOTTR4U"
        }
      });
    }

    // preLoadData: async ({ api }) => {
    //   return axios.get(`http://192.168.0.9:8000/api/user`,{
    //     headers:{
    //       'Content-Type':'application/json',
    //       'Authorization':"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImV4cCI6MTU2MTcwODAwMn0.tFSDlCgVffdtip0VDjUFKqByKEqwv2Oh9sfQHOTTR4U"
    //     }.then(function (response ){
    //       console.log(response.data)
    //     })
    //   });
    //   //api.fetch(`http://rest.learncode.academy/api/handi/user`, { swcache: 20000 });

    // },
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