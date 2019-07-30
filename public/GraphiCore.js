(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/GraphiCore"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/404.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/404.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "e404"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Card.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/Card.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "Card",
  props: {
    noPadding: {
      type: Boolean,
      default: false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Dashboard",
  methods: {
    handler: function handler() {// console.log(arguments)
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Entity/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/Entity/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api */ "./resources/js/api.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fragments_DynamicField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../fragments/DynamicField */ "./resources/js/core/fragments/DynamicField.js");
/* harmony import */ var _helpers_fieldsFromAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/fieldsFromAll */ "./resources/js/helpers/fieldsFromAll.js");


function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          query getData($id: String!) {\n              ", "(whereId: $id, includeDeleted: true) {\n                  ...on ", " {\n                      ", "\n                  }\n              }\n          }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      query {\n          fields: getFields(for:\"", "\") {\n              ...DynamicField\n          }\n          typeInfo(for:\"", "\") {\n              type\n          }\n      }\n      ", "\n      "]);

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
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Edit",
  parseForms: true,
  data: function data() {
    return {
      typeInfo: {},
      entityFields: [],
      entity: {},
      isDeleted: false
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['system/getIntrospection'])),
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var f, _ref, _ref$data, fields, typeInfo, fieldsToGet, def, _ref2, data, prostie;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              global.app.bus.$emit('showLoading');
              _context.next = 3;
              return this['system/getIntrospection']();

            case 3:
              f = _context.sent;
              _context.next = 6;
              return _api__WEBPACK_IMPORTED_MODULE_2__["apiClient"].query({
                query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject(), this.$route.params.entity, this.$route.params.entity, _fragments_DynamicField__WEBPACK_IMPORTED_MODULE_4__["DynamicFieldFragment"])
              });

            case 6:
              _ref = _context.sent;
              _ref$data = _ref.data;
              fields = _ref$data.fields;
              typeInfo = _ref$data.typeInfo;
              this.typeInfo = typeInfo;
              fieldsToGet = [];
              console.log(f, 'fffff');

              if (f[this.$route.params.entity]) {
                fieldsToGet = Object(_helpers_fieldsFromAll__WEBPACK_IMPORTED_MODULE_5__["fieldsFromAll"])(f[this.$route.params.entity].fields);
              } else {
                fields.forEach(function (field) {
                  fieldsToGet.push(field.name);
                });

                if (f[this.$route.params.entity]) {
                  def = f[this.$route.params.entity];

                  if (def.isSoftDeleted) {
                    fieldsToGet.push('_deleted: deleted_at');
                  }
                }

                fieldsToGet = fieldsToGet.join('\n');
              } // fields.forEach(field => {
              //   fieldsToGet.push(field.name)
              // })


              _context.next = 16;
              return _api__WEBPACK_IMPORTED_MODULE_2__["apiClient"].query({
                query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2(), this.$route.params.entity, this.typeInfo.type, fieldsToGet),
                variables: {
                  id: this.$route.params.id
                }
              });

            case 16:
              _ref2 = _context.sent;
              data = _ref2.data;
              prostie = data[this.$route.params.entity];

              if (prostie) {
                _context.next = 22;
                break;
              }

              this.$router.push({
                name: '404'
              });
              return _context.abrupt("return");

            case 22:
              this.entity = prostie;

              if (this.entity._deleted !== null && parseInt(this.entity._deleted) > 0) {
                this.isDeleted = true;
              }

              this.entityFields = fields;
              console.log(fields, this.entity);
              this.parseFields(fields, this.entity);
              global.app.bus.$emit('hideLoading');

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }()
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Entity/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/Entity/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api */ "./resources/js/api.js");
/* harmony import */ var _fragments_DynamicField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../fragments/DynamicField */ "./resources/js/core/fragments/DynamicField.js");
/* harmony import */ var _TableBsStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../TableBsStyle */ "./resources/js/core/TableBsStyle.js");
/* harmony import */ var vuetable_2_src_components_VuetableFieldHandle_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetable-2/src/components/VuetableFieldHandle.vue */ "./node_modules/vuetable-2/src/components/VuetableFieldHandle.vue");
/* harmony import */ var _fragments_DynamicColumn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../fragments/DynamicColumn */ "./resources/js/core/fragments/DynamicColumn.js");
/* harmony import */ var _helpers_fieldsFromAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/fieldsFromAll */ "./resources/js/helpers/fieldsFromAll.js");


function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      query {\n          fields: getFields(for:\"", "\") {\n              ...DynamicField\n          }\n          cols: getColumns(for:\"", "\") {\n              ...DynamicColumn\n          }\n          typeInfo(for:\"", "\") {\n              type,\n              collection\n          }\n      }\n      ", "\n      ", "\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          ", "\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        query {\n            info: introspection(for: \"", "\") {\n                code,\n                fields\n            }\n        }\n    "]);

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








