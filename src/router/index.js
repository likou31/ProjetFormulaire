import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../Home.vue';
import Formulaire1 from '../Formulaire1.vue';
import Formulaire2 from '../Formulaire2.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path:'/Formulaire1',
        name: 'Formulaire1',
        component: Formulaire1,
    },
    {
        path: '/Formulaire2',
        name: 'Formulaire2',
        component: Formulaire2,
    }
];

const router = new VueRouter({
    routes,
});

export default router;