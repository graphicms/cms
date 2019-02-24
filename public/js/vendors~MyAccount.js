(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~MyAccount"],{

/***/ "./node_modules/apollo-cache/lib/cache.js":
/*!************************************************!*\
  !*** ./node_modules/apollo-cache/lib/cache.js ***!
  \************************************************/
/*! exports provided: ApolloCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloCache", function() { return ApolloCache; });
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/apollo-cache/lib/utils.js");


var ApolloCache = (function () {
    function ApolloCache() {
    }
    ApolloCache.prototype.transformDocument = function (document) {
        return document;
    };
    ApolloCache.prototype.transformForLink = function (document) {
        return document;
    };
    ApolloCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            query: options.query,
            variables: options.variables,
            optimistic: optimistic,
        });
    };
    ApolloCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            query: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_0__["getFragmentQueryDocument"])(options.fragment, options.fragmentName),
            variables: options.variables,
            rootId: options.id,
            optimistic: optimistic,
        });
    };
    ApolloCache.prototype.writeQuery = function (options) {
        this.write({
            dataId: 'ROOT_QUERY',
            result: options.data,
            query: options.query,
            variables: options.variables,
        });
    };
    ApolloCache.prototype.writeFragment = function (options) {
        this.write({
            dataId: options.id,
            result: options.data,
            variables: options.variables,
            query: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_0__["getFragmentQueryDocument"])(options.fragment, options.fragmentName),
        });
    };
    ApolloCache.prototype.writeData = function (_a) {
        var id = _a.id, data = _a.data;
        if (typeof id !== 'undefined') {
            var typenameResult = null;
            try {
                typenameResult = this.read({
                    rootId: id,
                    optimistic: false,
                    query: _utils__WEBPACK_IMPORTED_MODULE_1__["justTypenameQuery"],
                });
            }
            catch (e) {
            }
            var __typename = (typenameResult && typenameResult.__typename) || '__ClientData';
            var dataToWrite = Object.assign({ __typename: __typename }, data);
            this.writeFragment({
                id: id,
                fragment: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["fragmentFromPojo"])(dataToWrite, __typename),
                data: dataToWrite,
            });
        }
        else {
            this.writeQuery({ query: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["queryFromPojo"])(data), data: data });
        }
    };
    return ApolloCache;
}());

//# sourceMappingURL=cache.js.map

/***/ }),

/***/ "./node_modules/apollo-cache/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/apollo-cache/lib/index.js ***!
  \************************************************/
/*! exports provided: ApolloCache, Cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache */ "./node_modules/apollo-cache/lib/cache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloCache", function() { return _cache__WEBPACK_IMPORTED_MODULE_0__["ApolloCache"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/apollo-cache/lib/types/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["Cache"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/apollo-cache/lib/types/Cache.js":
/*!******************************************************!*\
  !*** ./node_modules/apollo-cache/lib/types/Cache.js ***!
  \******************************************************/
/*! exports provided: Cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return Cache; });
var Cache;
(function (Cache) {
})(Cache || (Cache = {}));
//# sourceMappingURL=Cache.js.map

/***/ }),

/***/ "./node_modules/apollo-cache/lib/types/index.js":
/*!******************************************************!*\
  !*** ./node_modules/apollo-cache/lib/types/index.js ***!
  \******************************************************/
/*! exports provided: Cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cache */ "./node_modules/apollo-cache/lib/types/Cache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return _Cache__WEBPACK_IMPORTED_MODULE_0__["Cache"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/apollo-cache/lib/utils.js":
/*!************************************************!*\
  !*** ./node_modules/apollo-cache/lib/utils.js ***!
  \************************************************/
/*! exports provided: queryFromPojo, fragmentFromPojo, justTypenameQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryFromPojo", function() { return queryFromPojo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fragmentFromPojo", function() { return fragmentFromPojo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justTypenameQuery", function() { return justTypenameQuery; });
function queryFromPojo(obj) {
    var op = {
        kind: 'OperationDefinition',
        operation: 'query',
        name: {
            kind: 'Name',
            value: 'GeneratedClientQuery',
        },
        selectionSet: selectionSetFromObj(obj),
    };
    var out = {
        kind: 'Document',
        definitions: [op],
    };
    return out;
}
function fragmentFromPojo(obj, typename) {
    var frag = {
        kind: 'FragmentDefinition',
        typeCondition: {
            kind: 'NamedType',
            name: {
                kind: 'Name',
                value: typename || '__FakeType',
            },
        },
        name: {
            kind: 'Name',
            value: 'GeneratedClientQuery',
        },
        selectionSet: selectionSetFromObj(obj),
    };
    var out = {
        kind: 'Document',
        definitions: [frag],
    };
    return out;
}
function selectionSetFromObj(obj) {
    if (typeof obj === 'number' ||
        typeof obj === 'boolean' ||
        typeof obj === 'string' ||
        typeof obj === 'undefined' ||
        obj === null) {
        return null;
    }
    if (Array.isArray(obj)) {
        return selectionSetFromObj(obj[0]);
    }
    var selections = [];
    Object.keys(obj).forEach(function (key) {
        var nestedSelSet = selectionSetFromObj(obj[key]);
        var field = {
            kind: 'Field',
            name: {
                kind: 'Name',
                value: key,
            },
            selectionSet: nestedSelSet || undefined,
        };
        selections.push(field);
    });
    var selectionSet = {
        kind: 'SelectionSet',
        selections: selections,
    };
    return selectionSet;
}
var justTypenameQuery = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: null,
            variableDefinitions: null,
            directives: [],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        alias: null,
                        name: {
                            kind: 'Name',
                            value: '__typename',
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null,
                    },
                ],
            },
        },
    ],
};
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/directives.js":
/*!*********************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/directives.js ***!
  \*********************************************************/
/*! exports provided: getDirectiveInfoFromField, shouldInclude, getDirectiveNames, hasDirectives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectiveInfoFromField", function() { return getDirectiveInfoFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldInclude", function() { return shouldInclude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectiveNames", function() { return getDirectiveNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasDirectives", function() { return hasDirectives; });
/* harmony import */ var graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql/language/visitor */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _storeUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeUtils */ "./node_modules/apollo-utilities/lib/storeUtils.js");


function getDirectiveInfoFromField(field, variables) {
    if (field.directives && field.directives.length) {
        var directiveObj_1 = {};
        field.directives.forEach(function (directive) {
            directiveObj_1[directive.name.value] = Object(_storeUtils__WEBPACK_IMPORTED_MODULE_1__["argumentsObjectFromField"])(directive, variables);
        });
        return directiveObj_1;
    }
    return null;
}
function shouldInclude(selection, variables) {
    if (variables === void 0) { variables = {}; }
    if (!selection.directives) {
        return true;
    }
    var res = true;
    selection.directives.forEach(function (directive) {
        if (directive.name.value !== 'skip' && directive.name.value !== 'include') {
            return;
        }
        var directiveArguments = directive.arguments || [];
        var directiveName = directive.name.value;
        if (directiveArguments.length !== 1) {
            throw new Error("Incorrect number of arguments for the @" + directiveName + " directive.");
        }
        var ifArgument = directiveArguments[0];
        if (!ifArgument.name || ifArgument.name.value !== 'if') {
            throw new Error("Invalid argument for the @" + directiveName + " directive.");
        }
        var ifValue = directiveArguments[0].value;
        var evaledValue = false;
        if (!ifValue || ifValue.kind !== 'BooleanValue') {
            if (ifValue.kind !== 'Variable') {
                throw new Error("Argument for the @" + directiveName + " directive must be a variable or a boolean value.");
            }
            else {
                evaledValue = variables[ifValue.name.value];
                if (evaledValue === undefined) {
                    throw new Error("Invalid variable referenced in @" + directiveName + " directive.");
                }
            }
        }
        else {
            evaledValue = ifValue.value;
        }
        if (directiveName === 'skip') {
            evaledValue = !evaledValue;
        }
        if (!evaledValue) {
            res = false;
        }
    });
    return res;
}
function getDirectiveNames(doc) {
    var names = [];
    Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
        Directive: function (node) {
            names.push(node.name.value);
        },
    });
    return names;
}
function hasDirectives(names, doc) {
    return getDirectiveNames(doc).some(function (name) { return names.indexOf(name) > -1; });
}
//# sourceMappingURL=directives.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/fragments.js":
/*!********************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/fragments.js ***!
  \********************************************************/
/*! exports provided: getFragmentQueryDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentQueryDocument", function() { return getFragmentQueryDocument; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            throw new Error("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : '') + ". " +
                'No operations are allowed when using a fragment as a query. Only fragments are allowed.');
        }
        if (definition.kind === 'FragmentDefinition') {
            fragments.push(definition);
        }
    });
    if (typeof actualFragmentName === 'undefined') {
        if (fragments.length !== 1) {
            throw new Error("Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");
        }
        actualFragmentName = fragments[0].name.value;
    }
    var query = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, document, { definitions: [
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName,
                            },
                        },
                    ],
                },
            }
        ].concat(document.definitions) });
    return query;
}
//# sourceMappingURL=fragments.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/getFromAST.js":
/*!*********************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/getFromAST.js ***!
  \*********************************************************/
