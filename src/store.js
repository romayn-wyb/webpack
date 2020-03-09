import Vue from 'vue'
import Vuex from 'vuex'
import person from './app/sotre'
Vue.use(Vuex);

const store = new Vuex.Store({
  
  state: {
    count:1
  },
  mutations:{
     
  },
  actions: {

  },
  modules:{
    person
  }
})

export default store