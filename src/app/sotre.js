import Http from '@/unit/Http';
const APILOGIN = '/1001'

const login = (data) => {
  
  return  Http.post(APILOGIN, {
        dataType: "json",
        data: JSON.stringify(data),
    })
}
export default {
    namespaced: true,
    getters: {},
    mutations: {
    },
    actions: {
        login
    },
};