/*! exports provided: getMutationDefinition, checkDocument, getOperationDefinition, getOperationDefinitionOrDie, getOperationName, getFragmentDefinitions, getQueryDefinition, getFragmentDefinition, getMainDefinition, createFragmentMap, getDefaultValues, variablesInOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMutationDefinition", function() { return getMutationDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDocument", function() { return checkDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinition", function() { return getOperationDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinitionOrDie", function() { return getOperationDefinitionOrDie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return getOperationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinitions", function() { return getFragmentDefinitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryDefinition", function() { return getQueryDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinition", function() { return getFragmentDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainDefinition", function() { return getMainDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragmentMap", function() { return createFragmentMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultValues", function() { return getDefaultValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variablesInOperation", function() { return variablesInOperation; });
/* harmony import */ var _util_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/assign */ "./node_modules/apollo-utilities/lib/util/assign.js");
/* harmony import */ var _storeUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeUtils */ "./node_modules/apollo-utilities/lib/storeUtils.js");


function getMutationDefinition(doc) {
    checkDocument(doc);
    var mutationDef = doc.definitions.filter(function (definition) {
        return definition.kind === 'OperationDefinition' &&
            definition.operation === 'mutation';
    })[0];
    if (!mutationDef) {
        throw new Error('Must contain a mutation definition.');
    }
    return mutationDef;
}
function checkDocument(doc) {
    if (doc.kind !== 'Document') {
        throw new Error("Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
    }
    var operations = doc.definitions
        .filter(function (d) { return d.kind !== 'FragmentDefinition'; })
        .map(function (definition) {
        if (definition.kind !== 'OperationDefinition') {
            throw new Error("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"");
        }
        return definition;
    });
    if (operations.length > 1) {
        throw new Error("Ambiguous GraphQL document: contains " + operations.length + " operations");
    }
    return doc;
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function (definition) { return definition.kind === 'OperationDefinition'; })[0];
}
function getOperationDefinitionOrDie(document) {
    var def = getOperationDefinition(document);
    if (!def) {
        throw new Error("GraphQL document is missing an operation");
    }
    return def;
}
function getOperationName(doc) {
    return (doc.definitions
        .filter(function (definition) {
        return definition.kind === 'OperationDefinition' && definition.name;
    })
        .map(function (x) { return x.name.value; })[0] || null);
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function (definition) { return definition.kind === 'FragmentDefinition'; });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
    if (!queryDef || queryDef.operation !== 'query') {
        throw new Error('Must contain a query definition.');
    }
    return queryDef;
}
function getFragmentDefinition(doc) {
    if (doc.kind !== 'Document') {
        throw new Error("Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
    }
    if (doc.definitions.length > 1) {
        throw new Error('Fragment must have exactly one definition.');
    }
    var fragmentDef = doc.definitions[0];
    if (fragmentDef.kind !== 'FragmentDefinition') {
        throw new Error('Must be a fragment definition.');
    }
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' ||
                operation === 'mutation' ||
                operation === 'subscription') {
                return definition;
            }
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw new Error('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.');
}
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getDefaultValues(definition) {
    if (definition &&
        definition.variableDefinitions &&
        definition.variableDefinitions.length) {
        var defaultValues = definition.variableDefinitions
            .filter(function (_a) {
            var defaultValue = _a.defaultValue;
            return defaultValue;
        })
            .map(function (_a) {
            var variable = _a.variable, defaultValue = _a.defaultValue;
            var defaultValueObj = {};
            Object(_storeUtils__WEBPACK_IMPORTED_MODULE_1__["valueToObjectRepresentation"])(defaultValueObj, variable.name, defaultValue);
            return defaultValueObj;
        });
        return _util_assign__WEBPACK_IMPORTED_MODULE_0__["assign"].apply(void 0, [{}].concat(defaultValues));
    }
    return {};
}
function variablesInOperation(operation) {
    var names = new Set();
    if (operation.variableDefinitions) {
        for (var _i = 0, _a = operation.variableDefinitions; _i < _a.length; _i++) {
            var definition = _a[_i];
            names.add(definition.variable.name.value);
        }
    }
    return names;
}
//# sourceMappingURL=getFromAST.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/index.js ***!
  \****************************************************/
