import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Product from '../components/Product.vue'
import About from "../components/About.vue";
import ProductInfo from "../components/ProductInfo.vue";
import Login from "../components/Login.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/products',
            component: Product,
            beforeEnter: (to, from) => {
                const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
                if (!isLoggedIn) {
                    return '/login'
                }
            },
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/productinfo/:id',
            component: ProductInfo,
            props: true,
        },
        {
            path: '/login',
            component: Login
        }
    ]
})
export default router
