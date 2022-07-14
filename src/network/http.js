import axios from 'axios';

export default function(config) {
    // 1.创建axios的实例
    const http = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
        timeout: 5000
    })

    // 请求拦截器
    http.interceptors.request.use(res => {
        // 请求成功时，执行代码
        return res;
    }, err => {
        // 请求出现错误时，执行代码
        console.log(err);
        return Promise.reject(err)
    })

    // 响应拦截器
    http.interceptors.response.use(res => {
        // 响应成功时，执行代码
        return res.data;
    }, err => {
        // 响应失败时，执行代码
        console.log(err)
        return Promise.reject(err)
    })

    // 返回axios实例的执行结果
    return http(config);
}