/*! exports provided: getDirectiveInfoFromField, shouldInclude, getDirectiveNames, hasDirectives, getFragmentQueryDocument, getMutationDefinition, checkDocument, getOperationDefinition, getOperationDefinitionOrDie, getOperationName, getFragmentDefinitions, getQueryDefinition, getFragmentDefinition, getMainDefinition, createFragmentMap, getDefaultValues, variablesInOperation, removeDirectivesFromDocument, addTypenameToDocument, removeConnectionDirectiveFromDocument, getDirectivesFromDocument, removeArgumentsFromDocument, removeFragmentSpreadFromDocument, isScalarValue, isNumberValue, valueToObjectRepresentation, storeKeyNameFromField, getStoreKeyName, argumentsObjectFromField, resultKeyNameFromField, isField, isInlineFragment, isIdValue, toIdValue, isJsonValue, valueFromNode, assign, cloneDeep, getEnv, isEnv, isProduction, isDevelopment, isTest, tryFunctionOrLogError, graphQLResultHasError, isEqual, maybeDeepFreeze, warnOnceInDevelopment, stripSymbols */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives */ "./node_modules/apollo-utilities/lib/directives.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDirectiveInfoFromField", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["getDirectiveInfoFromField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shouldInclude", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["shouldInclude"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDirectiveNames", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["getDirectiveNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasDirectives", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["hasDirectives"]; });

/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fragments */ "./node_modules/apollo-utilities/lib/fragments.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFragmentQueryDocument", function() { return _fragments__WEBPACK_IMPORTED_MODULE_1__["getFragmentQueryDocument"]; });

/* harmony import */ var _getFromAST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getFromAST */ "./node_modules/apollo-utilities/lib/getFromAST.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMutationDefinition", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["getMutationDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkDocument", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["checkDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinition", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["getOperationDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinitionOrDie", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["getOperationDefinitionOrDie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["getOperationName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinitions", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["getFragmentDefinitions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryDefinition", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["getQueryDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinition", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["getFragmentDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMainDefinition", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["getMainDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFragmentMap", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["createFragmentMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultValues", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["getDefaultValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variablesInOperation", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["variablesInOperation"]; });

/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transform */ "./node_modules/apollo-utilities/lib/transform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeDirectivesFromDocument", function() { return _transform__WEBPACK_IMPORTED_MODULE_3__["removeDirectivesFromDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addTypenameToDocument", function() { return _transform__WEBPACK_IMPORTED_MODULE_3__["addTypenameToDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeConnectionDirectiveFromDocument", function() { return _transform__WEBPACK_IMPORTED_MODULE_3__["removeConnectionDirectiveFromDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDirectivesFromDocument", function() { return _transform__WEBPACK_IMPORTED_MODULE_3__["getDirectivesFromDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeArgumentsFromDocument", function() { return _transform__WEBPACK_IMPORTED_MODULE_3__["removeArgumentsFromDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeFragmentSpreadFromDocument", function() { return _transform__WEBPACK_IMPORTED_MODULE_3__["removeFragmentSpreadFromDocument"]; });

/* harmony import */ var _storeUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storeUtils */ "./node_modules/apollo-utilities/lib/storeUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isScalarValue", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["isScalarValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumberValue", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["isNumberValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueToObjectRepresentation", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["valueToObjectRepresentation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storeKeyNameFromField", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["storeKeyNameFromField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStoreKeyName", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["getStoreKeyName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "argumentsObjectFromField", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["argumentsObjectFromField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resultKeyNameFromField", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["resultKeyNameFromField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isField", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["isField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInlineFragment", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["isInlineFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIdValue", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["isIdValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toIdValue", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["toIdValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isJsonValue", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["isJsonValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueFromNode", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["valueFromNode"]; });

/* harmony import */ var _util_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/assign */ "./node_modules/apollo-utilities/lib/util/assign.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _util_assign__WEBPACK_IMPORTED_MODULE_5__["assign"]; });

/* harmony import */ var _util_cloneDeep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/cloneDeep */ "./node_modules/apollo-utilities/lib/util/cloneDeep.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneDeep", function() { return _util_cloneDeep__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"]; });

/* harmony import */ var _util_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/environment */ "./node_modules/apollo-utilities/lib/util/environment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEnv", function() { return _util_environment__WEBPACK_IMPORTED_MODULE_7__["getEnv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEnv", function() { return _util_environment__WEBPACK_IMPORTED_MODULE_7__["isEnv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isProduction", function() { return _util_environment__WEBPACK_IMPORTED_MODULE_7__["isProduction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDevelopment", function() { return _util_environment__WEBPACK_IMPORTED_MODULE_7__["isDevelopment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTest", function() { return _util_environment__WEBPACK_IMPORTED_MODULE_7__["isTest"]; });

/* harmony import */ var _util_errorHandling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/errorHandling */ "./node_modules/apollo-utilities/lib/util/errorHandling.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryFunctionOrLogError", function() { return _util_errorHandling__WEBPACK_IMPORTED_MODULE_8__["tryFunctionOrLogError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphQLResultHasError", function() { return _util_errorHandling__WEBPACK_IMPORTED_MODULE_8__["graphQLResultHasError"]; });

/* harmony import */ var _util_isEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/isEqual */ "./node_modules/apollo-utilities/lib/util/isEqual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _util_isEqual__WEBPACK_IMPORTED_MODULE_9__["isEqual"]; });

/* harmony import */ var _util_maybeDeepFreeze__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/maybeDeepFreeze */ "./node_modules/apollo-utilities/lib/util/maybeDeepFreeze.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maybeDeepFreeze", function() { return _util_maybeDeepFreeze__WEBPACK_IMPORTED_MODULE_10__["maybeDeepFreeze"]; });

/* harmony import */ var _util_warnOnce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util/warnOnce */ "./node_modules/apollo-utilities/lib/util/warnOnce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnOnceInDevelopment", function() { return _util_warnOnce__WEBPACK_IMPORTED_MODULE_11__["warnOnceInDevelopment"]; });

/* harmony import */ var _util_stripSymbols__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util/stripSymbols */ "./node_modules/apollo-utilities/lib/util/stripSymbols.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripSymbols", function() { return _util_stripSymbols__WEBPACK_IMPORTED_MODULE_12__["stripSymbols"]; });














//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/storeUtils.js":
/*!*********************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/storeUtils.js ***!
  \*********************************************************/
/*! exports provided: isScalarValue, isNumberValue, valueToObjectRepresentation, storeKeyNameFromField, getStoreKeyName, argumentsObjectFromField, resultKeyNameFromField, isField, isInlineFragment, isIdValue, toIdValue, isJsonValue, valueFromNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScalarValue", function() { return isScalarValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberValue", function() { return isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueToObjectRepresentation", function() { return valueToObjectRepresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeKeyNameFromField", function() { return storeKeyNameFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreKeyName", function() { return getStoreKeyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argumentsObjectFromField", function() { return argumentsObjectFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultKeyNameFromField", function() { return resultKeyNameFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isField", function() { return isField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInlineFragment", function() { return isInlineFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIdValue", function() { return isIdValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toIdValue", function() { return toIdValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJsonValue", function() { return isJsonValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueFromNode", function() { return valueFromNode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-json-stable-stringify */ "./node_modules/fast-json-stable-stringify/index.js");
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__);


function isScalarValue(value) {
    return ['StringValue', 'BooleanValue', 'EnumValue'].indexOf(value.kind) > -1;
}
function isNumberValue(value) {
    return ['IntValue', 'FloatValue'].indexOf(value.kind) > -1;
}
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function isNullValue(value) {
    return value.kind === 'NullValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isNullValue(value)) {
        argObj[name.value] = null;
    }
    else {
        throw new Error("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\"" +
            'is not supported. Use variables instead of inline arguments to ' +
            'overcome this limitation.');
    }
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(function (_a) {
                    var name = _a.name, value = _a.value;
                    return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                });
            }
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
    'connection',
    'include',
    'skip',
    'client',
    'rest',
    'export',
];
function getStoreKeyName(fieldName, args, directives) {
    if (directives &&
        directives['connection'] &&
        directives['connection']['key']) {
        if (directives['connection']['filter'] &&
            directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter']
                ? directives['connection']['filter']
                : [];
            filterKeys.sort();
            var queryArgs_1 = args;
            var filteredArgs_1 = {};
            filterKeys.forEach(function (key) {
                filteredArgs_1[key] = queryArgs_1[key];
            });
            return directives['connection']['key'] + "(" + JSON.stringify(filteredArgs_1) + ")";
        }
        else {
            return directives['connection']['key'];
        }
    }
    var completeFieldName = fieldName;
    if (args) {
        var stringifiedArgs = fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default()(args);
        completeFieldName += "(" + stringifiedArgs + ")";
    }
    if (directives) {
        Object.keys(directives).forEach(function (key) {
            if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
                return;
            if (directives[key] && Object.keys(directives[key]).length) {
                completeFieldName += "@" + key + "(" + JSON.stringify(directives[key]) + ")";
            }
            else {
                completeFieldName += "@" + key;
            }
        });
    }
    return completeFieldName;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}
function isIdValue(idObject) {
    return idObject &&
        idObject.type === 'id' &&
        typeof idObject.generated === 'boolean';
}
function toIdValue(idConfig, generated) {
    if (generated === void 0) { generated = false; }
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ type: 'id', generated: generated }, (typeof idConfig === 'string'
        ? { id: idConfig, typename: undefined }
        : idConfig));
}
function isJsonValue(jsonObject) {
    return (jsonObject != null &&
        typeof jsonObject === 'object' &&
        jsonObject.type === 'json');
}
function defaultValueFromVariable(node) {
    throw new Error("Variable nodes are not supported by valueFromNode");
}
function valueFromNode(node, onVariable) {
    if (onVariable === void 0) { onVariable = defaultValueFromVariable; }
    switch (node.kind) {
        case 'Variable':
            return onVariable(node);
        case 'NullValue':
            return null;
        case 'IntValue':
            return parseInt(node.value, 10);
        case 'FloatValue':
            return parseFloat(node.value);
        case 'ListValue':
            return node.values.map(function (v) { return valueFromNode(v, onVariable); });
        case 'ObjectValue': {
            var value = {};
            for (var _i = 0, _a = node.fields; _i < _a.length; _i++) {
                var field = _a[_i];
                value[field.name.value] = valueFromNode(field.value, onVariable);
            }
            return value;
        }
        default:
            return node.value;
    }
}
//# sourceMappingURL=storeUtils.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/transform.js":
/*!********************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/transform.js ***!
  \********************************************************/
/*! exports provided: removeDirectivesFromDocument, addTypenameToDocument, removeConnectionDirectiveFromDocument, getDirectivesFromDocument, removeArgumentsFromDocument, removeFragmentSpreadFromDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDirectivesFromDocument", function() { return removeDirectivesFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTypenameToDocument", function() { return addTypenameToDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeConnectionDirectiveFromDocument", function() { return removeConnectionDirectiveFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectivesFromDocument", function() { return getDirectivesFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeArgumentsFromDocument", function() { return removeArgumentsFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFragmentSpreadFromDocument", function() { return removeFragmentSpreadFromDocument; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql_language_visitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql/language/visitor */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _getFromAST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getFromAST */ "./node_modules/apollo-utilities/lib/getFromAST.js");
/* harmony import */ var _util_filterInPlace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/filterInPlace */ "./node_modules/apollo-utilities/lib/util/filterInPlace.js");




var TYPENAME_FIELD = {
    kind: 'Field',
    name: {
        kind: 'Name',
        value: '__typename',
    },
};
function isEmpty(op, fragments) {
    return op.selectionSet.selections.every(function (selection) {
        return selection.kind === 'FragmentSpread' &&
            isEmpty(fragments[selection.name.value], fragments);
    });
}
function nullIfDocIsEmpty(doc) {
    return isEmpty(Object(_getFromAST__WEBPACK_IMPORTED_MODULE_2__["getOperationDefinitionOrDie"])(doc), Object(_getFromAST__WEBPACK_IMPORTED_MODULE_2__["createFragmentMap"])(Object(_getFromAST__WEBPACK_IMPORTED_MODULE_2__["getFragmentDefinitions"])(doc))) ? null : doc;
}
function getDirectiveMatcher(directives) {
    return function directiveMatcher(directive) {
        return directives.some(function (dir) {
            return (dir.name && dir.name === directive.name.value) ||
                (dir.test && dir.test(directive));
        });
    };
}
function removeDirectivesFromDocument(directives, doc) {
    var variablesInUse = Object.create(null);
    var variablesToRemove = [];
    var fragmentSpreadsInUse = Object.create(null);
    var fragmentSpreadsToRemove = [];
    var modifiedDoc = nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_1__["visit"])(doc, {
        Variable: {
            enter: function (node, _key, parent) {
                if (parent.kind !== 'VariableDefinition') {
                    variablesInUse[node.name.value] = true;
                }
            },
        },
        Field: {
            enter: function (node) {
                var shouldRemoveField = directives.some(function (directive) { return directive.remove; });
                if (shouldRemoveField &&
                    node.directives &&
                    node.directives.some(getDirectiveMatcher(directives))) {
                    if (node.arguments) {
                        node.arguments.forEach(function (arg) {
                            if (arg.value.kind === 'Variable') {
                                variablesToRemove.push({
                                    name: arg.value.name.value,
                                });
                            }
                        });
                    }
                    if (node.selectionSet) {
                        getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function (frag) {
                            fragmentSpreadsToRemove.push({
                                name: frag.name.value,
                            });
                        });
                    }
                    return null;
                }
            },
        },
        FragmentSpread: {
            enter: function (node) {
                fragmentSpreadsInUse[node.name.value] = true;
            },
        },
        Directive: {
            enter: function (node) {
                if (getDirectiveMatcher(directives)(node)) {
                    return null;
                }
            },
        },
    }));
    if (modifiedDoc &&
        Object(_util_filterInPlace__WEBPACK_IMPORTED_MODULE_3__["filterInPlace"])(variablesToRemove, function (v) { return !variablesInUse[v.name]; }).length) {
        modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
    }
    if (modifiedDoc &&
        Object(_util_filterInPlace__WEBPACK_IMPORTED_MODULE_3__["filterInPlace"])(fragmentSpreadsToRemove, function (fs) { return !fragmentSpreadsInUse[fs.name]; }).length) {
        modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
    }
    return modifiedDoc;
}
function addTypenameToDocument(doc) {
    return Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_1__["visit"])(Object(_getFromAST__WEBPACK_IMPORTED_MODULE_2__["checkDocument"])(doc), {
        SelectionSet: {
            enter: function (node, _key, parent) {
                if (parent &&
                    parent.kind === 'OperationDefinition') {
                    return;
                }
                var selections = node.selections;
                if (!selections) {
                    return;
                }
                var skip = selections.some(function (selection) {
                    return (selection.kind === 'Field' &&
                        (selection.name.value === '__typename' ||
                            selection.name.value.lastIndexOf('__', 0) === 0));
                });
                if (skip) {
                    return;
                }
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, node, { selections: selections.concat([TYPENAME_FIELD]) });
            },
        },
    });
}
var connectionRemoveConfig = {
    test: function (directive) {
        var willRemove = directive.name.value === 'connection';
        if (willRemove) {
            if (!directive.arguments ||
                !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                console.warn('Removing an @connection directive even though it does not have a key. ' +
                    'You may want to use the key parameter to specify a store key.');
            }
        }
        return willRemove;
    },
};
function removeConnectionDirectiveFromDocument(doc) {
    return removeDirectivesFromDocument([connectionRemoveConfig], Object(_getFromAST__WEBPACK_IMPORTED_MODULE_2__["checkDocument"])(doc));
}
function hasDirectivesInSelectionSet(directives, selectionSet, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    return (selectionSet &&
        selectionSet.selections &&
        selectionSet.selections.some(function (selection) {
            return hasDirectivesInSelection(directives, selection, nestedCheck);
        }));
}
function hasDirectivesInSelection(directives, selection, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    if (selection.kind !== 'Field' || !selection) {
        return true;
    }
    if (!selection.directives) {
        return false;
    }
    return (selection.directives.some(getDirectiveMatcher(directives)) ||
        (nestedCheck &&
            hasDirectivesInSelectionSet(directives, selection.selectionSet, nestedCheck)));
}
function getDirectivesFromDocument(directives, doc) {
    Object(_getFromAST__WEBPACK_IMPORTED_MODULE_2__["checkDocument"])(doc);
    var parentPath;
    return nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_1__["visit"])(doc, {
        SelectionSet: {
            enter: function (node, _key, _parent, path) {
                var currentPath = path.join('-');
                if (!parentPath ||
                    currentPath === parentPath ||
                    !currentPath.startsWith(parentPath)) {
                    if (node.selections) {
                        var selectionsWithDirectives = node.selections.filter(function (selection) {
                            return hasDirectivesInSelection(directives, selection);
                        });
                        if (hasDirectivesInSelectionSet(directives, node, false)) {
                            parentPath = currentPath;
                        }
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, node, { selections: selectionsWithDirectives });
                    }
                    else {
                        return null;
                    }
                }
            },
        },
    }));
}
function getArgumentMatcher(config) {
    return function argumentMatcher(argument) {
        return config.some(function (aConfig) {
            return argument.value &&
                argument.value.kind === 'Variable' &&
                argument.value.name &&
                (aConfig.name === argument.value.name.value ||
                    (aConfig.test && aConfig.test(argument)));
        });
    };
}
function removeArgumentsFromDocument(config, doc) {
    var argMatcher = getArgumentMatcher(config);
    return nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_1__["visit"])(doc, {
        OperationDefinition: {
            enter: function (node) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, node, { variableDefinitions: node.variableDefinitions.filter(function (varDef) { return !config.some(function (arg) { return arg.name === varDef.variable.name.value; }); }) });
            },
        },
        Field: {
            enter: function (node) {
                var shouldRemoveField = config.some(function (argConfig) { return argConfig.remove; });
                if (shouldRemoveField) {
                    var argMatchCount_1 = 0;
                    node.arguments.forEach(function (arg) {
                        if (argMatcher(arg)) {
                            argMatchCount_1 += 1;
                        }
                    });
                    if (argMatchCount_1 === 1) {
                        return null;
                    }
                }
            },
        },
        Argument: {
            enter: function (node) {
                if (argMatcher(node)) {
                    return null;
                }
            },
        },
    }));
}
function removeFragmentSpreadFromDocument(config, doc) {
    function enter(node) {
        if (config.some(function (def) { return def.name === node.name.value; })) {
            return null;
        }
    }
    return nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_1__["visit"])(doc, {
        FragmentSpread: { enter: enter },
        FragmentDefinition: { enter: enter },
    }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
    var allFragments = [];
    selectionSet.selections.forEach(function (selection) {
        if ((selection.kind === 'Field' ||
            selection.kind === 'InlineFragment') &&
            selection.selectionSet) {
            getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function (frag) { return allFragments.push(frag); });
        }
        else if (selection.kind === 'FragmentSpread') {
            allFragments.push(selection);
        }
    });
    return allFragments;
}
//# sourceMappingURL=transform.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/util/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/util/assign.js ***!
  \**********************************************************/
/*! exports provided: assign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
function assign(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    sources.forEach(function (source) {
        if (typeof source === 'undefined' || source === null) {
            return;
        }
        Object.keys(source).forEach(function (key) {
            target[key] = source[key];
        });
    });
    return target;
}
//# sourceMappingURL=assign.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/util/cloneDeep.js":
/*!*************************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/util/cloneDeep.js ***!
  \*************************************************************/
/*! exports provided: cloneDeep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneDeep", function() { return cloneDeep; });
var toString = Object.prototype.toString;
function cloneDeep(value) {
    return cloneDeepHelper(value, new Map());
}
function cloneDeepHelper(val, seen) {
    switch (toString.call(val)) {
        case "[object Array]": {
            if (seen.has(val))
                return seen.get(val);
            var copy_1 = val.slice(0);
            seen.set(val, copy_1);
            copy_1.forEach(function (child, i) {
                copy_1[i] = cloneDeepHelper(child, seen);
            });
            return copy_1;
        }
        case "[object Object]": {
            if (seen.has(val))
                return seen.get(val);
            var copy_2 = Object.create(Object.getPrototypeOf(val));
            seen.set(val, copy_2);
            Object.keys(val).forEach(function (key) {
                copy_2[key] = cloneDeepHelper(val[key], seen);
            });
            return copy_2;
        }
        default:
            return val;
    }
}
//# sourceMappingURL=cloneDeep.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/util/environment.js":
/*!***************************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/util/environment.js ***!
  \***************************************************************/
/*! exports provided: getEnv, isEnv, isProduction, isDevelopment, isTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnv", function() { return getEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnv", function() { return isEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProduction", function() { return isProduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDevelopment", function() { return isDevelopment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTest", function() { return isTest; });
function getEnv() {
    if (typeof process !== 'undefined' && "development") {
        return "development";
    }
    return 'development';
}
function isEnv(env) {
    return getEnv() === env;
}
function isProduction() {
    return isEnv('production') === true;
}
function isDevelopment() {
    return isEnv('development') === true;
}
function isTest() {
    return isEnv('test') === true;
}
//# sourceMappingURL=environment.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/util/errorHandling.js":
/*!*****************************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/util/errorHandling.js ***!
  \*****************************************************************/
/*! exports provided: tryFunctionOrLogError, graphQLResultHasError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFunctionOrLogError", function() { return tryFunctionOrLogError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphQLResultHasError", function() { return graphQLResultHasError; });
function tryFunctionOrLogError(f) {
    try {
        return f();
    }
    catch (e) {
        if (console.error) {
            console.error(e);
        }
    }
}
function graphQLResultHasError(result) {
    return result.errors && result.errors.length;
}
//# sourceMappingURL=errorHandling.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/util/filterInPlace.js":
/*!*****************************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/util/filterInPlace.js ***!
  \*****************************************************************/
/*! exports provided: filterInPlace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterInPlace", function() { return filterInPlace; });
function filterInPlace(array, test, context) {
    var target = 0;
    array.forEach(function (elem, i) {
        if (test.call(this, elem, i, array)) {
            array[target++] = elem;
        }
    }, context);
    array.length = target;
    return array;
}
//# sourceMappingURL=filterInPlace.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/util/isEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/util/isEqual.js ***!
  \***********************************************************/
/*! exports provided: isEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
function isEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }
    if (a != null &&
        typeof a === 'object' &&
        b != null &&
        typeof b === 'object') {
        for (var key in a) {
            if (Object.prototype.hasOwnProperty.call(a, key)) {
                if (!Object.prototype.hasOwnProperty.call(b, key)) {
                    return false;
                }
                if (!isEqual(a[key], b[key])) {
                    return false;
                }
            }
        }
        for (var key in b) {
            if (Object.prototype.hasOwnProperty.call(b, key) &&
                !Object.prototype.hasOwnProperty.call(a, key)) {
                return false;
            }
        }
        return true;
    }
    return false;
}
//# sourceMappingURL=isEqual.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/util/maybeDeepFreeze.js":
/*!*******************************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/util/maybeDeepFreeze.js ***!
  \*******************************************************************/
/*! exports provided: maybeDeepFreeze */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeDeepFreeze", function() { return maybeDeepFreeze; });
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ "./node_modules/apollo-utilities/lib/util/environment.js");

function deepFreeze(o) {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (o[prop] !== null &&
            (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
            !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });
    return o;
}
function maybeDeepFreeze(obj) {
    if (Object(_environment__WEBPACK_IMPORTED_MODULE_0__["isDevelopment"])() || Object(_environment__WEBPACK_IMPORTED_MODULE_0__["isTest"])()) {
        var symbolIsPolyfilled = typeof Symbol === 'function' && typeof Symbol('') === 'string';
        if (!symbolIsPolyfilled) {
            return deepFreeze(obj);
        }
    }
    return obj;
}
//# sourceMappingURL=maybeDeepFreeze.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/util/stripSymbols.js":
/*!****************************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/util/stripSymbols.js ***!
  \****************************************************************/
/*! exports provided: stripSymbols */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripSymbols", function() { return stripSymbols; });
function stripSymbols(data) {
    return JSON.parse(JSON.stringify(data));
}
//# sourceMappingURL=stripSymbols.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/util/warnOnce.js":
/*!************************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/util/warnOnce.js ***!
  \************************************************************/
/*! exports provided: warnOnceInDevelopment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnceInDevelopment", function() { return warnOnceInDevelopment; });
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ "./node_modules/apollo-utilities/lib/util/environment.js");

var haveWarned = Object.create({});
function warnOnceInDevelopment(msg, type) {
    if (type === void 0) { type = 'warn'; }
    if (Object(_environment__WEBPACK_IMPORTED_MODULE_0__["isProduction"])()) {
        return;
    }
    if (!haveWarned[msg]) {
        if (!Object(_environment__WEBPACK_IMPORTED_MODULE_0__["isTest"])()) {
            haveWarned[msg] = true;
        }
        switch (type) {
            case 'error':
                console.error(msg);
                break;
            default:
                console.warn(msg);
        }
    }
}
//# sourceMappingURL=warnOnce.js.map

/***/ }),

/***/ "./node_modules/fast-json-stable-stringify/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/fast-json-stable-stringify/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (data, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (node) {
        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        if (node === undefined) return;
        if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
        if (typeof node !== 'object') return JSON.stringify(node);

        var i, out;
        if (Array.isArray(node)) {
            out = '[';
            for (i = 0; i < node.length; i++) {
                if (i) out += ',';
                out += stringify(node[i]) || 'null';
            }
            return out + ']';
        }

        if (node === null) return 'null';

        if (seen.indexOf(node) !== -1) {
            if (cycles) return JSON.stringify('__cycle__');
            throw new TypeError('Converting circular structure to JSON');
        }

        var seenIndex = seen.push(node) - 1;
        var keys = Object.keys(node).sort(cmp && cmp(node));
        out = '';
        for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = stringify(node[key]);

            if (!value) continue;
            if (out) out += ',';
            out += JSON.stringify(key) + ':' + value;
        }
        seen.splice(seenIndex, 1);
        return '{' + out + '}';
    })(data);
};


