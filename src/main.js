import Vue from 'vue';
import App from '@/app';
import store from './store';
new Vue({
    el: "#app",
    store,
    components: { App },
    template: '<App/>',
})
