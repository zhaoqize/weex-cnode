import VueRouter from 'vue-router';
import Index from './views/index.vue';
import Article from './views/article.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: '/index',
        component: Index
    }, {
        path: '/article/:id',
        component: Article
    }, {
        path: '/',
        redirect: '/index'
    }]
});