/***/ }),

/***/ "./node_modules/immutable-tuple/dist/tuple.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/immutable-tuple/dist/tuple.mjs ***!
  \*****************************************************/
/*! exports provided: default, tuple, lookup, lookupArray */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuple", function() { return tuple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookup", function() { return lookup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookupArray", function() { return lookupArray; });
// Although `Symbol` is widely supported these days, we can safely fall
// back to using a non-enumerable string property without violating any
// assumptions elsewhere in the implementation.
var useSymbol =
  typeof Symbol === "function" &&
  typeof Symbol.for === "function";

// Used to mark `tuple.prototype` so that all objects that inherit from
// any `tuple.prototype` object (there could be more than one) will test
// positive according to `tuple.isTuple`.
var brand = useSymbol
  ? Symbol.for("immutable-tuple")
  : "@@__IMMUTABLE_TUPLE__@@";

// Used to save a reference to the globally shared `UniversalWeakMap` that
// stores all known `tuple` objects.
var globalKey = useSymbol
  ? Symbol.for("immutable-tuple-root")
  : "@@__IMMUTABLE_TUPLE_ROOT__@@";

// Convenient helper for defining hidden immutable properties.
function def(obj, name, value, enumerable) {
  Object.defineProperty(obj, name, {
    value: value,
    enumerable: !! enumerable,
    writable: false,
    configurable: false
  });
  return value;
}

var freeze = Object.freeze || function (obj) {
  return obj;
};

function isObjRef(value) {
  switch (typeof value) {
  case "object":
    if (value === null) {
      return false;
    }
  case "function":
    return true;
  default:
    return false;
  }
}

// The `mustConvertThisToArray` value is true when the corresponding
// `Array` method does not attempt to modify `this`, which means we can
// pass a `tuple` object as `this` without first converting it to an
// `Array`.
function forEachArrayMethod(fn) {
  function call(name, mustConvertThisToArray) {
    var desc = Object.getOwnPropertyDescriptor(Array.prototype, name);
    fn(name, desc, !! mustConvertThisToArray);
  }

  call("every");
  call("filter");
  call("find");
  call("findIndex");
  call("forEach");
  call("includes");
  call("indexOf");
  call("join");
  call("lastIndexOf");
  call("map");
  call("reduce");
  call("reduceRight");
  call("slice");
  call("some");
  call("toLocaleString");
  call("toString");

  // The `reverse` and `sort` methods are usually destructive, but for
  // `tuple` objects they return a new `tuple` object that has been
  // appropriately reversed/sorted.
  call("reverse", true);
  call("sort", true);

  // Make `[...someTuple]` work.
  call(useSymbol && Symbol.iterator || "@@iterator");
}

// A map data structure that holds object keys weakly, yet can also hold
// non-object keys, unlike the native `WeakMap`.
var UniversalWeakMap = function UniversalWeakMap() {
  // Since a `WeakMap` cannot hold primitive values as keys, we need a
  // backup `Map` instance to hold primitive keys. Both `this._weakMap`
  // and `this._strongMap` are lazily initialized.
  this._weakMap = null;
  this._strongMap = null;
  this.data = null;
};

// Since `get` and `set` are the only methods used, that's all I've
// implemented here.

UniversalWeakMap.prototype.get = function get (key) {
  var map = this._getMap(key, false);
  if (map) {
    return map.get(key);
  }
};

UniversalWeakMap.prototype.set = function set (key, value) {
  this._getMap(key, true).set(key, value);
  // An actual `Map` or `WeakMap` would return `this` here, but
  // returning the `value` is more convenient for the `tuple`
  // implementation.
  return value;
};

UniversalWeakMap.prototype._getMap = function _getMap (key, canCreate) {
  if (! canCreate) {
    return isObjRef(key) ? this._weakMap : this._strongMap;
  }
  if (isObjRef(key)) {
    return this._weakMap || (this._weakMap = new WeakMap);
  }
  return this._strongMap || (this._strongMap = new Map);
};

// See [`universal-weak-map.js`](universal-weak-map.html).
// See [`util.js`](util.html).
// If this package is installed multiple times, there could be mutiple
// implementations of the `tuple` function with distinct `tuple.prototype`
// objects, but the shared pool of `tuple` objects must be the same across
// all implementations. While it would be ideal to use the `global`
// object, there's no reliable way to get the global object across all JS
// environments without using the `Function` constructor, so instead we
// use the global `Array` constructor as a shared namespace.
var root = Array[globalKey] || def(Array, globalKey, new UniversalWeakMap, false);

function lookup() {
  return lookupArray(arguments);
}

function lookupArray(array) {
  var node = root;

  // Because we are building a tree of *weak* maps, the tree will not
  // prevent objects in tuples from being garbage collected, since the
  // tree itself will be pruned over time when the corresponding `tuple`
  // objects become unreachable. In addition to internalization, this
  // property is a key advantage of the `immutable-tuple` package.
  var len = array.length;
  for (var i = 0; i < len; ++i) {
    var item = array[i];
    node = node.get(item) || node.set(item, new UniversalWeakMap);
  }

  // Return node.data rather than node itself to prevent tampering with
  // the UniversalWeakMap tree.
  return node.data || (node.data = Object.create(null));
}

// See [`lookup.js`](lookup.html).
// See [`util.js`](util.html).
// When called with any number of arguments, this function returns an
// object that inherits from `tuple.prototype` and is guaranteed to be
// `===` any other `tuple` object that has exactly the same items. In
// computer science jargon, `tuple` instances are "internalized" or just
// "interned," which allows for constant-time equality checking, and makes
// it possible for tuple objects to be used as `Map` or `WeakMap` keys, or
// stored in a `Set`.
function tuple() {
  var arguments$1 = arguments;

  var node = lookup.apply(null, arguments);

  if (node.tuple) {
    return node.tuple;
  }

  var t = Object.create(tuple.prototype);

  // Define immutable items with numeric indexes, and permanently fix the
  // `.length` property.
  var argc = arguments.length;
  for (var i = 0; i < argc; ++i) {
    t[i] = arguments$1[i];
  }

  def(t, "length", argc, false);

  // Remember this new `tuple` object so that we can return the same object
  // earlier next time.
  return freeze(node.tuple = t);
}

// Since the `immutable-tuple` package could be installed multiple times
// in an application, there is no guarantee that the `tuple` constructor
// or `tuple.prototype` will be unique, so `value instanceof tuple` is
// unreliable. Instead, to test if a value is a tuple, you should use
// `tuple.isTuple(value)`.
def(tuple.prototype, brand, true, false);
function isTuple(that) {
  return !! (that && that[brand] === true);
}

tuple.isTuple = isTuple;

function toArray(tuple) {
  var array = [];
  var i = tuple.length;
  while (i--) { array[i] = tuple[i]; }
  return array;
}

// Copy all generic non-destructive Array methods to `tuple.prototype`.
// This works because (for example) `Array.prototype.slice` can be invoked
// against any `Array`-like object.
forEachArrayMethod(function (name, desc, mustConvertThisToArray) {
  var method = desc && desc.value;
  if (typeof method === "function") {
    desc.value = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var result = method.apply(
        mustConvertThisToArray ? toArray(this) : this,
        args
      );
      // Of course, `tuple.prototype.slice` should return a `tuple` object,
      // not a new `Array`.
      return Array.isArray(result) ? tuple.apply(void 0, result) : result;
    };
    Object.defineProperty(tuple.prototype, name, desc);
  }
});

