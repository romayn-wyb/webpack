import axios from  'axios';

class Http {
    static http(params) {
        axios.create({
            baseURL: 'http://129.211.120.209:8080/yyesweb/',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            transformRequest: [function (data) {
                return newData;
            }]
        }.assign(params))
    }

    static apiAxios(method, url, params, response) {
        this.http({
            method: method,
            url: url,
            data: method === 'POST' || method === 'PUT' ? params : null,
            params: method === 'GET' || method === 'DELETE' ? params : null,
        })
    }
    static get(url, params, response) {
        return this.apiAxios('GET', url, params, response)
    }
    static post(url, params, response) {
        return this.apiAxios('POST', url, params, response)
    }
    static put(url, params, response) {
        return this.apiAxios('PUT', url, params, response)
    }
    static delete(url, params, response) {
        return this.apiAxios('DELETE', url, params, response)
    }

}
export default Http;
