import axios from 'axios';
import qs from 'qs';
class Http {
    constructor() {

    }
    static http(params) {
        let instance = axios.create({
            baseURL: 'http://dev.zcloudbim.com:8006',
            withCredentials: true,
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        //可配置携带token
        instance.interceptors.request.use(function (config) {
            return config;
        });
        instance.interceptors.response.use(
            response => {
                return response.data
            },
            error => {
                return "errorCode:"+error.response.status
            }
        );
        return instance(params);
    }
    static apiAxios(method, url, data) {
        return this.http({
            method: method,
            url: url,
            data: method === 'POST' || method === 'PUT' ? data.data : null,
            params: method === 'GET' || method === 'DELETE' ? data.data : null,
            headers: data.headers
        })
    }
    static get(url, params) {
        return this.apiAxios('GET', url, params)
    }
    static post(url, params) {
        return this.apiAxios('POST', url, params);
    }
    static put(url, params) {
        return this.apiAxios('PUT', url, params)
    }
    static delete(url, params) {
        return this.apiAxios('DELETE', url, params)
    }
}
export default Http;