// Like `Array.prototype.concat`, except for the extra effort required to
// convert any tuple arguments to arrays, so that
// ```
// tuple(1).concat(tuple(2), 3) === tuple(1, 2, 3)
// ```
var ref = Array.prototype;
var concat = ref.concat;
tuple.prototype.concat = function () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return tuple.apply(void 0, concat.apply(toArray(this), args.map(
    function (item) { return isTuple(item) ? toArray(item) : item; }
  )));
};

/* harmony default export */ __webpack_exports__["default"] = (tuple);



/***/ }),

/***/ "./node_modules/optimism/lib/cache.js":
/*!********************************************!*\
  !*** ./node_modules/optimism/lib/cache.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Cache(options) {
  this.map = new Map;
  this.newest = null;
  this.oldest = null;
  this.max = options && options.max;
  this.dispose = options && options.dispose;
}

exports.Cache = Cache;

var Cp = Cache.prototype;

Cp.has = function (key) {
  return this.map.has(key);
};

Cp.get = function (key) {
  var entry = getEntry(this, key);
  return entry && entry.value;
};

function getEntry(cache, key) {
  var entry = cache.map.get(key);
  if (entry &&
      entry !== cache.newest) {
    var older = entry.older;
    var newer = entry.newer;

    if (newer) {
      newer.older = older;
    }

    if (older) {
      older.newer = newer;
    }

    entry.older = cache.newest;
    entry.older.newer = entry;

    entry.newer = null;
    cache.newest = entry;

    if (entry === cache.oldest) {
      cache.oldest = newer;
    }
  }

  return entry;
}

Cp.set = function (key, value) {
  var entry = getEntry(this, key);
  if (entry) {
    return entry.value = value;
  }

  entry = {
    key: key,
    value: value,
    newer: null,
    older: this.newest
  };

  if (this.newest) {
    this.newest.newer = entry;
  }

  this.newest = entry;
  this.oldest = this.oldest || entry;

  this.map.set(key, entry);

  return entry.value;
};

Cp.clean = function () {
  if (typeof this.max === "number") {
    while (this.oldest &&
           this.map.size > this.max) {
      this.delete(this.oldest.key);
    }
  }
};

Cp.delete = function (key) {
  var entry = this.map.get(key);
  if (entry) {
    if (entry === this.newest) {
      this.newest = entry.older;
    }

    if (entry === this.oldest) {
      this.oldest = entry.newer;
    }

    if (entry.newer) {
      entry.newer.older = entry.older;
    }

    if (entry.older) {
      entry.older.newer = entry.newer;
    }

    this.map.delete(key);

    if (typeof this.dispose === "function") {
      this.dispose(key, entry.value);
    }

    return true;
  }

  return false;
};


/***/ }),

