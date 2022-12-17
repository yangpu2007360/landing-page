import { createRouter, createWebHashHistory } from 'vue-router'
import Contact from '../components/ContactMe.vue'
import MainPage from '../components/MainPage.vue'



const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
      },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router