import Vue from 'vue'
import Router from 'vue-router'
import axios from '@/vendor/axios'
import VueReact from 'vue-react';
import Vuex, {mapActions} from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import VueApollo from 'vue-apollo'
import storeMaker from './store/index'
import api from './api'
import Icon from 'vue-awesome/components/Icon.vue'
import vueTopprogress from 'vue-top-progress'

Vue.component('v-icon', Icon)

Vue.use(VueApollo)
Vue.use(Router)
Vue.use(Vuex)
Vue.use(VueReact)
Vue.use(BootstrapVue)
Vue.use(vueTopprogress)

const apolloProvider = new VueApollo({
  defaultClient: api,
})

const router = createRouter({ base: window.config.base })

export default class Graphi {
  constructor(config) {
    this.bus = new Vue()
    this.bootingCallbacks = []
    this.config = config
  }

  booting(callback) {
    this.bootingCallbacks.push(callback)
  }

  boot() {
    this.bootingCallbacks.forEach(callback => callback(Vue, router))

    this.bootingCallbacks = []
  }

  start() {
    let _this = this

    this.boot()

    let store = storeMaker();

    this.$on('showToast', function(message, args) {
      Vue.toasted.show( message, args)
    })

    this.app = new Vue({
      el: '#graphicms',
      router,
      store,
      apolloProvider,
      components: {},
      methods: {
        ...mapActions([
          'auth/getCurrentUser',
          'system/getIntrospection'
        ]),
      },
      data() {
        return {
          isLoading: false,
        }
      },
      mounted: function () {
        this.$loading = this.$refs.topProgress
        this['auth/getCurrentUser']()
        this['system/getIntrospection']()
        _this.$on('error', message => {
          this.$toasted.show(message, {type: 'error'})
        })
        _this.bus.$on('showLoading', () => {
          this.isLoading = true;
          this.$loading.start()
        })
        _this.bus.$on('hideLoading', () => {
          this.isLoading = false;
          this.$loading.done()
        })
      },
    })
  }

  /**
   * Return an axios instance configured to make requests to Nova's API
   * and handle certain response codes.
   */
  request(options) {
    if (options !== undefined) {
      return axios(options)
    }

    return axios
  }

  $on(...args) {
    this.bus.$on(...args)
  }

  $once(...args) {
    this.bus.$once(...args)
  }

  $off(...args) {
    this.bus.$off(...args)
  }

  $emit(...args) {
    this.bus.$emit(...args)
  }
}

let routes = [

];

/**
 * The router factory
 */
function createRouter({ base }) {
  const router = new Router({
    // scrollBehavior,
    base,
    mode: 'history',
    routes,
  })

  router.beforeEach(beforeEach)
  router.afterEach(afterEach)

  return router
}

/**
 * Global router guard.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
async function beforeEach(to, from, next) {
  // Get the matched components and resolve them.
  const components = await resolveComponents(router.getMatchedComponents({ ...to }))

  if (components.length === 0) {
    return next()
  }

  // Start the loading bar.
  if (components[components.length - 1].loading !== false) {
    router.app.$nextTick(() => router.app.$loading.start())
  }

  next()
}

/**
 * Global after hook.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
async function afterEach(to, from, next) {
  await router.app.$nextTick()
  router.app.$loading.done()
}

/**
 * Resolve async components.
 *
 * @param  {Array} components
 * @return {Array}
 */
function resolveComponents(components) {
  return Promise.all(
    components.map(component => {
      return typeof component === 'function' ? component() : component
    })
  )
}

/**
 * Scroll Behavior
 *
 * @link https://router.vuejs.org/en/advanced/scroll-behavior.html
 *
 * @param  {Route} to
 * @param  {Route} from
 * @param  {Object|undefined} savedPosition
 * @return {Object}
 */
function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }

  if (to.hash) {
    return { selector: to.hash }
  }

  const [component] = router.getMatchedComponents({ ...to }).slice(-1)

  if (component && component.scrollToTop === false) {
    return {}
  }

  return { x: 0, y: 0 }
}
