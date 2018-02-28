import Vue from 'vue'
import Router from 'vue-router'
import goods from 'components/good/good'
import ratings from 'components/rating/rating'
import seller from 'components/seller/seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'good',
      component: goods
    },
    {
      path: '/',
      name: 'seller',
      component: seller
    },
    {
      path: '/',
      name: 'rating',
      component: ratings
    }
  ]
})
