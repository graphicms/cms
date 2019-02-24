(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MyAccount"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/MyAccount.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/MyAccount.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../api */ "./resources/js/api.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["mutation update(", ") {\n          updateProfile(", ") {\n              id\n          }\n      }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MyAccount",
  data: function data() {
    return {
      fields: [],
      tabs: {},
      user: {},
      showErrors: []
    };
  },
  $_veeValidate: {
    validator: 'new'
  },
  computed: {// ...mapState({
    //   user: state => state.auth.user,
    // })
  },
  methods: _objectSpread({
    serializeForApi: function serializeForApi(field) {
      if (field.type == 'datetime') {
        if (field.value) {
          return parseInt(luxon__WEBPACK_IMPORTED_MODULE_3__["DateTime"].fromISO(field.value).toFormat('X'));
        }
      }

      return field.value;
    },
    gql: function () {
      var _gql = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this = this;

        var isValid, variables, props, vars, fromFields, final, save;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$validator.validateAll();

              case 2:
                isValid = _context2.sent;
                this.showErrors = this.$validator.errors.all();
                this.resetGqlErrors();

                if (isValid) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", false);

              case 7:
                variables = '';
                props = '';
                vars = {};

                fromFields = function fromFields(arr) {
                  arr.forEach(function (field) {
                    if (!field.readonly) {
                      variables += "$".concat(field.gql.attribute, ": ").concat(field.gql.type, ",");
                      props += "".concat(field.gql.attribute, ": $").concat(field.gql.attribute, ",");
                      vars[field.gql.attribute] = _this.serializeForApi(field);
                    }
                  });
                };

                fromFields(this.fields);
                Object.values(this.tabs).forEach(function (item) {
                  fromFields(item.fields);
                });
                variables = variables.replace(/(^,)|(,$)/g, "");
                props = props.replace(/(^,)|(,$)/g, "");
                final = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject(), variables, props);

                save =
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                    var res;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            global.app.bus.$emit('showLoading');
                            _context.prev = 1;
                            _context.next = 4;
                            return _api__WEBPACK_IMPORTED_MODULE_4__["apiClient"].mutate({
                              mutation: final,
                              variables: vars
                            });

                          case 4:
                            res = _context.sent;
                            console.log(res);
                            global.app.bus.$emit('showToast', 'Your profile has been saved');
                            _context.next = 13;
                            break;

                          case 9:
                            _context.prev = 9;
                            _context.t0 = _context["catch"](1);

                            _this.parseGqlErrors(_context.t0);

                            global.app.bus.$emit('showToast', 'Error while saving the profile', {
                              type: 'error'
                            });

                          case 13:
                            _this['auth/getCurrentUser']();

                            global.app.bus.$emit('hideLoading');

                          case 15:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this, [[1, 9]]);
                  }));

                  return function save() {
                    return _ref.apply(this, arguments);
                  };
                }();

                save();

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function gql() {
        return _gql.apply(this, arguments);
      }

      return gql;
    }()
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['myProfile/getEditFields', 'auth/getCurrentUser'])),
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var _this2 = this;

      var fieldsApi, fields, user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              this.fields = [];
              this.user = {};
              global.app.bus.$emit('showLoading');
              _context3.next = 5;
              return this['myProfile/getEditFields']();

            case 5:
              fieldsApi = _context3.sent;
              fields = _toConsumableArray(fieldsApi);
              _context3.next = 9;
              return this['auth/getCurrentUser']();

            case 9:
              user = _context3.sent;
              this.$nextTick(function () {
                var general = [];
                fields.forEach(function (field) {
                  var val = user[field.value] ? user[field.value] : null;
                  field.from = field.value;

                  if (field.type == 'datetime' && val) {
                    if (field.readonly) {
                      field.value = luxon__WEBPACK_IMPORTED_MODULE_3__["DateTime"].fromMillis(val * 1000).toLocaleString(luxon__WEBPACK_IMPORTED_MODULE_3__["DateTime"].DATETIME_SHORT);
                      console.log(field.value);
                    } else {
                      field.value = luxon__WEBPACK_IMPORTED_MODULE_3__["DateTime"].fromMillis(val * 1000).toISO();
                    }
                  } else {
                    field.value = val;
                  }

                  if (field.tab === null) {
                    general.push(field);
                  } else {
                    if (_this2.tabs[field.tab] == null) {
                      _this2.tabs[field.tab] = {
                        key: field.tab,
                        fields: []
                      };
                    }

                    _this2.tabs[field.tab].fields.push(field);
                  }
                });
                _this2.fields = general;
                global.app.bus.$emit('hideLoading');
              });

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }()
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/MyAccount.vue?vue&type=template&id=47bb82ea&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/MyAccount.vue?vue&type=template&id=47bb82ea&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Card",
    [
      _c(
        "h2",
        {
          staticClass: "text-arsenic",
          attrs: { slot: "header" },
          slot: "header"
        },
        [_vm._v("My profile")]
      ),
      _vm._v(" "),
      _c("loading", {
        attrs: { active: _vm.$root.isLoading, "is-full-page": false },
        on: {
          "update:active": function($event) {
            return _vm.$set(_vm.$root, "isLoading", $event)
          }
        }
      }),
      _vm._v(" "),
      _c("Errors", {
        attrs: { errors: _vm.showErrors, "api-errors": _vm.serverErrors }
      }),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { novalidate: "" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.gql($event)
            }
          }
        },
        [
          _c("Fields", { attrs: { fields: _vm.fields, tabs: _vm.tabs } }),
          _vm._v(" "),
          _c("input", {
            staticClass:
              "bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded",
            attrs: { type: "submit", disabled: !_vm.canSubmit, value: "Save" }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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


 // HTTP connexion to the API

var httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
  // You should use an absolute URL here
  uri: '/graphi/api/backend',
  headers: {
    'X-CSRF-TOKEN': window.config.csrf
  }
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
  } // Create the apollo client

};
var apolloClient = new apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
  link: httpLink,
  cache: cache,
  defaultOptions: defaultOptions
});
/* harmony default export */ __webpack_exports__["default"] = (apolloClient);


/***/ }),

/***/ "./resources/js/core/components/MyAccount.vue":
/*!****************************************************!*\
  !*** ./resources/js/core/components/MyAccount.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccount_vue_vue_type_template_id_47bb82ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccount.vue?vue&type=template&id=47bb82ea&scoped=true& */ "./resources/js/core/components/MyAccount.vue?vue&type=template&id=47bb82ea&scoped=true&");
/* harmony import */ var _MyAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyAccount.vue?vue&type=script&lang=js& */ "./resources/js/core/components/MyAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyAccount_vue_vue_type_template_id_47bb82ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyAccount_vue_vue_type_template_id_47bb82ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "47bb82ea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/core/components/MyAccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/core/components/MyAccount.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/core/components/MyAccount.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/MyAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/core/components/MyAccount.vue?vue&type=template&id=47bb82ea&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/core/components/MyAccount.vue?vue&type=template&id=47bb82ea&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyAccount_vue_vue_type_template_id_47bb82ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyAccount.vue?vue&type=template&id=47bb82ea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/MyAccount.vue?vue&type=template&id=47bb82ea&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyAccount_vue_vue_type_template_id_47bb82ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyAccount_vue_vue_type_template_id_47bb82ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);