/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/Card.js":
/*!*****************************!*\
  !*** ./src/scripts/Card.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Card; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Card = /*#__PURE__*/function () {
  function Card(data, template, handleCardClick) {
    var _this = this;

    _classCallCheck(this, Card);

    _defineProperty(this, "_addLikeButtonClickListener", function (event) {
      event.target.classList.toggle("photo-feed__card-button_not-active");
      event.target.classList.toggle("photo-feed__card-button_active");
    });

    _defineProperty(this, "_addDeleteButtonListener", function () {
      _this._element.remove();

      _this._element = null;
    });

    this._name = data.name;
    this._link = data.link;
    this._element = template.cloneNode(true);
    this._handleCardClick = handleCardClick;
  }

  _createClass(Card, [{
    key: "createCard",
    value: function createCard() {
      var cardName = this._element.querySelector(".photo-feed__text");

      var cardImage = this._element.querySelector(".photo-feed__image");

      cardName.textContent = this._name;
      cardImage.src = this._link;
      cardImage.alt = this._name;

      this._setEventListeners();

      return this._element;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;

      var cardButton = this._element.querySelector(".photo-feed__card-button");

      var cardImage = this._element.querySelector(".photo-feed__image");

      var cardDeleteBtn = this._element.querySelector(".photo-feed__delete-btn");

      cardButton.addEventListener("click", this._addLikeButtonClickListener);
      cardImage.addEventListener("click", function () {
        _this2._handlePreviewImage();
      });
      cardDeleteBtn.addEventListener("click", this._addDeleteButtonListener);
    }
  }, {
    key: "_handlePreviewImage",
    value: function _handlePreviewImage() {
      this._handleCardClick({
        link: this._link,
        name: this._name
      });
    }
  }]);

  return Card;
}();



/***/ }),

/***/ "./src/scripts/FormValidator.js":
/*!**************************************!*\
  !*** ./src/scripts/FormValidator.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FormValidator; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(settings, formElement) {
    _classCallCheck(this, FormValidator);

    this._settings = settings;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
  }

  _createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(inputElement, validationMessage) {
      var errorElement = this._formElement.querySelector("#".concat(inputElement.id, "-error"));

      inputElement.classList.add(this._settings.inputErrorClass);
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._settings.errorClass);
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(inputElement) {
      var errorElement = this._formElement.querySelector("#".concat(inputElement.id, "-error"));

      inputElement.classList.remove(this._settings.inputErrorClass);
      errorElement.textContent = "";
      errorElement.classList.remove(this._settings.errorClass);
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState(inputList, buttonElement) {
      var hasInvalidInput = inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });

      if (hasInvalidInput) {
        buttonElement.classList.add(this._settings.inactiveButtonClass);
        buttonElement.disabled = true;
      } else {
        buttonElement.classList.remove(this._settings.inactiveButtonClass);
        buttonElement.disabled = false;
      }
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }
  }, {
    key: "_setEventListener",
    value: function _setEventListener(inputElement, buttonElement) {
      var _this = this;

      this._toggleButtonState(this._inputList, this._buttonElement);

      this._inputList.forEach(function (inputElement) {
        inputElement.addEventListener("input", function () {
          _this._checkInputValidity(inputElement);

          _this._toggleButtonState(_this._inputList, _this._buttonElement);
        });
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._formElement.addEventListener("submit", function (e) {
        e.preventDefault();
      });

      this._setEventListener();
    }
  }, {
    key: "resetValidation",
    value: function resetValidation() {
      var _this2 = this;

      this._inputList.forEach(function (inputElement) {
        _this2._hideInputError(inputElement);
      });
    }
  }]);

  return FormValidator;
}();



/***/ }),

/***/ "./src/scripts/Popup.js":
/*!******************************!*\
  !*** ./src/scripts/Popup.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Popup; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    var _this = this;

    _classCallCheck(this, Popup);

    _defineProperty(this, "_handleEscClose", function (evt) {
      if (evt.key === "Escape") _this.close();
    });

    this._popup = document.querySelector(popupSelector);
  }

  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add("popup_visible");

      document.addEventListener("keydown", this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove("popup_visible");

      document.removeEventListener("keydown", this._handleEscClose);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      this._popup.addEventListener("click", function (evt) {
        if (evt.target.classList.contains("popup") || evt.target.classList.contains("popup__close-btn")) _this2.close();
      });
    }
  }]);

  return Popup;
}();



/***/ }),

/***/ "./src/scripts/PopupWithForm.js":
/*!**************************************!*\
  !*** ./src/scripts/PopupWithForm.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithForm; }
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/scripts/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(popupSelector, submitHandler) {
    var _this;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._submitHandler = submitHandler;
    _this._form = _this._popup.querySelector(".popup__form");
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var inputValues = {};

      var inputs = _toConsumableArray(this._form.querySelectorAll(".popup__input"));

      inputs.forEach(function (input) {
        inputValues[input.name] = input.value;
      });
      return inputValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      this._form.addEventListener("submit", function (event) {
        event.preventDefault();

        _this2._submitHandler(_this2._getInputValues());

        _this2.close();
      });

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
    }
  }, {
    key: "close",
    value: function close() {
      this._form.reset();

      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
    }
  }]);

  return PopupWithForm;
}(_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/scripts/PopupWithImage.js":
/*!***************************************!*\
  !*** ./src/scripts/PopupWithImage.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithImage; }
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/scripts/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);

    _defineProperty(_assertThisInitialized(_this), "open", function (_ref) {
      var link = _ref.link,
          name = _ref.name;

      var popupImage = _this._popup.querySelector(".popup__image");

      var popupPhotoCaption = _this._popup.querySelector(".popup__image-caption");

      popupImage.src = link;
      popupImage.alt = link;
      popupPhotoCaption.textContent = name;

      _this._popup.classList.add("popup_visible");

      document.addEventListener("keydown", _this._handleEscClose);
    });

    return _this;
  }

  return _createClass(PopupWithImage);
}(_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/scripts/Section.js":
/*!********************************!*\
  !*** ./src/scripts/Section.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Section; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var items = _ref.items,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      this._items.forEach(function (data) {
        _this._renderer(data);
      });
    }
  }]);

  return Section;
}();



/***/ }),

/***/ "./src/scripts/UserInfo.js":
/*!*********************************!*\
  !*** ./src/scripts/UserInfo.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UserInfo; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var profileNameSelector = _ref.profileNameSelector,
        profileJobSelector = _ref.profileJobSelector;

    _classCallCheck(this, UserInfo);

    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._profileName.textContent,
        job: this._profileJob.textContent
      };
    }
  }, {
    key: "SetUserInfo",
    value: function SetUserInfo(_ref2) {
      var name = _ref2.name,
          occupation = _ref2.occupation;
      this._profileName.textContent = name;
      this._profileJob.textContent = occupation;
    }
  }]);

  return UserInfo;
}();



/***/ }),

/***/ "./src/scripts/feedCards.js":
/*!**********************************!*\
  !*** ./src/scripts/feedCards.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* Cards JS */
var feedCards = [{
  name: "Yosemite Valley",
  link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
}, {
  name: "Lake Louise",
  link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
}, {
  name: "Bald Mountains",
  link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
}, {
  name: "Latemar",
  link: "https://code.s3.yandex.net/web-code/latemar.jpg"
}, {
  name: "Vanoise National Park",
  link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
}, {
  name: "Lago di Braies",
  link: "https://code.s3.yandex.net/web-code/lago.jpg"
}];
/* harmony default export */ __webpack_exports__["default"] = (feedCards);

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6cfc44eec3c3eff2b9a7.svg";

/***/ }),