var blank = {
  entityFields: [],
  entityCols: [],
  entityInfo: {},
  localData: [],
  data: [],
  tableFields: [],
  style: _TableBsStyle__WEBPACK_IMPORTED_MODULE_4__["TableBsStyle"],
  perPage: 15,
  hasActions: false
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Index",
  data: function data() {
    return _objectSpread({}, blank);
  },
  methods: {
    onPaginationData: function onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
      this.$refs.paginationInfo.setPaginationData(paginationData);
    },
    getId: function getId(row) {
      if (row._id !== undefined) {
        return row._id;
      }

      return row.id;
    },
    onChangePage: function onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    dataManager: function () {
      var _dataManager = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(sortOrder, pagination) {
        var fieldsToGet, _ref, info, userInfo, allFields, q, _ref2, apidata, local, from, to;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                global.app.bus.$emit('showLoading');
                fieldsToGet = [];
                this.entityFields.forEach(function (field) {
                  fieldsToGet.push(field.name.replace(/\./g, '_'));
                });
                _context.next = 5;
                return _api__WEBPACK_IMPORTED_MODULE_2__["apiClient"].query({
                  query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject(), this.$route.params.entity)
                });

              case 5:
                _ref = _context.sent;
                info = _ref.data.info;
                userInfo = JSON.parse(JSON.stringify(info[0]));
                userInfo.fields = JSON.parse(userInfo.fields);
                allFields = Object(_helpers_fieldsFromAll__WEBPACK_IMPORTED_MODULE_7__["fieldsFromAll"])(userInfo.fields);
                q = "\n      query getData($per_page: Int, $current_page: Int, $sort: Sorting) {\n              apidata: ".concat(this.$route.params.entity, "(\n              pagination: {per_page: $per_page, current_page: $current_page},\n              includeDeleted: true,\n              sort: $sort\n          ) {\n                  ...on ").concat(this.entityInfo.collection, " {\n                      total\n                      current_page\n                      from\n                      last_page\n                      per_page\n                      to\n                      total\n                      data {\n                          ").concat(allFields, "\n                      }\n                  }\n              }\n          }\n      ");
                console.log(q);
                _context.next = 14;
                return _api__WEBPACK_IMPORTED_MODULE_2__["apiClient"].query({
                  query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2(), q),
                  variables: _objectSpread({}, pagination, {
                    sort: sortOrder.length == 1 ? {
                      field: sortOrder[0].sortField,
                      direction: sortOrder[0].direction
                    } : {}
                  })
                });

              case 14:
                _ref2 = _context.sent;
                apidata = _ref2.data.apidata;
                this.data = apidata.data;

                if (!(this.data.length < 1)) {
                  _context.next = 20;
                  break;
                }

                global.app.bus.$emit('hideLoading');
                return _context.abrupt("return");

              case 20:
                local = this.data; // sortOrder can be empty, so we have to check for that as well
                // if (sortOrder.length > 0) {
                //   console.log("orderBy:", sortOrder[0].sortField, sortOrder[0].direction);
                //   local = _.orderBy(
                //     local,
                //     sortOrder[0].sortField,
                //     sortOrder[0].direction
                //   );
                // }

                pagination = this.$refs.vuetable.makePagination(apidata.total, apidata.perPage);
                from = pagination.from - 1;
                to = from + this.perPage;
                global.app.bus.$emit('hideLoading');
                return _context.abrupt("return", {
                  pagination: pagination,
                  data: local
                });

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function dataManager(_x, _x2) {
        return _dataManager.apply(this, arguments);
      }

      return dataManager;
    }(),
    load: function () {
      var _load = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this = this;

        var _ref3, _ref3$data, fields, cols, typeInfo;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                global.app.bus.$emit('showLoading');
                _context2.next = 3;
                return _api__WEBPACK_IMPORTED_MODULE_2__["apiClient"].query({
                  query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject3(), this.$route.params.entity, this.$route.params.entity, this.$route.params.entity, _fragments_DynamicField__WEBPACK_IMPORTED_MODULE_3__["DynamicFieldFragment"], _fragments_DynamicColumn__WEBPACK_IMPORTED_MODULE_6__["DynamicColumnFragment"])
                });

              case 3:
                _ref3 = _context2.sent;
                _ref3$data = _ref3.data;
                fields = _ref3$data.fields;
                cols = _ref3$data.cols;
                typeInfo = _ref3$data.typeInfo;
                this.entityFields = fields;
                this.entityCols = cols;
                this.entityInfo = typeInfo;
                console.log(typeInfo);
                this.tableFields = [];
                this.entityCols.forEach(function (item) {
                  switch (item.type) {
                    case 'actions':
                      _this.hasActions = true;

                      _this.tableFields.push({
                        name: 'graphi-actions',
                        title: item.label
                      });

                      break;

                    default:
                      var obj = {
                        name: item.field,
                        title: item.label
                      };

                      if (item.sortable) {
                        obj.sortField = item.field;
                      }

                      _this.tableFields.push(obj);

                      break;
                  }
                });
                this.$nextTick(function () {
                  _this.$refs.vuetable.callDataManager();
                });
                global.app.bus.$emit('hideLoading');

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function load() {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              this.load();

            case 1:
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
  }(),
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    // Object.keys(this.$data).forEach(key => this.$data[key] = null);
    // Object.entries({...blank}).forEach(entry => Vue.set(this.$data, entry[0], entry[1]));
    // this.$forceUpdate()
    // this.load()
    next();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

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


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MyAccount",
  data: function data() {
    return {
      user: {}
    };
  },
  computed: {// ...mapState({
    //   user: state => state.auth.user,
    // })
  },
  parseForms: true,
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['myProfile/getEditFields', 'auth/getCurrentUser']), {
    refreshUser: function refreshUser() {
      this['auth/getCurrentUser']();
    }
  }),
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this = this;

      var fieldsApi, fields, user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.fields = [];
              this.user = {};
              global.app.bus.$emit('showLoading');
              _context.next = 5;
              return this['myProfile/getEditFields']();

            case 5:
              fieldsApi = _context.sent;
              fields = _toConsumableArray(fieldsApi);
              _context.next = 9;
              return this['auth/getCurrentUser']();

            case 9:
              user = _context.sent;
              this.$nextTick(function () {
                _this.parseFields(fields, user);

                global.app.bus.$emit('hideLoading');
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }()
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Search.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/Search.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-clickaway */ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js");
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_clickaway__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/debounce */ "./node_modules/lodash-es/debounce.js");
/* harmony import */ var lodash_es_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/find */ "./node_modules/lodash-es/find.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api */ "./resources/js/api.js");


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      query search($term: String!){\n        search(term: $term) {\n          collection {\n            name,\n            key\n          },\n          results {\n            identifier\n            title\n            subtitle\n          }\n        }\n      }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "Search",
  mixins: [vue_clickaway__WEBPACK_IMPORTED_MODULE_1__["mixin"]],
  data: function data() {
    return {
      term: null,
      highlight: -1,
      highlightKey: null,
      results: [],
      loading: false,
      active: false,
      searched: false
    };
  },
  methods: {
    close: function close() {
      this.term = '';
      this.active = false;
      this.searched = false;
      this.highlightKey = null;
      this.$refs.search.blur();
      this.results = [];
    },
    search: function search(e) {
      var _this = this;

      this.highlight = -1;
      this.highlightKey = null;

      if (e.target.value === '') {
        this.loading = false;
        this.results = [];
      } else {
        this.delay(function () {
          _this.queryEndpoint(e.target.value);
        }, 500);
      }
    },
    queryEndpoint: function () {
      var _queryEndpoint = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(term) {
        var searchQuery, _ref, search;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.term === '')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                this.searched = true;
                searchQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
                this.loading = true;
                this.highlight = -1;
                this.highlightKey = null;
                _context.next = 9;
                return _api__WEBPACK_IMPORTED_MODULE_5__["apiClient"].query({
                  query: searchQuery,
                  variables: {
                    term: term
                  }
                });

              case 9:
                _ref = _context.sent;
                search = _ref.data.search;
                console.log(search);
                this.results = search;
                this.loading = false;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function queryEndpoint(_x) {
        return _queryEndpoint.apply(this, arguments);
      }

      return queryEndpoint;
    }(),
    delay: Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_2__["default"])(function (callback) {
      return callback();
    }, 500),
    activate: function activate() {
      this.term = '';
      this.$refs.search.focus();
      this.active = true;
      this.searched = false;
      this.results = [];
    },
    goTo: function goTo(collection, resource) {
      this.$router.push("/entity/".concat(collection.key, "/").concat(resource.identifier));
      this.close();
    },
    moveDown: function moveDown() {
      var _this2 = this;

      if (!this.$refs.searchResult) return;
      var next = this.highlight + 1;

      if (next < this.$refs.searchResult.length) {
        this.highlight = next;
        this.highlightKey = this.$refs.searchResult[next].dataset.identify;
        this.$nextTick(function () {
          _this2.$refs.searchResult[next].scrollIntoView({
            block: 'center',
            inline: 'center'
          });
        });
      }
    },
    moveUp: function moveUp() {
      var _this3 = this;

      if (!this.$refs.searchResult) return;
      var next = this.highlight - 1;

      if (next <= this.$refs.searchResult.length && next != -1) {
        this.highlight = next;
        this.highlightKey = this.$refs.searchResult[next].dataset.identify;
        this.$nextTick(function () {
          _this3.$refs.searchResult[next].scrollIntoView({
            block: 'center',
            inline: 'center'
          });
        });
      }
    },
    gotoSelected: function gotoSelected() {
      var _this4 = this;

      var selected = Object(lodash_es_find__WEBPACK_IMPORTED_MODULE_3__["default"])(this.$refs.searchResult, function (item) {
        return item.dataset.identify === _this4.highlightKey;
      });
      selected.click();
    },
    notOnInputs: function notOnInputs(event) {
      var tagName = event.target.tagName;
      return Boolean(tagName !== 'INPUT' && tagName !== 'TEXTAREA');
    },
    globalShortcut: function globalShortcut(event) {
      if (event.keyCode == 191 && this.notOnInputs(event)) {
        event.preventDefault();
        event.stopPropagation();
        this.activate();
      }
    }
  },
  mounted: function mounted() {
    document.addEventListener('keydown', this.globalShortcut);
  },
  destroyed: function destroyed() {
    document.removeEventListener('keydown', this.globalShortcut);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/SideMenu.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/SideMenu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "side-menu",
  props: {
    'subitems': null,
    'nest': {
      type: Number,
      default: 0
    },
    'load': null
  },
  data: function data() {
    return {
      stringA: '<i class="material-icons">dashboard</i>',
      stringB: "<router-link to='/entity/prostie'>Prostie</router-link>"
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['menu/getMenuItems']), {
    getNestClass: function getNestClass() {
      if (this.nest > 0) {
        return "nested nested-".concat(this.nest);
      }

      return null;
    },
    main: function main() {
      if (this.nest == 0) {
        return "root-side-menu mt-2";
      }

      return null;
    }
  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    items: 'menu/items'
  }), {
    myItems: function myItems() {
      if (this.load) return this.items;
      return this.subitems;
    }
  }),
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var items;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (this.load) {
                items = this['menu/getMenuItems']();
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }()
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/form/Errors.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/form/Errors.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "Errors",
  props: ['errors', 'apiErrors']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/form/Fields.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/form/Fields.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_0__);
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
  name: "Fields",
  data: function data() {
    return {
      dateTimeFormat: luxon__WEBPACK_IMPORTED_MODULE_0__["DateTime"].DATETIME_SHORT
    };
  },
  props: {
    fields: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    tabs: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  inject: ['$validator'],
  methods: {
    getFieldWidth: function getFieldWidth(field) {
      switch (field.size) {
        default:
        case 'full':
          return 'w-full';

        case 'half':
          return 'w-1/2';

        case 'left':
          return 'w-1/2 mr-half';

        case 'right':
          return 'w-1/2 ml-half';
      }
    },
    getValidationRules: function getValidationRules(field) {
      var rules = [];

      if (field.required) {
        rules.push('required');
      }

      return rules.join('|');
    },
    validationStyle: function validationStyle(field) {
      if (this._fields[field.name]) {
        var validator = this._fields[field.name];

        if (validator.invalid) {
          return 'is-invalid';
        }
      }

      return '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/form/Form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/form/Form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api */ "./resources/js/api.js");


function _templateObject() {
  var data = _taggedTemplateLiteral(["mutation update(", ") {\n          ", "(", ") {\n              id\n          }\n      }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "Form",
  $_veeValidate: {
    validator: 'new'
  },
  parseForms: true,
  data: function data() {
    return {
      showErrors: []
    };
  },
  props: {
    mutationName: {
      type: String,
      required: true
    },
    formFields: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    formTabs: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  methods: {
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
                      var attr = field.gql.attribute.replace(/\./g, '_');
                      variables += "$".concat(attr, ": ").concat(field.gql.type, ",");
                      props += "".concat(attr, ": $").concat(attr, ",");
                      vars[attr] = _this.serializeForApi(field);
                    }
                  });
                };

                fromFields(this.formFields);
                Object.values(this.formTabs).forEach(function (item) {
                  fromFields(item.fields);
                });
                variables = variables.replace(/(^,)|(,$)/g, "");
                props = props.replace(/(^,)|(,$)/g, "");
                final = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject(), variables, this.mutationName, props);

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
                            return _api__WEBPACK_IMPORTED_MODULE_2__["apiClient"].mutate({
                              mutation: final,
                              variables: vars
                            });

                          case 4:
                            res = _context.sent;
                            global.app.bus.$emit('showToast', 'Your profile has been saved');
                            _context.next = 13;
                            break;

                          case 8:
                            _context.prev = 8;
                            _context.t0 = _context["catch"](1);
                            console.log(_context.t0);

                            _this.parseGqlErrors(_context.t0);

                            global.app.bus.$emit('showToast', 'Error while saving the profile', {
                              type: 'error'
                            });

                          case 13:
                            _this.$emit('after', res);

                            global.app.bus.$emit('hideLoading');

                          case 15:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this, [[1, 8]]);
                  }));

                  return function save() {
                    return _ref.apply(this, arguments);
                  };
                }();

                return _context2.abrupt("return", save());

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
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
exports.push([module.i, ".header-user .dropdown .dropdown-menu {\n  padding: 0;\n  transition: all .1s;\n  overflow: hidden;\n  transform-origin: top center;\n  transform: scale(1, 0);\n  display: block;\n}\n.header-user .dropdown .dropdown-menu .dropdown-divider {\n  margin: .1rem 0;\n}\n.header-user .dropdown:hover .dropdown-menu {\n  transform: scale(1);\n}\n", ""]);

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/404.vue?vue&type=template&id=073ac2be&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/404.vue?vue&type=template&id=073ac2be&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "min-h-85vh flex flex-col justify-center items-center pb-32"
      },
      [
        _c("h2", [_vm._v("Err... what are you looking for?")]),
        _vm._v(" "),
        _c("h3", [_vm._v("404 error")])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Card.vue?vue&type=template&id=32d8e517&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/Card.vue?vue&type=template&id=32d8e517&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "w-full bg-white rounded relative" }, [
    _vm.$slots.header
      ? _c(
          "div",
          { staticClass: "bg-grey-lightest rounded-t pl-8" },
          [_vm._t("header")],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { class: { "p-8": !_vm.noPadding } }, [_vm._t("default")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Dashboard.vue?vue&type=template&id=5643c11d&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/Dashboard.vue?vue&type=template&id=5643c11d&scoped=true& ***!
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
  return _c("grid-layout", { attrs: { handler: _vm.handler } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Entity/Edit.vue?vue&type=template&id=67c51bc2&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/Entity/Edit.vue?vue&type=template&id=67c51bc2&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
        [_vm._v("Entity edit")]
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
      _vm.isDeleted
        ? _c(
            "div",
            {
              staticClass:
                "bg-orange-lightest border-l-4 border-orange text-orange-dark p-4",
              attrs: { role: "alert" }
            },
            [
              _c("p", [
                _c("span", { staticClass: "font-bold" }, [_vm._v("Warning:")]),
                _vm._v(" This entity is marked as deleted.")
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("Form", {
        attrs: {
          "form-fields": _vm.fields,
          "form-tabs": _vm.tabs,
          "mutation-name": "updateProfile"
        },
        scopedSlots: _vm._u([
          {
            key: "button",
            fn: function(ref) {
              var canSubmit = ref.canSubmit
              return [
                _c("input", {
                  staticClass:
                    "bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded",
                  attrs: {
                    type: "submit",
                    disabled: !canSubmit,
                    value: "Save entity",
                    canSubmit: canSubmit
                  }
                })
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Entity/Index.vue?vue&type=template&id=0d6ee8e6&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/Entity/Index.vue?vue&type=template&id=0d6ee8e6&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "bg-grey-lighter", attrs: { "no-padding": "" } },
    [
      _c("loading", {
        attrs: { active: _vm.$root.isLoading, "is-full-page": false },
        on: {
          "update:active": function($event) {
            return _vm.$set(_vm.$root, "isLoading", $event)
          }
        }
      }),
      _vm._v(" "),
      _c(
        "b-button",
        {
          directives: [
            {
              name: "b-modal",
              rawName: "v-b-modal.modal1",
              modifiers: { modal1: true }
            }
          ]
        },
        [_vm._v("Launch demo modal")]
      ),
      _vm._v(" "),
      _c("b-modal", { attrs: { id: "modal1", title: "BootstrapVue" } }, [
        _c("p", { staticClass: "my-4" }, [_vm._v("Hello from modal!")])
      ]),
      _vm._v(" "),
      _c("vuetable", {
        ref: "vuetable",
        attrs: {
          fields: _vm.tableFields,
          "api-mode": false,
          css: _vm.style.table,
          "per-page": _vm.perPage,
          "data-manager": _vm.dataManager,
          "load-on-start": false,
          "pagination-path": "pagination"
        },
        on: { "vuetable:pagination-data": _vm.onPaginationData },
        scopedSlots: _vm._u([
          {
            key: "graphi-actions",
            fn: function(props) {
              return _c(
                "div",
                {},
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to:
                          "/entity/" +
                          _vm.$route.params.entity +
                          "/" +
                          _vm.getId(props.rowData),
                        title: "edit"
                      }
                    },
                    [
                      _c("i", { staticClass: "material-icons" }, [
                        _vm._v("\n                edit\n            ")
                      ])
                    ]
                  )
                ],
                1
              )
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pagination" },
        [
          _c("vuetable-pagination-info", { ref: "paginationInfo" }),
          _vm._v(" "),
          _c("vuetable-pagination", {
            ref: "pagination",
            attrs: { css: _vm.style.pagination },
            on: { "vuetable-pagination:change-page": _vm.onChangePage }
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
      _c("Form", {
        attrs: {
          "form-fields": _vm.fields,
          "form-tabs": _vm.tabs,
          "mutation-name": "updateProfile"
        },
        on: { after: _vm.refreshUser },
        scopedSlots: _vm._u([
          {
            key: "button",
            fn: function(ref) {
              var canSubmit = ref.canSubmit
              return [
                _c("input", {
                  staticClass:
                    "bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded",
                  attrs: {
                    type: "submit",
                    disabled: !canSubmit,
                    value: "Save profile",
                    canSubmit: canSubmit
                  }
                })
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Search.vue?vue&type=template&id=63e8b822&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/Search.vue?vue&type=template&id=63e8b822&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    {
      directives: [
        {
          name: "on-clickaway",
          rawName: "v-on-clickaway",
          value: _vm.close,
          expression: "close"
        }
      ],
      staticClass: "relative z-50 w-full max-w-xs  md:min-w-400"
    },
    [
      _c("div", { staticClass: "relative" }, [
        _c("div", { staticClass: "relative" }, [
          _c(
            "i",
            {
              staticClass: "material-icons absolute ml-1",
              staticStyle: { top: "15%" }
            },
            [_vm._v("search")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.term,
                expression: "term"
              }
            ],
            ref: "search",
            staticClass: "w-full p-2 pl-8",
            attrs: {
              type: "text",
              placeholder: 'Type "/" anywhere on page to focus'
            },
            domProps: { value: _vm.term },
            on: {
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.term = $event.target.value
                },
                function($event) {
                  $event.stopPropagation()
                  return _vm.search($event)
                }
              ],
              focus: _vm.activate,
              keydown: [
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "down", 40, $event.key, [
                      "Down",
                      "ArrowDown"
                    ])
                  ) {
                    return null
                  }
                  $event.stopPropagation()
                  return _vm.moveDown($event)
                },
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "up", 38, $event.key, [
                      "Up",
                      "ArrowUp"
                    ])
                  ) {
                    return null
                  }
                  $event.stopPropagation()
                  return _vm.moveUp($event)
                },
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  $event.stopPropagation()
                  return _vm.gotoSelected($event)
                },
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "esc", 27, $event.key, [
                      "Esc",
                      "Escape"
                    ])
                  ) {
                    return null
                  }
                  $event.stopPropagation()
                  return _vm.close($event)
                }
              ]
            }
          })
        ]),
        _vm._v(" "),
        _vm.loading
          ? _c(
              "div",
              {
                staticClass:
                  "bg-white py-3 overflow-hidden absolute shadow-lg w-full mt-2 max-h-search overflow-y-auto"
              },
              [_c("p", [_vm._v("loading")])]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.active &&
        !_vm.loading &&
        _vm.searched &&
        _vm.term &&
        _vm.results.length == 0
          ? _c(
              "div",
              {
                staticClass:
                  "bg-white py-3 overflow-hidden absolute shadow-lg w-full mt-2 max-h-search overflow-y-auto"
              },
              [_c("p", [_vm._v("No results found")])]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.active && _vm.results.length > 0
          ? _c(
              "div",
              {
                ref: "dropdown",
                staticClass:
                  "bg-white py-3 overflow-hidden absolute shadow-lg w-full mt-2 max-h-search-dropdown overflow-y-auto"
              },
              [
                _vm._l(_vm.results, function(result) {
                  return [
                    _c("div", {
                      staticClass: "font-black uppercase pl-3 text-sm",
                      domProps: { textContent: _vm._s(result.collection.name) }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "list-reset" },
                      _vm._l(result.results, function(resource) {
                        return _c(
                          "li",
                          {
                            key:
                              result.collection.key + "-" + resource.identifier
                          },
                          [
                            _c(
                              "a",
                              {
                                ref: "searchResult",
                                refInFor: true,
                                staticClass:
                                  "cursor-pointer flex hover:bg-grey-lightest block py-2 px-3 no-underline hover:no-underline font-normal text-black flex flex-col text-left items-start",
                                class: {
                                  "bg-grey-lightest":
                                    _vm.highlightKey ==
                                    result.collection.key +
                                      "-" +
                                      resource.identifier
                                },
                                attrs: {
                                  href: "#",
                                  "data-identify":
                                    result.collection.key +
                                    "-" +
                                    resource.identifier
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.goTo(result.collection, resource)
                                  }
                                }
                              },
                              [
                                _c("div", [_vm._v(_vm._s(resource.title))]),
                                _vm._v(" "),
                                resource.subtitle
                                  ? _c("small", {
                                      staticClass: "text-xs block",
                                      domProps: {
                                        textContent: _vm._s(resource.subtitle)
                                      }
                                    })
                                  : _vm._e()
                              ]
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ]
                })
              ],
              2
            )
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/SideMenu.vue?vue&type=template&id=03a36add&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/SideMenu.vue?vue&type=template&id=03a36add&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "side-menu" },
    _vm._l(_vm.myItems, function(item) {
      return _c(
        "div",
        { class: [_vm.getNestClass(), _vm.main()] },
        [
          _c(item.link && { template: item.link }, {
            tag: "component",
            staticClass: "flex flex-row items-start flex-wrap w-full"
          }),
          _vm._v(" "),
          _c("div", { staticClass: "break" }),
          _vm._v(" "),
          item.children.length > 0
            ? _c(
                "div",
                { staticClass: "submenu" },
                [
                  _c("side-menu", {
                    attrs: { subitems: item.children, nest: _vm.nest + 1 }
                  })
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/form/Errors.vue?vue&type=template&id=2a25509f&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/form/Errors.vue?vue&type=template&id=2a25509f&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _vm.errors.length > 0 || _vm.apiErrors.length > 0
    ? _c(
        "div",
        {
          staticClass:
            "bg-orange-lightest border-l-4 border-orange text-orange-dark p-4",
          attrs: { role: "alert" }
        },
        [
          _c("p", { staticClass: "font-bold" }, [
            _vm._v("Correct the following errors")
          ]),
          _vm._v(" "),
          _c(
            "ul",
            [
              _vm._l(_vm.errors, function(error) {
                return _c("li", [_vm._v(_vm._s(error))])
              }),
              _vm._v(" "),
              _vm._l(_vm.apiErrors, function(error) {
                return _c("li", [_vm._v(_vm._s(error))])
              })
            ],
            2
          )
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/form/Fields.vue?vue&type=template&id=29fdee26&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/form/Fields.vue?vue&type=template&id=29fdee26&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "w-full" },
    [
      _c(
        "div",
        { staticClass: "flex flex-col md:flex-row md:flex-wrap" },
        _vm._l(_vm.fields, function(field) {
          return _c(
            "div",
            {
              class: [
                "mb-4 pr-8",
                _vm.getFieldWidth(field),
                _vm.validationStyle(field)
              ]
            },
            [
              field.label
                ? _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: field.name } },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(field.label) +
                          "\n            "
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              field.type == "text"
                ? _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: _vm.getValidationRules(field),
                        expression: "getValidationRules(field)"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: field.value,
                        expression: "field.value"
                      }
                    ],
                    staticClass: "form-input",
                    attrs: {
                      id: field.name,
                      required: field.required,
                      type: "text",
                      placeholder: field.placeholder || field.label,
                      name: field.name,
                      "data-vv-as": field.label
                    },
                    domProps: { value: field.value },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(field, "value", $event.target.value)
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              field.type == "textarea"
                ? _c("textarea", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: _vm.getValidationRules(field),
                        expression: "getValidationRules(field)"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: field.value,
                        expression: "field.value"
                      }
                    ],
                    staticClass: "form-input",
                    attrs: {
                      id: field.name,
                      required: field.required,
                      placeholder: field.placeholder || field.label,
                      name: field.name,
                      "data-vv-as": field.label
                    },
                    domProps: { value: field.value },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(field, "value", $event.target.value)
                      }
                    }
                  })
                : field.type == "datetime" && !field.readonly
                ? _c("datetime", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: _vm.getValidationRules(field),
                        expression: "getValidationRules(field)"
                      }
                    ],
                    staticClass: "form-input",
                    attrs: {
                      format: _vm.dateTimeFormat,
                      type: "datetime",
                      readonly: field.readonly,
                      id: field.name,
                      required: field.required,
                      placeholder: field.placeholder || field.label,
                      name: field.name,
                      "data-vv-as": field.label
                    },
                    model: {
                      value: field.value,
                      callback: function($$v) {
                        _vm.$set(field, "value", $$v)
                      },
                      expression: "field.value"
                    }
                  })
                : field.type == "datetime" && field.readonly
                ? _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: _vm.getValidationRules(field),
                        expression: "getValidationRules(field)"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: field.value,
                        expression: "field.value"
                      }
                    ],
                    staticClass: "form-input",
                    attrs: {
                      id: field.name,
                      required: field.required,
                      type: "text",
                      readonly: "",
                      placeholder: field.placeholder || field.label,
                      name: field.name,
                      "data-vv-as": field.label
                    },
                    domProps: { value: field.value },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(field, "value", $event.target.value)
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.errors.has(field.name)
                ? _c("small", [_vm._v(_vm._s(_vm.errors.first(field.name)))])
                : _vm._e()
            ],
            1
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "b-tabs",
        { attrs: { "content-class": "mt-3" } },
        _vm._l(_vm.tabs, function(tab) {
          return _c(
            "b-tab",
            { key: tab.key, attrs: { title: tab.key } },
            [_c("Fields", { attrs: { fields: tab.fields } })],
            1
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/form/Form.vue?vue&type=template&id=584ff078&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/form/Form.vue?vue&type=template&id=584ff078&scoped=true& ***!
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
      _c("Errors", {
        attrs: { errors: _vm.showErrors, "api-errors": _vm.serverErrors }
      }),
      _vm._v(" "),
      _c("Fields", { attrs: { fields: _vm.formFields, tabs: _vm.formTabs } }),
      _vm._v(" "),
      _vm._t(
        "button",
        [
          _c("input", {
            staticClass:
              "bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded",
            attrs: {
              slot: "button",
              type: "submit",
              disabled: !_vm.canSubmit,
              value: "Save",
              canSubmit: _vm.canSubmit
            },
            slot: "button"
          })
        ],
        { canSubmit: _vm.canSubmit }
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/GraphiCore.js":
/*!************************************!*\
  !*** ./resources/js/GraphiCore.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _core_components_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/components/Card */ "./resources/js/core/components/Card.vue");
/* harmony import */ var _core_components_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/components/Search */ "./resources/js/core/components/Search.vue");
/* harmony import */ var _core_components_form_Fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/form/Fields */ "./resources/js/core/components/form/Fields.vue");
/* harmony import */ var _core_components_form_Errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/form/Errors */ "./resources/js/core/components/form/Errors.vue");
/* harmony import */ var _core_components_form_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/components/form/Form */ "./resources/js/core/components/form/Form.vue");
/* harmony import */ var _core_components_Entity_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/Entity/Edit */ "./resources/js/core/components/Entity/Edit.vue");
/* harmony import */ var _core_components_Entity_Index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/Entity/Index */ "./resources/js/core/components/Entity/Index.vue");
/* harmony import */ var _core_components_404__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/components/404 */ "./resources/js/core/components/404.vue");
/* harmony import */ var babel_plugin_dual_import_importCss_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! babel-plugin-dual-import/importCss.js */ "./node_modules/babel-plugin-dual-import/importCss.js");
/* harmony import */ var babel_plugin_dual_import_importCss_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_dual_import_importCss_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_components_HeaderUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/HeaderUser */ "./resources/js/core/components/HeaderUser.vue");
/* harmony import */ var _core_components_SideMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/components/SideMenu */ "./resources/js/core/components/SideMenu.vue");
/* harmony import */ var _core_components_Dashboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/components/Dashboard */ "./resources/js/core/components/Dashboard.vue");
/* harmony import */ var _core_components_MyAccount__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/components/MyAccount */ "./resources/js/core/components/MyAccount.vue");
/* harmony import */ var _core_components_react_Test__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/components/react/Test */ "./resources/js/core/components/react/Test.jsx");
/* harmony import */ var vue_toasted__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-toasted */ "./node_modules/vue-toasted/dist/vue-toasted.min.js");
/* harmony import */ var vue_toasted__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue_toasted__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _enrian_vue_pikaday__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @enrian/vue-pikaday */ "./node_modules/@enrian/vue-pikaday/dist/vue-pikaday.js");
/* harmony import */ var _enrian_vue_pikaday__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_enrian_vue_pikaday__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var vue_datetime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vue-datetime */ "./node_modules/vue-datetime/dist/vue-datetime.js");
/* harmony import */ var vue_datetime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(vue_datetime__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var vuetable_2_src__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! vuetable-2/src */ "./node_modules/vuetable-2/src/index.js");
/* harmony import */ var vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! vue-datetime/dist/vue-datetime.css */ "./node_modules/vue-datetime/dist/vue-datetime.css");
/* harmony import */ var vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _enrian_vue_pikaday_dist_vue_pikaday_min_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @enrian/vue-pikaday/dist/vue-pikaday.min.css */ "./node_modules/@enrian/vue-pikaday/dist/vue-pikaday.min.css");
/* harmony import */ var _enrian_vue_pikaday_dist_vue_pikaday_min_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_enrian_vue_pikaday_dist_vue_pikaday_min_css__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_24__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









 // const HeaderUser = () => Promise.all([
//   import( /* webpackChunkName: 'HeaderUser' */'./core/components/HeaderUser.vue'),
//   importCss('HeaderUser')
// ]).then(promises => promises[0]);
// const HeaderUser = () => import(/* webpackChunkName: 'HeaderUser' */'./core/components/HeaderUser.vue')













 // You need a specific loader for CSS files





var GraphiCore =
/*#__PURE__*/
function () {
  function GraphiCore(app) {
    _classCallCheck(this, GraphiCore);

    this.app = app;
  }

  _createClass(GraphiCore, [{
    key: "register",
    value: function register() {
      this.app.booting(function (Vue, router) {
        Vue.use(vee_validate__WEBPACK_IMPORTED_MODULE_15__["default"], {
          fieldsBagName: '_fields',
          inject: false
        });
        Vue.mixin({
          data: function data() {
            if (this.$options.parseForms) {
              return {
                fields: [],
                tabs: {}
              };
            }

            return {};
          },
          methods: {
            parseFields: function parseFields(_fields, from) {
              var _this = this;

              var tabsName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'tabs';
              var fieldsName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'fields';

              if (!this.$options.parseForms) {
                return false;
              }

              var general = [];
              var fields = JSON.parse(JSON.stringify(_fields));
              fields.forEach(function (field) {
                var val = from && Object(lodash__WEBPACK_IMPORTED_MODULE_24__["get"])(from, field.value) ? Object(lodash__WEBPACK_IMPORTED_MODULE_24__["get"])(from, field.value) : null;
                field.from = field.value;

                if (field.type == 'datetime' && val) {
                  if (field.readonly) {
                    field.value = luxon__WEBPACK_IMPORTED_MODULE_20__["DateTime"].fromMillis(val * 1000).toLocaleString(luxon__WEBPACK_IMPORTED_MODULE_20__["DateTime"].DATETIME_SHORT);
                  } else {
                    field.value = luxon__WEBPACK_IMPORTED_MODULE_20__["DateTime"].fromMillis(val * 1000).toISO();
                  }
                } else {
                  field.value = val;
                }

                if (field.tab === null) {
                  general.push(field);
                } else {
                  if (_this[tabsName][field.tab] == null) {
                    _this[tabsName][field.tab] = {
                      key: field.tab,
                      fields: []
                    };
                  }

                  _this[tabsName][field.tab].fields.push(field);
                }
              });
              this[fieldsName] = general;
            },
            serializeForApi: function serializeForApi(field) {
              if (!this.$options.parseForms) {
                return false;
              }

              if (field.type == 'datetime') {
                if (field.value) {
                  return parseInt(luxon__WEBPACK_IMPORTED_MODULE_20__["DateTime"].fromISO(field.value).toFormat('X'));
                }
              }

              return field.value;
            }
          }
        });
        Vue.mixin({
          data: function data() {
            return {
              serverErrors: []
            };
          },
          computed: {
            canSubmit: function canSubmit() {
              var invalid = false;

              if (this._fields) {
                Object.values(this._fields).forEach(function (field) {
                  if (field.invalid) {
                    invalid = true;
                  }
                });
              }

              return invalid === false;
            }
          },
          methods: {
            resetGqlErrors: function resetGqlErrors() {
              this.serverErrors = [];
            },
            parseGqlErrors: function parseGqlErrors(e) {
              var hasValidation = false;

              if (e.graphQLErrors && e.graphQLErrors.length > 0) {
                e.graphQLErrors.forEach(function (err) {
                  if (err.message == 'validation') {
                    hasValidation = err.validation;
                  } else {
                    if (global.config.debug) {
                      global.app.bus.$emit('error', err.message);
                    }
                  }
                });
              }

              if (hasValidation) {
                var final = [];
                Object.values(hasValidation).forEach(function (errors) {
                  errors.forEach(function (err) {
                    final.push(err);
                  });
                });
                this.serverErrors = final;
              }
            }
          }
        });
        Vue.use(_enrian_vue_pikaday__WEBPACK_IMPORTED_MODULE_18___default.a);
        Vue.use(vue_datetime__WEBPACK_IMPORTED_MODULE_19___default.a);
        Object(vuetable_2_src__WEBPACK_IMPORTED_MODULE_21__["install"])(Vue);
        Vue.component('graphi-header-user', _core_components_HeaderUser__WEBPACK_IMPORTED_MODULE_9__["default"]);
        Vue.component('side-menu', _core_components_SideMenu__WEBPACK_IMPORTED_MODULE_10__["default"]);
        Vue.component('Search', _core_components_Search__WEBPACK_IMPORTED_MODULE_1__["default"]);
        Vue.component('Card', _core_components_Card__WEBPACK_IMPORTED_MODULE_0__["default"]);
        Vue.component('Form', _core_components_form_Form__WEBPACK_IMPORTED_MODULE_4__["default"]);
        Vue.component('Fields', _core_components_form_Fields__WEBPACK_IMPORTED_MODULE_2__["default"]);
        Vue.component('Loading', vue_loading_overlay__WEBPACK_IMPORTED_MODULE_16___default.a);
        Vue.component('Errors', _core_components_form_Errors__WEBPACK_IMPORTED_MODULE_3__["default"]);
        Vue.react('GridLayout', _core_components_react_Test__WEBPACK_IMPORTED_MODULE_13__["Test"]);
        Vue.use(vue_toasted__WEBPACK_IMPORTED_MODULE_14___default.a, {
          position: 'bottom-left',
          duration: 4000,
          type: 'success'
        }); // const Dashboard = () => Promise.all([
        //   import( /* webpackChunkName: 'Dashboard' */'./core/components/Dashboard'),
        //   importCss('Dashboard')
        // ]).then(promises => promises[0]);

        router.addRoutes([{
          path: '/',
          component: _core_components_Dashboard__WEBPACK_IMPORTED_MODULE_11__["default"],
          name: 'dashboard'
        }, {
          path: '/my-account',
          component: _core_components_MyAccount__WEBPACK_IMPORTED_MODULE_12__["default"],
          name: 'myaccount'
        }, {
          path: '/entity/:entity',
          component: _core_components_Entity_Index__WEBPACK_IMPORTED_MODULE_6__["default"],
          name: 'entityindex'
        }, {
          path: '/entity/:entity/:id',
          component: _core_components_Entity_Edit__WEBPACK_IMPORTED_MODULE_5__["default"],
          name: 'entityedit'
        }, {
          path: '/404',
          component: _core_components_404__WEBPACK_IMPORTED_MODULE_7__["default"],
          name: '404'
        }, {
          path: '*',
          component: _core_components_404__WEBPACK_IMPORTED_MODULE_7__["default"],
          name: 'catch-all' // {path: '/my-account', component: () => import(/* webpackChunkName: 'MyAccount' */'./core/components/MyAccount.vue')},

        }]);
      });
    }
  }]);

  return GraphiCore;
}();

window.GraphiCore = GraphiCore;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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

/***/ "./resources/js/core/TableBsStyle.js":
/*!*******************************************!*\
  !*** ./resources/js/core/TableBsStyle.js ***!
  \*******************************************/
/*! exports provided: TableBsStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBsStyle", function() { return TableBsStyle; });
var TableBsStyle = {
  table: {
    tableWrapper: '',
    tableHeaderClass: 'mb-0',
    tableBodyClass: 'mb-0',
    tableClass: 'table table-bordered table-hover',
    loadingClass: 'loading',
    ascendingIcon: 'fa fa-chevron-up',
    descendingIcon: 'fa fa-chevron-down',
    ascendingClass: 'sorted-asc',
    descendingClass: 'sorted-desc',
    sortableIcon: 'fa fa-sort',
    detailRowClass: 'vuetable-detail-row',
    handleIcon: 'fa fa-bars text-secondary',
    renderIcon: function renderIcon(classes, options) {
      return "<i class=\"".concat(classes.join(' '), "\"></span>");
    }
  },
  pagination: {
    wrapperClass: 'pagination-wrapper',
    activeClass: 'active',
    disabledClass: 'disabled',
    pageClass: 'page',
    linkClass: 'link',
    paginationClass: 'pagination',
    paginationInfoClass: 'float-left',
    dropdownClass: 'form-control',
    icons: {
      first: 'fa fa-chevron-left',
      prev: 'fa fa-chevron-left',
      next: 'fa fa-chevron-right',
      last: 'fa fa-chevron-right'
    }
  }
};

/***/ }),

/***/ "./resources/js/core/components/404.vue":
/*!**********************************************!*\
  !*** ./resources/js/core/components/404.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _404_vue_vue_type_template_id_073ac2be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404.vue?vue&type=template&id=073ac2be&scoped=true& */ "./resources/js/core/components/404.vue?vue&type=template&id=073ac2be&scoped=true&");
/* harmony import */ var _404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404.vue?vue&type=script&lang=js& */ "./resources/js/core/components/404.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _404_vue_vue_type_template_id_073ac2be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _404_vue_vue_type_template_id_073ac2be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "073ac2be",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/core/components/404.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/core/components/404.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/core/components/404.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./404.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/404.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/core/components/404.vue?vue&type=template&id=073ac2be&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/core/components/404.vue?vue&type=template&id=073ac2be&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_073ac2be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./404.vue?vue&type=template&id=073ac2be&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/404.vue?vue&type=template&id=073ac2be&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_073ac2be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_073ac2be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/core/components/Card.vue":
/*!***********************************************!*\
  !*** ./resources/js/core/components/Card.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card_vue_vue_type_template_id_32d8e517_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=32d8e517&scoped=true& */ "./resources/js/core/components/Card.vue?vue&type=template&id=32d8e517&scoped=true&");
/* harmony import */ var _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js& */ "./resources/js/core/components/Card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Card_vue_vue_type_template_id_32d8e517_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Card_vue_vue_type_template_id_32d8e517_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "32d8e517",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/core/components/Card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/core/components/Card.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/core/components/Card.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/core/components/Card.vue?vue&type=template&id=32d8e517&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/core/components/Card.vue?vue&type=template&id=32d8e517&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_32d8e517_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=template&id=32d8e517&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Card.vue?vue&type=template&id=32d8e517&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_32d8e517_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_32d8e517_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/core/components/Dashboard.vue":
/*!****************************************************!*\
  !*** ./resources/js/core/components/Dashboard.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_5643c11d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=5643c11d&scoped=true& */ "./resources/js/core/components/Dashboard.vue?vue&type=template&id=5643c11d&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/core/components/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_5643c11d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_5643c11d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5643c11d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/core/components/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/core/components/Dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/core/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/core/components/Dashboard.vue?vue&type=template&id=5643c11d&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/core/components/Dashboard.vue?vue&type=template&id=5643c11d&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_5643c11d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=5643c11d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Dashboard.vue?vue&type=template&id=5643c11d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_5643c11d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_5643c11d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/core/components/Entity/Edit.vue":
/*!******************************************************!*\
  !*** ./resources/js/core/components/Entity/Edit.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_67c51bc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=67c51bc2&scoped=true& */ "./resources/js/core/components/Entity/Edit.vue?vue&type=template&id=67c51bc2&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/core/components/Entity/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_67c51bc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_67c51bc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "67c51bc2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/core/components/Entity/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/core/components/Entity/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/core/components/Entity/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Entity/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/core/components/Entity/Edit.vue?vue&type=template&id=67c51bc2&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/core/components/Entity/Edit.vue?vue&type=template&id=67c51bc2&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_67c51bc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=67c51bc2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Entity/Edit.vue?vue&type=template&id=67c51bc2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_67c51bc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_67c51bc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/core/components/Entity/Index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/core/components/Entity/Index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_0d6ee8e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=0d6ee8e6&scoped=true& */ "./resources/js/core/components/Entity/Index.vue?vue&type=template&id=0d6ee8e6&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/core/components/Entity/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_0d6ee8e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_0d6ee8e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0d6ee8e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/core/components/Entity/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/core/components/Entity/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/core/components/Entity/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Entity/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/core/components/Entity/Index.vue?vue&type=template&id=0d6ee8e6&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/core/components/Entity/Index.vue?vue&type=template&id=0d6ee8e6&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0d6ee8e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=0d6ee8e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Entity/Index.vue?vue&type=template&id=0d6ee8e6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0d6ee8e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0d6ee8e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/core/components/Search.vue":
/*!*************************************************!*\
  !*** ./resources/js/core/components/Search.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Search_vue_vue_type_template_id_63e8b822_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=63e8b822&scoped=true& */ "./resources/js/core/components/Search.vue?vue&type=template&id=63e8b822&scoped=true&");
/* harmony import */ var _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&lang=js& */ "./resources/js/core/components/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Search_vue_vue_type_template_id_63e8b822_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Search_vue_vue_type_template_id_63e8b822_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "63e8b822",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/core/components/Search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/core/components/Search.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/core/components/Search.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/core/components/Search.vue?vue&type=template&id=63e8b822&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/core/components/Search.vue?vue&type=template&id=63e8b822&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_63e8b822_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=template&id=63e8b822&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/Search.vue?vue&type=template&id=63e8b822&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_63e8b822_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_63e8b822_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/core/components/SideMenu.vue":
/*!***************************************************!*\
  !*** ./resources/js/core/components/SideMenu.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideMenu_vue_vue_type_template_id_03a36add_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideMenu.vue?vue&type=template&id=03a36add&scoped=true& */ "./resources/js/core/components/SideMenu.vue?vue&type=template&id=03a36add&scoped=true&");
