import Vue from 'vue';
import VueRouter from 'vue-router';
import Projects from './components/Projects.vue';

Vue.use(VueRouter);

let router = new VueRouter({
    routes:[
        {path:'/Projects',  name:'Projects', component: Projects },
        
    ]
});

export default router;