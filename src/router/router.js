import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: () => import('../pages/MainPage'),
        }
        ,
        {
            path: '*',
            redirect: '/'
        }
    ],
    mode: 'history'
})

export default router
