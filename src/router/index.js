import { createRouter, createWebHashHistory } from 'vue-router'
import Contact from '../components/ContactMe.vue'
import BookADemo from '../components/BookADemo.vue'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path: '/',
        name: 'BookADemo',
        component: BookADemo
      },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router
