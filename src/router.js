import { createWebHistory, createRouter } from 'vue-router'
import Projects from './components/Projects.vue';
import Home from './components/Home.vue';
import Contact from './components/Contact.vue';


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', name:'Home', component: Home},
        {path:'/Projects',  name:'Projects', component: Projects, meta: {title: 'Projects'}},
        {path:'/Contact', name:'Contact', component: Contact},
    ]
})

export default router;