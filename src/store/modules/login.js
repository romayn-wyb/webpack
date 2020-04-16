import Http from './../../http'

const API_LOGIN = '/userlogin';

const login = (state, params) => {
    return Http.post(API_LOGIN, params)
}
const state = {
    loginCount: 100
}
const mutations = {
    addLoginCount: state => state.loginCount++,
    
}
const getters = {

}
const actions = {
    login
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}