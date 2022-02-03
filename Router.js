import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index'
import DetailProduct from '~/components/DetailProduct'
import Login from '~/components/Login'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/detail_produk/:slug',
            component: DetailProduct
        },
        {
            path: '/login',
            component: Login
        },
    ]
  })
}