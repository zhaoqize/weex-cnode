import VueRouter from 'vue-router';
import Index from './views/index.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: '/index',
        component: Index
    }, {
        path: '/',
        redirect: '/index'
    }]
});
