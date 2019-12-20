 
import axios from 'axios' 
axios.defaults.baseURL='http://172.16.12.254:8000';

export const loginApi=(parms)=>{
    return axios.post('/login',parms);
}
  