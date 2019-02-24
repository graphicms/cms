(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/app"],{

/***/ "./resources/css/app.scss":
/*!********************************!*\
  !*** ./resources/css/app.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/js/Graphi.js":
/*!********************************!*\
  !*** ./resources/js/Graphi.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Graphi; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _vendor_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/vendor/axios */ "./resources/js/vendor/axios.js");
/* harmony import */ var vue_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-react */ "./node_modules/vue-react/dist/build.js");
/* harmony import */ var vue_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/es/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-apollo */ "./node_modules/vue-apollo/dist/vue-apollo.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/index */ "./resources/js/store/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api */ "./resources/js/api.js");
/* harmony import */ var vue_awesome_components_Icon_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-awesome/components/Icon.vue */ "./node_modules/vue-awesome/components/Icon.vue");
/* harmony import */ var vue_top_progress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-top-progress */ "./node_modules/vue-top-progress/dist/vue-top-progress.min.js");
/* harmony import */ var vue_top_progress__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vue_top_progress__WEBPACK_IMPORTED_MODULE_11__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }












vue__WEBPACK_IMPORTED_MODULE_1___default.a.component('v-icon', vue_awesome_components_Icon_vue__WEBPACK_IMPORTED_MODULE_10__["default"]);
vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vue_apollo__WEBPACK_IMPORTED_MODULE_7__["default"]);
vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_2__["default"]);
vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_5__["default"]);
vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vue_react__WEBPACK_IMPORTED_MODULE_4___default.a);
vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_6___default.a);
vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vue_top_progress__WEBPACK_IMPORTED_MODULE_11___default.a);
var apolloProvider = new vue_apollo__WEBPACK_IMPORTED_MODULE_7__["default"]({
  defaultClient: _api__WEBPACK_IMPORTED_MODULE_9__["default"]
});
var router = createRouter({
  base: window.config.base
});

