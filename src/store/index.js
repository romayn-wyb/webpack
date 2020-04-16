import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'
import actions from './actions'
import login from './modules/login'
Vue.use(Vuex);
const state = {
    count: 0
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {
        login
    }
})
export default store;