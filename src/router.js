import Vue from 'vue';
import VueRouter from 'vue-router';
import Projects from './components/Projects.vue';
import Home from './components/Home.vue';
import Contact from './components/Contact.vue';

Vue.use(VueRouter);

let router = new VueRouter({
    routes:[
        {path:'/', name:'Home', component: Home},
        {path:'/Projects',  name:'Projects', component: Projects, meta: {title: 'Projects'}},
        {path:'/Contact', name:'Contact', component: Contact},
    ]
});

export default router;