import Card from './core/components/Card'
import Fields from './core/components/form/Fields'
import Errors from './core/components/form/Errors'
import Form from './core/components/form/Form'
import EntityEdit from './core/components/Entity/Edit'
import EntityIndex from './core/components/Entity/Index'
import P404 from './core/components/404'
import importCss from 'babel-plugin-dual-import/importCss.js'
// const HeaderUser = () => Promise.all([
//   import( /* webpackChunkName: 'HeaderUser' */'./core/components/HeaderUser.vue'),
//   importCss('HeaderUser')
// ]).then(promises => promises[0]);
// const HeaderUser = () => import(/* webpackChunkName: 'HeaderUser' */'./core/components/HeaderUser.vue')
import HeaderUser from './core/components/HeaderUser'
import SideMenu from './core/components/SideMenu'
import Dashboard from './core/components/Dashboard'
import MyAccount from './core/components/MyAccount'
import {Test} from './core/components/react/Test'
import Toasted from 'vue-toasted';
import VeeValidate from 'vee-validate';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VuePikaday from '@enrian/vue-pikaday';
import Datetime from 'vue-datetime'
import { DateTime as Luxon } from "luxon";
import {install} from 'vuetable-2/src'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'
import '@enrian/vue-pikaday/dist/vue-pikaday.min.css';
import {get} from 'lodash'


class GraphiCore {
  constructor(app) {
    this.app = app;
  }

  register() {
    this.app.booting(function(Vue, router) {
      Vue.use(VeeValidate, {
        fieldsBagName: '_fields',
        inject: false
      })
      Vue.mixin({
        data() {
          if(this.$options.parseForms) {
            return {
              fields: [],
              tabs: {},
            }
          }
          return {}
        },
        methods: {
          parseFields(_fields, from, tabsName = 'tabs', fieldsName = 'fields') {
            if(!this.$options.parseForms) {
              return false;
            }
            let general = [];
            let fields = JSON.parse(JSON.stringify(_fields))
            fields.forEach(field => {
              let val = from && get(from, field.value) ? get(from, field.value) : null;
              field.from = field.value;
              if (field.type == 'datetime' && val) {
                if (field.readonly) {
                  field.value = Luxon.fromMillis(val * 1000).toLocaleString(Luxon.DATETIME_SHORT)
                } else {
                  field.value = Luxon.fromMillis(val * 1000).toISO()
                }
              } else {
                field.value = val;
              }
              if (field.tab === null) {
                general.push(field)
              } else {
                if (this[tabsName][field.tab] == null) {
                  this[tabsName][field.tab] = {key: field.tab, fields: []};
                }
                this[tabsName][field.tab].fields.push(field)
              }
            });
            this[fieldsName] = general;
          },
          serializeForApi(field) {
            if(!this.$options.parseForms) {
              return false;
            }
            if(field.type == 'datetime') {
              if(field.value) {
                return parseInt(Luxon.fromISO(field.value).toFormat('X'));
              }
            }
            return field.value;
          }
        }
      })
      Vue.mixin({
        data() {
          return {
            serverErrors: []
          }
        },
        computed: {
          canSubmit() {
            let invalid = false
            if(this._fields) {
              Object.values(this._fields).forEach(field => {
                if(field.invalid) {
                  invalid = true;
                }
              })
            }
            return invalid === false;
          }
        },
        methods: {
          resetGqlErrors() {
            this.serverErrors = [];
          },
          parseGqlErrors(e) {
            let hasValidation = false;
            if(e.graphQLErrors && e.graphQLErrors.length > 0) {
              e.graphQLErrors.forEach(err => {
                if(err.message == 'validation') {
                  hasValidation = err.validation;
                } else {
                  if(global.config.debug) {
                    global.app.bus.$emit('error', err.message)
                  }
                }
              })
            }
            if(hasValidation) {
              let final = [];
              Object.values(hasValidation).forEach(errors => {
                errors.forEach(err => {
                  final.push(err)
                })
              })
              this.serverErrors = final;
            }
          }
        }
      })
      Vue.use(VuePikaday);
      Vue.use(Datetime);
      install(Vue)
      Vue.component('graphi-header-user', HeaderUser)
      Vue.component('side-menu', SideMenu)
      Vue.component('Card', Card)
      Vue.component('Form', Form)
      Vue.component('Fields', Fields)
      Vue.component('Loading', Loading)
      Vue.component('Errors', Errors)
      Vue.react('GridLayout', Test)
      Vue.use(Toasted, {
        position: 'bottom-left',
        duration: 4000,
        type: 'success',
      })

      // const Dashboard = () => Promise.all([
      //   import( /* webpackChunkName: 'Dashboard' */'./core/components/Dashboard'),
      //   importCss('Dashboard')
      // ]).then(promises => promises[0]);

      router.addRoutes([
        {path: '/', component: Dashboard, name: 'dashboard'},
        {path: '/my-account', component: MyAccount, name: 'myaccount'},
        {path: '/entity/:entity', component: EntityIndex, name: 'entityindex'},
        {path: '/entity/:entity/:id', component: EntityEdit, name: 'entityedit'},
        { path: '/404', component: P404, name: '404' },
        { path: '*', component: P404, name: 'catch-all' }
        // {path: '/my-account', component: () => import(/* webpackChunkName: 'MyAccount' */'./core/components/MyAccount.vue')},
      ])
    })
  }
}

window.GraphiCore = GraphiCore