/***/ "./node_modules/optimism/lib/entry.js":
/*!********************************************!*\
  !*** ./node_modules/optimism/lib/entry.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getLocal = __webpack_require__(/*! ./local.js */ "./node_modules/optimism/lib/local.js").get;
var UNKNOWN_VALUE = Object.create(null);
var emptySetPool = [];
var entryPool = [];

// Don't let the emptySetPool or entryPool grow larger than this size,
// since unconstrained pool growth could lead to memory leaks.
exports.POOL_TARGET_SIZE = 100;

// Since this package might be used browsers, we should avoid using the
// Node built-in assert module.
function assert(condition, optionalMessage) {
  if (! condition) {
    throw new Error(optionalMessage || "assertion failure");
  }
}

function Entry(fn, key, args) {
  this.parents = new Set;
  this.childValues = new Map;

  // When this Entry has children that are dirty, this property becomes
  // a Set containing other Entry objects, borrowed from emptySetPool.
  // When the set becomes empty, it gets recycled back to emptySetPool.
  this.dirtyChildren = null;

  reset(this, fn, key, args);

  ++Entry.count;
}

Entry.count = 0;

function reset(entry, fn, key, args) {
  entry.fn = fn;
  entry.key = key;
  entry.args = args;
  entry.value = UNKNOWN_VALUE;
  entry.dirty = true;
  entry.subscribe = null;
  entry.unsubscribe = null;
  entry.recomputing = false;
  // Optional callback that will be invoked when entry.parents becomes
  // empty. The Entry object is given as the first parameter. If the
  // callback returns true, then this entry can be removed from the graph
  // and safely recycled into the entryPool.
  entry.reportOrphan = null;
}

Entry.acquire = function (fn, key, args) {
  var entry = entryPool.pop();
  if (entry) {
    reset(entry, fn, key, args);
    return entry;
  }
  return new Entry(fn, key, args);
};

function release(entry) {
  assert(entry.parents.size === 0);
  assert(entry.childValues.size === 0);
  assert(entry.dirtyChildren === null);
  if (entryPool.length < exports.POOL_TARGET_SIZE) {
    entryPool.push(entry);
  }
}

exports.Entry = Entry;

var Ep = Entry.prototype;

// The public API of Entry objects consists of the Entry constructor,
// along with the recompute, setDirty, and dispose methods.

Ep.recompute = function recompute() {
  if (! rememberParent(this) &&
      maybeReportOrphan(this)) {
    // The recipient of the entry.reportOrphan callback decided to dispose
    // of this orphan entry by calling entry.dispos(), which recycles it
    // into the entryPool, so we don't need to (and should not) proceed
    // with the recomputation.
    return;
  }

  return recomputeIfDirty(this);
};

// If the given entry has a reportOrphan method, and no remaining parents,
// call entry.reportOrphan and return true iff it returns true. The
// reportOrphan function should return true to indicate entry.dispose()
// has been called, and the entry has been removed from any other caches
// (see index.js for the only current example).
function maybeReportOrphan(entry) {
  var report = entry.reportOrphan;
  return typeof report === "function" &&
    entry.parents.size === 0 &&
    report(entry) === true;
}

Ep.setDirty = function setDirty() {
  if (this.dirty) return;
  this.dirty = true;
  this.value = UNKNOWN_VALUE;
  reportDirty(this);
  // We can go ahead and unsubscribe here, since any further dirty
  // notifications we receive will be redundant, and unsubscribing may
  // free up some resources, e.g. file watchers.
  unsubscribe(this);
};

Ep.dispose = function dispose() {
  var entry = this;
  forgetChildren(entry).forEach(maybeReportOrphan);
  unsubscribe(entry);

  // Because this entry has been kicked out of the cache (in index.js),
  // we've lost the ability to find out if/when this entry becomes dirty,
  // whether that happens through a subscription, because of a direct call
  // to entry.setDirty(), or because one of its children becomes dirty.
  // Because of this loss of future information, we have to assume the
  // worst (that this entry might have become dirty very soon), so we must
  // immediately mark this entry's parents as dirty. Normally we could
  // just call entry.setDirty() rather than calling parent.setDirty() for
  // each parent, but that would leave this entry in parent.childValues
  // and parent.dirtyChildren, which would prevent the child from being
  // truly forgotten.
  entry.parents.forEach(function (parent) {
    parent.setDirty();
    forgetChild(parent, entry);
  });

  // Since this entry has no parents and no children anymore, and the
  // caller of Entry#dispose has indicated that entry.value no longer
  // matters, we can safely recycle this Entry object for later use.
  release(entry);
};

function setClean(entry) {
  entry.dirty = false;

  if (mightBeDirty(entry)) {
    // This Entry may still have dirty children, in which case we can't
    // let our parents know we're clean just yet.
    return;
  }

  reportClean(entry);
}

function reportDirty(entry) {
  entry.parents.forEach(function (parent) {
    reportDirtyChild(parent, entry);
  });
}

function reportClean(entry) {
  entry.parents.forEach(function (parent) {
    reportCleanChild(parent, entry);
  });
}

function mightBeDirty(entry) {
  return entry.dirty ||
    (entry.dirtyChildren &&
     entry.dirtyChildren.size);
}

// Let a parent Entry know that one of its children may be dirty.
function reportDirtyChild(entry, child) {
  // Must have called rememberParent(child) before calling
  // reportDirtyChild(parent, child).
  assert(entry.childValues.has(child));
  assert(mightBeDirty(child));

  if (! entry.dirtyChildren) {
    entry.dirtyChildren = emptySetPool.pop() || new Set;

  } else if (entry.dirtyChildren.has(child)) {
    // If we already know this child is dirty, then we must have already
    // informed our own parents that we are dirty, so we can terminate
    // the recursion early.
    return;
  }

  entry.dirtyChildren.add(child);
  reportDirty(entry);
}

// Let a parent Entry know that one of its children is no longer dirty.
function reportCleanChild(entry, child) {
  var cv = entry.childValues;

  // Must have called rememberChild(child) before calling
  // reportCleanChild(parent, child).
  assert(cv.has(child));
  assert(! mightBeDirty(child));

  var childValue = cv.get(child);
  if (childValue === UNKNOWN_VALUE) {
    cv.set(child, child.value);
  } else if (childValue !== child.value) {
    entry.setDirty();
  }

  removeDirtyChild(entry, child);

  if (mightBeDirty(entry)) {
    return;
  }

  reportClean(entry);
}

function removeDirtyChild(entry, child) {
  var dc = entry.dirtyChildren;
  if (dc) {
    dc.delete(child);
    if (dc.size === 0) {
      if (emptySetPool.length < exports.POOL_TARGET_SIZE) {
        emptySetPool.push(dc);
      }
      entry.dirtyChildren = null;
    }
  }
}

function rememberParent(entry) {
  var local = getLocal();
  var parent = local.currentParentEntry;
  if (parent) {
    entry.parents.add(parent);

    if (! parent.childValues.has(entry)) {
      parent.childValues.set(entry, UNKNOWN_VALUE);
    }

    if (mightBeDirty(entry)) {
      reportDirtyChild(parent, entry);
    } else {
      reportCleanChild(parent, entry);
    }

    return parent;
  }
}

