import axios from "axios"

export function request(config) {

  //1、创建axios实例
  const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 5000,
    headers: {
      'Access-Control-Allow-Origin' : '*'
    }
  })

  //2、axios的拦截器
  // 添加请求拦截器，在请求头中加token
  instance.interceptors.request.use(config => {
    config.withCredentials = true

    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }
    console.log(config)

    return config;
  }, error => {
    return Promise.reject(error);
    console.log(error)
  })

  //响应拦截
  // instance.interceptors.request.use(res => {
  //   console.log(res)
  //   return res.data
  // }, error => {
  //   console.log(error);
  // })

  //3、发送真正的网络请求
  return instance(config)
}
