import axios from 'axios'

export function getToken(dataToken){

	return{
		type:'GET_TOKEN',
		payload:  dataToken
	}
}