// This is the most important method of the Entry API, because it
// determines whether the cached entry.value can be returned immediately,
// or must be recomputed. The overall performance of the caching system
// depends on the truth of the following observations: (1) this.dirty is
// usually false, (2) this.dirtyChildren is usually null/empty, and thus
// (3) this.value is usally returned very quickly, without recomputation.
function recomputeIfDirty(entry) {
  if (entry.dirty) {
    // If this Entry is explicitly dirty because someone called
    // entry.setDirty(), recompute.
    return reallyRecompute(entry);
  }

  if (mightBeDirty(entry)) {
    // Get fresh values for any dirty children, and if those values
    // disagree with this.childValues, mark this Entry explicitly dirty.
    entry.dirtyChildren.forEach(function (child) {
      assert(entry.childValues.has(child));
      try {
        recomputeIfDirty(child);
      } catch (e) {
        entry.setDirty();
      }
    });

    if (entry.dirty) {
      // If this Entry has become explicitly dirty after comparing the fresh
      // values of its dirty children against this.childValues, recompute.
      return reallyRecompute(entry);
    }
  }

  assert(entry.value !== UNKNOWN_VALUE);

  return entry.value;
}

function reallyRecompute(entry) {
  assert(! entry.recomputing, "already recomputing");
  entry.recomputing = true;

  // Since this recomputation is likely to re-remember some of this
  // entry's children, we forget our children here but do not call
  // maybeReportOrphan until after the recomputation finishes.
  var originalChildren = forgetChildren(entry);

  var local = getLocal();
  var parent = local.currentParentEntry;
  local.currentParentEntry = entry;

  var threw = true;
  try {
    entry.value = entry.fn.apply(null, entry.args);
    threw = false;

  } finally {
    entry.recomputing = false;

    assert(local.currentParentEntry === entry);
    local.currentParentEntry = parent;

    if (threw || ! subscribe(entry)) {
      // Mark this Entry dirty if entry.fn threw or we failed to
      // resubscribe. This is important because, if we have a subscribe
      // function and it failed, then we're going to miss important
      // notifications about the potential dirtiness of entry.value.
      entry.setDirty();
    } else {
      // If we successfully recomputed entry.value and did not fail to
      // (re)subscribe, then this Entry is no longer explicitly dirty.
      setClean(entry);
    }
  }

  // Now that we've had a chance to re-remember any children that were
  // involved in the recomputation, we can safely report any orphan
  // children that remain.
  originalChildren.forEach(maybeReportOrphan);

  return entry.value;
}

var reusableEmptyArray = [];

// Removes all children from this entry and returns an array of the
// removed children.
function forgetChildren(entry) {
  var children = reusableEmptyArray;

  if (entry.childValues.size > 0) {
    children = [];
    entry.childValues.forEach(function (value, child) {
      forgetChild(entry, child);
      children.push(child);
    });
  }

  // After we forget all our children, this.dirtyChildren must be empty
  // and therefor must have been reset to null.
  assert(entry.dirtyChildren === null);

  return children;
}

function forgetChild(entry, child) {
  child.parents.delete(entry);
  entry.childValues.delete(child);
  removeDirtyChild(entry, child);
}

function subscribe(entry) {
  if (typeof entry.subscribe === "function") {
    try {
      unsubscribe(entry); // Prevent double subscriptions.
      entry.unsubscribe = entry.subscribe.apply(null, entry.args);
    } catch (e) {
      // If this Entry has a subscribe function and it threw an exception
      // (or an unsubscribe function it previously returned now throws),
      // return false to indicate that we were not able to subscribe (or
      // unsubscribe), and this Entry should remain dirty.
      entry.setDirty();
      return false;
    }
  }

  // Returning true indicates either that there was no entry.subscribe
  // function or that it succeeded.
  return true;
}

function unsubscribe(entry) {
  var unsub = entry.unsubscribe;
  if (typeof unsub === "function") {
    entry.unsubscribe = null;
    unsub();
  }
}


/***/ }),

/***/ "./node_modules/optimism/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/optimism/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cache = __webpack_require__(/*! ./cache.js */ "./node_modules/optimism/lib/cache.js").Cache;
var tuple = __webpack_require__(/*! immutable-tuple */ "./node_modules/immutable-tuple/dist/tuple.mjs").tuple;
var Entry = __webpack_require__(/*! ./entry.js */ "./node_modules/optimism/lib/entry.js").Entry;
var getLocal = __webpack_require__(/*! ./local.js */ "./node_modules/optimism/lib/local.js").get;

// Exported so that custom makeCacheKey functions can easily reuse the
// default implementation (with different arguments).
exports.defaultMakeCacheKey = tuple;

function normalizeOptions(options) {
  options = options || Object.create(null);

  if (typeof options.makeCacheKey !== "function") {
    options.makeCacheKey = tuple;
  }

  if (typeof options.max !== "number") {
    options.max = Math.pow(2, 16);
  }

  return options;
}

function wrap(fn, options) {
  options = normalizeOptions(options);

  // If this wrapped function is disposable, then its creator does not
  // care about its return value, and it should be removed from the cache
  // immediately when it no longer has any parents that depend on it.
  var disposable = !! options.disposable;

  var cache = new Cache({
    max: options.max,
    dispose: function (key, entry) {
      entry.dispose();
    }
  });

  function reportOrphan(entry) {
    if (disposable) {
      // Triggers the entry.dispose() call above.
      cache.delete(entry.key);
      return true;
    }
  }

  function optimistic() {
    if (disposable && ! getLocal().currentParentEntry) {
      // If there's no current parent computation, and this wrapped
      // function is disposable (meaning we don't care about entry.value,
      // just dependency tracking), then we can short-cut everything else
      // in this function, because entry.recompute() is going to recycle
      // the entry object without recomputing anything, anyway.
      return;
    }

    var key = options.makeCacheKey.apply(null, arguments);
    if (! key) {
      return fn.apply(null, arguments);
    }

    var args = [], len = arguments.length;
    while (len--) args[len] = arguments[len];

    var entry = cache.get(key);
    if (entry) {
      entry.args = args;
    } else {
      cache.set(key, entry = Entry.acquire(fn, key, args));
      entry.subscribe = options.subscribe;
      if (disposable) {
        entry.reportOrphan = reportOrphan;
      }
    }

    var value = entry.recompute();

    // Move this entry to the front of the least-recently used queue,
    // since we just finished computing its value.
    cache.set(key, entry);

    // Clean up any excess entries in the cache, but only if this entry
    // has no parents, which means we're not in the middle of a larger
    // computation that might be flummoxed by the cleaning.
    if (entry.parents.size === 0) {
      cache.clean();
    }

    // If options.disposable is truthy, the caller of wrap is telling us
    // they don't care about the result of entry.recompute(), so we should
    // avoid returning the value, so it won't be accidentally used.
    if (! disposable) {
      return value;
    }
  }

  optimistic.dirty = function () {
    var key = options.makeCacheKey.apply(null, arguments);
    if (! key) {
      return;
    }

    if (! cache.has(key)) {
      return;
    }

    cache.get(key).setDirty();
  };

  return optimistic;
}

exports.wrap = wrap;


/***/ }),

/***/ "./node_modules/optimism/lib/local.js":
/*!********************************************!*\
  !*** ./node_modules/optimism/lib/local.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var fakeNullFiber = new (function Fiber(){});
var localKey = "_optimism_local";

function getCurrentFiber() {
  return fakeNullFiber;
}

if (true) {
  try {
    var Fiber = module["eriuqer".split("").reverse().join("")]("fibers");
    // If we were able to require fibers, redefine the getCurrentFiber
    // function so that it has a chance to return Fiber.current.
    getCurrentFiber = function () {
      return Fiber.current || fakeNullFiber;
    };
  } catch (e) {}
}

// Returns an object unique to Fiber.current, if fibers are enabled.
// This object is used for Fiber-local storage in ./entry.js.
exports.get = function () {
  var fiber = getCurrentFiber();
  return fiber[localKey] || (fiber[localKey] = Object.create(null));
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/zen-observable-ts/lib/bundle.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/zen-observable-ts/lib/bundle.esm.js ***!
  \**********************************************************/
/*! exports provided: default, Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable */ "./node_modules/zen-observable/index.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_0__);


var Observable = zen_observable__WEBPACK_IMPORTED_MODULE_0___default.a;

/* harmony default export */ __webpack_exports__["default"] = (Observable);

//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/zen-observable/index.js":
/*!**********************************************!*\
  !*** ./node_modules/zen-observable/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/Observable.js */ "./node_modules/zen-observable/lib/Observable.js").Observable;


/***/ }),