/* harmony import */ var _SideMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideMenu.vue?vue&type=script&lang=js& */ "./resources/js/core/components/SideMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SideMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideMenu_vue_vue_type_template_id_03a36add_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SideMenu_vue_vue_type_template_id_03a36add_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "03a36add",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/core/components/SideMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/core/components/SideMenu.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/core/components/SideMenu.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SideMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/SideMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/core/components/SideMenu.vue?vue&type=template&id=03a36add&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/core/components/SideMenu.vue?vue&type=template&id=03a36add&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideMenu_vue_vue_type_template_id_03a36add_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SideMenu.vue?vue&type=template&id=03a36add&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/SideMenu.vue?vue&type=template&id=03a36add&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideMenu_vue_vue_type_template_id_03a36add_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideMenu_vue_vue_type_template_id_03a36add_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/core/components/form/Errors.vue":
/*!******************************************************!*\
  !*** ./resources/js/core/components/form/Errors.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Errors_vue_vue_type_template_id_2a25509f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors.vue?vue&type=template&id=2a25509f&scoped=true& */ "./resources/js/core/components/form/Errors.vue?vue&type=template&id=2a25509f&scoped=true&");
/* harmony import */ var _Errors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Errors.vue?vue&type=script&lang=js& */ "./resources/js/core/components/form/Errors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Errors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Errors_vue_vue_type_template_id_2a25509f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Errors_vue_vue_type_template_id_2a25509f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2a25509f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/core/components/form/Errors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/core/components/form/Errors.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/core/components/form/Errors.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Errors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Errors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/form/Errors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Errors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/core/components/form/Errors.vue?vue&type=template&id=2a25509f&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/core/components/form/Errors.vue?vue&type=template&id=2a25509f&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Errors_vue_vue_type_template_id_2a25509f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Errors.vue?vue&type=template&id=2a25509f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/form/Errors.vue?vue&type=template&id=2a25509f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Errors_vue_vue_type_template_id_2a25509f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Errors_vue_vue_type_template_id_2a25509f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/core/components/form/Fields.vue":
/*!******************************************************!*\
  !*** ./resources/js/core/components/form/Fields.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fields_vue_vue_type_template_id_29fdee26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fields.vue?vue&type=template&id=29fdee26&scoped=true& */ "./resources/js/core/components/form/Fields.vue?vue&type=template&id=29fdee26&scoped=true&");
