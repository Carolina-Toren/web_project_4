/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/compenents/Card.js":
/*!****************************************!*\
  !*** ./src/scripts/compenents/Card.js ***!
  \****************************************/
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

/***/ "./src/scripts/compenents/FormValidator.js":
/*!*************************************************!*\
  !*** ./src/scripts/compenents/FormValidator.js ***!
  \*************************************************/
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
    value: function _toggleButtonState() {
      var hasInvalidInput = this._inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });

      if (hasInvalidInput) {
        this._buttonElement.classList.add(this._settings.inactiveButtonClass);

        this._buttonElement.disabled = true;
      } else {
        this._buttonElement.classList.remove(this._settings.inactiveButtonClass);

        this._buttonElement.disabled = false;
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
    value: function _setEventListener() {
      var _this = this;

      this._toggleButtonState();

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

      this._toggleButtonState();

      this._inputList.forEach(function (inputElement) {
        _this2._hideInputError(inputElement);
      });
    }
  }]);

  return FormValidator;
}();



/***/ }),

/***/ "./src/scripts/compenents/Popup.js":
/*!*****************************************!*\
  !*** ./src/scripts/compenents/Popup.js ***!
  \*****************************************/
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

/***/ "./src/scripts/compenents/PopupWithForm.js":
/*!*************************************************!*\
  !*** ./src/scripts/compenents/PopupWithForm.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithForm; }
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/scripts/compenents/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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
    _this._inputs = _this._popup.querySelectorAll(".popup__input");
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var inputValues = {};

      this._inputs.forEach(function (input) {
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

/***/ "./src/scripts/compenents/PopupWithImage.js":
/*!**************************************************!*\
  !*** ./src/scripts/compenents/PopupWithImage.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithImage; }
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/scripts/compenents/Popup.js");
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

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupSelector) {
    var _thisSuper, _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);

    _defineProperty(_assertThisInitialized(_this), "open", function (_ref) {
      var link = _ref.link,
          name = _ref.name;
      _this._popupImage.src = link;
      _this._popupImage.alt = link;
      _this._popupPhotoCaption.textContent = name;

      _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(PopupWithImage.prototype)), "open", _thisSuper).call(_thisSuper);
    });

    _this._popupImage = _this._popup.querySelector(".popup__image");
    _this._popupPhotoCaption = _this._popup.querySelector(".popup__image-caption");
    return _this;
  }

  return _createClass(PopupWithImage);
}(_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/scripts/compenents/Section.js":
/*!*******************************************!*\
  !*** ./src/scripts/compenents/Section.js ***!
  \*******************************************/
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

/***/ "./src/scripts/compenents/UserInfo.js":
/*!********************************************!*\
  !*** ./src/scripts/compenents/UserInfo.js ***!
  \********************************************/
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
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
          occupation = _ref2.occupation;
      this._profileName.textContent = name;
      this._profileJob.textContent = occupation;
    }
  }]);

  return UserInfo;
}();



/***/ }),

/***/ "./src/scripts/utils/contants.js":
/*!***************************************!*\
  !*** ./src/scripts/utils/contants.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "profilePic": function() { return /* binding */ profilePic; },
/* harmony export */   "logoImage": function() { return /* binding */ logoImage; },
/* harmony export */   "photoTemplate": function() { return /* binding */ photoTemplate; },
/* harmony export */   "profileForm": function() { return /* binding */ profileForm; },
/* harmony export */   "inputFullName": function() { return /* binding */ inputFullName; },
/* harmony export */   "inputOccupation": function() { return /* binding */ inputOccupation; },
/* harmony export */   "editButton": function() { return /* binding */ editButton; },
/* harmony export */   "addForm": function() { return /* binding */ addForm; },
/* harmony export */   "addButton": function() { return /* binding */ addButton; },
/* harmony export */   "formValidators": function() { return /* binding */ formValidators; },
/* harmony export */   "formSettings": function() { return /* binding */ formSettings; },
/* harmony export */   "feedCards": function() { return /* binding */ feedCards; }
/* harmony export */ });
var profilePic = document.querySelector(".profile__image");
var logoImage = document.querySelector(".header__logo");
var photoTemplate = document.querySelector("#photo-feed__cards").content.querySelector(".photo-feed__card");
var profileForm = document.querySelector(".popup__form_edit");
var inputFullName = document.querySelector("#name-input");
var inputOccupation = document.querySelector("#occupation-input");
var editButton = document.querySelector(".profile__edit-button");
var addForm = document.querySelector("#add_form");
var addButton = document.querySelector(".profile__add-button");
var formValidators = {};
var formSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};
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

