import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _269c6ec0 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _35aeb5b4 = () => interopDefault(import('../pages/puzzle1.vue' /* webpackChunkName: "pages/puzzle1" */))
const _359286b2 = () => interopDefault(import('../pages/puzzle2.vue' /* webpackChunkName: "pages/puzzle2" */))
const _357657b0 = () => interopDefault(import('../pages/puzzle3.vue' /* webpackChunkName: "pages/puzzle3" */))
const _355a28ae = () => interopDefault(import('../pages/puzzle4.vue' /* webpackChunkName: "pages/puzzle4" */))
const _353df9ac = () => interopDefault(import('../pages/puzzle5.vue' /* webpackChunkName: "pages/puzzle5" */))
const _3521caaa = () => interopDefault(import('../pages/puzzle6.vue' /* webpackChunkName: "pages/puzzle6" */))
const _2e6a9730 = () => interopDefault(import('../pages/puzzles.vue' /* webpackChunkName: "pages/puzzles" */))
const _46544985 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _269c6ec0,
    name: "about"
  }, {
    path: "/puzzle1",
    component: _35aeb5b4,
    name: "puzzle1"
  }, {
    path: "/puzzle2",
    component: _359286b2,
    name: "puzzle2"
  }, {
    path: "/puzzle3",
    component: _357657b0,
    name: "puzzle3"
  }, {
    path: "/puzzle4",
    component: _355a28ae,
    name: "puzzle4"
  }, {
    path: "/puzzle5",
    component: _353df9ac,
    name: "puzzle5"
  }, {
    path: "/puzzle6",
    component: _3521caaa,
    name: "puzzle6"
  }, {
    path: "/puzzles",
    component: _2e6a9730,
    name: "puzzles"
  }, {
    path: "/",
    component: _46544985,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
