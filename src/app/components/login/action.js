import axios from 'axios'

export function getToken(username,password){

	return{
		type:'GET_TOKEN',
		payload:   axios({
		              method:'post',
		              url:'http://localhost:8000/api/authentication/',
		              headers:{
		                "Content-Type":"application/json"
		              },
		              data:{
		                username: username,
		                password: password
		              }
		            })
	}
}