/***/ "./src/images/profilepic.gif":
/*!***********************************!*\
  !*** ./src/images/profilepic.gif ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "970d1e6d0bb5c658f3e9.gif";

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
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_profilepic_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/profilepic.gif */ "./src/images/profilepic.gif");
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/logo.svg */ "./src/images/logo.svg");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/utils/contants */ "./src/scripts/utils/contants.js");
/* harmony import */ var _scripts_compenents_Card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/compenents/Card.js */ "./src/scripts/compenents/Card.js");
/* harmony import */ var _scripts_compenents_FormValidator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/compenents/FormValidator.js */ "./src/scripts/compenents/FormValidator.js");
/* harmony import */ var _scripts_compenents_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/compenents/PopupWithImage.js */ "./src/scripts/compenents/PopupWithImage.js");
/* harmony import */ var _scripts_compenents_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/compenents/PopupWithForm.js */ "./src/scripts/compenents/PopupWithForm.js");
/* harmony import */ var _scripts_compenents_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scripts/compenents/UserInfo.js */ "./src/scripts/compenents/UserInfo.js");
/* harmony import */ var _scripts_compenents_Section_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scripts/compenents/Section.js */ "./src/scripts/compenents/Section.js");










_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_3__.profilePic.src = _images_profilepic_gif__WEBPACK_IMPORTED_MODULE_0__;
_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_3__.logoImage.src = _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__;
var popupPhoto = new _scripts_compenents_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__["default"](".popup_photo");
popupPhoto.setEventListeners();

var generateCard = function generateCard(data) {
  return new _scripts_compenents_Card_js__WEBPACK_IMPORTED_MODULE_4__["default"](data, _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_3__.photoTemplate, popupPhoto.open);
};

var section = new _scripts_compenents_Section_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
  items: _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_3__.feedCards,
  renderer: function renderer(data) {
    var card = generateCard(data);
    section.addItem(card.createCard());
  }
}, ".photo-feed__grid");
section.render();
var userInfo = new _scripts_compenents_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
  profileNameSelector: ".profile__name",
  profileJobSelector: ".profile__occupation"
});
var popupEdit = new _scripts_compenents_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_7__["default"](".popup_edit", function (data) {
  userInfo.setUserInfo(data);
});
popupEdit.setEventListeners();
var popupAdd = new _scripts_compenents_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_7__["default"](".popup_add", function (data) {
  var cardData = {
    name: data.title,
    link: data["img-link"]
  };
  var card = generateCard(cardData);
  section.addItem(card.createCard());
});
popupAdd.setEventListeners();

var enableValidation = function enableValidation(settings) {
  var formsList = Array.from(document.querySelectorAll(settings.formSelector));
  formsList.forEach(function (formElement) {
    var validator = new _scripts_compenents_FormValidator_js__WEBPACK_IMPORTED_MODULE_5__["default"](settings, formElement);
    var formType = formElement.getAttribute("name");
    _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_3__.formValidators[formType] = validator;
    validator.enableValidation();
  });
};