var Graphi =
/*#__PURE__*/
function () {
  function Graphi(config) {
    _classCallCheck(this, Graphi);

    this.bus = new vue__WEBPACK_IMPORTED_MODULE_1___default.a();
    this.bootingCallbacks = [];
    this.config = config;
  }

  _createClass(Graphi, [{
    key: "booting",
    value: function booting(callback) {
      this.bootingCallbacks.push(callback);
    }
  }, {
    key: "boot",
    value: function boot() {
      this.bootingCallbacks.forEach(function (callback) {
        return callback(vue__WEBPACK_IMPORTED_MODULE_1___default.a, router);
      });
      this.bootingCallbacks = [];
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      this.boot();
      var store = Object(_store_index__WEBPACK_IMPORTED_MODULE_8__["default"])();
      this.$on('showToast', function (message, args) {
        vue__WEBPACK_IMPORTED_MODULE_1___default.a.toasted.show(message, args);
      });
      this.app = new vue__WEBPACK_IMPORTED_MODULE_1___default.a({
        el: '#graphicms',
        router: router,
        store: store,
        apolloProvider: apolloProvider,
        components: {},
        methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapActions"])(['auth/getCurrentUser', 'system/getIntrospection'])),
        data: function data() {
          return {
            isLoading: false
          };
        },
        mounted: function mounted() {
          var _this2 = this;

          this.$loading = this.$refs.topProgress;
          this['auth/getCurrentUser']();
          this['system/getIntrospection']();

          _this.$on('error', function (message) {
            _this2.$toasted.show(message, {
              type: 'error'
            });
          });

          _this.bus.$on('showLoading', function () {
            _this2.isLoading = true;

            _this2.$loading.start();
          });

          _this.bus.$on('hideLoading', function () {
            _this2.isLoading = false;

            _this2.$loading.done();
          });
        }
      });
    }
    /**
     * Return an axios instance configured to make requests to Nova's API
     * and handle certain response codes.
     */

  }, {
    key: "request",
    value: function request(options) {
      if (options !== undefined) {
        return Object(_vendor_axios__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
      }

      return _vendor_axios__WEBPACK_IMPORTED_MODULE_3__["default"];
    }
  }, {
    key: "$on",
    value: function $on() {
      var _this$bus;

      (_this$bus = this.bus).$on.apply(_this$bus, arguments);
    }
  }, {
    key: "$once",
    value: function $once() {
      var _this$bus2;

      (_this$bus2 = this.bus).$once.apply(_this$bus2, arguments);
    }
  }, {
    key: "$off",
    value: function $off() {
      var _this$bus3;

      (_this$bus3 = this.bus).$off.apply(_this$bus3, arguments);
    }
  }, {
    key: "$emit",
    value: function $emit() {
      var _this$bus4;

      (_this$bus4 = this.bus).$emit.apply(_this$bus4, arguments);
    }
  }]);

  return Graphi;
}();


var routes = [];
/**
 * The router factory
 */

function createRouter(_ref) {
  var base = _ref.base;
  var router = new vue_router__WEBPACK_IMPORTED_MODULE_2__["default"]({
    // scrollBehavior,
    base: base,
    mode: 'history',
    routes: routes
  });
  router.beforeEach(beforeEach);
  router.afterEach(afterEach);
  return router;
}
/**
 * Global router guard.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */


function beforeEach(_x, _x2, _x3) {
  return _beforeEach.apply(this, arguments);
}
/**
 * Global after hook.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */


function _beforeEach() {
  _beforeEach = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(to, from, next) {
    var components;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return resolveComponents(router.getMatchedComponents(_objectSpread({}, to)));

          case 2:
            components = _context.sent;

            if (!(components.length === 0)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", next());

          case 5:
            // Start the loading bar.
            if (components[components.length - 1].loading !== false) {
              router.app.$nextTick(function () {
                return router.app.$loading.start();
              });
            }

            next();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _beforeEach.apply(this, arguments);
}

function afterEach(_x4, _x5, _x6) {
  return _afterEach.apply(this, arguments);
}
/**
 * Resolve async components.
 *
 * @param  {Array} components
 * @return {Array}
 */


function _afterEach() {
  _afterEach = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(to, from, next) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return router.app.$nextTick();

          case 2:
            router.app.$loading.done();

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _afterEach.apply(this, arguments);
}

function resolveComponents(components) {
  return Promise.all(components.map(function (component) {
    return typeof component === 'function' ? component() : component;
  }));
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
    return savedPosition;
  }

  if (to.hash) {
    return {
      selector: to.hash
    };
  }

  var _router$getMatchedCom = router.getMatchedComponents(_objectSpread({}, to)).slice(-1),
      _router$getMatchedCom2 = _slicedToArray(_router$getMatchedCom, 1),
      component = _router$getMatchedCom2[0];

  if (component && component.scrollToTop === false) {
    return {};
  }

  return {
    x: 0,
    y: 0
  };
}

/***/ }),

/***/ "./resources/js/api.js":
/*!*****************************!*\
  !*** ./resources/js/api.js ***!
  \*****************************/
/*! exports provided: default, apiClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiClient", function() { return apolloClient; });
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/index.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/index.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var apollo_link_retry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-retry */ "./node_modules/apollo-link-retry/lib/bundle.esm.js");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-link-error */ "./node_modules/apollo-link-error/lib/bundle.esm.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-link-context */ "./node_modules/apollo-link-context/lib/bundle.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // HTTP connexion to the API

var httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
  // You should use an absolute URL here
  uri: '/graphi/api/backend',
  headers: {
    'X-CSRF-TOKEN': window.config.csrf
  }
});
var authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_6__["setContext"])(function (_, _ref) {
  var headers = _ref.headers;
  var token = window.config.csrf;
  return {
    headers: _objectSpread({}, headers, {
      'X-CSRF-TOKEN': token ? token : ''
    })
  };
}); // Cache implementation

var cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]();
var defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all'
  }
};
var failcsrf = new apollo_link__WEBPACK_IMPORTED_MODULE_3__["ApolloLink"](function (operation, forward) {
  return forward(operation).map(function (data) {
    return data;
  });
});
var linkCsrf = Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_5__["onError"])(function (_ref2) {
  var graphQLErrors = _ref2.graphQLErrors,
      networkError = _ref2.networkError;

  if (networkError) {
    if (networkError.statusCode == 419) {
      window.config.csrf = networkError.response.headers.get('newone');
    }
  }
});
var link = apollo_link__WEBPACK_IMPORTED_MODULE_3__["ApolloLink"].from([new apollo_link_retry__WEBPACK_IMPORTED_MODULE_4__["RetryLink"](), linkCsrf, failcsrf, authLink.concat(httpLink)]); // Create the apollo client

var apolloClient = new apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
  link: link,
  cache: cache,
  defaultOptions: defaultOptions
});
/* harmony default export */ __webpack_exports__["default"] = (apolloClient);


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/bootstrap/dist/js/bootstrap.bundle.min */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var _node_modules_bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Graphi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Graphi */ "./resources/js/Graphi.js");


window.Graphi = _Graphi__WEBPACK_IMPORTED_MODULE_1__["default"];

/***/ }),

/***/ "./resources/js/core/fragments/DynamicField.js":
/*!*****************************************************!*\
  !*** ./resources/js/core/fragments/DynamicField.js ***!
  \*****************************************************/
/*! exports provided: DynamicFieldFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFieldFragment", function() { return DynamicFieldFragment; });
var DynamicFieldFragment = "\nfragment DynamicField on FieldDefinition {\n  value,\n  type,\n  size,\n  name,\n  label,\n  gql {\n      attribute\n      type\n  },\n  required,\n  tab,\n  readonly\n}\n";

/***/ }),

/***/ "./resources/js/core/fragments/MenuItem.js":
/*!*************************************************!*\
  !*** ./resources/js/core/fragments/MenuItem.js ***!
  \*************************************************/
/*! exports provided: MenuItemFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemFragment", function() { return MenuItemFragment; });
var MenuItemFragment = "\nfragment MenuItem on MenuItem {\n  link\n}\n";

/***/ }),

/***/ "./resources/js/helpers/fieldsFromAll.js":
/*!***********************************************!*\
  !*** ./resources/js/helpers/fieldsFromAll.js ***!
  \***********************************************/
/*! exports provided: fieldsFromAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldsFromAll", function() { return fieldsFromAll; });
function fieldsFromAll(all) {
  var string = "";
  Object.keys(all).forEach(function (i) {
    string += i;

    if (all[i].length > 0) {
      string += '{';
      all[i].forEach(function (ii) {
        var subfields = fieldsFromAll(ii);
        string += subfields;
      });
      string += '}';
    }

    string += ',';
  });
  string = string.replace(/(^,)|(,$)/g, "");
  return string;
}

/***/ }),

/***/ "./resources/js/store/auth/authStore.js":
/*!**********************************************!*\
  !*** ./resources/js/store/auth/authStore.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./resources/js/api.js");
/* harmony import */ var _helpers_fieldsFromAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/fieldsFromAll */ "./resources/js/helpers/fieldsFromAll.js");


