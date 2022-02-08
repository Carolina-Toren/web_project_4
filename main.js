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

var Card = /*#__PURE__*/function () {
  function Card(data, userId, template, handleCardClick, handleDeleteCard, handleDeleteImgForm, handleLikeClick) {
    _classCallCheck(this, Card);

    this._name = data.name;
    this._link = data.link;
    this._element = template.cloneNode(true);
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleDeleteImgForm = handleDeleteImgForm;
    this._id = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._likeCounter = data.likes;
    this._handleLikeClick = handleLikeClick;
  }

  _createClass(Card, [{
    key: "createCard",
    value: function createCard() {
      var _this = this;

      var cardName = this._element.querySelector(".photo-feed__text");

      var cardImage = this._element.querySelector(".photo-feed__image");

      var cardBtn = this._element.querySelector(".photo-feed__card-button");

      cardName.textContent = this._name;
      cardImage.src = this._link;
      cardImage.alt = this._name;

      this._setEventListeners();

      if (this._userId !== this._ownerId) this._element.querySelector(".photo-feed__delete-btn").style.display = "none";
      this._element.querySelector(".photo-feed__card-button-counter").textContent = this._likeCounter.length;

      var cardIsLiked = this._likeCounter.some(function (person) {
        return person._id === _this._userId;
      });

      if (cardIsLiked) {
        cardBtn.classList.toggle("photo-feed__card-button_not-active");
        cardBtn.classList.toggle("photo-feed__card-button_active");
      }

      return this._element;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;

      var cardBtn = this._element.querySelector(".photo-feed__card-button");

      var likeCounter = this._element.querySelector(".photo-feed__card-button-counter");

      cardBtn.addEventListener("click", function () {
        if (cardBtn.classList.contains("photo-feed__card-button_not-active")) {
          _this2._handleLikeClick(_this2._id, cardBtn, true, likeCounter);
        } else _this2._handleLikeClick(_this2._id, cardBtn, false, likeCounter);
      });

      this._element.querySelector(".photo-feed__image").addEventListener("click", function () {
        _this2._handlePreviewImage();
      });

      this._element.querySelector(".photo-feed__delete-btn").addEventListener("click", function () {
        _this2._handleDeleteCard();

        _this2._handleDeleteImgForm(_this2._id, _this2._element);
      });
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

/***/ "./src/scripts/compenents/PopupDeleteCard.js":
/*!***************************************************!*\
  !*** ./src/scripts/compenents/PopupDeleteCard.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupDeleteCard; }
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/scripts/compenents/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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



var PopupDeleteCard = /*#__PURE__*/function (_Popup) {
  _inherits(PopupDeleteCard, _Popup);

  var _super = _createSuper(PopupDeleteCard);

  function PopupDeleteCard() {
    var _thisSuper, _this;

    _classCallCheck(this, PopupDeleteCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "open", function () {
      _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(PopupDeleteCard.prototype)), "open", _thisSuper).call(_thisSuper);
    });

    return _this;
  }

  _createClass(PopupDeleteCard, [{
    key: "setAction",
    value: function setAction(action) {
      this._submitHandler = action;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      this._popup.addEventListener("submit", function (event) {
        event.preventDefault();

        _this2._submitHandler();

        _this2.close();
      });

      _get(_getPrototypeOf(PopupDeleteCard.prototype), "setEventListeners", this).call(this);
    }
  }]);

  return PopupDeleteCard;
}(_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]);



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
    _this._submitBtn = _this._popup.querySelector(".popup__save-button");
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

        if (_this2._submitBtn.textContent === "Save") {
          _this2._submitBtn.textContent = "Saving...";
        } else if (_this2._submitBtn.textContent === "Create") {
          _this2._submitBtn.textContent = "Creating...";
        }

        _this2._submitHandler(_this2._getInputValues());

        _this2.close();

        if (_this2._submitBtn.textContent === "Saving...") {
          _this2._submitBtn.textContent = "Save";
        } else if (_this2._submitBtn.textContent === "Creating...") {
          _this2._submitBtn.textContent = "Create";
        }
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
    var renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "render",
    value: function render(cards) {
      var _this = this;

      cards.forEach(function (data) {
        _this._renderer(data);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
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
/* harmony import */ var _utils_contants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/contants */ "./src/scripts/utils/contants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var profileNameSelector = _ref.profileNameSelector,
        profileJobSelector = _ref.profileJobSelector,
        profileImgSelector = _ref.profileImgSelector;

    _classCallCheck(this, UserInfo);

    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
    this._profileImg = document.querySelector(profileImgSelector);
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
          about = _ref2.about,
          avatar = _ref2.avatar;
      this._profileName.textContent = name;
      this._profileJob.textContent = about;
      this._profileImg.style.backgroundImage = "url(\"".concat(avatar, "\")");
    }
  }]);

  return UserInfo;
}();



/***/ }),

