import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
        }, {
            path: '/about',
            component: About
        }, {
            path: '/skills',
            component: Skills
        }, {
            path: '/contacts',
            component: Contact
        }
    ]
})