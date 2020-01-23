/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(5);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));

app.get('/', function (req, res) {
    res.send((0, _renderer2.default)(req));
});

app.listen(3000, function () {
    console.log('3000 port');
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(1);

var _Routes = __webpack_require__(7);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.path, context: {} },
        _react2.default.createElement(_Routes2.default, null)
    ));

    return '\n    <html>\n    <head></head>\n    <body>\n    <div id="root">' + content + '</div>\n    <script src="bundle.js"></script>\n    </body>\n    </html>\n    ';
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _RecipesList = __webpack_require__(8);

var _RecipesList2 = _interopRequireDefault(_RecipesList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _RecipesList2.default })
    );
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Recipe = __webpack_require__(9);

var _Recipe2 = _interopRequireDefault(_Recipe);

var _NewRecipeForm = __webpack_require__(12);

var _NewRecipeForm2 = _interopRequireDefault(_NewRecipeForm);

var _uuid = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecipesList = function (_Component) {
    _inherits(RecipesList, _Component);

    function RecipesList(props) {
        _classCallCheck(this, RecipesList);

        var _this = _possibleConstructorReturn(this, (RecipesList.__proto__ || Object.getPrototypeOf(RecipesList)).call(this, props));

        _this.state = {
            recipes: [].concat(demoData)
        };
        _this.add = _this.add.bind(_this);
        _this.remove = _this.remove.bind(_this);
        _this.update = _this.update.bind(_this);
        return _this;
    }

    _createClass(RecipesList, [{
        key: 'add',
        value: function add(newRecipe) {
            this.setState({
                recipes: [].concat(_toConsumableArray(this.state.recipes), [_extends({}, newRecipe)])
            });
        }
    }, {
        key: 'remove',
        value: function remove(id) {
            this.setState({
                recipes: this.state.recipes.filter(function (item) {
                    return item.id !== id;
                })
            });
        }
    }, {
        key: 'update',
        value: function update(id, updatedRecipe) {
            var updatedRecipesList = this.state.recipes.map(function (item) {
                return item.id === id ? _extends({}, item, { recipe: updatedRecipe }) : item;
            });
            this.setState({ recipes: updatedRecipesList });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var recipes = this.state.recipes.map(function (item) {
                return _react2.default.createElement(_Recipe2.default, { key: item.id,
                    id: item.id,
                    recipe: item.recipe,
                    removeRecipe: _this2.remove,
                    updateRecipe: _this2.update
                });
            });
            return _react2.default.createElement(
                'div',
                { style: styles.containerStyle },
                _react2.default.createElement(
                    'h1',
                    { style: styles.headingStyle },
                    'Cook Book'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    recipes
                ),
                _react2.default.createElement(_NewRecipeForm2.default, { createRecipe: this.add })
            );
        }
    }]);

    return RecipesList;
}(_react.Component);

exports.default = RecipesList;


var styles = {
    containerStyle: {
        margin: "4rem auto",
        maxWidth: 900,
        padding: "2rem 3rem 3rem",
        background: '#7aacff',
        color: '#ffffff'
    },
    headingStyle: {
        fontWeight: 'normal',
        fontSize: "2.6rem",
        letterSpacing: "0.05em",
        borderBottom: '1px solid #eeeeee'
    }
};

var demoData = [{ recipe: 'Taco', id: (0, _uuid.v4)() }, { recipe: 'Sushi', id: (0, _uuid.v4)() }];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _freeSolidSvgIcons = __webpack_require__(10);

