(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HeaderUser"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/HeaderUser.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/HeaderUser.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_awesome_icons_sign_out_alt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-awesome/icons/sign-out-alt */ "./node_modules/vue-awesome/icons/sign-out-alt.js");
/* harmony import */ var vue_awesome_icons_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-awesome/icons/user */ "./node_modules/vue-awesome/icons/user.js");


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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "HeaderUser",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    // map `this.doneCount` to `this.$store.getters.doneTodosCount`
    user: 'auth/user'
  })),
  methods: {
    logout: function () {
      var _logout = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$store.dispatch('auth/logout');

              case 2:
                resp = _context.sent;
                window.location.reload(true);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function logout() {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/HeaderUser.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/HeaderUser.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-user .dropdown .dropdown-menu {\n  padding: 0;\n  transition: all .1s;\n  overflow: hidden;\n  -webkit-transform-origin: top center;\n          transform-origin: top center;\n  -webkit-transform: scale(1, 0);\n          transform: scale(1, 0);\n  display: block;\n}\n.header-user .dropdown .dropdown-menu .dropdown-divider {\n  margin: .1rem 0;\n}\n.header-user .dropdown:hover .dropdown-menu {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/HeaderUser.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/HeaderUser.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderUser.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/HeaderUser.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/HeaderUser.vue?vue&type=template&id=6a094a82&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/HeaderUser.vue?vue&type=template&id=6a094a82& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "header-user" },
    [
      _c(
        "b-dropdown",
        {
          staticClass: "m-md-2",
          attrs: { id: "ddown1", text: _vm.user.name || "", right: "" }
        },
        [
          _c(
            "b-dropdown-item",
            { attrs: { to: "/my-account" } },
            [_c("v-icon", { attrs: { name: "user" } }), _vm._v(" Profile")],
            1
          ),
          _vm._v(" "),
          _c("b-dropdown-divider"),
          _vm._v(" "),
          _c(
            "b-dropdown-item",
            { staticClass: "text-red", on: { click: _vm.logout } },
            [
              _c("v-icon", { attrs: { name: "sign-out-alt" } }),
              _vm._v(" Logout")
            ],
            1
          )
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

/***/ "./resources/js/core/components/HeaderUser.vue":
/*!*****************************************************!*\
  !*** ./resources/js/core/components/HeaderUser.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeaderUser_vue_vue_type_template_id_6a094a82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderUser.vue?vue&type=template&id=6a094a82& */ "./resources/js/core/components/HeaderUser.vue?vue&type=template&id=6a094a82&");
/* harmony import */ var _HeaderUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderUser.vue?vue&type=script&lang=js& */ "./resources/js/core/components/HeaderUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HeaderUser_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderUser.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/core/components/HeaderUser.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HeaderUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderUser_vue_vue_type_template_id_6a094a82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeaderUser_vue_vue_type_template_id_6a094a82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/core/components/HeaderUser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/core/components/HeaderUser.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/core/components/HeaderUser.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/HeaderUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/core/components/HeaderUser.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************!*\
  !*** ./resources/js/core/components/HeaderUser.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderUser_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderUser.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/HeaderUser.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderUser_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderUser_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderUser_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderUser_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderUser_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/core/components/HeaderUser.vue?vue&type=template&id=6a094a82&":
/*!************************************************************************************!*\
  !*** ./resources/js/core/components/HeaderUser.vue?vue&type=template&id=6a094a82& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderUser_vue_vue_type_template_id_6a094a82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderUser.vue?vue&type=template&id=6a094a82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/HeaderUser.vue?vue&type=template&id=6a094a82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderUser_vue_vue_type_template_id_6a094a82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderUser_vue_vue_type_template_id_6a094a82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);