/***/ "./src/scripts/utils/api.js":
/*!**********************************!*\
  !*** ./src/scripts/utils/api.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Api; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var customFetch = function customFetch(url, headers) {
  return fetch(url, headers).then(function (res) {
    return res.ok ? res.json() : Promise.reject(res.statusText);
  }).catch(function (err) {
    console.log(err);
  });
};

var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var baseUrl = _ref.baseUrl,
        headers = _ref.headers;

    _classCallCheck(this, Api);

    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _createClass(Api, [{
    key: "getInitialCards",
    value: function getInitialCards() {
      return customFetch("".concat(this._baseUrl, "/cards"), {
        headers: this._headers
      });
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return customFetch("".concat(this._baseUrl, "/users/me"), {
        headers: this._headers
      });
    }
  }, {
    key: "getUserImg",
    value: function getUserImg() {
      return customFetch("".concat(this._baseUrl, "/users/me/avatar"), {
        headers: this._headers
      });
    }
  }, {
    key: "createCard",
    value: function createCard(name, link) {
      var data = {
        name: name,
        link: link
      };
      return customFetch("".concat(this._baseUrl, "/cards"), {
        headers: this._headers,
        method: "POST",
        body: JSON.stringify(data)
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      return customFetch("".concat(this._baseUrl, "/cards/").concat(cardId, " "), {
        headers: this._headers,
        method: "DELETE"
      });
    }
  }, {
    key: "likeCard",
    value: function likeCard(cardId) {
      return customFetch("".concat(this._baseUrl, "/cards/likes/").concat(cardId, " "), {
        headers: this._headers,
        method: "PUT"
      });
    }
  }, {
    key: "dislikeCard",
    value: function dislikeCard(cardId) {
      return customFetch("".concat(this._baseUrl, "/cards/likes/").concat(cardId, " "), {
        headers: this._headers,
        method: "DELETE"
      });
    }
  }, {
    key: "editPrifileInfo",
    value: function editPrifileInfo(name, about) {
      var data = {
        name: name,
        about: about
      };
      return customFetch("".concat(this._baseUrl, "/users/me "), {
        headers: this._headers,
        method: "PATCH",
        body: JSON.stringify(data)
      });
    }
  }, {
    key: "editPrifileImg",
    value: function editPrifileImg(data) {
      debugger;
      return customFetch("".concat(this._baseUrl, "/users/me/avatar"), {
        headers: this._headers,
        method: "PATCH",
        body: JSON.stringify(data)
      });
    }
  }]);

  return Api;
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
/* harmony export */   "profilePicEditButton": function() { return /* binding */ profilePicEditButton; },
/* harmony export */   "profileForm": function() { return /* binding */ profileForm; },
/* harmony export */   "inputFullName": function() { return /* binding */ inputFullName; },
/* harmony export */   "inputOccupation": function() { return /* binding */ inputOccupation; },
/* harmony export */   "editButton": function() { return /* binding */ editButton; },
/* harmony export */   "inputProfileImg": function() { return /* binding */ inputProfileImg; },
/* harmony export */   "profileImgform": function() { return /* binding */ profileImgform; },
/* harmony export */   "addForm": function() { return /* binding */ addForm; },
/* harmony export */   "addButton": function() { return /* binding */ addButton; },
/* harmony export */   "editSaveBtn": function() { return /* binding */ editSaveBtn; },
/* harmony export */   "addSaveBtn": function() { return /* binding */ addSaveBtn; },
/* harmony export */   "profileImgSaveBtn": function() { return /* binding */ profileImgSaveBtn; },
/* harmony export */   "deleteConfirmBtn": function() { return /* binding */ deleteConfirmBtn; },
/* harmony export */   "formValidators": function() { return /* binding */ formValidators; },
/* harmony export */   "formList": function() { return /* binding */ formList; },
/* harmony export */   "formSettings": function() { return /* binding */ formSettings; }
/* harmony export */ });
var profilePic = document.querySelector(".profile__image");
var logoImage = document.querySelector(".header__logo");
var photoTemplate = document.querySelector("#photo-feed__cards").content.querySelector(".photo-feed__card");
var profilePicEditButton = document.querySelector(".profile__img-button");
var profileForm = document.querySelector(".popup__form_edit");
var inputFullName = document.querySelector("#name-input");
var inputOccupation = document.querySelector("#occupation-input");
var editButton = document.querySelector(".profile__edit-button");
var inputProfileImg = document.querySelector("#profileImg-input");
var profileImgform = document.querySelector("#confirmation_form");
var addForm = document.querySelector("#add_form");
var addButton = document.querySelector(".profile__add-button");
var editSaveBtn = document.querySelector("#edit-save-btn");
var addSaveBtn = document.querySelector("#add-save-btn");
var profileImgSaveBtn = document.querySelector("#profile-img-save-btn");
var deleteConfirmBtn = document.querySelector("#delete-confirm-btn");
var formValidators = {};
var formList = {};
var formSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/button/edit_profile_img_button.svg":
/*!*******************************************************!*\
  !*** ./src/images/button/edit_profile_img_button.svg ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a086f758840ae814ecde.svg";

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

module.exports = __webpack_require__.p + "150b1578933e905c5e2e.gif";

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
/* harmony import */ var _images_button_edit_profile_img_button_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/button/edit_profile_img_button.svg */ "./src/images/button/edit_profile_img_button.svg");
/* harmony import */ var _scripts_utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/utils/api */ "./src/scripts/utils/api.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/utils/contants */ "./src/scripts/utils/contants.js");
/* harmony import */ var _scripts_compenents_Card_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/compenents/Card.js */ "./src/scripts/compenents/Card.js");
/* harmony import */ var _scripts_compenents_PopupDeleteCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/compenents/PopupDeleteCard */ "./src/scripts/compenents/PopupDeleteCard.js");
/* harmony import */ var _scripts_compenents_FormValidator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scripts/compenents/FormValidator.js */ "./src/scripts/compenents/FormValidator.js");
/* harmony import */ var _scripts_compenents_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scripts/compenents/PopupWithImage.js */ "./src/scripts/compenents/PopupWithImage.js");
/* harmony import */ var _scripts_compenents_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scripts/compenents/PopupWithForm.js */ "./src/scripts/compenents/PopupWithForm.js");
/* harmony import */ var _scripts_compenents_UserInfo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../scripts/compenents/UserInfo.js */ "./src/scripts/compenents/UserInfo.js");
/* harmony import */ var _scripts_compenents_Section_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../scripts/compenents/Section.js */ "./src/scripts/compenents/Section.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var api = new _scripts_utils_api__WEBPACK_IMPORTED_MODULE_3__["default"]({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "0ea43d66-a890-4252-aeb5-5f974b853c02",
    "Content-Type": "application/json"
  }
});
var userId;
Promise.all([api.getInitialCards(), api.getUserInfo()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      cardData = _ref2[0],
      userData = _ref2[1];

  userId = userData._id;
  section.render(cardData);
  userInfo.setUserInfo({
    name: userData.name,
    about: userData.about,
    avatar: userData.avatar
  });
});

var handleDeleteImgForm = function handleDeleteImgForm(cardId, cardToDelete) {
  confirmDelete.setAction(function () {
    _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.deleteConfirmBtn.textContent = "Deleting";
    api.deleteCard(cardId).then(function () {
      cardToDelete.remove();
      cardToDelete = null;
    }).catch(function (err) {
      return console.log(err);
    });
  });
  _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.deleteConfirmBtn.textContent = "Yes";
};

var handleLikeClick = function handleLikeClick(cardId, cardBtn, likeState, likeCounter) {
  if (likeState) {
    api.likeCard(cardId).then(function (res) {
      cardBtn.classList.toggle("photo-feed__card-button_not-active");
      cardBtn.classList.toggle("photo-feed__card-button_active");
      likeCounter.textContent = res.likes.length;
    }).catch(function (err) {
      console.log(err);
    });
  } else {
    api.dislikeCard(cardId).then(function (res) {
      cardBtn.classList.toggle("photo-feed__card-button_not-active");
      cardBtn.classList.toggle("photo-feed__card-button_active");
      likeCounter.textContent = res.likes.length;
    });
  }
};

