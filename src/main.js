import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import RepoPage from '@/views/RepoPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/repo',
        name: 'RepoPage',
        component: RepoPage
    },
  ]
})
createApp(App).use(router).mount('#app')
