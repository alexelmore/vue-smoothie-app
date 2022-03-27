import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddSmoothie from '@/components/AddSmoothie'
import EditSmoothie from '@/components/EditSmoothie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/add-smoothie',
      name: 'addSmoothie',
      component: AddSmoothie
    }, {
      path: '/edit-smoothie/:smoothie_slug',
      name: 'editSmoothie',
      component: EditSmoothie
    }
  ]
})