var _reactFontawesome = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recipe = function (_Component) {
    _inherits(Recipe, _Component);

    function Recipe(props) {
        _classCallCheck(this, Recipe);

        var _this = _possibleConstructorReturn(this, (Recipe.__proto__ || Object.getPrototypeOf(Recipe)).call(this, props));

        _this.state = {
            isEditing: false,
            recipe: _this.props.recipe
        };
        _this.handleRemove = _this.handleRemove.bind(_this);
        _this.toggleForm = _this.toggleForm.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleUpdate = _this.handleUpdate.bind(_this);
        return _this;
    }

    _createClass(Recipe, [{
        key: "handleRemove",
        value: function handleRemove() {
            this.props.removeRecipe(this.props.id);
        }
    }, {
        key: "toggleForm",
        value: function toggleForm() {
            this.setState({ isEditing: !this.state.isEditing });
        }
    }, {
        key: "handleUpdate",
        value: function handleUpdate(e) {
            e.preventDefault();
            this.props.updateRecipe(this.props.id, this.state.recipe);
            this.toggleForm();
        }
    }, {
        key: "handleChange",
        value: function handleChange(e) {
            this.setState(_defineProperty({}, e.target.name, e.target.value));
        }
    }, {
        key: "render",
        value: function render() {
            var containerStyles = styles.containerStyles,
                textStyles = styles.textStyles,
                buttonStyles = styles.buttonStyles,
                editFormStyles = styles.editFormStyles,
                editFormInputStyles = styles.editFormInputStyles,
                editFormButtonStyles = styles.editFormButtonStyles;

            return this.state.isEditing ? _react2.default.createElement(
                "div",
                { style: containerStyles },
                _react2.default.createElement(
                    "form",
                    { style: editFormStyles, onSubmit: this.handleUpdate },
                    _react2.default.createElement("textarea", { style: editFormInputStyles,
                        name: "recipe",
                        value: this.state.recipe,
                        onChange: this.handleChange
                    }),
                    _react2.default.createElement(
                        "button",
                        { style: editFormButtonStyles },
                        "Save"
                    )
                )
            ) : _react2.default.createElement(
                "div",
                { style: containerStyles },
                _react2.default.createElement(
                    "p",
                    { style: textStyles },
                    this.props.recipe
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "button",
                        { style: buttonStyles, onClick: this.toggleForm },
                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faEdit })
                    ),
                    _react2.default.createElement(
                        "button",
                        { style: styles.buttonStyles, onClick: this.handleRemove },
                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faTrash })
                    )
                )
            );
        }
    }]);

    return Recipe;
}(_react.Component);

exports.default = Recipe;


var styles = {
    containerStyles: {
        display: 'flex',
        margin: '0 -3rem 4px',
        padding: '1.1rem 3rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(225,225,225,.1)'
    },
    textStyles: {
        whiteSpace: "pre-line"
    },
    buttonStyles: {
        border: 'none',
        fontSize: '1em',
        margin: '0.4em',
        background: 'none',
        cursor: 'pointer',
        color: "#ffffff"
    },
    editFormStyles: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    editFormInputStyles: {
        flexGrow: 1,
        border: 'none',
        background: "#f7f1f1",
        padding: '0 1.5em',
        fontSize: 'initial',
        height: 70
    },
    editFormButtonStyles: {
        padding: '0 1.3rem',
        background: "#48ff89",
        color: '#ffffff',
        textTransform: "uppercase",
        fontWeight: "bold",
        border: "1px solid rgba(225,225,225,.3)",
        marginLeft: 5
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _uuid = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewRecipeForm = function (_Component) {
    _inherits(NewRecipeForm, _Component);

    function NewRecipeForm(props) {
        _classCallCheck(this, NewRecipeForm);

        var _this = _possibleConstructorReturn(this, (NewRecipeForm.__proto__ || Object.getPrototypeOf(NewRecipeForm)).call(this, props));

        _this.state = { recipe: "" };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(NewRecipeForm, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState(_defineProperty({}, e.target.name, e.target.value));
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            if (this.state.recipe !== "") {
                this.props.createRecipe(_extends({}, this.state, { id: (0, _uuid.v4)() }));
                this.setState({ recipe: "" });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var formStyles = styles.formStyles,
                formLabelStyles = styles.formLabelStyles,
                formInputStyles = styles.formInputStyles,
                formButtonStyles = styles.formButtonStyles;

            return _react2.default.createElement(
                'form',
                { style: formStyles, onSubmit: this.handleSubmit },
                _react2.default.createElement(
                    'label',
                    { style: formLabelStyles, htmlFor: 'recipe' },
                    'Your New Recipe'
                ),
                _react2.default.createElement('textarea', {
                    style: formInputStyles,
                    type: 'text',
                    placeholder: 'new recipe',
                    id: 'recipe',
                    name: 'recipe',
                    value: this.state.recipe,
                    onChange: this.handleChange
                }),
                _react2.default.createElement(
                    'button',
                    { style: formButtonStyles },
                    'Add'
                )
            );
        }
    }]);

    return NewRecipeForm;
}(_react.Component);

exports.default = NewRecipeForm;


var styles = {
    formStyles: {
        marginTop: '3rem',
        display: 'flex',
        flexWrap: 'wrap'
    },
    formLabelStyles: {
        minWidth: '100%',
        marginBottom: '0.5rem',
        fontSize: '1.3rem'
    },
    formInputStyles: {
        flexGrow: 1,
        border: 'none',
        background: '#f7f1f1',
        padding: '0 1.5em',
        fontSize: 'initial',
        width: "100%",
        height: 70
    },
    formButtonStyles: {
        flex: 'auto',
        padding: '0 1.3rem',
        background: "#48ff89",
        color: '#ffffff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        border: "1px solid rgba(225,225,225,.3)"
    }
};

/***/ })
/******/ ]);