_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.profilePic.src = _images_profilepic_gif__WEBPACK_IMPORTED_MODULE_0__;
_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.profilePicEditButton.src = _images_button_edit_profile_img_button_svg__WEBPACK_IMPORTED_MODULE_2__;
_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.logoImage.src = _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__;
var popupPhoto = new _scripts_compenents_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_9__["default"](".popup_photo");
popupPhoto.setEventListeners();
var confirmDelete = new _scripts_compenents_PopupDeleteCard__WEBPACK_IMPORTED_MODULE_7__["default"](".popup_confirmation");
confirmDelete.setEventListeners();

var generateCard = function generateCard(data) {
  return new _scripts_compenents_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"](data, userId, _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.photoTemplate, popupPhoto.open, confirmDelete.open, handleDeleteImgForm, handleLikeClick);
};

var section = new _scripts_compenents_Section_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
  renderer: function renderer(data) {
    var card = generateCard(data);
    section.addItem(card.createCard());
  }
}, ".photo-feed__grid");
var popupAdd = new _scripts_compenents_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_10__["default"](".popup_add", function (data) {
  api.createCard(data.title, data.imglink).then(function (res) {
    var card = generateCard(res);
    section.addItem(card.createCard());
  });
});
popupAdd.setEventListeners();
var userInfo = new _scripts_compenents_UserInfo_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
  profileNameSelector: ".profile__name",
  profileJobSelector: ".profile__occupation",
  profileImgSelector: ".profile__image"
});
var popupEdit = new _scripts_compenents_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_10__["default"](".popup_edit", function (data) {
  api.editPrifileInfo(data.name, data.occupation).then(function (res) {
    userInfo.setUserInfo(res);
  }).catch(function (err) {
    return console.log(err);
  });
});
popupEdit.setEventListeners();

var enableValidation = function enableValidation(settings) {
  var formsList = Array.from(document.querySelectorAll(settings.formSelector));
  formsList.forEach(function (formElement) {
    var validator = new _scripts_compenents_FormValidator_js__WEBPACK_IMPORTED_MODULE_8__["default"](settings, formElement);
    var formType = formElement.getAttribute("name");
    _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.formValidators[formType] = validator;
    validator.enableValidation();
  });
};

