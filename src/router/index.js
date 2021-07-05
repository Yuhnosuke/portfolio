import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Main,
        }, {
            path: '/about',
            component: About
        }, {
            path: '/skills',
            component: Skills
        }
    ]
})