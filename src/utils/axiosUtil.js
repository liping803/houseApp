import axios from 'axios'


//请求拦截

axios.interceptors.request.use((req)=>{
    console.log("请求拦截",req);
    const {token}=localStorage.getItem('token')
    if(token){
        //给所有需要token的接口同意加上token
        req.headers.token=token;
    }
    return req;
});

//响应拦截

axios.interceptors.response.use((res)=>{
    console.log(res);
    
    return res.data
})