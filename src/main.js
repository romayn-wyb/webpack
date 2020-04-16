import Vue from 'vue';
import App from '@/app';
import store from './store/index';
import   './components/toast/message.css'
import Toast  from './components/toast/index'
import router from '@/router';
//  import Http from  './unit/http';y
// Vue.use(Toast);

Vue.prototype.$message=Toast;
new Vue({
    el: "#app",
    store,
    router,
    components: { App },
    render: h => h('App'),
})