/***/ "./src/images/profilepic.png":
/*!***********************************!*\
  !*** ./src/images/profilepic.png ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1cd58b4f373a8be58c05.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_profilepic_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/profilepic.png */ "./src/images/profilepic.png");
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo.svg */ "./src/images/logo.svg");
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index.css */ "./src/pages/index.css");
/* harmony import */ var _scripts_feedCards_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/feedCards.js */ "./src/scripts/feedCards.js");
/* harmony import */ var _scripts_Card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/Card.js */ "./src/scripts/Card.js");
/* harmony import */ var _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/FormValidator.js */ "./src/scripts/FormValidator.js");
/* harmony import */ var _scripts_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/PopupWithImage.js */ "./src/scripts/PopupWithImage.js");
/* harmony import */ var _scripts_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/PopupWithForm.js */ "./src/scripts/PopupWithForm.js");
/* harmony import */ var _scripts_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/UserInfo.js */ "./src/scripts/UserInfo.js");
/* harmony import */ var _scripts_Section_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/Section.js */ "./src/scripts/Section.js");










var profilePic = document.querySelector(".profile__image");
profilePic.src = _images_profilepic_png__WEBPACK_IMPORTED_MODULE_0__;
var logoImage = document.querySelector(".header__logo");
logoImage.src = _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__;
var popupPhoto = new _scripts_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__["default"](".popup_photo");
popupPhoto.setEventListeners();
var photoTemplate = document.querySelector("#photo-feed__cards").content.querySelector(".photo-feed__card");
var photoGrid = document.querySelector(".photo-feed__grid");

var generateCard = function generateCard(data) {
  return new _scripts_Card_js__WEBPACK_IMPORTED_MODULE_4__["default"](data, photoTemplate, popupPhoto.open); //photoGrid.prepend(card.createCard());
};

var section = new _scripts_Section_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
  items: _scripts_feedCards_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  renderer: function renderer(data) {
    var card = generateCard(data);
    section.addItem(card.createCard());
  }
}, ".photo-feed__grid");
section.render();
var formValidators = {}; //EDIT POPUP

var userInfo = new _scripts_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
  profileNameSelector: ".profile__name",
  profileJobSelector: ".profile__occupation"
});
var profileForm = document.querySelector(".popup__form_edit");
var inputFullName = document.querySelector("#name-input");
var inputOccupation = document.querySelector("#occupation-input");
var editButton = document.querySelector(".profile__edit-button"); //ADD POPUP

var addForm = document.querySelector("#add_form");
var addButton = document.querySelector(".profile__add-button");
var popupEdit = new _scripts_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_7__["default"](".popup_edit", function (data) {
  userInfo.SetUserInfo(data);
});
popupEdit.setEventListeners();
var popupAdd = new _scripts_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_7__["default"](".popup_add", function (data) {
  var cardData = {
    name: data.title,
    link: data["img-link"]
  };
  var card = generateCard(cardData);
  section.addItem(card.createCard());
});
popupAdd.setEventListeners();
var formSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

var enableValidation = function enableValidation(settings) {
  var formsList = Array.from(document.querySelectorAll(settings.formSelector));
  formsList.forEach(function (formElement) {
    var validator = new _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_5__["default"](settings, formElement);
    var formType = formElement.getAttribute("name");
    formValidators[formType] = validator;
    validator.enableValidation();
  });
};