/* harmony import */ var _Fields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fields.vue?vue&type=script&lang=js& */ "./resources/js/core/components/form/Fields.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Fields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Fields_vue_vue_type_template_id_29fdee26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Fields_vue_vue_type_template_id_29fdee26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "29fdee26",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/core/components/form/Fields.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/core/components/form/Fields.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/core/components/form/Fields.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Fields.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/form/Fields.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/core/components/form/Fields.vue?vue&type=template&id=29fdee26&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/core/components/form/Fields.vue?vue&type=template&id=29fdee26&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fields_vue_vue_type_template_id_29fdee26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Fields.vue?vue&type=template&id=29fdee26&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/form/Fields.vue?vue&type=template&id=29fdee26&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fields_vue_vue_type_template_id_29fdee26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fields_vue_vue_type_template_id_29fdee26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/core/components/form/Form.vue":
/*!****************************************************!*\
  !*** ./resources/js/core/components/form/Form.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_584ff078_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=584ff078&scoped=true& */ "./resources/js/core/components/form/Form.vue?vue&type=template&id=584ff078&scoped=true&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/core/components/form/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_584ff078_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_584ff078_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "584ff078",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/core/components/form/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/core/components/form/Form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/core/components/form/Form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/form/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/core/components/form/Form.vue?vue&type=template&id=584ff078&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/core/components/form/Form.vue?vue&type=template&id=584ff078&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_584ff078_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=584ff078&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/form/Form.vue?vue&type=template&id=584ff078&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_584ff078_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_584ff078_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/core/components/react/Test.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/core/components/react/Test.jsx ***!
  \*****************************************************/
