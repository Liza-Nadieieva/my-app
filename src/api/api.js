import * as axios from 'axios';

export const userApi = {
	getUsers (currentPage, pageSize){
		return axios.get(`http://localhost:3001/api/users?page=${currentPage}&count=${pageSize}`)
	}
}
export const getProfileUsers = (userId) => {
	return axios.get(` http://localhost:3001/api/users?user_id=` + userId)
}