function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        mutation {\n            logout {\n                result\n            }\n        }\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["query {\n          auth {\n              user {\n                  ", "\n              }\n          }\n      }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n          query {\n              info: introspection(for: \"user\") {\n                  code,\n                  fields\n              }\n          }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var state = {
  user: {} // getters

};
var getters = {
  user: function user(state) {
    return state.user ? state.user : {};
  } // actions

};
var actions = {
  getCurrentUser: function () {
    var _getCurrentUser = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
      var state, commit, _ref2, info, userInfo, userFields, resp, user;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = _ref.state, commit = _ref.commit;
              _context.next = 3;
              return _api__WEBPACK_IMPORTED_MODULE_2__["apiClient"].query({
                query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject())
              });

            case 3:
              _ref2 = _context.sent;
              info = _ref2.data.info;
              userInfo = JSON.parse(JSON.stringify(info[0]));
              userInfo.fields = JSON.parse(userInfo.fields);
              userFields = Object(_helpers_fieldsFromAll__WEBPACK_IMPORTED_MODULE_3__["fieldsFromAll"])(userInfo.fields);
              _context.next = 10;
              return _api__WEBPACK_IMPORTED_MODULE_2__["apiClient"].query({
                query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2(), userFields)
              });

            case 10:
              resp = _context.sent;
              user = resp.data.auth.user;
              commit('setUser', user);
              return _context.abrupt("return", JSON.parse(JSON.stringify(user)));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getCurrentUser(_x) {
      return _getCurrentUser.apply(this, arguments);
    }

    return getCurrentUser;
  }(),
  logout: function () {
    var _logout = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref3) {
      var state, commit, resp;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              state = _ref3.state, commit = _ref3.commit;
              _context2.next = 3;
              return _api__WEBPACK_IMPORTED_MODULE_2__["apiClient"].mutate({
                mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject3())
              });

            case 3:
              resp = _context2.sent;
              commit('setUser', {});

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function logout(_x2) {
      return _logout.apply(this, arguments);
    }

    return logout;
  }()
}; // mutations

var mutations = {
  setUser: function setUser(state, user) {
    state.user = user;
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
});

/***/ }),

/***/ "./resources/js/store/auth/myProfile.js":
/*!**********************************************!*\
  !*** ./resources/js/store/auth/myProfile.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./resources/js/api.js");
/* harmony import */ var _core_fragments_DynamicField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/fragments/DynamicField */ "./resources/js/core/fragments/DynamicField.js");


function _templateObject() {
  var data = _taggedTemplateLiteral(["query {\n          getFields(for: \"profile\") {\n              ...DynamicField\n          }\n      }\n      ", "\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var state = {
  fields: [] // getters

};
var getters = {
  fields: function fields(state) {
    return state.fields ? state.fields : [];
  } // actions

};
var actions = {
  getEditFields: function () {
    var _getEditFields = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
      var state, commit, resp, getFields;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = _ref.state, commit = _ref.commit;
              _context.next = 3;
              return _api__WEBPACK_IMPORTED_MODULE_2__["apiClient"].query({
                query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject(), _core_fragments_DynamicField__WEBPACK_IMPORTED_MODULE_3__["DynamicFieldFragment"])
              });

            case 3:
              resp = _context.sent;
              getFields = resp.data.getFields;
              commit('setFields', getFields);
              return _context.abrupt("return", JSON.parse(JSON.stringify(getFields)));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getEditFields(_x) {
      return _getEditFields.apply(this, arguments);
    }

    return getEditFields;
  }()
}; // mutations

var mutations = {
  setFields: function setFields(state, fields) {
    state.fields = fields;
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
});

/***/ }),

/***/ "./resources/js/store/index.js":
/*!*************************************!*\
  !*** ./resources/js/store/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _auth_authStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/authStore */ "./resources/js/store/auth/authStore.js");
/* harmony import */ var _systemStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./systemStore */ "./resources/js/store/systemStore.js");
/* harmony import */ var _auth_myProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/myProfile */ "./resources/js/store/auth/myProfile.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./resources/js/store/menu.js");






var store = function store() {
  return new vuex__WEBPACK_IMPORTED_MODULE_0__["default"].Store({
    modules: {
      auth: _auth_authStore__WEBPACK_IMPORTED_MODULE_1__["default"],
      myProfile: _auth_myProfile__WEBPACK_IMPORTED_MODULE_3__["default"],
      menu: _menu__WEBPACK_IMPORTED_MODULE_4__["default"],
      system: _systemStore__WEBPACK_IMPORTED_MODULE_2__["default"]
    },
    strict: true
  });
};

