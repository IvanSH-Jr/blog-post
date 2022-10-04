import MainPage from '@/pages/MainPage'
import PostPage from '@/pages/PostPage'
import AboutApp from '@/pages/AboutApp'
import PostId from '@/pages/PostId'
import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: AboutApp
    },
    {
        path: '/posts/:id',
        component: PostId
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router