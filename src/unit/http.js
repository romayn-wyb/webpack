class Http {
    http() {
        axios.create({
            baseURL: 'http://129.211.120.209:8080/yyesweb/',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            transformRequest: [function (data) {
                return newData;
            }]
        })
    }

    apiAxios(method, url, params, response) {
        http({
            method: method,
            url: url,
            data: method === 'POST' || method === 'PUT' ? params : null,
            params: method === 'GET' || method === 'DELETE' ? params : null,
        }).then(function (res) {
            response(res);
        }).catch(function (err) {
            response(err);
        })
    }
    static get(url, params, response) {
        return apiAxios('GET', url, params, response)
    }
    static post(url, params, response) {
        return apiAxios('POST', url, params, response)
    }
    static put(url, params, response) {
        return apiAxios('PUT', url, params, response)
    }
    static delete(url, params, response) {
        return apiAxios('DELETE', url, params, response)
    }

}
export default Http;
