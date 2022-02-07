import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index'
import Component from '~/pages/tesComponent'
import DetailProduct from '~/components/DetailProduct'
import Login from '~/components/Login'
import PaymentMethod from '~/components/PaymentMethod'

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
        {
            path: '/payment_method',
            component: PaymentMethod,
            props: true
        },
        {
            path: '/tes_component',
            component: Component
        }
    ]
  })
}