/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./resources/js/store/menu.js":
/*!************************************!*\
  !*** ./resources/js/store/menu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./resources/js/api.js");
/* harmony import */ var _core_fragments_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/fragments/MenuItem */ "./resources/js/core/fragments/MenuItem.js");


function _templateObject() {
  var data = _taggedTemplateLiteral(["query {\n          menu {\n              ...MenuItem\n              children {\n                  ...MenuItem\n                  children {\n                      ...MenuItem\n                      children {\n                          ...MenuItem\n                      }\n                  }\n              }\n          }\n      }\n        ", "\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



 // import {DynamicFieldFragment} from "../../core/fragments/DynamicField";

var state = {
  items: [] // getters

};
var getters = {
  items: function items(state) {
    return state.items ? state.items : [];
  } // actions

};
var actions = {
  getMenuItems: function () {
    var _getMenuItems = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
      var state, commit, resp, menu;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = _ref.state, commit = _ref.commit;
              _context.next = 3;
              return _api__WEBPACK_IMPORTED_MODULE_2__["apiClient"].query({
                query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject(), _core_fragments_MenuItem__WEBPACK_IMPORTED_MODULE_3__["MenuItemFragment"])
              });

            case 3:
              resp = _context.sent;
              menu = resp.data.menu;
              commit('setItems', menu);
              return _context.abrupt("return", JSON.parse(JSON.stringify(menu)));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getMenuItems(_x) {
      return _getMenuItems.apply(this, arguments);
    }

    return getMenuItems;
  }()
}; // mutations

var mutations = {
  setItems: function setItems(state, items) {
    state.items = items;
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
});

/***/ }),

/***/ "./resources/js/store/systemStore.js":
/*!*******************************************!*\
  !*** ./resources/js/store/systemStore.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./resources/js/api.js");


function _templateObject() {
  var data = _taggedTemplateLiteral(["query {\n          introspection {\n              code\n              hasDates\n              isSoftDeleted\n              fields\n          }\n      }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var state = {
  entities: {} // getters

};
var getters = {
  entities: function entities(state) {
    return state.entities ? state.entities : {};
  } // actions

};
var actions = {
  getIntrospection: function () {
    var _getIntrospection = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
      var state, commit, resp, introspection, entities;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = _ref.state, commit = _ref.commit;
              _context.next = 3;
              return _api__WEBPACK_IMPORTED_MODULE_2__["apiClient"].query({
                query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject())
              });

            case 3:
              resp = _context.sent;
              introspection = resp.data.introspection;
              entities = {};
              introspection.forEach(function (type) {
                entities[type.code] = JSON.parse(JSON.stringify(type));
                entities[type.code].fields = JSON.parse(entities[type.code].fields);
              });
              commit('setEntities', entities);
              return _context.abrupt("return", JSON.parse(JSON.stringify(entities)));

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getIntrospection(_x) {
      return _getIntrospection.apply(this, arguments);
    }

    return getIntrospection;
  }()
}; // mutations

var mutations = {
  setEntities: function setEntities(state, entities) {
    state.entities = entities;
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
});

/***/ }),

/***/ "./resources/js/vendor/axios.js":
/*!**************************************!*\
  !*** ./resources/js/vendor/axios.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // import router from '@/router'

var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();
instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  var status = error.response.status; // Show the user a 500 error

  if (status >= 500) {
    Graphi.$emit('error', error.response.data.message);
  } // Handle Session Timeouts


  if (status === 401) {
    window.location.href = Grafi.config.base;
  } // Handle Forbidden
  // if (status === 403) {
  //   router.push({ name: '403' })
  // }


  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ 0:
/*!************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/css/app.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/filipac/Code/graphicms/cms/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/filipac/Code/graphicms/cms/resources/css/app.scss */"./resources/css/app.scss");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })

},[[0,"/manifest","/vendor"]]]);