/*! exports provided: Test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test", function() { return ResponsiveLocalStorageLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-grid-layout */ "./node_modules/react-grid-layout/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ResponsiveReactGridLayout = Object(react_grid_layout__WEBPACK_IMPORTED_MODULE_1__["WidthProvider"])(react_grid_layout__WEBPACK_IMPORTED_MODULE_1__["Responsive"]);
var originalLayouts = getFromLS("layouts") || {};
var originalLayout = getFromLS("layout", 'll') || [];
var originalItems = getFromLS("items", 'items') || [];
/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */

var ResponsiveLocalStorageLayout =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ResponsiveLocalStorageLayout, _React$PureComponent);

  function ResponsiveLocalStorageLayout(props) {
    var _this;

    _classCallCheck(this, ResponsiveLocalStorageLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveLocalStorageLayout).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "deleteItem", function (key) {
      var i = _toConsumableArray(_this.state.items);

      i.splice(key, 1);

      _this.setState({
        items: i
      });

      _this.onLayoutChange(_this.state.layout, _this.state.layouts);
    });

    _defineProperty(_assertThisInitialized(_this), "renderItem", function (nr, key) {
      var layouts = _this.state.layout || [];
      var layout = {
        w: 6,
        h: 3,
        x: 0,
        y: 0,
        minW: 2,
        minH: 3
      };
      var saved = {};
      Object.values(_this.state.layouts).forEach(function (item, key) {
        var breakpoint = Object.keys(_this.state.layouts)[key];
        item.forEach(function (subitem) {
          if (subitem.i == nr) {
            saved[breakpoint] = item;
          }
        });
      });
      var l = [];

      if (Object.values(saved).length > 0) {
        if (saved.lg) {
          l = saved.lg;
        } else if (saved.md) {
          l = saved.md;
        } else if (saved.sm) {
          l = saved.sm;
        } else if (saved.xs) {
          l = saved.xs;
        } else if (saved.xxs) {
          l = saved.xxs;
        }
      }

      console.log('this savd', layout);
      layouts.forEach(function (l) {
        console.log('l', l, nr);

        if (l.i == nr) {
          layout = l;
          return false;
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: nr,
        "data-grid": layout
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "max-w-full h-full rounded overflow-hidden shadow-lg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: '50%',
          backgroundSize: 'cover',
          backgroundImage: 'url(https://tailwindcss.com/img/card-top.jpg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "px-6 py-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "font-bold text-xl mb-2",
        onClick: function onClick() {
          return _this.deleteItem(key);
        }
      }, "The Coldest Sunset ", nr), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-grey-darker text-base"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "px-6 py-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
      }, "#photography"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
      }, "#travel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker"
      }, "#winter"))));
    });

    _this.state = {
      items: JSON.parse(JSON.stringify(originalItems)),
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
      layout: JSON.parse(JSON.stringify(originalLayout)),
      editable: true
    };
    return _this;
  }

  _createClass(ResponsiveLocalStorageLayout, [{
    key: "resetLayout",
    value: function resetLayout() {
      this.setState({
        layouts: {}
      });
    }
  }, {
    key: "onLayoutChange",
    value: function onLayoutChange(layout, layouts) {
      saveToLS("layouts", layouts);
      saveToLS("layout", layout, 'll');
      saveToLS("items", this.state.items, 'items');
      this.props.handler(layout, layouts);
      this.setState({
        layouts: layouts,
        layout: layout
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.resetLayout();
        }
      }, "Reset Layout"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.setState({
            items: [].concat(_toConsumableArray(_this2.state.items), [{
              k: 1
            }])
          });
        },
        className: "bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
      }, "add"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.setState({
            editable: !_this2.state.editable
          });
        },
        className: "bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
      }, "Edit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResponsiveReactGridLayout, {
        className: "layout",
        compactType: 'vertical',
        isDraggable: this.state.editable,
        isResizable: this.state.editable,
        cols: {
          lg: 12,
          md: 12,
          sm: 6,
          xs: 6,
          xxs: 1
        },
        breakpoints: {
          lg: 1000,
          md: 800,
          sm: 568,
          xs: 280,
          xxs: 0
        },
        rowHeight: 30,
        layouts: this.state.layouts,
        onLayoutChange: function onLayoutChange(layout, layouts) {
          return _this2.onLayoutChange(layout, layouts);
        }
      }, this.state.items.map(function (item, key) {
        return _this2.renderItem("w-".concat(key), key);
      })));
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        className: "layout",
        cols: {
          lg: 12,
          md: 10,
          sm: 6,
          xs: 4,
          xxs: 2
        },
        rowHeight: 30
      };
    }
  }]);

  return ResponsiveLocalStorageLayout;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);



function getFromLS(key) {
  var storage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ex';
  var ls = {};

  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem(storage)) || {};
    } catch (e) {
      /*Ignore*/
    }
  }

  return ls[key];
}

function saveToLS(key, value) {
  var storage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ex';

  if (global.localStorage) {
    global.localStorage.setItem(storage, JSON.stringify(_defineProperty({}, key, value)));
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/js/core/fragments/DynamicColumn.js":
/*!******************************************************!*\
  !*** ./resources/js/core/fragments/DynamicColumn.js ***!
  \******************************************************/
/*! exports provided: DynamicColumnFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicColumnFragment", function() { return DynamicColumnFragment; });
var DynamicColumnFragment = "\nfragment DynamicColumn on ColumnDefinition {\n  label\n  field\n  type\n  sortable\n  gql {\n      attribute\n      type\n  },\n}\n";

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

/***/ 1:
/*!******************************************!*\
  !*** multi ./resources/js/GraphiCore.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/filipac/Code/graphicms/cms/resources/js/GraphiCore.js */"./resources/js/GraphiCore.js");


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })

},[[1,"/manifest","/vendor"]]]);