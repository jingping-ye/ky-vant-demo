import axios from "axios";

let httpInstance = axios.create();

httpInstance.defaults.baseURL = "http://localhost:8080/";
httpInstance.defaults.timeout = 5000;

//  request拦截器
httpInstance.interceptors.request.use(
  (config) => {
    console.log("request", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
//  reponse拦截器
httpInstance.interceptors.response.use(
  (response) => {
    console.log("response", response);
    if (response.status === 200) {
      if (response.data.code === 2000) {
        return Promise.resolve(response.data.res);
      } else {
        console.log(`错误(错误代码${response.data.code}):${response.data.msg}`, 6);
        return Promise.reject(new Error("请求失败"));
      }
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default httpInstance;
