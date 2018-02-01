import Vue from 'vue'
import Router from 'vue-router'
import good from '@/components/good'
import seller from '@/components/seller'
import rating from '@/components/rating'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'good',
      component: good
    },
    {
      path: '/',
      name: 'seller',
      component: seller
    },
    {
      path: '/',
      name: 'rating',
      component: rating
    }
  ]
})
