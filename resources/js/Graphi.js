import Vue from 'vue'
import axios from '@/vendor/axios'

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

    this.app = new Vue({
      el: '#graphicms',
      router,
      components: {Loading},
      mounted: function () {
        this.$loading = this.$refs.loading

        _this.$on('error', message => {
          this.$toasted.show(message, {type: 'error'})
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