enableValidation(formSettings);
editButton.addEventListener("click", function () {
  var data = userInfo.getUserInfo();
  popupEdit.open();
  inputFullName.value = data.name;
  inputOccupation.value = data.job;
  formValidators[profileForm.getAttribute("name")].resetValidation();
  profileForm.querySelector(".popup__save-button").classList.add("popup__button_disabled");
});
addButton.addEventListener("click", function () {
  popupAdd.open();
  formValidators[addForm.getAttribute("name")].resetValidation();
  addForm.querySelector(".popup__save-button").classList.add("popup__button_disabled");
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQTtBQUNuQixnQkFBWUMsSUFBWixFQUFrQkMsUUFBbEIsRUFBNEJDLGVBQTVCLEVBQTZDO0FBQUE7O0FBQUE7O0FBQUEseURBZ0NmLFVBQUNDLEtBQUQsRUFBVztBQUN2Q0EsTUFBQUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFNBQWIsQ0FBdUJDLE1BQXZCLENBQThCLG9DQUE5QjtBQUNBSCxNQUFBQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsU0FBYixDQUF1QkMsTUFBdkIsQ0FBOEIsZ0NBQTlCO0FBQ0QsS0FuQzRDOztBQUFBLHNEQXlDbEIsWUFBTTtBQUMvQixXQUFJLENBQUNDLFFBQUwsQ0FBY0MsTUFBZDs7QUFDQSxXQUFJLENBQUNELFFBQUwsR0FBZ0IsSUFBaEI7QUFDRCxLQTVDNEM7O0FBQzNDLFNBQUtFLEtBQUwsR0FBYVQsSUFBSSxDQUFDVSxJQUFsQjtBQUNBLFNBQUtDLEtBQUwsR0FBYVgsSUFBSSxDQUFDWSxJQUFsQjtBQUNBLFNBQUtMLFFBQUwsR0FBZ0JOLFFBQVEsQ0FBQ1ksU0FBVCxDQUFtQixJQUFuQixDQUFoQjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCWixlQUF4QjtBQUNEOzs7O1dBQ0Qsc0JBQWE7QUFDWCxVQUFNYSxRQUFRLEdBQUcsS0FBS1IsUUFBTCxDQUFjUyxhQUFkLENBQTRCLG1CQUE1QixDQUFqQjs7QUFDQSxVQUFNQyxTQUFTLEdBQUcsS0FBS1YsUUFBTCxDQUFjUyxhQUFkLENBQTRCLG9CQUE1QixDQUFsQjs7QUFDQUQsTUFBQUEsUUFBUSxDQUFDRyxXQUFULEdBQXVCLEtBQUtULEtBQTVCO0FBQ0FRLE1BQUFBLFNBQVMsQ0FBQ0UsR0FBVixHQUFnQixLQUFLUixLQUFyQjtBQUNBTSxNQUFBQSxTQUFTLENBQUNHLEdBQVYsR0FBZ0IsS0FBS1gsS0FBckI7O0FBRUEsV0FBS1ksa0JBQUw7O0FBRUEsYUFBTyxLQUFLZCxRQUFaO0FBQ0Q7OztXQUVELDhCQUFxQjtBQUFBOztBQUNuQixVQUFNZSxVQUFVLEdBQUcsS0FBS2YsUUFBTCxDQUFjUyxhQUFkLENBQTRCLDBCQUE1QixDQUFuQjs7QUFDQSxVQUFNQyxTQUFTLEdBQUcsS0FBS1YsUUFBTCxDQUFjUyxhQUFkLENBQTRCLG9CQUE1QixDQUFsQjs7QUFDQSxVQUFNTyxhQUFhLEdBQUcsS0FBS2hCLFFBQUwsQ0FBY1MsYUFBZCxDQUE0Qix5QkFBNUIsQ0FBdEI7O0FBRUFNLE1BQUFBLFVBQVUsQ0FBQ0UsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsS0FBS0MsMkJBQTFDO0FBRUFSLE1BQUFBLFNBQVMsQ0FBQ08sZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBTTtBQUN4QyxjQUFJLENBQUNFLG1CQUFMO0FBQ0QsT0FGRDtBQUlBSCxNQUFBQSxhQUFhLENBQUNDLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLEtBQUtHLHdCQUE3QztBQUNEOzs7V0FPRCwrQkFBc0I7QUFDcEIsV0FBS2IsZ0JBQUwsQ0FBc0I7QUFBRUYsUUFBQUEsSUFBSSxFQUFFLEtBQUtELEtBQWI7QUFBb0JELFFBQUFBLElBQUksRUFBRSxLQUFLRDtBQUEvQixPQUF0QjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3hDa0JtQjtBQUNuQix5QkFBWUMsUUFBWixFQUFzQkMsV0FBdEIsRUFBbUM7QUFBQTs7QUFDakMsU0FBS0MsU0FBTCxHQUFpQkYsUUFBakI7QUFDQSxTQUFLRyxZQUFMLEdBQW9CRixXQUFwQjtBQUNBLFNBQUtHLFVBQUwsR0FBa0JDLEtBQUssQ0FBQ0MsSUFBTixDQUFXLEtBQUtILFlBQUwsQ0FBa0JJLGdCQUFsQixDQUFtQyxLQUFLTCxTQUFMLENBQWVNLGFBQWxELENBQVgsQ0FBbEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLEtBQUtOLFlBQUwsQ0FBa0JoQixhQUFsQixDQUFnQyxLQUFLZSxTQUFMLENBQWVRLG9CQUEvQyxDQUF0QjtBQUNEOzs7O1dBRUQseUJBQWdCQyxZQUFoQixFQUE4QkMsaUJBQTlCLEVBQWlEO0FBQy9DLFVBQU1DLFlBQVksR0FBRyxLQUFLVixZQUFMLENBQWtCaEIsYUFBbEIsWUFBb0N3QixZQUFZLENBQUNHLEVBQWpELFlBQXJCOztBQUVBSCxNQUFBQSxZQUFZLENBQUNuQyxTQUFiLENBQXVCdUMsR0FBdkIsQ0FBMkIsS0FBS2IsU0FBTCxDQUFlYyxlQUExQztBQUNBSCxNQUFBQSxZQUFZLENBQUN4QixXQUFiLEdBQTJCc0IsWUFBWSxDQUFDQyxpQkFBeEM7QUFDQUMsTUFBQUEsWUFBWSxDQUFDckMsU0FBYixDQUF1QnVDLEdBQXZCLENBQTJCLEtBQUtiLFNBQUwsQ0FBZWUsVUFBMUM7QUFDRDs7O1dBRUQseUJBQWdCTixZQUFoQixFQUE4QjtBQUM1QixVQUFNRSxZQUFZLEdBQUcsS0FBS1YsWUFBTCxDQUFrQmhCLGFBQWxCLFlBQW9Dd0IsWUFBWSxDQUFDRyxFQUFqRCxZQUFyQjs7QUFDQUgsTUFBQUEsWUFBWSxDQUFDbkMsU0FBYixDQUF1QkcsTUFBdkIsQ0FBOEIsS0FBS3VCLFNBQUwsQ0FBZWMsZUFBN0M7QUFDQUgsTUFBQUEsWUFBWSxDQUFDeEIsV0FBYixHQUEyQixFQUEzQjtBQUNBd0IsTUFBQUEsWUFBWSxDQUFDckMsU0FBYixDQUF1QkcsTUFBdkIsQ0FBOEIsS0FBS3VCLFNBQUwsQ0FBZWUsVUFBN0M7QUFDRDs7O1dBRUQsNEJBQW1CQyxTQUFuQixFQUE4QkMsYUFBOUIsRUFBNkM7QUFDM0MsVUFBTUMsZUFBZSxHQUFHRixTQUFTLENBQUNHLElBQVYsQ0FBZSxVQUFDVixZQUFEO0FBQUEsZUFBa0IsQ0FBQ0EsWUFBWSxDQUFDVyxRQUFiLENBQXNCQyxLQUF6QztBQUFBLE9BQWYsQ0FBeEI7O0FBQ0EsVUFBSUgsZUFBSixFQUFxQjtBQUNuQkQsUUFBQUEsYUFBYSxDQUFDM0MsU0FBZCxDQUF3QnVDLEdBQXhCLENBQTRCLEtBQUtiLFNBQUwsQ0FBZXNCLG1CQUEzQztBQUNBTCxRQUFBQSxhQUFhLENBQUNNLFFBQWQsR0FBeUIsSUFBekI7QUFDRCxPQUhELE1BR087QUFDTE4sUUFBQUEsYUFBYSxDQUFDM0MsU0FBZCxDQUF3QkcsTUFBeEIsQ0FBK0IsS0FBS3VCLFNBQUwsQ0FBZXNCLG1CQUE5QztBQUNBTCxRQUFBQSxhQUFhLENBQUNNLFFBQWQsR0FBeUIsS0FBekI7QUFDRDtBQUNGOzs7V0FFRCw2QkFBb0JkLFlBQXBCLEVBQWtDO0FBQ2hDLFVBQUksQ0FBQ0EsWUFBWSxDQUFDVyxRQUFiLENBQXNCQyxLQUEzQixFQUFrQztBQUNoQyxhQUFLRyxlQUFMLENBQXFCZixZQUFyQixFQUFtQ0EsWUFBWSxDQUFDQyxpQkFBaEQ7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLZSxlQUFMLENBQXFCaEIsWUFBckI7QUFDRDtBQUNGOzs7V0FFRCwyQkFBa0JBLFlBQWxCLEVBQWdDUSxhQUFoQyxFQUErQztBQUFBOztBQUM3QyxXQUFLUyxrQkFBTCxDQUF3QixLQUFLeEIsVUFBN0IsRUFBeUMsS0FBS0ssY0FBOUM7O0FBQ0EsV0FBS0wsVUFBTCxDQUFnQnlCLE9BQWhCLENBQXdCLFVBQUNsQixZQUFELEVBQWtCO0FBQ3hDQSxRQUFBQSxZQUFZLENBQUNoQixnQkFBYixDQUE4QixPQUE5QixFQUF1QyxZQUFNO0FBQzNDLGVBQUksQ0FBQ21DLG1CQUFMLENBQXlCbkIsWUFBekI7O0FBQ0EsZUFBSSxDQUFDaUIsa0JBQUwsQ0FBd0IsS0FBSSxDQUFDeEIsVUFBN0IsRUFBeUMsS0FBSSxDQUFDSyxjQUE5QztBQUNELFNBSEQ7QUFJRCxPQUxEO0FBTUQ7OztXQUVELDRCQUFtQjtBQUNqQixXQUFLTixZQUFMLENBQWtCUixnQkFBbEIsQ0FBbUMsUUFBbkMsRUFBNkMsVUFBQ29DLENBQUQsRUFBTztBQUNsREEsUUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0QsT0FGRDs7QUFHQSxXQUFLQyxpQkFBTDtBQUNEOzs7V0FFRCwyQkFBa0I7QUFBQTs7QUFDaEIsV0FBSzdCLFVBQUwsQ0FBZ0J5QixPQUFoQixDQUF3QixVQUFDbEIsWUFBRCxFQUFrQjtBQUN4QyxjQUFJLENBQUNnQixlQUFMLENBQXFCaEIsWUFBckI7QUFDRCxPQUZEO0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMvRGtCdUI7QUFDbkIsaUJBQVlDLGFBQVosRUFBMkI7QUFBQTs7QUFBQTs7QUFBQSw2Q0FvQlQsVUFBQ0MsR0FBRCxFQUFTO0FBQ3pCLFVBQUlBLEdBQUcsQ0FBQ0MsR0FBSixLQUFZLFFBQWhCLEVBQTBCLEtBQUksQ0FBQ0MsS0FBTDtBQUMzQixLQXRCMEI7O0FBQ3pCLFNBQUtDLE1BQUwsR0FBY0MsUUFBUSxDQUFDckQsYUFBVCxDQUF1QmdELGFBQXZCLENBQWQ7QUFDRDs7OztXQUVELGdCQUFPO0FBQ0wsV0FBS0ksTUFBTCxDQUFZL0QsU0FBWixDQUFzQnVDLEdBQXRCLENBQTBCLGVBQTFCOztBQUNBeUIsTUFBQUEsUUFBUSxDQUFDN0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsS0FBSzhDLGVBQTFDO0FBQ0Q7OztXQUVELGlCQUFRO0FBQ04sV0FBS0YsTUFBTCxDQUFZL0QsU0FBWixDQUFzQkcsTUFBdEIsQ0FBNkIsZUFBN0I7O0FBQ0E2RCxNQUFBQSxRQUFRLENBQUNFLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLEtBQUtELGVBQTdDO0FBQ0Q7OztXQUVELDZCQUFvQjtBQUFBOztBQUNsQixXQUFLRixNQUFMLENBQVk1QyxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxVQUFDeUMsR0FBRCxFQUFTO0FBQzdDLFlBQUlBLEdBQUcsQ0FBQzdELE1BQUosQ0FBV0MsU0FBWCxDQUFxQm1FLFFBQXJCLENBQThCLE9BQTlCLEtBQTBDUCxHQUFHLENBQUM3RCxNQUFKLENBQVdDLFNBQVgsQ0FBcUJtRSxRQUFyQixDQUE4QixrQkFBOUIsQ0FBOUMsRUFBaUcsTUFBSSxDQUFDTCxLQUFMO0FBQ2xHLE9BRkQ7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkg7O0lBRXFCTTs7Ozs7QUFDbkIseUJBQVlULGFBQVosRUFBMkJVLGFBQTNCLEVBQTBDO0FBQUE7O0FBQUE7O0FBQ3hDLDhCQUFNVixhQUFOO0FBQ0EsVUFBS1csY0FBTCxHQUFzQkQsYUFBdEI7QUFDQSxVQUFLRSxLQUFMLEdBQWEsTUFBS1IsTUFBTCxDQUFZcEQsYUFBWixDQUEwQixjQUExQixDQUFiO0FBSHdDO0FBSXpDOzs7O1dBRUQsMkJBQWtCO0FBQ2hCLFVBQU02RCxXQUFXLEdBQUcsRUFBcEI7O0FBQ0EsVUFBTUMsTUFBTSxzQkFBTyxLQUFLRixLQUFMLENBQVd4QyxnQkFBWCxDQUE0QixlQUE1QixDQUFQLENBQVo7O0FBRUEwQyxNQUFBQSxNQUFNLENBQUNwQixPQUFQLENBQWUsVUFBQ3FCLEtBQUQsRUFBVztBQUN4QkYsUUFBQUEsV0FBVyxDQUFDRSxLQUFLLENBQUNyRSxJQUFQLENBQVgsR0FBMEJxRSxLQUFLLENBQUNDLEtBQWhDO0FBQ0QsT0FGRDtBQUlBLGFBQU9ILFdBQVA7QUFDRDs7O1dBRUQsNkJBQW9CO0FBQUE7O0FBQ2xCLFdBQUtELEtBQUwsQ0FBV3BELGdCQUFYLENBQTRCLFFBQTVCLEVBQXNDLFVBQUNyQixLQUFELEVBQVc7QUFDL0NBLFFBQUFBLEtBQUssQ0FBQzBELGNBQU47O0FBQ0EsY0FBSSxDQUFDYyxjQUFMLENBQW9CLE1BQUksQ0FBQ00sZUFBTCxFQUFwQjs7QUFDQSxjQUFJLENBQUNkLEtBQUw7QUFDRCxPQUpEOztBQUtBO0FBQ0Q7OztXQUVELGlCQUFRO0FBQ04sV0FBS1MsS0FBTCxDQUFXTSxLQUFYOztBQUNBO0FBQ0Q7Ozs7RUE5QndDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjNDOztJQUVxQm9COzs7OztBQUNuQiwwQkFBWW5CLGFBQVosRUFBMkI7QUFBQTs7QUFBQTs7QUFDekIsOEJBQU1BLGFBQU47O0FBRHlCLDJEQUlwQixnQkFBb0I7QUFBQSxVQUFqQnBELElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLFVBQVhGLElBQVcsUUFBWEEsSUFBVzs7QUFDekIsVUFBTTBFLFVBQVUsR0FBRyxNQUFLaEIsTUFBTCxDQUFZcEQsYUFBWixDQUEwQixlQUExQixDQUFuQjs7QUFDQSxVQUFNcUUsaUJBQWlCLEdBQUcsTUFBS2pCLE1BQUwsQ0FBWXBELGFBQVosQ0FBMEIsdUJBQTFCLENBQTFCOztBQUVBb0UsTUFBQUEsVUFBVSxDQUFDakUsR0FBWCxHQUFpQlAsSUFBakI7QUFDQXdFLE1BQUFBLFVBQVUsQ0FBQ2hFLEdBQVgsR0FBaUJSLElBQWpCO0FBQ0F5RSxNQUFBQSxpQkFBaUIsQ0FBQ25FLFdBQWxCLEdBQWdDUixJQUFoQzs7QUFFQSxZQUFLMEQsTUFBTCxDQUFZL0QsU0FBWixDQUFzQnVDLEdBQXRCLENBQTBCLGVBQTFCOztBQUNBeUIsTUFBQUEsUUFBUSxDQUFDN0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsTUFBSzhDLGVBQTFDO0FBQ0QsS0FkMEI7O0FBQUE7QUFFMUI7OztFQUh5Q1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNGdkJ1QjtBQUNuQix5QkFBaUNDLGlCQUFqQyxFQUFvRDtBQUFBLFFBQXRDQyxLQUFzQyxRQUF0Q0EsS0FBc0M7QUFBQSxRQUEvQkMsUUFBK0IsUUFBL0JBLFFBQStCOztBQUFBOztBQUNsRCxTQUFLQyxNQUFMLEdBQWNGLEtBQWQ7QUFDQSxTQUFLRyxTQUFMLEdBQWlCRixRQUFqQjtBQUNBLFNBQUtHLFVBQUwsR0FBa0J2QixRQUFRLENBQUNyRCxhQUFULENBQXVCdUUsaUJBQXZCLENBQWxCO0FBQ0Q7Ozs7V0FFRCxpQkFBUU0sT0FBUixFQUFpQjtBQUNmLFdBQUtELFVBQUwsQ0FBZ0JFLE9BQWhCLENBQXdCRCxPQUF4QjtBQUNEOzs7V0FFRCxrQkFBUztBQUFBOztBQUNQLFdBQUtILE1BQUwsQ0FBWWhDLE9BQVosQ0FBb0IsVUFBQzFELElBQUQsRUFBVTtBQUM1QixhQUFJLENBQUMyRixTQUFMLENBQWUzRixJQUFmO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2ZrQitGO0FBQ25CLDBCQUF5RDtBQUFBLFFBQTNDQyxtQkFBMkMsUUFBM0NBLG1CQUEyQztBQUFBLFFBQXRCQyxrQkFBc0IsUUFBdEJBLGtCQUFzQjs7QUFBQTs7QUFDdkQsU0FBS0MsWUFBTCxHQUFvQjdCLFFBQVEsQ0FBQ3JELGFBQVQsQ0FBdUJnRixtQkFBdkIsQ0FBcEI7QUFDQSxTQUFLRyxXQUFMLEdBQW1COUIsUUFBUSxDQUFDckQsYUFBVCxDQUF1QmlGLGtCQUF2QixDQUFuQjtBQUNEOzs7O1dBRUQsdUJBQWM7QUFDWixhQUFPO0FBQ0x2RixRQUFBQSxJQUFJLEVBQUUsS0FBS3dGLFlBQUwsQ0FBa0JoRixXQURuQjtBQUVMa0YsUUFBQUEsR0FBRyxFQUFFLEtBQUtELFdBQUwsQ0FBaUJqRjtBQUZqQixPQUFQO0FBSUQ7OztXQUVELDRCQUFrQztBQUFBLFVBQXBCUixJQUFvQixTQUFwQkEsSUFBb0I7QUFBQSxVQUFkMkYsVUFBYyxTQUFkQSxVQUFjO0FBQ2hDLFdBQUtILFlBQUwsQ0FBa0JoRixXQUFsQixHQUFnQ1IsSUFBaEM7QUFDQSxXQUFLeUYsV0FBTCxDQUFpQmpGLFdBQWpCLEdBQStCbUYsVUFBL0I7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkg7QUFDQSxJQUFNQyxTQUFTLEdBQUcsQ0FDaEI7QUFDRTVGLEVBQUFBLElBQUksRUFBRSxpQkFEUjtBQUVFRSxFQUFBQSxJQUFJLEVBQUU7QUFGUixDQURnQixFQUtoQjtBQUNFRixFQUFBQSxJQUFJLEVBQUUsYUFEUjtBQUVFRSxFQUFBQSxJQUFJLEVBQUU7QUFGUixDQUxnQixFQVNoQjtBQUNFRixFQUFBQSxJQUFJLEVBQUUsZ0JBRFI7QUFFRUUsRUFBQUEsSUFBSSxFQUFFO0FBRlIsQ0FUZ0IsRUFhaEI7QUFDRUYsRUFBQUEsSUFBSSxFQUFFLFNBRFI7QUFFRUUsRUFBQUEsSUFBSSxFQUFFO0FBRlIsQ0FiZ0IsRUFpQmhCO0FBQ0VGLEVBQUFBLElBQUksRUFBRSx1QkFEUjtBQUVFRSxFQUFBQSxJQUFJLEVBQUU7QUFGUixDQWpCZ0IsRUFxQmhCO0FBQ0VGLEVBQUFBLElBQUksRUFBRSxnQkFEUjtBQUVFRSxFQUFBQSxJQUFJLEVBQUU7QUFGUixDQXJCZ0IsQ0FBbEI7QUEyQkEsK0RBQWUwRixTQUFmOzs7Ozs7Ozs7OztBQzVCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNRyxVQUFVLEdBQUdwQyxRQUFRLENBQUNyRCxhQUFULENBQXVCLGlCQUF2QixDQUFuQjtBQUNBeUYsVUFBVSxDQUFDdEYsR0FBWCxHQUFpQm9GLG1EQUFqQjtBQUVBLElBQU1HLFNBQVMsR0FBR3JDLFFBQVEsQ0FBQ3JELGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbEI7QUFDQTBGLFNBQVMsQ0FBQ3ZGLEdBQVYsR0FBZ0JxRiw2Q0FBaEI7QUFFQSxJQUFNRyxVQUFVLEdBQUcsSUFBSXhCLGtFQUFKLENBQW1CLGNBQW5CLENBQW5CO0FBQ0F3QixVQUFVLENBQUNDLGlCQUFYO0FBRUEsSUFBTUMsYUFBYSxHQUFHeEMsUUFBUSxDQUFDckQsYUFBVCxDQUF1QixvQkFBdkIsRUFBNkM4RixPQUE3QyxDQUFxRDlGLGFBQXJELENBQW1FLG1CQUFuRSxDQUF0QjtBQUNBLElBQU0rRixTQUFTLEdBQUcxQyxRQUFRLENBQUNyRCxhQUFULENBQXVCLG1CQUF2QixDQUFsQjs7QUFFQSxJQUFNZ0csWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2hILElBQUQsRUFBVTtBQUM3QixTQUFPLElBQUlELHdEQUFKLENBQVNDLElBQVQsRUFBZTZHLGFBQWYsRUFBOEJGLFVBQVUsQ0FBQ00sSUFBekMsQ0FBUCxDQUQ2QixDQUU3QjtBQUNELENBSEQ7O0FBS0EsSUFBTUMsT0FBTyxHQUFHLElBQUk1QiwyREFBSixDQUNkO0FBQ0VFLEVBQUFBLEtBQUssRUFBRWMsNkRBRFQ7QUFFRWIsRUFBQUEsUUFBUSxFQUFFLGtCQUFDekYsSUFBRCxFQUFVO0FBQ2xCLFFBQU1tSCxJQUFJLEdBQUdILFlBQVksQ0FBQ2hILElBQUQsQ0FBekI7QUFDQWtILElBQUFBLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQkQsSUFBSSxDQUFDRSxVQUFMLEVBQWhCO0FBQ0Q7QUFMSCxDQURjLEVBUWQsbUJBUmMsQ0FBaEI7QUFXQUgsT0FBTyxDQUFDSSxNQUFSO0FBRUEsSUFBTUMsY0FBYyxHQUFHLEVBQXZCLEVBRUE7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHLElBQUl6Qiw0REFBSixDQUFhO0FBQzVCQyxFQUFBQSxtQkFBbUIsRUFBRSxnQkFETztBQUU1QkMsRUFBQUEsa0JBQWtCLEVBQUU7QUFGUSxDQUFiLENBQWpCO0FBSUEsSUFBTXdCLFdBQVcsR0FBR3BELFFBQVEsQ0FBQ3JELGFBQVQsQ0FBdUIsbUJBQXZCLENBQXBCO0FBQ0EsSUFBTTBHLGFBQWEsR0FBR3JELFFBQVEsQ0FBQ3JELGFBQVQsQ0FBdUIsYUFBdkIsQ0FBdEI7QUFDQSxJQUFNMkcsZUFBZSxHQUFHdEQsUUFBUSxDQUFDckQsYUFBVCxDQUF1QixtQkFBdkIsQ0FBeEI7QUFDQSxJQUFNNEcsVUFBVSxHQUFHdkQsUUFBUSxDQUFDckQsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBbkIsRUFFQTs7QUFDQSxJQUFNNkcsT0FBTyxHQUFHeEQsUUFBUSxDQUFDckQsYUFBVCxDQUF1QixXQUF2QixDQUFoQjtBQUNBLElBQU04RyxTQUFTLEdBQUd6RCxRQUFRLENBQUNyRCxhQUFULENBQXVCLHNCQUF2QixDQUFsQjtBQUVBLElBQU0rRyxTQUFTLEdBQUcsSUFBSXRELGlFQUFKLENBQWtCLGFBQWxCLEVBQWlDLFVBQUN6RSxJQUFELEVBQVU7QUFDM0R3SCxFQUFBQSxRQUFRLENBQUNRLFdBQVQsQ0FBcUJoSSxJQUFyQjtBQUNELENBRmlCLENBQWxCO0FBR0ErSCxTQUFTLENBQUNuQixpQkFBVjtBQUVBLElBQU1xQixRQUFRLEdBQUcsSUFBSXhELGlFQUFKLENBQWtCLFlBQWxCLEVBQWdDLFVBQUN6RSxJQUFELEVBQVU7QUFDekQsTUFBTWtJLFFBQVEsR0FBRztBQUNmeEgsSUFBQUEsSUFBSSxFQUFFVixJQUFJLENBQUNtSSxLQURJO0FBRWZ2SCxJQUFBQSxJQUFJLEVBQUVaLElBQUksQ0FBQyxVQUFEO0FBRkssR0FBakI7QUFJQSxNQUFNbUgsSUFBSSxHQUFHSCxZQUFZLENBQUNrQixRQUFELENBQXpCO0FBRUFoQixFQUFBQSxPQUFPLENBQUNFLE9BQVIsQ0FBZ0JELElBQUksQ0FBQ0UsVUFBTCxFQUFoQjtBQUNELENBUmdCLENBQWpCO0FBVUFZLFFBQVEsQ0FBQ3JCLGlCQUFUO0FBRUEsSUFBTXdCLFlBQVksR0FBRztBQUNuQkMsRUFBQUEsWUFBWSxFQUFFLGNBREs7QUFFbkJoRyxFQUFBQSxhQUFhLEVBQUUsZUFGSTtBQUduQkUsRUFBQUEsb0JBQW9CLEVBQUUscUJBSEg7QUFJbkJjLEVBQUFBLG1CQUFtQixFQUFFLHdCQUpGO0FBS25CUixFQUFBQSxlQUFlLEVBQUUseUJBTEU7QUFNbkJDLEVBQUFBLFVBQVUsRUFBRTtBQU5PLENBQXJCOztBQVNBLElBQU13RixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUN6RyxRQUFELEVBQWM7QUFDckMsTUFBTTBHLFNBQVMsR0FBR3JHLEtBQUssQ0FBQ0MsSUFBTixDQUFXa0MsUUFBUSxDQUFDakMsZ0JBQVQsQ0FBMEJQLFFBQVEsQ0FBQ3dHLFlBQW5DLENBQVgsQ0FBbEI7QUFDQUUsRUFBQUEsU0FBUyxDQUFDN0UsT0FBVixDQUFrQixVQUFDNUIsV0FBRCxFQUFpQjtBQUNqQyxRQUFNMEcsU0FBUyxHQUFHLElBQUk1RyxpRUFBSixDQUFrQkMsUUFBbEIsRUFBNEJDLFdBQTVCLENBQWxCO0FBQ0EsUUFBTTJHLFFBQVEsR0FBRzNHLFdBQVcsQ0FBQzRHLFlBQVosQ0FBeUIsTUFBekIsQ0FBakI7QUFDQW5CLElBQUFBLGNBQWMsQ0FBQ2tCLFFBQUQsQ0FBZCxHQUEyQkQsU0FBM0I7QUFDQUEsSUFBQUEsU0FBUyxDQUFDRixnQkFBVjtBQUNELEdBTEQ7QUFNRCxDQVJEOztBQVVBQSxnQkFBZ0IsQ0FBQ0YsWUFBRCxDQUFoQjtBQUVBUixVQUFVLENBQUNwRyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0FBQ3pDLE1BQU14QixJQUFJLEdBQUd3SCxRQUFRLENBQUNtQixXQUFULEVBQWI7QUFDQVosRUFBQUEsU0FBUyxDQUFDZCxJQUFWO0FBQ0FTLEVBQUFBLGFBQWEsQ0FBQzFDLEtBQWQsR0FBc0JoRixJQUFJLENBQUNVLElBQTNCO0FBQ0FpSCxFQUFBQSxlQUFlLENBQUMzQyxLQUFoQixHQUF3QmhGLElBQUksQ0FBQ29HLEdBQTdCO0FBQ0FtQixFQUFBQSxjQUFjLENBQUNFLFdBQVcsQ0FBQ2lCLFlBQVosQ0FBeUIsTUFBekIsQ0FBRCxDQUFkLENBQWlERSxlQUFqRDtBQUNBbkIsRUFBQUEsV0FBVyxDQUFDekcsYUFBWixDQUEwQixxQkFBMUIsRUFBaURYLFNBQWpELENBQTJEdUMsR0FBM0QsQ0FBK0Qsd0JBQS9EO0FBQ0QsQ0FQRDtBQVNBa0YsU0FBUyxDQUFDdEcsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBTTtBQUN4Q3lHLEVBQUFBLFFBQVEsQ0FBQ2hCLElBQVQ7QUFDQU0sRUFBQUEsY0FBYyxDQUFDTSxPQUFPLENBQUNhLFlBQVIsQ0FBcUIsTUFBckIsQ0FBRCxDQUFkLENBQTZDRSxlQUE3QztBQUNBZixFQUFBQSxPQUFPLENBQUM3RyxhQUFSLENBQXNCLHFCQUF0QixFQUE2Q1gsU0FBN0MsQ0FBdUR1QyxHQUF2RCxDQUEyRCx3QkFBM0Q7QUFDRCxDQUpELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvZmVlZENhcmRzLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoZGF0YSwgdGVtcGxhdGUsIGhhbmRsZUNhcmRDbGljaykge1xyXG4gICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XHJcbiAgICB0aGlzLl9lbGVtZW50ID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gIH1cclxuICBjcmVhdGVDYXJkKCkge1xyXG4gICAgY29uc3QgY2FyZE5hbWUgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZmVlZF9fdGV4dFwiKTtcclxuICAgIGNvbnN0IGNhcmRJbWFnZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1mZWVkX19pbWFnZVwiKTtcclxuICAgIGNhcmROYW1lLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcclxuICAgIGNhcmRJbWFnZS5zcmMgPSB0aGlzLl9saW5rO1xyXG4gICAgY2FyZEltYWdlLmFsdCA9IHRoaXMuX25hbWU7XHJcblxyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IGNhcmRCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZmVlZF9fY2FyZC1idXR0b25cIik7XHJcbiAgICBjb25zdCBjYXJkSW1hZ2UgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZmVlZF9faW1hZ2VcIik7XHJcbiAgICBjb25zdCBjYXJkRGVsZXRlQnRuID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWZlZWRfX2RlbGV0ZS1idG5cIik7XHJcblxyXG4gICAgY2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fYWRkTGlrZUJ1dHRvbkNsaWNrTGlzdGVuZXIpO1xyXG5cclxuICAgIGNhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVQcmV2aWV3SW1hZ2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNhcmREZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX2FkZERlbGV0ZUJ1dHRvbkxpc3RlbmVyKTtcclxuICB9XHJcblxyXG4gIF9hZGRMaWtlQnV0dG9uQ2xpY2tMaXN0ZW5lciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJwaG90by1mZWVkX19jYXJkLWJ1dHRvbl9ub3QtYWN0aXZlXCIpO1xyXG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJwaG90by1mZWVkX19jYXJkLWJ1dHRvbl9hY3RpdmVcIik7XHJcbiAgfTtcclxuXHJcbiAgX2hhbmRsZVByZXZpZXdJbWFnZSgpIHtcclxuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh7IGxpbms6IHRoaXMuX2xpbmssIG5hbWU6IHRoaXMuX25hbWUgfSk7XHJcbiAgfVxyXG5cclxuICBfYWRkRGVsZXRlQnV0dG9uTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcclxuICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NldHRpbmdzLmlucHV0U2VsZWN0b3IpKTtcclxuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX3NldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIHZhbGlkYXRpb25NZXNzYWdlKSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XHJcblxyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX3NldHRpbmdzLmVycm9yQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9zZXR0aW5ncy5lcnJvckNsYXNzKTtcclxuICB9XHJcblxyXG4gIF90b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGhhc0ludmFsaWRJbnB1dCA9IGlucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+ICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpO1xyXG4gICAgaWYgKGhhc0ludmFsaWRJbnB1dCkge1xyXG4gICAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICAgIGJ1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICBidXR0b25FbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCkge1xyXG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50LCBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVyKGlucHV0RWxlbWVudCwgYnV0dG9uRWxlbWVudCkge1xyXG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUodGhpcy5faW5wdXRMaXN0LCB0aGlzLl9idXR0b25FbGVtZW50KTtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUodGhpcy5faW5wdXRMaXN0LCB0aGlzLl9idXR0b25FbGVtZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcigpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9wb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwX3Zpc2libGVcIik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF92aXNpYmxlXCIpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cFwiKSB8fCBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwX19jbG9zZS1idG5cIikpIHRoaXMuY2xvc2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUVzY0Nsb3NlID0gKGV2dCkgPT4ge1xyXG4gICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHRoaXMuY2xvc2UoKTtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBzdWJtaXRIYW5kbGVyKSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX3N1Ym1pdEhhbmRsZXIgPSBzdWJtaXRIYW5kbGVyO1xyXG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XHJcbiAgfVxyXG5cclxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHt9O1xyXG4gICAgY29uc3QgaW5wdXRzID0gWy4uLnRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9faW5wdXRcIildO1xyXG5cclxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBpbnB1dFZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGlucHV0VmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuX3N1Ym1pdEhhbmRsZXIodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0pO1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fZm9ybS5yZXNldCgpO1xyXG4gICAgc3VwZXIuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIG9wZW4gPSAoeyBsaW5rLCBuYW1lIH0pID0+IHtcclxuICAgIGNvbnN0IHBvcHVwSW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcclxuICAgIGNvbnN0IHBvcHVwUGhvdG9DYXB0aW9uID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2UtY2FwdGlvblwiKTtcclxuXHJcbiAgICBwb3B1cEltYWdlLnNyYyA9IGxpbms7XHJcbiAgICBwb3B1cEltYWdlLmFsdCA9IGxpbms7XHJcbiAgICBwb3B1cFBob3RvQ2FwdGlvbi50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwX3Zpc2libGVcIik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5faXRlbXMgPSBpdGVtcztcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcclxuICBjb25zdHJ1Y3Rvcih7IHByb2ZpbGVOYW1lU2VsZWN0b3IsIHByb2ZpbGVKb2JTZWxlY3RvciB9KSB7XHJcbiAgICB0aGlzLl9wcm9maWxlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvZmlsZU5hbWVTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9wcm9maWxlSm9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlSm9iU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiB0aGlzLl9wcm9maWxlTmFtZS50ZXh0Q29udGVudCxcclxuICAgICAgam9iOiB0aGlzLl9wcm9maWxlSm9iLnRleHRDb250ZW50LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIFNldFVzZXJJbmZvKHsgbmFtZSwgb2NjdXBhdGlvbiB9KSB7XHJcbiAgICB0aGlzLl9wcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICB0aGlzLl9wcm9maWxlSm9iLnRleHRDb250ZW50ID0gb2NjdXBhdGlvbjtcclxuICB9XHJcbn1cclxuIiwiLyogQ2FyZHMgSlMgKi9cclxuY29uc3QgZmVlZENhcmRzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3lvc2VtaXRlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxyXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQmFsZCBNb3VudGFpbnNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvYmFsZC1tb3VudGFpbnMuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxhdGVtYXJcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGF0ZW1hci5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhZ28uanBnXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZlZWRDYXJkcztcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQgcHJvZmlsZXBpY1NyYyBmcm9tIFwiLi9pbWFnZXMvcHJvZmlsZXBpYy5wbmdcIjtcclxuaW1wb3J0IGxvZ29TcmMgZnJvbSBcIi4vaW1hZ2VzL2xvZ28uc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuL3BhZ2VzL2luZGV4LmNzc1wiO1xyXG5cclxuaW1wb3J0IGZlZWRDYXJkcyBmcm9tIFwiLi9zY3JpcHRzL2ZlZWRDYXJkcy5qc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9zY3JpcHRzL0NhcmQuanNcIjtcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4vc2NyaXB0cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi9zY3JpcHRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuL3NjcmlwdHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4vc2NyaXB0cy9Vc2VySW5mby5qc1wiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi9zY3JpcHRzL1NlY3Rpb24uanNcIjtcclxuXHJcbmNvbnN0IHByb2ZpbGVQaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2ltYWdlXCIpO1xyXG5wcm9maWxlUGljLnNyYyA9IHByb2ZpbGVwaWNTcmM7XHJcblxyXG5jb25zdCBsb2dvSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbG9nb1wiKTtcclxubG9nb0ltYWdlLnNyYyA9IGxvZ29TcmM7XHJcblxyXG5jb25zdCBwb3B1cFBob3RvID0gbmV3IFBvcHVwV2l0aEltYWdlKFwiLnBvcHVwX3Bob3RvXCIpO1xyXG5wb3B1cFBob3RvLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBwaG90b1RlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaG90by1mZWVkX19jYXJkc1wiKS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZmVlZF9fY2FyZFwiKTtcclxuY29uc3QgcGhvdG9HcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1mZWVkX19ncmlkXCIpO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVDYXJkID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gbmV3IENhcmQoZGF0YSwgcGhvdG9UZW1wbGF0ZSwgcG9wdXBQaG90by5vcGVuKTtcclxuICAvL3Bob3RvR3JpZC5wcmVwZW5kKGNhcmQuY3JlYXRlQ2FyZCgpKTtcclxufTtcclxuXHJcbmNvbnN0IHNlY3Rpb24gPSBuZXcgU2VjdGlvbihcclxuICB7XHJcbiAgICBpdGVtczogZmVlZENhcmRzLFxyXG4gICAgcmVuZGVyZXI6IChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhcmQgPSBnZW5lcmF0ZUNhcmQoZGF0YSk7XHJcbiAgICAgIHNlY3Rpb24uYWRkSXRlbShjYXJkLmNyZWF0ZUNhcmQoKSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgXCIucGhvdG8tZmVlZF9fZ3JpZFwiXHJcbik7XHJcblxyXG5zZWN0aW9uLnJlbmRlcigpO1xyXG5cclxuY29uc3QgZm9ybVZhbGlkYXRvcnMgPSB7fTtcclxuXHJcbi8vRURJVCBQT1BVUFxyXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XHJcbiAgcHJvZmlsZU5hbWVTZWxlY3RvcjogXCIucHJvZmlsZV9fbmFtZVwiLFxyXG4gIHByb2ZpbGVKb2JTZWxlY3RvcjogXCIucHJvZmlsZV9fb2NjdXBhdGlvblwiLFxyXG59KTtcclxuY29uc3QgcHJvZmlsZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtX2VkaXRcIik7XHJcbmNvbnN0IGlucHV0RnVsbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWUtaW5wdXRcIik7XHJcbmNvbnN0IGlucHV0T2NjdXBhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb2NjdXBhdGlvbi1pbnB1dFwiKTtcclxuY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIik7XHJcblxyXG4vL0FERCBQT1BVUFxyXG5jb25zdCBhZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZm9ybVwiKTtcclxuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIpO1xyXG5cclxuY29uc3QgcG9wdXBFZGl0ID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIucG9wdXBfZWRpdFwiLCAoZGF0YSkgPT4ge1xyXG4gIHVzZXJJbmZvLlNldFVzZXJJbmZvKGRhdGEpO1xyXG59KTtcclxucG9wdXBFZGl0LnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBwb3B1cEFkZCA9IG5ldyBQb3B1cFdpdGhGb3JtKFwiLnBvcHVwX2FkZFwiLCAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IGNhcmREYXRhID0ge1xyXG4gICAgbmFtZTogZGF0YS50aXRsZSxcclxuICAgIGxpbms6IGRhdGFbXCJpbWctbGlua1wiXSxcclxuICB9O1xyXG4gIGNvbnN0IGNhcmQgPSBnZW5lcmF0ZUNhcmQoY2FyZERhdGEpO1xyXG5cclxuICBzZWN0aW9uLmFkZEl0ZW0oY2FyZC5jcmVhdGVDYXJkKCkpO1xyXG59KTtcclxuXHJcbnBvcHVwQWRkLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBmb3JtU2V0dGluZ3MgPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiBcIi5wb3B1cF9fZm9ybVwiLFxyXG4gIGlucHV0U2VsZWN0b3I6IFwiLnBvcHVwX19pbnB1dFwiLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5wb3B1cF9fc2F2ZS1idXR0b25cIixcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwX19idXR0b25fZGlzYWJsZWRcIixcclxuICBpbnB1dEVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0X3R5cGVfZXJyb3JcIixcclxuICBlcnJvckNsYXNzOiBcInBvcHVwX19lcnJvcl92aXNpYmxlXCIsXHJcbn07XHJcblxyXG5jb25zdCBlbmFibGVWYWxpZGF0aW9uID0gKHNldHRpbmdzKSA9PiB7XHJcbiAgY29uc3QgZm9ybXNMaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNldHRpbmdzLmZvcm1TZWxlY3RvcikpO1xyXG4gIGZvcm1zTGlzdC5mb3JFYWNoKChmb3JtRWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3Ioc2V0dGluZ3MsIGZvcm1FbGVtZW50KTtcclxuICAgIGNvbnN0IGZvcm1UeXBlID0gZm9ybUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKTtcclxuICAgIGZvcm1WYWxpZGF0b3JzW2Zvcm1UeXBlXSA9IHZhbGlkYXRvcjtcclxuICAgIHZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5lbmFibGVWYWxpZGF0aW9uKGZvcm1TZXR0aW5ncyk7XHJcblxyXG5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XHJcbiAgcG9wdXBFZGl0Lm9wZW4oKTtcclxuICBpbnB1dEZ1bGxOYW1lLnZhbHVlID0gZGF0YS5uYW1lO1xyXG4gIGlucHV0T2NjdXBhdGlvbi52YWx1ZSA9IGRhdGEuam9iO1xyXG4gIGZvcm1WYWxpZGF0b3JzW3Byb2ZpbGVGb3JtLmdldEF0dHJpYnV0ZShcIm5hbWVcIildLnJlc2V0VmFsaWRhdGlvbigpO1xyXG4gIHByb2ZpbGVGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX3NhdmUtYnV0dG9uXCIpLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9fYnV0dG9uX2Rpc2FibGVkXCIpO1xyXG59KTtcclxuXHJcbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHBvcHVwQWRkLm9wZW4oKTtcclxuICBmb3JtVmFsaWRhdG9yc1thZGRGb3JtLmdldEF0dHJpYnV0ZShcIm5hbWVcIildLnJlc2V0VmFsaWRhdGlvbigpO1xyXG4gIGFkZEZvcm0ucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fc2F2ZS1idXR0b25cIikuY2xhc3NMaXN0LmFkZChcInBvcHVwX19idXR0b25fZGlzYWJsZWRcIik7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiQ2FyZCIsImRhdGEiLCJ0ZW1wbGF0ZSIsImhhbmRsZUNhcmRDbGljayIsImV2ZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX2VsZW1lbnQiLCJyZW1vdmUiLCJfbmFtZSIsIm5hbWUiLCJfbGluayIsImxpbmsiLCJjbG9uZU5vZGUiLCJfaGFuZGxlQ2FyZENsaWNrIiwiY2FyZE5hbWUiLCJxdWVyeVNlbGVjdG9yIiwiY2FyZEltYWdlIiwidGV4dENvbnRlbnQiLCJzcmMiLCJhbHQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJjYXJkQnV0dG9uIiwiY2FyZERlbGV0ZUJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJfYWRkTGlrZUJ1dHRvbkNsaWNrTGlzdGVuZXIiLCJfaGFuZGxlUHJldmlld0ltYWdlIiwiX2FkZERlbGV0ZUJ1dHRvbkxpc3RlbmVyIiwiRm9ybVZhbGlkYXRvciIsInNldHRpbmdzIiwiZm9ybUVsZW1lbnQiLCJfc2V0dGluZ3MiLCJfZm9ybUVsZW1lbnQiLCJfaW5wdXRMaXN0IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0U2VsZWN0b3IiLCJfYnV0dG9uRWxlbWVudCIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5wdXRFbGVtZW50IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJlcnJvckVsZW1lbnQiLCJpZCIsImFkZCIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJpbnB1dExpc3QiLCJidXR0b25FbGVtZW50IiwiaGFzSW52YWxpZElucHV0Iiwic29tZSIsInZhbGlkaXR5IiwidmFsaWQiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiZGlzYWJsZWQiLCJfc2hvd0lucHV0RXJyb3IiLCJfaGlkZUlucHV0RXJyb3IiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJmb3JFYWNoIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIl9zZXRFdmVudExpc3RlbmVyIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiZXZ0Iiwia2V5IiwiY2xvc2UiLCJfcG9wdXAiLCJkb2N1bWVudCIsIl9oYW5kbGVFc2NDbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250YWlucyIsIlBvcHVwV2l0aEZvcm0iLCJzdWJtaXRIYW5kbGVyIiwiX3N1Ym1pdEhhbmRsZXIiLCJfZm9ybSIsImlucHV0VmFsdWVzIiwiaW5wdXRzIiwiaW5wdXQiLCJ2YWx1ZSIsIl9nZXRJbnB1dFZhbHVlcyIsInJlc2V0IiwiUG9wdXBXaXRoSW1hZ2UiLCJwb3B1cEltYWdlIiwicG9wdXBQaG90b0NhcHRpb24iLCJTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImVsZW1lbnQiLCJwcmVwZW5kIiwiVXNlckluZm8iLCJwcm9maWxlTmFtZVNlbGVjdG9yIiwicHJvZmlsZUpvYlNlbGVjdG9yIiwiX3Byb2ZpbGVOYW1lIiwiX3Byb2ZpbGVKb2IiLCJqb2IiLCJvY2N1cGF0aW9uIiwiZmVlZENhcmRzIiwicHJvZmlsZXBpY1NyYyIsImxvZ29TcmMiLCJwcm9maWxlUGljIiwibG9nb0ltYWdlIiwicG9wdXBQaG90byIsInNldEV2ZW50TGlzdGVuZXJzIiwicGhvdG9UZW1wbGF0ZSIsImNvbnRlbnQiLCJwaG90b0dyaWQiLCJnZW5lcmF0ZUNhcmQiLCJvcGVuIiwic2VjdGlvbiIsImNhcmQiLCJhZGRJdGVtIiwiY3JlYXRlQ2FyZCIsInJlbmRlciIsImZvcm1WYWxpZGF0b3JzIiwidXNlckluZm8iLCJwcm9maWxlRm9ybSIsImlucHV0RnVsbE5hbWUiLCJpbnB1dE9jY3VwYXRpb24iLCJlZGl0QnV0dG9uIiwiYWRkRm9ybSIsImFkZEJ1dHRvbiIsInBvcHVwRWRpdCIsIlNldFVzZXJJbmZvIiwicG9wdXBBZGQiLCJjYXJkRGF0YSIsInRpdGxlIiwiZm9ybVNldHRpbmdzIiwiZm9ybVNlbGVjdG9yIiwiZW5hYmxlVmFsaWRhdGlvbiIsImZvcm1zTGlzdCIsInZhbGlkYXRvciIsImZvcm1UeXBlIiwiZ2V0QXR0cmlidXRlIiwiZ2V0VXNlckluZm8iLCJyZXNldFZhbGlkYXRpb24iXSwic291cmNlUm9vdCI6IiJ9