enableValidation(_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_3__.formSettings);
_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_3__.editButton.addEventListener("click", function () {
  var data = userInfo.getUserInfo();
  popupEdit.open();
  _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_3__.inputFullName.value = data.name;
  _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_3__.inputOccupation.value = data.job;
  _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_3__.formValidators[_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_3__.profileForm.getAttribute("name")].resetValidation();
});
_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_3__.addButton.addEventListener("click", function () {
  popupAdd.open();
  _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_3__.formValidators[_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_3__.addForm.getAttribute("name")].resetValidation();
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVQsRUFBYjtBQUNBVixFQUFBQSxTQUFTLENBQUNQLElBQVY7QUFDQWQsRUFBQUEsd0VBQUEsR0FBc0J6RyxJQUFJLENBQUNVLElBQTNCO0FBQ0FnRyxFQUFBQSwwRUFBQSxHQUF3QjFHLElBQUksQ0FBQ2tHLEdBQTdCO0FBQ0FZLEVBQUFBLG1FQUFjLENBQUNOLDZFQUFBLENBQXlCLE1BQXpCLENBQUQsQ0FBZCxDQUFpRGlDLGVBQWpEO0FBQ0QsQ0FORDtBQVFBNUIsK0VBQUEsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBTTtBQUN4Q21CLEVBQUFBLFFBQVEsQ0FBQ1QsSUFBVDtBQUNBVCxFQUFBQSxtRUFBYyxDQUFDRix5RUFBQSxDQUFxQixNQUFyQixDQUFELENBQWQsQ0FBNkM2QixlQUE3QztBQUNELENBSEQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy9jb21wZW5lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL2NvbXBlbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvY29tcGVuZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvY29tcGVuZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy9jb21wZW5lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy9jb21wZW5lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL2NvbXBlbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL3V0aWxzL2NvbnRhbnRzLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoZGF0YSwgdGVtcGxhdGUsIGhhbmRsZUNhcmRDbGljaykge1xyXG4gICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XHJcbiAgICB0aGlzLl9lbGVtZW50ID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gIH1cclxuICBjcmVhdGVDYXJkKCkge1xyXG4gICAgY29uc3QgY2FyZE5hbWUgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZmVlZF9fdGV4dFwiKTtcclxuICAgIGNvbnN0IGNhcmRJbWFnZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1mZWVkX19pbWFnZVwiKTtcclxuICAgIGNhcmROYW1lLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcclxuICAgIGNhcmRJbWFnZS5zcmMgPSB0aGlzLl9saW5rO1xyXG4gICAgY2FyZEltYWdlLmFsdCA9IHRoaXMuX25hbWU7XHJcblxyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IGNhcmRCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZmVlZF9fY2FyZC1idXR0b25cIik7XHJcbiAgICBjb25zdCBjYXJkSW1hZ2UgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZmVlZF9faW1hZ2VcIik7XHJcbiAgICBjb25zdCBjYXJkRGVsZXRlQnRuID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWZlZWRfX2RlbGV0ZS1idG5cIik7XHJcblxyXG4gICAgY2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fYWRkTGlrZUJ1dHRvbkNsaWNrTGlzdGVuZXIpO1xyXG5cclxuICAgIGNhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVQcmV2aWV3SW1hZ2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNhcmREZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX2FkZERlbGV0ZUJ1dHRvbkxpc3RlbmVyKTtcclxuICB9XHJcblxyXG4gIF9hZGRMaWtlQnV0dG9uQ2xpY2tMaXN0ZW5lciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJwaG90by1mZWVkX19jYXJkLWJ1dHRvbl9ub3QtYWN0aXZlXCIpO1xyXG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJwaG90by1mZWVkX19jYXJkLWJ1dHRvbl9hY3RpdmVcIik7XHJcbiAgfTtcclxuXHJcbiAgX2hhbmRsZVByZXZpZXdJbWFnZSgpIHtcclxuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh7IGxpbms6IHRoaXMuX2xpbmssIG5hbWU6IHRoaXMuX25hbWUgfSk7XHJcbiAgfVxyXG5cclxuICBfYWRkRGVsZXRlQnV0dG9uTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcclxuICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NldHRpbmdzLmlucHV0U2VsZWN0b3IpKTtcclxuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX3NldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIHZhbGlkYXRpb25NZXNzYWdlKSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XHJcblxyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX3NldHRpbmdzLmVycm9yQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9zZXR0aW5ncy5lcnJvckNsYXNzKTtcclxuICB9XHJcblxyXG4gIF90b2dnbGVCdXR0b25TdGF0ZSgpIHtcclxuICAgIGNvbnN0IGhhc0ludmFsaWRJbnB1dCA9IHRoaXMuX2lucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+ICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpO1xyXG4gICAgaWYgKGhhc0ludmFsaWRJbnB1dCkge1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCkge1xyXG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50LCBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVyKCkge1xyXG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUodGhpcy5faW5wdXRMaXN0LCB0aGlzLl9idXR0b25FbGVtZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcigpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF92aXNpYmxlXCIpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfdmlzaWJsZVwiKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcclxuICAgICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBcIikgfHwgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cF9fY2xvc2UtYnRuXCIpKSB0aGlzLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVFc2NDbG9zZSA9IChldnQpID0+IHtcclxuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB0aGlzLmNsb3NlKCk7XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvciwgc3VibWl0SGFuZGxlcikge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9zdWJtaXRIYW5kbGVyID0gc3VibWl0SGFuZGxlcjtcclxuICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xyXG4gICAgdGhpcy5faW5wdXRzID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9faW5wdXRcIik7XHJcbiAgfVxyXG5cclxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHt9O1xyXG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIGlucHV0VmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaW5wdXRWYWx1ZXM7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5fc3VibWl0SGFuZGxlcih0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9mb3JtLnJlc2V0KCk7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fcG9wdXBJbWFnZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltYWdlXCIpO1xyXG4gICAgdGhpcy5fcG9wdXBQaG90b0NhcHRpb24gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZS1jYXB0aW9uXCIpO1xyXG4gIH1cclxuXHJcbiAgb3BlbiA9ICh7IGxpbmssIG5hbWUgfSkgPT4ge1xyXG4gICAgdGhpcy5fcG9wdXBJbWFnZS5zcmMgPSBsaW5rO1xyXG4gICAgdGhpcy5fcG9wdXBJbWFnZS5hbHQgPSBsaW5rO1xyXG4gICAgdGhpcy5fcG9wdXBQaG90b0NhcHRpb24udGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgc3VwZXIub3BlbigpO1xyXG4gIH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBhZGRJdGVtKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoZGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlcihkYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgY29uc3RydWN0b3IoeyBwcm9maWxlTmFtZVNlbGVjdG9yLCBwcm9maWxlSm9iU2VsZWN0b3IgfSkge1xyXG4gICAgdGhpcy5fcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVOYW1lU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fcHJvZmlsZUpvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvZmlsZUpvYlNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogdGhpcy5fcHJvZmlsZU5hbWUudGV4dENvbnRlbnQsXHJcbiAgICAgIGpvYjogdGhpcy5fcHJvZmlsZUpvYi50ZXh0Q29udGVudCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRVc2VySW5mbyh7IG5hbWUsIG9jY3VwYXRpb24gfSkge1xyXG4gICAgdGhpcy5fcHJvZmlsZU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgdGhpcy5fcHJvZmlsZUpvYi50ZXh0Q29udGVudCA9IG9jY3VwYXRpb247XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBwcm9maWxlUGljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19pbWFnZVwiKTtcclxuZXhwb3J0IGNvbnN0IGxvZ29JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19sb2dvXCIpO1xyXG5leHBvcnQgY29uc3QgcGhvdG9UZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvdG8tZmVlZF9fY2FyZHNcIikuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWZlZWRfX2NhcmRcIik7XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZmlsZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtX2VkaXRcIik7XHJcbmV4cG9ydCBjb25zdCBpbnB1dEZ1bGxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lLWlucHV0XCIpO1xyXG5leHBvcnQgY29uc3QgaW5wdXRPY2N1cGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvY2N1cGF0aW9uLWlucHV0XCIpO1xyXG5leHBvcnQgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIik7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX2Zvcm1cIik7XHJcbmV4cG9ydCBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybVZhbGlkYXRvcnMgPSB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtU2V0dGluZ3MgPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiBcIi5wb3B1cF9fZm9ybVwiLFxyXG4gIGlucHV0U2VsZWN0b3I6IFwiLnBvcHVwX19pbnB1dFwiLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5wb3B1cF9fc2F2ZS1idXR0b25cIixcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwX19idXR0b25fZGlzYWJsZWRcIixcclxuICBpbnB1dEVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0X3R5cGVfZXJyb3JcIixcclxuICBlcnJvckNsYXNzOiBcInBvcHVwX19lcnJvcl92aXNpYmxlXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmVlZENhcmRzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3lvc2VtaXRlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxyXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQmFsZCBNb3VudGFpbnNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvYmFsZC1tb3VudGFpbnMuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxhdGVtYXJcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGF0ZW1hci5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhZ28uanBnXCIsXHJcbiAgfSxcclxuXTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQgcHJvZmlsZXBpY1NyYyBmcm9tIFwiLi4vaW1hZ2VzL3Byb2ZpbGVwaWMuZ2lmXCI7XHJcbmltcG9ydCBsb2dvU3JjIGZyb20gXCIuLi9pbWFnZXMvbG9nby5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCB7XHJcbiAgcHJvZmlsZVBpYyxcclxuICBsb2dvSW1hZ2UsXHJcbiAgcGhvdG9UZW1wbGF0ZSxcclxuICBwcm9maWxlRm9ybSxcclxuICBpbnB1dEZ1bGxOYW1lLFxyXG4gIGlucHV0T2NjdXBhdGlvbixcclxuICBlZGl0QnV0dG9uLFxyXG4gIGFkZEZvcm0sXHJcbiAgYWRkQnV0dG9uLFxyXG4gIGZvcm1TZXR0aW5ncyxcclxuICBmZWVkQ2FyZHMsXHJcbiAgZm9ybVZhbGlkYXRvcnMsXHJcbn0gZnJvbSBcIi4uL3NjcmlwdHMvdXRpbHMvY29udGFudHNcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL3NjcmlwdHMvY29tcGVuZW50cy9DYXJkLmpzXCI7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9zY3JpcHRzL2NvbXBlbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL3NjcmlwdHMvY29tcGVuZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vc2NyaXB0cy9jb21wZW5lbnRzL1BvcHVwV2l0aEZvcm0uanNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9zY3JpcHRzL2NvbXBlbmVudHMvVXNlckluZm8uanNcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL3NjcmlwdHMvY29tcGVuZW50cy9TZWN0aW9uLmpzXCI7XHJcblxyXG5wcm9maWxlUGljLnNyYyA9IHByb2ZpbGVwaWNTcmM7XHJcblxyXG5sb2dvSW1hZ2Uuc3JjID0gbG9nb1NyYztcclxuXHJcbmNvbnN0IHBvcHVwUGhvdG8gPSBuZXcgUG9wdXBXaXRoSW1hZ2UoXCIucG9wdXBfcGhvdG9cIik7XHJcbnBvcHVwUGhvdG8uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IGdlbmVyYXRlQ2FyZCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBDYXJkKGRhdGEsIHBob3RvVGVtcGxhdGUsIHBvcHVwUGhvdG8ub3Blbik7XHJcbn07XHJcblxyXG5jb25zdCBzZWN0aW9uID0gbmV3IFNlY3Rpb24oXHJcbiAge1xyXG4gICAgaXRlbXM6IGZlZWRDYXJkcyxcclxuICAgIHJlbmRlcmVyOiAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBjYXJkID0gZ2VuZXJhdGVDYXJkKGRhdGEpO1xyXG4gICAgICBzZWN0aW9uLmFkZEl0ZW0oY2FyZC5jcmVhdGVDYXJkKCkpO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIFwiLnBob3RvLWZlZWRfX2dyaWRcIlxyXG4pO1xyXG5cclxuc2VjdGlvbi5yZW5kZXIoKTtcclxuXHJcbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcclxuICBwcm9maWxlTmFtZVNlbGVjdG9yOiBcIi5wcm9maWxlX19uYW1lXCIsXHJcbiAgcHJvZmlsZUpvYlNlbGVjdG9yOiBcIi5wcm9maWxlX19vY2N1cGF0aW9uXCIsXHJcbn0pO1xyXG5cclxuY29uc3QgcG9wdXBFZGl0ID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIucG9wdXBfZWRpdFwiLCAoZGF0YSkgPT4ge1xyXG4gIHVzZXJJbmZvLnNldFVzZXJJbmZvKGRhdGEpO1xyXG59KTtcclxucG9wdXBFZGl0LnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBwb3B1cEFkZCA9IG5ldyBQb3B1cFdpdGhGb3JtKFwiLnBvcHVwX2FkZFwiLCAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IGNhcmREYXRhID0ge1xyXG4gICAgbmFtZTogZGF0YS50aXRsZSxcclxuICAgIGxpbms6IGRhdGFbXCJpbWctbGlua1wiXSxcclxuICB9O1xyXG4gIGNvbnN0IGNhcmQgPSBnZW5lcmF0ZUNhcmQoY2FyZERhdGEpO1xyXG5cclxuICBzZWN0aW9uLmFkZEl0ZW0oY2FyZC5jcmVhdGVDYXJkKCkpO1xyXG59KTtcclxuXHJcbnBvcHVwQWRkLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBlbmFibGVWYWxpZGF0aW9uID0gKHNldHRpbmdzKSA9PiB7XHJcbiAgY29uc3QgZm9ybXNMaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNldHRpbmdzLmZvcm1TZWxlY3RvcikpO1xyXG4gIGZvcm1zTGlzdC5mb3JFYWNoKChmb3JtRWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3Ioc2V0dGluZ3MsIGZvcm1FbGVtZW50KTtcclxuICAgIGNvbnN0IGZvcm1UeXBlID0gZm9ybUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKTtcclxuICAgIGZvcm1WYWxpZGF0b3JzW2Zvcm1UeXBlXSA9IHZhbGlkYXRvcjtcclxuICAgIHZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5lbmFibGVWYWxpZGF0aW9uKGZvcm1TZXR0aW5ncyk7XHJcblxyXG5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XHJcbiAgcG9wdXBFZGl0Lm9wZW4oKTtcclxuICBpbnB1dEZ1bGxOYW1lLnZhbHVlID0gZGF0YS5uYW1lO1xyXG4gIGlucHV0T2NjdXBhdGlvbi52YWx1ZSA9IGRhdGEuam9iO1xyXG4gIGZvcm1WYWxpZGF0b3JzW3Byb2ZpbGVGb3JtLmdldEF0dHJpYnV0ZShcIm5hbWVcIildLnJlc2V0VmFsaWRhdGlvbigpO1xyXG59KTtcclxuXHJcbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHBvcHVwQWRkLm9wZW4oKTtcclxuICBmb3JtVmFsaWRhdG9yc1thZGRGb3JtLmdldEF0dHJpYnV0ZShcIm5hbWVcIildLnJlc2V0VmFsaWRhdGlvbigpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIkNhcmQiLCJkYXRhIiwidGVtcGxhdGUiLCJoYW5kbGVDYXJkQ2xpY2siLCJldmVudCIsInRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIl9lbGVtZW50IiwicmVtb3ZlIiwiX25hbWUiLCJuYW1lIiwiX2xpbmsiLCJsaW5rIiwiY2xvbmVOb2RlIiwiX2hhbmRsZUNhcmRDbGljayIsImNhcmROYW1lIiwicXVlcnlTZWxlY3RvciIsImNhcmRJbWFnZSIsInRleHRDb250ZW50Iiwic3JjIiwiYWx0IiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiY2FyZEJ1dHRvbiIsImNhcmREZWxldGVCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiX2FkZExpa2VCdXR0b25DbGlja0xpc3RlbmVyIiwiX2hhbmRsZVByZXZpZXdJbWFnZSIsIl9hZGREZWxldGVCdXR0b25MaXN0ZW5lciIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbGVtZW50IiwiX3NldHRpbmdzIiwiX2Zvcm1FbGVtZW50IiwiX2lucHV0TGlzdCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dFNlbGVjdG9yIiwiX2J1dHRvbkVsZW1lbnQiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImlucHV0RWxlbWVudCIsInZhbGlkYXRpb25NZXNzYWdlIiwiZXJyb3JFbGVtZW50IiwiaWQiLCJhZGQiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiaGFzSW52YWxpZElucHV0Iiwic29tZSIsInZhbGlkaXR5IiwidmFsaWQiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiZGlzYWJsZWQiLCJfc2hvd0lucHV0RXJyb3IiLCJfaGlkZUlucHV0RXJyb3IiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJmb3JFYWNoIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIl9zZXRFdmVudExpc3RlbmVyIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiZXZ0Iiwia2V5IiwiY2xvc2UiLCJfcG9wdXAiLCJkb2N1bWVudCIsIl9oYW5kbGVFc2NDbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250YWlucyIsIlBvcHVwV2l0aEZvcm0iLCJzdWJtaXRIYW5kbGVyIiwiX3N1Ym1pdEhhbmRsZXIiLCJfZm9ybSIsIl9pbnB1dHMiLCJpbnB1dFZhbHVlcyIsImlucHV0IiwidmFsdWUiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJyZXNldCIsIlBvcHVwV2l0aEltYWdlIiwiX3BvcHVwSW1hZ2UiLCJfcG9wdXBQaG90b0NhcHRpb24iLCJTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImVsZW1lbnQiLCJwcmVwZW5kIiwiVXNlckluZm8iLCJwcm9maWxlTmFtZVNlbGVjdG9yIiwicHJvZmlsZUpvYlNlbGVjdG9yIiwiX3Byb2ZpbGVOYW1lIiwiX3Byb2ZpbGVKb2IiLCJqb2IiLCJvY2N1cGF0aW9uIiwicHJvZmlsZVBpYyIsImxvZ29JbWFnZSIsInBob3RvVGVtcGxhdGUiLCJjb250ZW50IiwicHJvZmlsZUZvcm0iLCJpbnB1dEZ1bGxOYW1lIiwiaW5wdXRPY2N1cGF0aW9uIiwiZWRpdEJ1dHRvbiIsImFkZEZvcm0iLCJhZGRCdXR0b24iLCJmb3JtVmFsaWRhdG9ycyIsImZvcm1TZXR0aW5ncyIsImZvcm1TZWxlY3RvciIsImZlZWRDYXJkcyIsInByb2ZpbGVwaWNTcmMiLCJsb2dvU3JjIiwicG9wdXBQaG90byIsInNldEV2ZW50TGlzdGVuZXJzIiwiZ2VuZXJhdGVDYXJkIiwib3BlbiIsInNlY3Rpb24iLCJjYXJkIiwiYWRkSXRlbSIsImNyZWF0ZUNhcmQiLCJyZW5kZXIiLCJ1c2VySW5mbyIsInBvcHVwRWRpdCIsInNldFVzZXJJbmZvIiwicG9wdXBBZGQiLCJjYXJkRGF0YSIsInRpdGxlIiwiZW5hYmxlVmFsaWRhdGlvbiIsImZvcm1zTGlzdCIsInZhbGlkYXRvciIsImZvcm1UeXBlIiwiZ2V0QXR0cmlidXRlIiwiZ2V0VXNlckluZm8iLCJyZXNldFZhbGlkYXRpb24iXSwic291cmNlUm9vdCI6IiJ9