/***/ "./node_modules/zen-observable/lib/Observable.js":
/*!*******************************************************!*\
  !*** ./node_modules/zen-observable/lib/Observable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// === Symbol Support ===

var hasSymbols = function () {
  return typeof Symbol === 'function';
};
var hasSymbol = function (name) {
  return hasSymbols() && Boolean(Symbol[name]);
};
var getSymbol = function (name) {
  return hasSymbol(name) ? Symbol[name] : '@@' + name;
};

if (hasSymbols() && !hasSymbol('observable')) {
  Symbol.observable = Symbol('observable');
}

var SymbolIterator = getSymbol('iterator');
var SymbolObservable = getSymbol('observable');
var SymbolSpecies = getSymbol('species');

// === Abstract Operations ===

function getMethod(obj, key) {
  var value = obj[key];

  if (value == null) return undefined;

  if (typeof value !== 'function') throw new TypeError(value + ' is not a function');

  return value;
}

function getSpecies(obj) {
  var ctor = obj.constructor;
  if (ctor !== undefined) {
    ctor = ctor[SymbolSpecies];
    if (ctor === null) {
      ctor = undefined;
    }
  }
  return ctor !== undefined ? ctor : Observable;
}

function isObservable(x) {
  return x instanceof Observable; // SPEC: Brand check
}

function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function () {
      throw e;
    });
  }
}

function enqueue(fn) {
  Promise.resolve().then(function () {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}

function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === undefined) return;

  subscription._cleanup = undefined;

  if (!cleanup) {
    return;
  }

  try {
    if (typeof cleanup === 'function') {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, 'unsubscribe');
      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}

function closeSubscription(subscription) {
  subscription._observer = undefined;
  subscription._queue = undefined;
  subscription._state = 'closed';
}

function flushSubscription(subscription) {
  var queue = subscription._queue;
  if (!queue) {
    return;
  }
  subscription._queue = undefined;
  subscription._state = 'ready';
  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === 'closed') break;
  }
}

function notifySubscription(subscription, type, value) {
  subscription._state = 'running';

  var observer = subscription._observer;

  try {
    var m = getMethod(observer, type);
    switch (type) {
      case 'next':
        if (m) m.call(observer, value);
        break;
      case 'error':
        closeSubscription(subscription);
        if (m) m.call(observer, value);else throw value;
        break;
      case 'complete':
        closeSubscription(subscription);
        if (m) m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }

  if (subscription._state === 'closed') cleanupSubscription(subscription);else if (subscription._state === 'running') subscription._state = 'ready';
}

function onNotify(subscription, type, value) {
  if (subscription._state === 'closed') return;

  if (subscription._state === 'buffering') {
    subscription._queue.push({ type: type, value: value });
    return;
  }

  if (subscription._state !== 'ready') {
    subscription._state = 'buffering';
    subscription._queue = [{ type: type, value: value }];
    enqueue(function () {
      return flushSubscription(subscription);
    });
    return;
  }

  notifySubscription(subscription, type, value);
}

var Subscription = function () {
  function Subscription(observer, subscriber) {
    _classCallCheck(this, Subscription);

    // ASSERT: observer is an object
    // ASSERT: subscriber is callable

    this._cleanup = undefined;
    this._observer = observer;
    this._queue = undefined;
    this._state = 'initializing';

    var subscriptionObserver = new SubscriptionObserver(this);

    try {
      this._cleanup = subscriber.call(undefined, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }

    if (this._state === 'initializing') this._state = 'ready';
  }

  _createClass(Subscription, [{
    key: 'unsubscribe',
    value: function unsubscribe() {
      if (this._state !== 'closed') {
        closeSubscription(this);
        cleanupSubscription(this);
      }
    }
  }, {
    key: 'closed',
    get: function () {
      return this._state === 'closed';
    }
  }]);

  return Subscription;
}();

var SubscriptionObserver = function () {
  function SubscriptionObserver(subscription) {
    _classCallCheck(this, SubscriptionObserver);

    this._subscription = subscription;
  }

  _createClass(SubscriptionObserver, [{
    key: 'next',
    value: function next(value) {
      onNotify(this._subscription, 'next', value);
    }
  }, {
    key: 'error',
    value: function error(value) {
      onNotify(this._subscription, 'error', value);
    }
  }, {
    key: 'complete',
    value: function complete() {
      onNotify(this._subscription, 'complete');
    }
  }, {
    key: 'closed',
    get: function () {
      return this._subscription._state === 'closed';
    }
  }]);

  return SubscriptionObserver;
}();

var Observable = exports.Observable = function () {
  function Observable(subscriber) {
    _classCallCheck(this, Observable);

    if (!(this instanceof Observable)) throw new TypeError('Observable cannot be called as a function');

    if (typeof subscriber !== 'function') throw new TypeError('Observable initializer must be a function');

    this._subscriber = subscriber;
  }

  _createClass(Observable, [{
    key: 'subscribe',
    value: function subscribe(observer) {
      if (typeof observer !== 'object' || observer === null) {
        observer = {
          next: observer,
          error: arguments[1],
          complete: arguments[2]
        };
      }
      return new Subscription(observer, this._subscriber);
    }
  }, {
    key: 'forEach',
    value: function forEach(fn) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (typeof fn !== 'function') {
          reject(new TypeError(fn + ' is not a function'));
          return;
        }

        function done() {
          subscription.unsubscribe();
          resolve();
        }

        var subscription = _this.subscribe({
          next: function (value) {
            try {
              fn(value, done);
            } catch (e) {
              reject(e);
              subscription.unsubscribe();
            }
          },

          error: reject,
          complete: resolve
        });
      });
    }
  }, {
    key: 'map',
    value: function map(fn) {
      var _this2 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);

      return new C(function (observer) {
        return _this2.subscribe({
          next: function (value) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }
            observer.next(value);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            observer.complete();
          }
        });
      });
    }
  }, {
    key: 'filter',
    value: function filter(fn) {
      var _this3 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);

      return new C(function (observer) {
        return _this3.subscribe({
          next: function (value) {
            try {
              if (!fn(value)) return;
            } catch (e) {
              return observer.error(e);
            }
            observer.next(value);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            observer.complete();
          }
        });
      });
    }
  }, {
    key: 'reduce',
    value: function reduce(fn) {
      var _this4 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);
      var hasSeed = arguments.length > 1;
      var hasValue = false;
      var seed = arguments[1];
      var acc = seed;

      return new C(function (observer) {
        return _this4.subscribe({
          next: function (value) {
            var first = !hasValue;
            hasValue = true;

            if (!first || hasSeed) {
              try {
                acc = fn(acc, value);
              } catch (e) {
                return observer.error(e);
              }
            } else {
              acc = value;
            }
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            if (!hasValue && !hasSeed) return observer.error(new TypeError('Cannot reduce an empty sequence'));

            observer.next(acc);
            observer.complete();
          }
        });
      });
    }
  }, {
    key: 'concat',
    value: function concat() {
      var _this5 = this;

      for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }

      var C = getSpecies(this);

      return new C(function (observer) {
        var subscription = void 0;
        var index = 0;

        function startNext(next) {
          subscription = next.subscribe({
            next: function (v) {
              observer.next(v);
            },
            error: function (e) {
              observer.error(e);
            },
            complete: function () {
              if (index === sources.length) {
                subscription = undefined;
                observer.complete();
              } else {
                startNext(C.from(sources[index++]));
              }
            }
          });
        }

        startNext(_this5);

        return function () {
          if (subscription) {
            subscription.unsubscribe();
            subscription = undefined;
          }
        };
      });
    }
  }, {
    key: 'flatMap',
    value: function flatMap(fn) {
      var _this6 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);

      return new C(function (observer) {
        var subscriptions = [];

        var outer = _this6.subscribe({
          next: function (value) {
            if (fn) {
              try {
                value = fn(value);
              } catch (e) {
                return observer.error(e);
              }
            }

            var inner = C.from(value).subscribe({
              next: function (value) {
                observer.next(value);
              },
              error: function (e) {
                observer.error(e);
              },
              complete: function () {
                var i = subscriptions.indexOf(inner);
                if (i >= 0) subscriptions.splice(i, 1);
                completeIfDone();
              }
            });

            subscriptions.push(inner);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            completeIfDone();
          }
        });

        function completeIfDone() {
          if (outer.closed && subscriptions.length === 0) observer.complete();
        }

        return function () {
          subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
          outer.unsubscribe();
        };
      });
    }
  }, {
    key: SymbolObservable,
    value: function () {
      return this;
    }
  }], [{
    key: 'from',
    value: function from(x) {
      var C = typeof this === 'function' ? this : Observable;

      if (x == null) throw new TypeError(x + ' is not an object');

      var method = getMethod(x, SymbolObservable);
      if (method) {
        var observable = method.call(x);

        if (Object(observable) !== observable) throw new TypeError(observable + ' is not an object');

        if (isObservable(observable) && observable.constructor === C) return observable;

        return new C(function (observer) {
          return observable.subscribe(observer);
        });
      }

      if (hasSymbol('iterator')) {
        method = getMethod(x, SymbolIterator);
        if (method) {
          return new C(function (observer) {
            enqueue(function () {
              if (observer.closed) return;
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = method.call(x)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var item = _step.value;

                  observer.next(item);
                  if (observer.closed) return;
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              observer.complete();
            });
          });
        }
      }

      if (Array.isArray(x)) {
        return new C(function (observer) {
          enqueue(function () {
            if (observer.closed) return;
            for (var i = 0; i < x.length; ++i) {
              observer.next(x[i]);
              if (observer.closed) return;
            }
            observer.complete();
          });
        });
      }

      throw new TypeError(x + ' is not observable');
    }
  }, {
    key: 'of',
    value: function of() {
      for (var _len2 = arguments.length, items = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        items[_key2] = arguments[_key2];
      }

      var C = typeof this === 'function' ? this : Observable;

      return new C(function (observer) {
        enqueue(function () {
          if (observer.closed) return;
          for (var i = 0; i < items.length; ++i) {
            observer.next(items[i]);
            if (observer.closed) return;
          }
          observer.complete();
        });
      });
    }
  }, {
    key: SymbolSpecies,
    get: function () {
      return this;
    }
  }]);

  return Observable;
}();

if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol('extensions'), {
    value: {
      symbol: SymbolObservable,
      hostReportError: hostReportError
    },
    configurable: true
  });
}

/***/ })

}]);