enableValidation(_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.formSettings);
_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.editButton.addEventListener("click", function () {
  var data = userInfo.getUserInfo();
  popupEdit.open();
  _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.inputFullName.value = data.name;
  _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.inputOccupation.value = data.job;
  _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.formValidators[_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.profileForm.getAttribute("name")].resetValidation();
});
_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.addButton.addEventListener("click", function () {
  popupAdd.open();
  _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.formValidators[_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.addForm.getAttribute("name")].resetValidation();
});
var popupProfileImg = new _scripts_compenents_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_10__["default"](".popup_profile-img", function (data) {
  api.editPrifileImg(data).then(function (res) {
    userInfo.setUserInfo(res);
  });
});
popupProfileImg.setEventListeners();
_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.profilePicEditButton.addEventListener("click", function () {
  popupProfileImg.open();
  _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.formValidators[_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.profileImgform.getAttribute("name")].resetValidation();
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLFNBQVMsQ0FBQ1AsSUFBVjtBQUNBdEMsRUFBQUEsd0VBQUEsR0FBc0J6SixJQUFJLENBQUNRLElBQTNCO0FBQ0FrSixFQUFBQSwwRUFBQSxHQUF3QjFKLElBQUksQ0FBQ3VILEdBQTdCO0FBQ0E0QyxFQUFBQSxtRUFBYyxDQUFDWCw2RUFBQSxDQUF5QixNQUF6QixDQUFELENBQWQsQ0FBaURzRCxlQUFqRDtBQUNELENBTkQ7QUFRQWhELCtFQUFBLENBQTJCLE9BQTNCLEVBQW9DLFlBQU07QUFDeENxQyxFQUFBQSxRQUFRLENBQUNKLElBQVQ7QUFDQTVCLEVBQUFBLG1FQUFjLENBQUNOLHlFQUFBLENBQXFCLE1BQXJCLENBQUQsQ0FBZCxDQUE2Q2lELGVBQTdDO0FBQ0QsQ0FIRDtBQUtBLElBQU1DLGVBQWUsR0FBRyxJQUFJckgsNkVBQUosQ0FBa0Isb0JBQWxCLEVBQXdDLFVBQUMxRixJQUFELEVBQVU7QUFDeEUwSyxFQUFBQSxHQUFHLENBQUNzQyxjQUFKLENBQW1CaE4sSUFBbkIsRUFBeUIrSCxJQUF6QixDQUE4QixVQUFDQyxHQUFELEVBQVM7QUFDckNtRCxJQUFBQSxRQUFRLENBQUNDLFdBQVQsQ0FBcUJwRCxHQUFyQjtBQUNELEdBRkQ7QUFHRCxDQUp1QixDQUF4QjtBQUtBK0UsZUFBZSxDQUFDbEIsaUJBQWhCO0FBRUF0QywwRkFBQSxDQUFzQyxPQUF0QyxFQUErQyxZQUFNO0FBQ25Ed0QsRUFBQUEsZUFBZSxDQUFDaEIsSUFBaEI7QUFDQTVCLEVBQUFBLG1FQUFjLENBQUNwRCxnRkFBQSxDQUE0QixNQUE1QixDQUFELENBQWQsQ0FBb0QrRixlQUFwRDtBQUNELENBSEQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy9jb21wZW5lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL2NvbXBlbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvY29tcGVuZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvY29tcGVuZW50cy9Qb3B1cERlbGV0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL2NvbXBlbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvY29tcGVuZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvY29tcGVuZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy9jb21wZW5lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL3V0aWxzL2NvbnRhbnRzLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoZGF0YSwgdXNlcklkLCB0ZW1wbGF0ZSwgaGFuZGxlQ2FyZENsaWNrLCBoYW5kbGVEZWxldGVDYXJkLCBoYW5kbGVEZWxldGVJbWdGb3JtLCBoYW5kbGVMaWtlQ2xpY2spIHtcclxuICAgIHRoaXMuX25hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcclxuICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQgPSBoYW5kbGVEZWxldGVDYXJkO1xyXG4gICAgdGhpcy5faGFuZGxlRGVsZXRlSW1nRm9ybSA9IGhhbmRsZURlbGV0ZUltZ0Zvcm07XHJcbiAgICB0aGlzLl9pZCA9IGRhdGEuX2lkO1xyXG4gICAgdGhpcy5fdXNlcklkID0gdXNlcklkO1xyXG4gICAgdGhpcy5fb3duZXJJZCA9IGRhdGEub3duZXIuX2lkO1xyXG4gICAgdGhpcy5fbGlrZUNvdW50ZXIgPSBkYXRhLmxpa2VzO1xyXG4gICAgdGhpcy5faGFuZGxlTGlrZUNsaWNrID0gaGFuZGxlTGlrZUNsaWNrO1xyXG4gIH1cclxuICBjcmVhdGVDYXJkKCkge1xyXG4gICAgY29uc3QgY2FyZE5hbWUgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZmVlZF9fdGV4dFwiKTtcclxuICAgIGNvbnN0IGNhcmRJbWFnZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1mZWVkX19pbWFnZVwiKTtcclxuICAgIGNvbnN0IGNhcmRCdG4gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZmVlZF9fY2FyZC1idXR0b25cIik7XHJcbiAgICBjYXJkTmFtZS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XHJcbiAgICBjYXJkSW1hZ2Uuc3JjID0gdGhpcy5fbGluaztcclxuICAgIGNhcmRJbWFnZS5hbHQgPSB0aGlzLl9uYW1lO1xyXG5cclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX3VzZXJJZCAhPT0gdGhpcy5fb3duZXJJZCkgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWZlZWRfX2RlbGV0ZS1idG5cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1mZWVkX19jYXJkLWJ1dHRvbi1jb3VudGVyXCIpLnRleHRDb250ZW50ID0gdGhpcy5fbGlrZUNvdW50ZXIubGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0IGNhcmRJc0xpa2VkID0gdGhpcy5fbGlrZUNvdW50ZXIuc29tZSgocGVyc29uKSA9PiBwZXJzb24uX2lkID09PSB0aGlzLl91c2VySWQpO1xyXG4gICAgaWYgKGNhcmRJc0xpa2VkKSB7XHJcbiAgICAgIGNhcmRCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInBob3RvLWZlZWRfX2NhcmQtYnV0dG9uX25vdC1hY3RpdmVcIik7XHJcblxyXG4gICAgICBjYXJkQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJwaG90by1mZWVkX19jYXJkLWJ1dHRvbl9hY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBjYXJkQnRuID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWZlZWRfX2NhcmQtYnV0dG9uXCIpO1xyXG4gICAgY29uc3QgbGlrZUNvdW50ZXIgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZmVlZF9fY2FyZC1idXR0b24tY291bnRlclwiKTtcclxuXHJcbiAgICBjYXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGlmIChjYXJkQnRuLmNsYXNzTGlzdC5jb250YWlucyhcInBob3RvLWZlZWRfX2NhcmQtYnV0dG9uX25vdC1hY3RpdmVcIikpIHtcclxuICAgICAgICB0aGlzLl9oYW5kbGVMaWtlQ2xpY2sodGhpcy5faWQsIGNhcmRCdG4sIHRydWUsIGxpa2VDb3VudGVyKTtcclxuICAgICAgfSBlbHNlIHRoaXMuX2hhbmRsZUxpa2VDbGljayh0aGlzLl9pZCwgY2FyZEJ0biwgZmFsc2UsIGxpa2VDb3VudGVyKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWZlZWRfX2ltYWdlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZVByZXZpZXdJbWFnZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWZlZWRfX2RlbGV0ZS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCgpO1xyXG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVJbWdGb3JtKHRoaXMuX2lkLCB0aGlzLl9lbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVByZXZpZXdJbWFnZSgpIHtcclxuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh7IGxpbms6IHRoaXMuX2xpbmssIG5hbWU6IHRoaXMuX25hbWUgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCkge1xyXG4gICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2V0dGluZ3MuaW5wdXRTZWxlY3RvcikpO1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UpIHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcclxuXHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fc2V0dGluZ3MuZXJyb3JDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9zZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmVycm9yQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKCkge1xyXG4gICAgY29uc3QgaGFzSW52YWxpZElucHV0ID0gdGhpcy5faW5wdXRMaXN0LnNvbWUoKGlucHV0RWxlbWVudCkgPT4gIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCk7XHJcbiAgICBpZiAoaGFzSW52YWxpZElucHV0KSB7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KSB7XHJcbiAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSh0aGlzLl9pbnB1dExpc3QsIHRoaXMuX2J1dHRvbkVsZW1lbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVyKCk7XHJcbiAgfVxyXG5cclxuICByZXNldFZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9wb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwX3Zpc2libGVcIik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF92aXNpYmxlXCIpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cFwiKSB8fCBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwX19jbG9zZS1idG5cIikpIHRoaXMuY2xvc2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUVzY0Nsb3NlID0gKGV2dCkgPT4ge1xyXG4gICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHRoaXMuY2xvc2UoKTtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBEZWxldGVDYXJkIGV4dGVuZHMgUG9wdXAge1xyXG4gIHNldEFjdGlvbihhY3Rpb24pIHtcclxuICAgIHRoaXMuX3N1Ym1pdEhhbmRsZXIgPSBhY3Rpb247XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuX3N1Ym1pdEhhbmRsZXIoKTtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuICBvcGVuID0gKCkgPT4ge1xyXG4gICAgc3VwZXIub3BlbigpO1xyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIHN1Ym1pdEhhbmRsZXIpIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fc3VibWl0SGFuZGxlciA9IHN1Ym1pdEhhbmRsZXI7XHJcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcclxuICAgIHRoaXMuX2lucHV0cyA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX2lucHV0XCIpO1xyXG4gICAgdGhpcy5fc3VibWl0QnRuID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fc2F2ZS1idXR0b25cIik7XHJcbiAgfVxyXG5cclxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHt9O1xyXG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIGlucHV0VmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaW5wdXRWYWx1ZXM7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKHRoaXMuX3N1Ym1pdEJ0bi50ZXh0Q29udGVudCA9PT0gXCJTYXZlXCIpIHtcclxuICAgICAgICB0aGlzLl9zdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlNhdmluZy4uLlwiO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3N1Ym1pdEJ0bi50ZXh0Q29udGVudCA9PT0gXCJDcmVhdGVcIikge1xyXG4gICAgICAgIHRoaXMuX3N1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQ3JlYXRpbmcuLi5cIjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9zdWJtaXRIYW5kbGVyKHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIGlmICh0aGlzLl9zdWJtaXRCdG4udGV4dENvbnRlbnQgPT09IFwiU2F2aW5nLi4uXCIpIHtcclxuICAgICAgICB0aGlzLl9zdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlNhdmVcIjtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdWJtaXRCdG4udGV4dENvbnRlbnQgPT09IFwiQ3JlYXRpbmcuLi5cIikge1xyXG4gICAgICAgIHRoaXMuX3N1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlXCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fZm9ybS5yZXNldCgpO1xyXG4gICAgc3VwZXIuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX3BvcHVwSW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcclxuICAgIHRoaXMuX3BvcHVwUGhvdG9DYXB0aW9uID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2UtY2FwdGlvblwiKTtcclxuICB9XHJcblxyXG4gIG9wZW4gPSAoeyBsaW5rLCBuYW1lIH0pID0+IHtcclxuICAgIHRoaXMuX3BvcHVwSW1hZ2Uuc3JjID0gbGluaztcclxuICAgIHRoaXMuX3BvcHVwSW1hZ2UuYWx0ID0gbGluaztcclxuICAgIHRoaXMuX3BvcHVwUGhvdG9DYXB0aW9uLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xyXG4gIGNvbnN0cnVjdG9yKHsgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjYXJkcykge1xyXG4gICAgY2FyZHMuZm9yRWFjaCgoZGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlcihkYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbShlbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcHJvZmlsZUltZ2Zvcm0gfSBmcm9tIFwiLi4vdXRpbHMvY29udGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcclxuICBjb25zdHJ1Y3Rvcih7IHByb2ZpbGVOYW1lU2VsZWN0b3IsIHByb2ZpbGVKb2JTZWxlY3RvciwgcHJvZmlsZUltZ1NlbGVjdG9yIH0pIHtcclxuICAgIHRoaXMuX3Byb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlTmFtZVNlbGVjdG9yKTtcclxuICAgIHRoaXMuX3Byb2ZpbGVKb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVKb2JTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9wcm9maWxlSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlSW1nU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiB0aGlzLl9wcm9maWxlTmFtZS50ZXh0Q29udGVudCxcclxuICAgICAgam9iOiB0aGlzLl9wcm9maWxlSm9iLnRleHRDb250ZW50LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldFVzZXJJbmZvKHsgbmFtZSwgYWJvdXQsIGF2YXRhciB9KSB7XHJcbiAgICB0aGlzLl9wcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICB0aGlzLl9wcm9maWxlSm9iLnRleHRDb250ZW50ID0gYWJvdXQ7XHJcbiAgICB0aGlzLl9wcm9maWxlSW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2F2YXRhcn1cIilgO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBjdXN0b21GZXRjaCA9ICh1cmwsIGhlYWRlcnMpID0+XHJcbiAgZmV0Y2godXJsLCBoZWFkZXJzKVxyXG4gICAgLnRoZW4oKHJlcykgPT4gKHJlcy5vayA/IHJlcy5qc29uKCkgOiBQcm9taXNlLnJlamVjdChyZXMuc3RhdHVzVGV4dCkpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xyXG4gIGNvbnN0cnVjdG9yKHsgYmFzZVVybCwgaGVhZGVycyB9KSB7XHJcbiAgICB0aGlzLl9iYXNlVXJsID0gYmFzZVVybDtcclxuICAgIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5pdGlhbENhcmRzKCkge1xyXG4gICAgcmV0dXJuIGN1c3RvbUZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzYCwgeyBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4gY3VzdG9tRmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWVgLCB7IGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMgfSk7XHJcbiAgfVxyXG4gIGdldFVzZXJJbWcoKSB7XHJcbiAgICByZXR1cm4gY3VzdG9tRmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWUvYXZhdGFyYCwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNyZWF0ZUNhcmQobmFtZSwgbGluaykge1xyXG4gICAgY29uc3QgZGF0YSA9IHsgbmFtZSwgbGluayB9O1xyXG4gICAgcmV0dXJuIGN1c3RvbUZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzYCwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ2FyZChjYXJkSWQpIHtcclxuICAgIHJldHVybiBjdXN0b21GZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkcy8ke2NhcmRJZH0gYCwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxpa2VDYXJkKGNhcmRJZCkge1xyXG4gICAgcmV0dXJuIGN1c3RvbUZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzL2xpa2VzLyR7Y2FyZElkfSBgLCB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGlzbGlrZUNhcmQoY2FyZElkKSB7XHJcbiAgICByZXR1cm4gY3VzdG9tRmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHMvbGlrZXMvJHtjYXJkSWR9IGAsIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBlZGl0UHJpZmlsZUluZm8obmFtZSwgYWJvdXQpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB7IG5hbWUsIGFib3V0IH07XHJcbiAgICByZXR1cm4gY3VzdG9tRmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWUgYCwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGVkaXRQcmlmaWxlSW1nKGRhdGEpIHtcclxuICAgIGRlYnVnZ2VyO1xyXG4gICAgcmV0dXJuIGN1c3RvbUZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lL2F2YXRhcmAsIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBwcm9maWxlUGljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19pbWFnZVwiKTtcclxuZXhwb3J0IGNvbnN0IGxvZ29JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19sb2dvXCIpO1xyXG5leHBvcnQgY29uc3QgcGhvdG9UZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvdG8tZmVlZF9fY2FyZHNcIikuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWZlZWRfX2NhcmRcIik7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlUGljRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9faW1nLWJ1dHRvblwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9maWxlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1fZWRpdFwiKTtcclxuZXhwb3J0IGNvbnN0IGlucHV0RnVsbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWUtaW5wdXRcIik7XHJcbmV4cG9ydCBjb25zdCBpbnB1dE9jY3VwYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29jY3VwYXRpb24taW5wdXRcIik7XHJcbmV4cG9ydCBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKTtcclxuZXhwb3J0IGNvbnN0IGlucHV0UHJvZmlsZUltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZUltZy1pbnB1dFwiKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVJbWdmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25maXJtYXRpb25fZm9ybVwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZm9ybVwiKTtcclxuZXhwb3J0IGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0U2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1zYXZlLWJ0blwiKTtcclxuZXhwb3J0IGNvbnN0IGFkZFNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1zYXZlLWJ0blwiKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVJbWdTYXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLWltZy1zYXZlLWJ0blwiKTtcclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbGV0ZS1jb25maXJtLWJ0blwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtVmFsaWRhdG9ycyA9IHt9O1xyXG5leHBvcnQgY29uc3QgZm9ybUxpc3QgPSB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtU2V0dGluZ3MgPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiBcIi5wb3B1cF9fZm9ybVwiLFxyXG4gIGlucHV0U2VsZWN0b3I6IFwiLnBvcHVwX19pbnB1dFwiLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5wb3B1cF9fc2F2ZS1idXR0b25cIixcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwX19idXR0b25fZGlzYWJsZWRcIixcclxuICBpbnB1dEVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0X3R5cGVfZXJyb3JcIixcclxuICBlcnJvckNsYXNzOiBcInBvcHVwX19lcnJvcl92aXNpYmxlXCIsXHJcbn07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiaW1wb3J0IHByb2ZpbGVwaWNTcmMgZnJvbSBcIi4uL2ltYWdlcy9wcm9maWxlcGljLmdpZlwiO1xyXG5pbXBvcnQgbG9nb1NyYyBmcm9tIFwiLi4vaW1hZ2VzL2xvZ28uc3ZnXCI7XHJcbmltcG9ydCBwcm9maWxlUGljRWRpdEJ1dHRvblNyYyBmcm9tIFwiLi4vaW1hZ2VzL2J1dHRvbi9lZGl0X3Byb2ZpbGVfaW1nX2J1dHRvbi5zdmdcIjtcclxuaW1wb3J0IEFwaSBmcm9tIFwiLi4vc2NyaXB0cy91dGlscy9hcGlcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IHtcclxuICBwcm9maWxlUGljLFxyXG4gIHByb2ZpbGVQaWNFZGl0QnV0dG9uLFxyXG4gIHByb2ZpbGVJbWdmb3JtLFxyXG4gIGxvZ29JbWFnZSxcclxuICBwaG90b1RlbXBsYXRlLFxyXG4gIHByb2ZpbGVGb3JtLFxyXG4gIGlucHV0RnVsbE5hbWUsXHJcbiAgaW5wdXRPY2N1cGF0aW9uLFxyXG4gIGVkaXRCdXR0b24sXHJcbiAgYWRkRm9ybSxcclxuICBhZGRCdXR0b24sXHJcbiAgZm9ybVNldHRpbmdzLFxyXG4gIGZvcm1WYWxpZGF0b3JzLFxyXG4gIGVkaXRTYXZlQnRuLFxyXG4gIGFkZFNhdmVCdG4sXHJcbiAgcHJvZmlsZUltZ1NhdmVCdG4sXHJcbiAgZGVsZXRlQ29uZmlybUJ0bixcclxufSBmcm9tIFwiLi4vc2NyaXB0cy91dGlscy9jb250YW50c1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vc2NyaXB0cy9jb21wZW5lbnRzL0NhcmQuanNcIjtcclxuaW1wb3J0IFBvcHVwRGVsZXRlQ2FyZCBmcm9tIFwiLi4vc2NyaXB0cy9jb21wZW5lbnRzL1BvcHVwRGVsZXRlQ2FyZFwiO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vc2NyaXB0cy9jb21wZW5lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9zY3JpcHRzL2NvbXBlbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL3NjcmlwdHMvY29tcGVuZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vc2NyaXB0cy9jb21wZW5lbnRzL1VzZXJJbmZvLmpzXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9zY3JpcHRzL2NvbXBlbmVudHMvU2VjdGlvbi5qc1wiO1xyXG5cclxuY29uc3QgYXBpID0gbmV3IEFwaSh7XHJcbiAgYmFzZVVybDogXCJodHRwczovL2Fyb3VuZC5ub21vcmVwYXJ0aWVzLmNvL3YxL2dyb3VwLTEyXCIsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgYXV0aG9yaXphdGlvbjogXCIwZWE0M2Q2Ni1hODkwLTQyNTItYWViNS01Zjk3NGI4NTNjMDJcIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxubGV0IHVzZXJJZDtcclxuXHJcblByb21pc2UuYWxsKFthcGkuZ2V0SW5pdGlhbENhcmRzKCksIGFwaS5nZXRVc2VySW5mbygpXSkudGhlbigoW2NhcmREYXRhLCB1c2VyRGF0YV0pID0+IHtcclxuICB1c2VySWQgPSB1c2VyRGF0YS5faWQ7XHJcbiAgc2VjdGlvbi5yZW5kZXIoY2FyZERhdGEpO1xyXG4gIHVzZXJJbmZvLnNldFVzZXJJbmZvKHsgbmFtZTogdXNlckRhdGEubmFtZSwgYWJvdXQ6IHVzZXJEYXRhLmFib3V0LCBhdmF0YXI6IHVzZXJEYXRhLmF2YXRhciB9KTtcclxufSk7XHJcblxyXG5jb25zdCBoYW5kbGVEZWxldGVJbWdGb3JtID0gKGNhcmRJZCwgY2FyZFRvRGVsZXRlKSA9PiB7XHJcbiAgY29uZmlybURlbGV0ZS5zZXRBY3Rpb24oKCkgPT4ge1xyXG4gICAgZGVsZXRlQ29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRpbmdcIjtcclxuXHJcbiAgICBhcGlcclxuICAgICAgLmRlbGV0ZUNhcmQoY2FyZElkKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY2FyZFRvRGVsZXRlLnJlbW92ZSgpO1xyXG4gICAgICAgIGNhcmRUb0RlbGV0ZSA9IG51bGw7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfSk7XHJcbiAgZGVsZXRlQ29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiWWVzXCI7XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVMaWtlQ2xpY2sgPSAoY2FyZElkLCBjYXJkQnRuLCBsaWtlU3RhdGUsIGxpa2VDb3VudGVyKSA9PiB7XHJcbiAgaWYgKGxpa2VTdGF0ZSkge1xyXG4gICAgYXBpXHJcbiAgICAgIC5saWtlQ2FyZChjYXJkSWQpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjYXJkQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJwaG90by1mZWVkX19jYXJkLWJ1dHRvbl9ub3QtYWN0aXZlXCIpO1xyXG4gICAgICAgIGNhcmRCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInBob3RvLWZlZWRfX2NhcmQtYnV0dG9uX2FjdGl2ZVwiKTtcclxuICAgICAgICBsaWtlQ291bnRlci50ZXh0Q29udGVudCA9IHJlcy5saWtlcy5sZW5ndGg7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFwaS5kaXNsaWtlQ2FyZChjYXJkSWQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjYXJkQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJwaG90by1mZWVkX19jYXJkLWJ1dHRvbl9ub3QtYWN0aXZlXCIpO1xyXG4gICAgICBjYXJkQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJwaG90by1mZWVkX19jYXJkLWJ1dHRvbl9hY3RpdmVcIik7XHJcbiAgICAgIGxpa2VDb3VudGVyLnRleHRDb250ZW50ID0gcmVzLmxpa2VzLmxlbmd0aDtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbnByb2ZpbGVQaWMuc3JjID0gcHJvZmlsZXBpY1NyYztcclxucHJvZmlsZVBpY0VkaXRCdXR0b24uc3JjID0gcHJvZmlsZVBpY0VkaXRCdXR0b25TcmM7XHJcbmxvZ29JbWFnZS5zcmMgPSBsb2dvU3JjO1xyXG5cclxuY29uc3QgcG9wdXBQaG90byA9IG5ldyBQb3B1cFdpdGhJbWFnZShcIi5wb3B1cF9waG90b1wiKTtcclxucG9wdXBQaG90by5zZXRFdmVudExpc3RlbmVycygpO1xyXG5jb25zdCBjb25maXJtRGVsZXRlID0gbmV3IFBvcHVwRGVsZXRlQ2FyZChcIi5wb3B1cF9jb25maXJtYXRpb25cIik7XHJcbmNvbmZpcm1EZWxldGUuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IGdlbmVyYXRlQ2FyZCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBDYXJkKFxyXG4gICAgZGF0YSxcclxuICAgIHVzZXJJZCxcclxuICAgIHBob3RvVGVtcGxhdGUsXHJcbiAgICBwb3B1cFBob3RvLm9wZW4sXHJcbiAgICBjb25maXJtRGVsZXRlLm9wZW4sXHJcbiAgICBoYW5kbGVEZWxldGVJbWdGb3JtLFxyXG4gICAgaGFuZGxlTGlrZUNsaWNrXHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHNlY3Rpb24gPSBuZXcgU2VjdGlvbihcclxuICB7XHJcbiAgICByZW5kZXJlcjogKGRhdGEpID0+IHtcclxuICAgICAgY29uc3QgY2FyZCA9IGdlbmVyYXRlQ2FyZChkYXRhKTtcclxuICAgICAgc2VjdGlvbi5hZGRJdGVtKGNhcmQuY3JlYXRlQ2FyZCgpKTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBcIi5waG90by1mZWVkX19ncmlkXCJcclxuKTtcclxuXHJcbmNvbnN0IHBvcHVwQWRkID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIucG9wdXBfYWRkXCIsIChkYXRhKSA9PiB7XHJcbiAgYXBpLmNyZWF0ZUNhcmQoZGF0YS50aXRsZSwgZGF0YS5pbWdsaW5rKS50aGVuKChyZXMpID0+IHtcclxuICAgIGNvbnN0IGNhcmQgPSBnZW5lcmF0ZUNhcmQocmVzKTtcclxuXHJcbiAgICBzZWN0aW9uLmFkZEl0ZW0oY2FyZC5jcmVhdGVDYXJkKCkpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbnBvcHVwQWRkLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XHJcbiAgcHJvZmlsZU5hbWVTZWxlY3RvcjogXCIucHJvZmlsZV9fbmFtZVwiLFxyXG4gIHByb2ZpbGVKb2JTZWxlY3RvcjogXCIucHJvZmlsZV9fb2NjdXBhdGlvblwiLFxyXG4gIHByb2ZpbGVJbWdTZWxlY3RvcjogXCIucHJvZmlsZV9faW1hZ2VcIixcclxufSk7XHJcblxyXG5jb25zdCBwb3B1cEVkaXQgPSBuZXcgUG9wdXBXaXRoRm9ybShcIi5wb3B1cF9lZGl0XCIsIChkYXRhKSA9PiB7XHJcbiAgYXBpXHJcbiAgICAuZWRpdFByaWZpbGVJbmZvKGRhdGEubmFtZSwgZGF0YS5vY2N1cGF0aW9uKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICB1c2VySW5mby5zZXRVc2VySW5mbyhyZXMpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufSk7XHJcbnBvcHVwRWRpdC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgZW5hYmxlVmFsaWRhdGlvbiA9IChzZXR0aW5ncykgPT4ge1xyXG4gIGNvbnN0IGZvcm1zTGlzdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZXR0aW5ncy5mb3JtU2VsZWN0b3IpKTtcclxuICBmb3Jtc0xpc3QuZm9yRWFjaCgoZm9ybUVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCk7XHJcbiAgICBjb25zdCBmb3JtVHlwZSA9IGZvcm1FbGVtZW50LmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XHJcbiAgICBmb3JtVmFsaWRhdG9yc1tmb3JtVHlwZV0gPSB2YWxpZGF0b3I7XHJcbiAgICB2YWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZW5hYmxlVmFsaWRhdGlvbihmb3JtU2V0dGluZ3MpO1xyXG5cclxuZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xyXG4gIHBvcHVwRWRpdC5vcGVuKCk7XHJcbiAgaW5wdXRGdWxsTmFtZS52YWx1ZSA9IGRhdGEubmFtZTtcclxuICBpbnB1dE9jY3VwYXRpb24udmFsdWUgPSBkYXRhLmpvYjtcclxuICBmb3JtVmFsaWRhdG9yc1twcm9maWxlRm9ybS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpXS5yZXNldFZhbGlkYXRpb24oKTtcclxufSk7XHJcblxyXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBwb3B1cEFkZC5vcGVuKCk7XHJcbiAgZm9ybVZhbGlkYXRvcnNbYWRkRm9ybS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpXS5yZXNldFZhbGlkYXRpb24oKTtcclxufSk7XHJcblxyXG5jb25zdCBwb3B1cFByb2ZpbGVJbWcgPSBuZXcgUG9wdXBXaXRoRm9ybShcIi5wb3B1cF9wcm9maWxlLWltZ1wiLCAoZGF0YSkgPT4ge1xyXG4gIGFwaS5lZGl0UHJpZmlsZUltZyhkYXRhKS50aGVuKChyZXMpID0+IHtcclxuICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHJlcyk7XHJcbiAgfSk7XHJcbn0pO1xyXG5wb3B1cFByb2ZpbGVJbWcuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbnByb2ZpbGVQaWNFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgcG9wdXBQcm9maWxlSW1nLm9wZW4oKTtcclxuICBmb3JtVmFsaWRhdG9yc1twcm9maWxlSW1nZm9ybS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpXS5yZXNldFZhbGlkYXRpb24oKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJDYXJkIiwiZGF0YSIsInVzZXJJZCIsInRlbXBsYXRlIiwiaGFuZGxlQ2FyZENsaWNrIiwiaGFuZGxlRGVsZXRlQ2FyZCIsImhhbmRsZURlbGV0ZUltZ0Zvcm0iLCJoYW5kbGVMaWtlQ2xpY2siLCJfbmFtZSIsIm5hbWUiLCJfbGluayIsImxpbmsiLCJfZWxlbWVudCIsImNsb25lTm9kZSIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfaGFuZGxlRGVsZXRlQ2FyZCIsIl9oYW5kbGVEZWxldGVJbWdGb3JtIiwiX2lkIiwiX3VzZXJJZCIsIl9vd25lcklkIiwib3duZXIiLCJfbGlrZUNvdW50ZXIiLCJsaWtlcyIsIl9oYW5kbGVMaWtlQ2xpY2siLCJjYXJkTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJjYXJkSW1hZ2UiLCJjYXJkQnRuIiwidGV4dENvbnRlbnQiLCJzcmMiLCJhbHQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJzdHlsZSIsImRpc3BsYXkiLCJsZW5ndGgiLCJjYXJkSXNMaWtlZCIsInNvbWUiLCJwZXJzb24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJsaWtlQ291bnRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb250YWlucyIsIl9oYW5kbGVQcmV2aWV3SW1hZ2UiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsIl9zZXR0aW5ncyIsIl9mb3JtRWxlbWVudCIsIl9pbnB1dExpc3QiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXRTZWxlY3RvciIsIl9idXR0b25FbGVtZW50Iiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbnB1dEVsZW1lbnQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImVycm9yRWxlbWVudCIsImlkIiwiYWRkIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsInJlbW92ZSIsImhhc0ludmFsaWRJbnB1dCIsInZhbGlkaXR5IiwidmFsaWQiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiZGlzYWJsZWQiLCJfc2hvd0lucHV0RXJyb3IiLCJfaGlkZUlucHV0RXJyb3IiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJmb3JFYWNoIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIl9zZXRFdmVudExpc3RlbmVyIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiZXZ0Iiwia2V5IiwiY2xvc2UiLCJfcG9wdXAiLCJkb2N1bWVudCIsIl9oYW5kbGVFc2NDbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJQb3B1cERlbGV0ZUNhcmQiLCJhY3Rpb24iLCJfc3VibWl0SGFuZGxlciIsImV2ZW50IiwiUG9wdXBXaXRoRm9ybSIsInN1Ym1pdEhhbmRsZXIiLCJfZm9ybSIsIl9pbnB1dHMiLCJfc3VibWl0QnRuIiwiaW5wdXRWYWx1ZXMiLCJpbnB1dCIsInZhbHVlIiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJQb3B1cFdpdGhJbWFnZSIsIl9wb3B1cEltYWdlIiwiX3BvcHVwUGhvdG9DYXB0aW9uIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwicmVuZGVyZXIiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiY2FyZHMiLCJlbGVtZW50IiwicHJlcGVuZCIsInByb2ZpbGVJbWdmb3JtIiwiVXNlckluZm8iLCJwcm9maWxlTmFtZVNlbGVjdG9yIiwicHJvZmlsZUpvYlNlbGVjdG9yIiwicHJvZmlsZUltZ1NlbGVjdG9yIiwiX3Byb2ZpbGVOYW1lIiwiX3Byb2ZpbGVKb2IiLCJfcHJvZmlsZUltZyIsImpvYiIsImFib3V0IiwiYXZhdGFyIiwiYmFja2dyb3VuZEltYWdlIiwiY3VzdG9tRmV0Y2giLCJ1cmwiLCJoZWFkZXJzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsInN0YXR1c1RleHQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJBcGkiLCJiYXNlVXJsIiwiX2Jhc2VVcmwiLCJfaGVhZGVycyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY2FyZElkIiwicHJvZmlsZVBpYyIsImxvZ29JbWFnZSIsInBob3RvVGVtcGxhdGUiLCJjb250ZW50IiwicHJvZmlsZVBpY0VkaXRCdXR0b24iLCJwcm9maWxlRm9ybSIsImlucHV0RnVsbE5hbWUiLCJpbnB1dE9jY3VwYXRpb24iLCJlZGl0QnV0dG9uIiwiaW5wdXRQcm9maWxlSW1nIiwiYWRkRm9ybSIsImFkZEJ1dHRvbiIsImVkaXRTYXZlQnRuIiwiYWRkU2F2ZUJ0biIsInByb2ZpbGVJbWdTYXZlQnRuIiwiZGVsZXRlQ29uZmlybUJ0biIsImZvcm1WYWxpZGF0b3JzIiwiZm9ybUxpc3QiLCJmb3JtU2V0dGluZ3MiLCJmb3JtU2VsZWN0b3IiLCJwcm9maWxlcGljU3JjIiwibG9nb1NyYyIsInByb2ZpbGVQaWNFZGl0QnV0dG9uU3JjIiwiYXBpIiwiYXV0aG9yaXphdGlvbiIsImFsbCIsImdldEluaXRpYWxDYXJkcyIsImdldFVzZXJJbmZvIiwiY2FyZERhdGEiLCJ1c2VyRGF0YSIsInNlY3Rpb24iLCJyZW5kZXIiLCJ1c2VySW5mbyIsInNldFVzZXJJbmZvIiwiY2FyZFRvRGVsZXRlIiwiY29uZmlybURlbGV0ZSIsInNldEFjdGlvbiIsImRlbGV0ZUNhcmQiLCJsaWtlU3RhdGUiLCJsaWtlQ2FyZCIsImRpc2xpa2VDYXJkIiwicG9wdXBQaG90byIsInNldEV2ZW50TGlzdGVuZXJzIiwiZ2VuZXJhdGVDYXJkIiwib3BlbiIsImNhcmQiLCJhZGRJdGVtIiwiY3JlYXRlQ2FyZCIsInBvcHVwQWRkIiwidGl0bGUiLCJpbWdsaW5rIiwicG9wdXBFZGl0IiwiZWRpdFByaWZpbGVJbmZvIiwib2NjdXBhdGlvbiIsImVuYWJsZVZhbGlkYXRpb24iLCJmb3Jtc0xpc3QiLCJ2YWxpZGF0b3IiLCJmb3JtVHlwZSIsImdldEF0dHJpYnV0ZSIsInJlc2V0VmFsaWRhdGlvbiIsInBvcHVwUHJvZmlsZUltZyIsImVkaXRQcmlmaWxlSW1nIl0sInNvdXJjZVJvb3QiOiIifQ==