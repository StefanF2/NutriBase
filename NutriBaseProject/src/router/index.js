import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Product from '../components/Product.vue'
import About from "../components/About.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: App
        },
        {
            path: '/products',
            component: Product
        },
        {
            path: '/about',
            component: About
        }
    ]
})
export default router
