/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/Card.js":
/*!****************************************!*\
  !*** ./src/scripts/components/Card.js ***!
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
  function Card(_ref) {
    var data = _ref.data,
        user = _ref.user,
        photoTemplate = _ref.photoTemplate,
        handleCardClick = _ref.handleCardClick,
        handleDeleteCard = _ref.handleDeleteCard,
        handleLikeClick = _ref.handleLikeClick;

    _classCallCheck(this, Card);

    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._id = data._id;
    this._userId = user;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._handleLikeClick = handleLikeClick;
    this._element = photoTemplate.cloneNode(true);
  }

  _createClass(Card, [{
    key: "createCard",
    value: function createCard() {
      var _this = this;

      this._cardImage = this._element.querySelector(".photo-feed__image");
      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;
      this._element.querySelector(".photo-feed__text").textContent = this._name;

      this._setEventListeners(); //show trash bin icon only to the owner


      if (this._userId !== this._ownerId) {
        this._element.querySelector(".photo-feed__delete-btn").style.display = "none";
      }

      this._element.querySelector(".photo-feed__card-button-counter").textContent = this._likes.length;

      var cardIsLiked = this._likes.some(function (person) {
        return person._id === _this._userId;
      });

      if (cardIsLiked) {
        this._element.querySelector(".photo-feed__card-button").classList.toggle("photo-feed__card-button_not-active");

        this._element.querySelector(".photo-feed__card-button").classList.toggle("photo-feed__card-button_active");
      }

      return this._element;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;

      var cardBtn = this._element.querySelector(".photo-feed__card-button");

      cardBtn.addEventListener("click", function () {
        _this2._handleLikeClick(_this2._id);
      }); //photo popup

      this._element.querySelector(".photo-feed__image").addEventListener("click", function (evt) {
        _this2._handleCardClick(evt);
      }); //deleting cards


      this._element.querySelector(".photo-feed__delete-btn").addEventListener("click", function () {
        _this2._handleDeleteCard(_this2._id);
      });
    }
  }, {
    key: "isLiked",
    value: function isLiked() {
      var _this3 = this;

      return this._likes.some(function (person) {
        return person._id === _this3._userId;
      });
    }
  }, {
    key: "removeCard",
    value: function removeCard() {
      this._element.remove();

      this._element = null;
    }
  }, {
    key: "setLikes",
    value: function setLikes(newLikes) {
      this._likes = newLikes;

      this._renderLikes();
    }
  }, {
    key: "_renderLikes",
    value: function _renderLikes() {
      if (this.isLiked()) {
        this._element.querySelector(".photo-feed__card-button").classList.toggle("photo-feed__card-button_active");

        this._element.querySelector(".photo-feed__card-button").classList.toggle("photo-feed__card-button_not-active");
      } else {
        this._element.querySelector(".photo-feed__card-button").classList.toggle("photo-feed__card-button_active");

        this._element.querySelector(".photo-feed__card-button").classList.toggle("photo-feed__card-button_not-active");
      }

      this._element.querySelector(".photo-feed__card-button-counter").textContent = this._likes.length;
    }
  }]);

  return Card;
}();



/***/ }),

/***/ "./src/scripts/components/FormValidator.js":
/*!*************************************************!*\
  !*** ./src/scripts/components/FormValidator.js ***!
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

/***/ "./src/scripts/components/Popup.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/Popup.js ***!
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
      if (evt.key === "Escape") {
        _this.close();
      }
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

      this._popup.addEventListener("mousedown", function (evt) {
        if (evt.target.classList.contains("popup") || evt.target.classList.contains("popup__close-btn")) _this2.close();
      });
    }
  }]);

  return Popup;
}();



/***/ }),

/***/ "./src/scripts/components/PopupDeleteCard.js":
/*!***************************************************!*\
  !*** ./src/scripts/components/PopupDeleteCard.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupDeleteCard; }
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/scripts/components/Popup.js");
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
      this._handleSubmit = action;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      this._popup.addEventListener("submit", function (event) {
        event.preventDefault();

        _this2._handleSubmit();

        _this2.close();
      });

      _get(_getPrototypeOf(PopupDeleteCard.prototype), "setEventListeners", this).call(this);
    }
  }]);

  return PopupDeleteCard;
}(_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/scripts/components/PopupWithForm.js":
/*!*************************************************!*\
  !*** ./src/scripts/components/PopupWithForm.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithForm; }
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/scripts/components/Popup.js");
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

  function PopupWithForm(popupSelector, handleSubmit, buttonText, loadingButtonText) {
    var _this;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._handleSubmit = handleSubmit;
    _this._form = _this._popup.querySelector(".popup__form");
    _this._inputs = _this._popup.querySelectorAll(".popup__input");
    _this._submitBtn = _this._popup.querySelector(".popup__save-button");
    _this._buttonText = buttonText;
    _this._loadingButtonText = loadingButtonText;
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

        _this2._handleSubmit(_this2._getInputValues());
      });

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
    }
  }, {
    key: "showLoading",
    value: function showLoading() {
      this._submitBtn.textContent = this._loadingButtonText;
    }
  }, {
    key: "hideLoading",
    value: function hideLoading() {
      this._submitBtn.textContent = this._buttonText;
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

/***/ "./src/scripts/components/PopupWithImage.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/PopupWithImage.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithImage; }
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/scripts/components/Popup.js");
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



var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);
    _this._popupImage = _this._popup.querySelector(".popup__image");
    _this._popupPhotoCaption = _this._popup.querySelector(".popup__image-caption");
    return _this;
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(link, name) {
      this._popupImage.src = link;
      this._popupImage.alt = link;
      this._popupPhotoCaption.textContent = name;

      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImage;
}(_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/scripts/components/Section.js":
/*!*******************************************!*\
  !*** ./src/scripts/components/Section.js ***!
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
  function Section(renderer, containerSelector) {
    _classCallCheck(this, Section);

    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "render",
    value: function render(cards) {
      cards.forEach(this._renderer);
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

/***/ "./src/scripts/components/UserInfo.js":
/*!********************************************!*\
  !*** ./src/scripts/components/UserInfo.js ***!
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
var profileImgform = document.querySelector("#progile-img_form");
var addForm = document.querySelector("#add_form");
var addButton = document.querySelector(".profile__add-button");
var editSaveBtn = document.querySelector("#edit-save-btn");
var addSaveBtn = document.querySelector("#add-save-btn");
var profileImgSaveBtn = document.querySelector("#profile-img-save-btn");
var deleteConfirmBtn = document.querySelector("#delete-confirm-btn");
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
/* harmony import */ var _scripts_components_Card_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/components/Card.js */ "./src/scripts/components/Card.js");
/* harmony import */ var _scripts_components_PopupDeleteCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/components/PopupDeleteCard */ "./src/scripts/components/PopupDeleteCard.js");
/* harmony import */ var _scripts_components_FormValidator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scripts/components/FormValidator.js */ "./src/scripts/components/FormValidator.js");
/* harmony import */ var _scripts_components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scripts/components/PopupWithImage.js */ "./src/scripts/components/PopupWithImage.js");
/* harmony import */ var _scripts_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scripts/components/PopupWithForm.js */ "./src/scripts/components/PopupWithForm.js");
/* harmony import */ var _scripts_components_UserInfo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../scripts/components/UserInfo.js */ "./src/scripts/components/UserInfo.js");
/* harmony import */ var _scripts_components_Section_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../scripts/components/Section.js */ "./src/scripts/components/Section.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













 ///////////////////////
//////// API///////////
//////////////////////

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
      cardsData = _ref2[0],
      userData = _ref2[1];

  userId = userData._id;
  section.render(cardsData);
  userInfo.setUserInfo({
    name: userData.name,
    about: userData.about,
    avatar: userData.avatar
  });
}).catch(function (err) {
  console.log("Error: ".concat(err));
});
_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.profilePic.src = _images_profilepic_gif__WEBPACK_IMPORTED_MODULE_0__;
_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.profilePicEditButton.src = _images_button_edit_profile_img_button_svg__WEBPACK_IMPORTED_MODULE_2__;
_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.logoImage.src = _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__;
var popupPhoto = new _scripts_components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_9__["default"](".popup_photo");
popupPhoto.setEventListeners();
var confirmDelete = new _scripts_components_PopupDeleteCard__WEBPACK_IMPORTED_MODULE_7__["default"](".popup_confirmation");
confirmDelete.setEventListeners();

function generateCard(data) {
  var card = new _scripts_components_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    data: data,
    user: userId,
    photoTemplate: _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.photoTemplate,
    handleCardClick: function handleCardClick(evt) {
      evt.preventDefault();
      var target = evt.target;
      var link = target.src;
      var name = target.alt;
      popupPhoto.open(link, name);
      popupPhoto.setEventListeners();
    },
    handleDeleteCard: function handleDeleteCard(cardId) {
      confirmDelete.open();
      confirmDelete.setAction(function () {
        _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.deleteConfirmBtn.textContent = "Deleting...";
        api.deleteCard(cardId).then(function () {
          card.removeCard();
        }).catch(function (err) {
          console.log("Error: ".concat(err));
        }).finally(function () {
          _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.deleteConfirmBtn.textContent = "Yes";
        });
      });
    },
    handleLikeClick: function handleLikeClick(cardId) {
      var isLiked = card.isLiked();

      if (isLiked) {
        api.dislikeCard(cardId).then(function (res) {
          card.setLikes(res.likes);
        }).catch(function (err) {
          console.log("Error: ".concat(err));
        });
      } else {
        api.likeCard(cardId).then(function (res) {
          card.setLikes(res.likes);
        }).catch(function (err) {
          console.log("Error: ".concat(err));
        });
      }
    }
  });
  var photofeed = card.createCard();
  return photofeed;
}

var section = new _scripts_components_Section_js__WEBPACK_IMPORTED_MODULE_12__["default"](function (data) {
  section.addItem(generateCard(data));
}, ".photo-feed__grid");
var popupAdd = new _scripts_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_10__["default"](".popup_add", function (data) {
  popupAdd.showLoading();
  api.createCard(data.title, data.imglink).then(function (res) {
    var card = generateCard(res);
    section.addItem(card);
  }).catch(function (res) {
    console.log(res);
  }).finally(function () {
    popupAdd.close();
    popupAdd.hideLoading();
  });
}, _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.addSaveBtn.textContent, "Creating...");
popupAdd.setEventListeners();
var userInfo = new _scripts_components_UserInfo_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
  profileNameSelector: ".profile__name",
  profileJobSelector: ".profile__occupation",
  profileImgSelector: ".profile__image"
});
var popupEdit = new _scripts_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_10__["default"](".popup_edit", function (data) {
  popupEdit.showLoading();
  api.editPrifileInfo(data.name, data.occupation).then(function (res) {
    userInfo.setUserInfo(res);
  }).catch(function (err) {
    console.log("Error: ".concat(err));
  }).finally(function () {
    popupEdit.close();
    popupEdit.hideLoading();
  });
}, _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.editSaveBtn.textContent, "Saving...");
popupEdit.setEventListeners();
var formSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};
var formValidators = {};

var enableValidation = function enableValidation(settings) {
  var formsList = Array.from(document.querySelectorAll(settings.formSelector));
  formsList.forEach(function (formElement) {
    var validator = new _scripts_components_FormValidator_js__WEBPACK_IMPORTED_MODULE_8__["default"](settings, formElement);
    var formType = formElement.getAttribute("name");
    formValidators[formType] = validator;
    validator.enableValidation();
  });
};

enableValidation(formSettings);
_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.editButton.addEventListener("click", function () {
  var data = userInfo.getUserInfo();
  popupEdit.open();
  _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.inputFullName.value = data.name;
  _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.inputOccupation.value = data.job;
  formValidators[_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.profileForm.getAttribute("name")].resetValidation();
});
_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.addButton.addEventListener("click", function () {
  popupAdd.open();
  formValidators[_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.addForm.getAttribute("name")].resetValidation();
});
var popupProfileImg = new _scripts_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_10__["default"](".popup_profile-img", function (data) {
  popupProfileImg.showLoading();
  api.editPrifileImg(data).then(function (res) {
    userInfo.setUserInfo(res);
  }).catch(function (err) {
    console.log("Error: ".concat(err));
  }).finally(function () {
    popupProfileImg.close();
    popupProfileImg.hideLoading();
  });
}, _scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.profileImgSaveBtn.textContent, "Saving...");
popupProfileImg.setEventListeners();
_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.profilePicEditButton.addEventListener("click", function () {
  popupProfileImg.open();
  formValidators[_scripts_utils_contants__WEBPACK_IMPORTED_MODULE_5__.profileImgform.getAttribute("name")].resetValidation();
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixFQUFvQyxZQUFNO0FBQ3hDMkMsRUFBQUEsUUFBUSxDQUFDWCxJQUFUO0FBQ0FtQixFQUFBQSxjQUFjLENBQUNwRCx5RUFBQSxDQUFxQixNQUFyQixDQUFELENBQWQsQ0FBNkMwRCxlQUE3QztBQUNELENBSEQ7QUFLQSxJQUFNQyxlQUFlLEdBQUcsSUFBSTdILDZFQUFKLENBQ3RCLG9CQURzQixFQUV0QixVQUFDeEYsSUFBRCxFQUFVO0FBQ1JxTixFQUFBQSxlQUFlLENBQUNkLFdBQWhCO0FBRUFqQyxFQUFBQSxHQUFHLENBQ0FnRCxjQURILENBQ2tCdE4sSUFEbEIsRUFFR2lJLElBRkgsQ0FFUSxVQUFDQyxHQUFELEVBQVM7QUFDYjhDLElBQUFBLFFBQVEsQ0FBQ0MsV0FBVCxDQUFxQi9DLEdBQXJCO0FBQ0QsR0FKSCxFQUtHZ0QsS0FMSCxDQUtTLFVBQUNDLEdBQUQsRUFBUztBQUNkQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsa0JBQXNCRixHQUF0QjtBQUNELEdBUEgsRUFTR1ksT0FUSCxDQVNXLFlBQU07QUFDYnNCLElBQUFBLGVBQWUsQ0FBQ3hJLEtBQWhCO0FBQ0F3SSxJQUFBQSxlQUFlLENBQUNYLFdBQWhCO0FBQ0QsR0FaSDtBQWFELENBbEJxQixFQW1CdEI1QyxrRkFuQnNCLEVBb0J0QixXQXBCc0IsQ0FBeEI7QUFzQkF1RCxlQUFlLENBQUM5QixpQkFBaEI7QUFFQW5DLDBGQUFBLENBQXNDLE9BQXRDLEVBQStDLFlBQU07QUFDbkRpRSxFQUFBQSxlQUFlLENBQUMxQixJQUFoQjtBQUNBbUIsRUFBQUEsY0FBYyxDQUFDN0YsZ0ZBQUEsQ0FBNEIsTUFBNUIsQ0FBRCxDQUFkLENBQW9EbUcsZUFBcEQ7QUFDRCxDQUhELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvUG9wdXBEZWxldGVDYXJkLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvdXRpbHMvYXBpLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy91dGlscy9jb250YW50cy5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKHsgZGF0YSwgdXNlciwgcGhvdG9UZW1wbGF0ZSwgaGFuZGxlQ2FyZENsaWNrLCBoYW5kbGVEZWxldGVDYXJkLCBoYW5kbGVMaWtlQ2xpY2sgfSkge1xyXG4gICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XHJcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XHJcbiAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkID0gaGFuZGxlRGVsZXRlQ2FyZDtcclxuICAgIHRoaXMuX2lkID0gZGF0YS5faWQ7XHJcbiAgICB0aGlzLl91c2VySWQgPSB1c2VyO1xyXG4gICAgdGhpcy5fb3duZXJJZCA9IGRhdGEub3duZXIuX2lkO1xyXG4gICAgdGhpcy5fbGlrZXMgPSBkYXRhLmxpa2VzO1xyXG4gICAgdGhpcy5faGFuZGxlTGlrZUNsaWNrID0gaGFuZGxlTGlrZUNsaWNrO1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IHBob3RvVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2NhcmRJbWFnZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1mZWVkX19pbWFnZVwiKTtcclxuXHJcbiAgICB0aGlzLl9jYXJkSW1hZ2Uuc3JjID0gdGhpcy5fbGluaztcclxuICAgIHRoaXMuX2NhcmRJbWFnZS5hbHQgPSB0aGlzLl9uYW1lO1xyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWZlZWRfX3RleHRcIikudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIC8vc2hvdyB0cmFzaCBiaW4gaWNvbiBvbmx5IHRvIHRoZSBvd25lclxyXG4gICAgaWYgKHRoaXMuX3VzZXJJZCAhPT0gdGhpcy5fb3duZXJJZCkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZmVlZF9fZGVsZXRlLWJ0blwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWZlZWRfX2NhcmQtYnV0dG9uLWNvdW50ZXJcIikudGV4dENvbnRlbnQgPSB0aGlzLl9saWtlcy5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgY2FyZElzTGlrZWQgPSB0aGlzLl9saWtlcy5zb21lKChwZXJzb24pID0+IHBlcnNvbi5faWQgPT09IHRoaXMuX3VzZXJJZCk7XHJcbiAgICBpZiAoY2FyZElzTGlrZWQpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWZlZWRfX2NhcmQtYnV0dG9uXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJwaG90by1mZWVkX19jYXJkLWJ1dHRvbl9ub3QtYWN0aXZlXCIpO1xyXG5cclxuICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWZlZWRfX2NhcmQtYnV0dG9uXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJwaG90by1mZWVkX19jYXJkLWJ1dHRvbl9hY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBjYXJkQnRuID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWZlZWRfX2NhcmQtYnV0dG9uXCIpO1xyXG5cclxuICAgIGNhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlTGlrZUNsaWNrKHRoaXMuX2lkKTtcclxuICAgIH0pO1xyXG4gICAgLy9waG90byBwb3B1cFxyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWZlZWRfX2ltYWdlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayhldnQpO1xyXG4gICAgfSk7XHJcbiAgICAvL2RlbGV0aW5nIGNhcmRzXHJcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZmVlZF9fZGVsZXRlLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkKHRoaXMuX2lkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNMaWtlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9saWtlcy5zb21lKChwZXJzb24pID0+IHBlcnNvbi5faWQgPT09IHRoaXMuX3VzZXJJZCk7XHJcbiAgfVxyXG4gIHJlbW92ZUNhcmQoKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzZXRMaWtlcyhuZXdMaWtlcykge1xyXG4gICAgdGhpcy5fbGlrZXMgPSBuZXdMaWtlcztcclxuICAgIHRoaXMuX3JlbmRlckxpa2VzKCk7XHJcbiAgfVxyXG5cclxuICBfcmVuZGVyTGlrZXMoKSB7XHJcbiAgICBpZiAodGhpcy5pc0xpa2VkKCkpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWZlZWRfX2NhcmQtYnV0dG9uXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJwaG90by1mZWVkX19jYXJkLWJ1dHRvbl9hY3RpdmVcIik7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1mZWVkX19jYXJkLWJ1dHRvblwiKS5jbGFzc0xpc3QudG9nZ2xlKFwicGhvdG8tZmVlZF9fY2FyZC1idXR0b25fbm90LWFjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1mZWVkX19jYXJkLWJ1dHRvblwiKS5jbGFzc0xpc3QudG9nZ2xlKFwicGhvdG8tZmVlZF9fY2FyZC1idXR0b25fYWN0aXZlXCIpO1xyXG4gICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZmVlZF9fY2FyZC1idXR0b25cIikuY2xhc3NMaXN0LnRvZ2dsZShcInBob3RvLWZlZWRfX2NhcmQtYnV0dG9uX25vdC1hY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZmVlZF9fY2FyZC1idXR0b24tY291bnRlclwiKS50ZXh0Q29udGVudCA9IHRoaXMuX2xpa2VzLmxlbmd0aDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbGVtZW50KSB7XHJcbiAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9zZXR0aW5ncy5pbnB1dFNlbGVjdG9yKSk7XHJcbiAgICB0aGlzLl9idXR0b25FbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9zZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBfc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xyXG5cclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX3NldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5ncy5lcnJvckNsYXNzKTtcclxuICB9XHJcblxyXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fc2V0dGluZ3MuZXJyb3JDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XHJcbiAgICBjb25zdCBoYXNJbnZhbGlkSW5wdXQgPSB0aGlzLl9pbnB1dExpc3Quc29tZSgoaW5wdXRFbGVtZW50KSA9PiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKTtcclxuICAgIGlmIChoYXNJbnZhbGlkSW5wdXQpIHtcclxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX3NldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9zZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpIHtcclxuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKHRoaXMuX2lucHV0TGlzdCwgdGhpcy5fYnV0dG9uRWxlbWVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXIoKTtcclxuICB9XHJcblxyXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfdmlzaWJsZVwiKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX3Zpc2libGVcIik7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2dCkgPT4ge1xyXG4gICAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cFwiKSB8fCBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwX19jbG9zZS1idG5cIikpIHRoaXMuY2xvc2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUVzY0Nsb3NlID0gKGV2dCkgPT4ge1xyXG4gICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cERlbGV0ZUNhcmQgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgc2V0QWN0aW9uKGFjdGlvbikge1xyXG4gICAgdGhpcy5faGFuZGxlU3VibWl0ID0gYWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9oYW5kbGVTdWJtaXQoKTtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgb3BlbiA9ICgpID0+IHtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBoYW5kbGVTdWJtaXQsIGJ1dHRvblRleHQsIGxvYWRpbmdCdXR0b25UZXh0KSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdCA9IGhhbmRsZVN1Ym1pdDtcclxuICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xyXG4gICAgdGhpcy5faW5wdXRzID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9faW5wdXRcIik7XHJcbiAgICB0aGlzLl9zdWJtaXRCdG4gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19zYXZlLWJ1dHRvblwiKTtcclxuICAgIHRoaXMuX2J1dHRvblRleHQgPSBidXR0b25UZXh0O1xyXG4gICAgdGhpcy5fbG9hZGluZ0J1dHRvblRleHQgPSBsb2FkaW5nQnV0dG9uVGV4dDtcclxuICB9XHJcblxyXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgIGNvbnN0IGlucHV0VmFsdWVzID0ge307XHJcbiAgICB0aGlzLl9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgaW5wdXRWYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBpbnB1dFZhbHVlcztcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9oYW5kbGVTdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgc2hvd0xvYWRpbmcoKSB7XHJcbiAgICB0aGlzLl9zdWJtaXRCdG4udGV4dENvbnRlbnQgPSB0aGlzLl9sb2FkaW5nQnV0dG9uVGV4dDtcclxuICB9XHJcblxyXG4gIGhpZGVMb2FkaW5nKCkge1xyXG4gICAgdGhpcy5fc3VibWl0QnRuLnRleHRDb250ZW50ID0gdGhpcy5fYnV0dG9uVGV4dDtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fZm9ybS5yZXNldCgpO1xyXG4gICAgc3VwZXIuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX3BvcHVwSW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcclxuICAgIHRoaXMuX3BvcHVwUGhvdG9DYXB0aW9uID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2UtY2FwdGlvblwiKTtcclxuICB9XHJcblxyXG4gIG9wZW4obGluaywgbmFtZSkge1xyXG4gICAgdGhpcy5fcG9wdXBJbWFnZS5zcmMgPSBsaW5rO1xyXG4gICAgdGhpcy5fcG9wdXBJbWFnZS5hbHQgPSBsaW5rO1xyXG4gICAgdGhpcy5fcG9wdXBQaG90b0NhcHRpb24udGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgc3VwZXIub3BlbigpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3RvcihyZW5kZXJlciwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjYXJkcykge1xyXG4gICAgY2FyZHMuZm9yRWFjaCh0aGlzLl9yZW5kZXJlcik7XHJcbiAgfVxyXG5cclxuICBhZGRJdGVtKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwcm9maWxlSW1nZm9ybSB9IGZyb20gXCIuLi91dGlscy9jb250YW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKHsgcHJvZmlsZU5hbWVTZWxlY3RvciwgcHJvZmlsZUpvYlNlbGVjdG9yLCBwcm9maWxlSW1nU2VsZWN0b3IgfSkge1xyXG4gICAgdGhpcy5fcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVOYW1lU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fcHJvZmlsZUpvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvZmlsZUpvYlNlbGVjdG9yKTtcclxuICAgIHRoaXMuX3Byb2ZpbGVJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVJbWdTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWU6IHRoaXMuX3Byb2ZpbGVOYW1lLnRleHRDb250ZW50LFxyXG4gICAgICBqb2I6IHRoaXMuX3Byb2ZpbGVKb2IudGV4dENvbnRlbnQsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlckluZm8oeyBuYW1lLCBhYm91dCwgYXZhdGFyIH0pIHtcclxuICAgIHRoaXMuX3Byb2ZpbGVOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHRoaXMuX3Byb2ZpbGVKb2IudGV4dENvbnRlbnQgPSBhYm91dDtcclxuICAgIHRoaXMuX3Byb2ZpbGVJbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7YXZhdGFyfVwiKWA7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IGN1c3RvbUZldGNoID0gKHVybCwgaGVhZGVycykgPT5cclxuICBmZXRjaCh1cmwsIGhlYWRlcnMpLnRoZW4oKHJlcykgPT4gKHJlcy5vayA/IHJlcy5qc29uKCkgOiBQcm9taXNlLnJlamVjdChyZXMuc3RhdHVzVGV4dCkpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XHJcbiAgY29uc3RydWN0b3IoeyBiYXNlVXJsLCBoZWFkZXJzIH0pIHtcclxuICAgIHRoaXMuX2Jhc2VVcmwgPSBiYXNlVXJsO1xyXG4gICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgfVxyXG5cclxuICBnZXRJbml0aWFsQ2FyZHMoKSB7XHJcbiAgICByZXR1cm4gY3VzdG9tRmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHNgLCB7IGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIHJldHVybiBjdXN0b21GZXRjaChgJHt0aGlzLl9iYXNlVXJsfS91c2Vycy9tZWAsIHsgaGVhZGVyczogdGhpcy5faGVhZGVycyB9KTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbWcoKSB7XHJcbiAgICByZXR1cm4gY3VzdG9tRmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWUvYXZhdGFyYCwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDYXJkKG5hbWUsIGxpbmspIHtcclxuICAgIGNvbnN0IGRhdGEgPSB7IG5hbWUsIGxpbmsgfTtcclxuICAgIHJldHVybiBjdXN0b21GZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkc2AsIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUNhcmQoY2FyZElkKSB7XHJcbiAgICByZXR1cm4gY3VzdG9tRmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHMvJHtjYXJkSWR9IGAsIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsaWtlQ2FyZChjYXJkSWQpIHtcclxuICAgIHJldHVybiBjdXN0b21GZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkcy9saWtlcy8ke2NhcmRJZH0gYCwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRpc2xpa2VDYXJkKGNhcmRJZCkge1xyXG4gICAgcmV0dXJuIGN1c3RvbUZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzL2xpa2VzLyR7Y2FyZElkfSBgLCB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZWRpdFByaWZpbGVJbmZvKG5hbWUsIGFib3V0KSB7XHJcbiAgICBjb25zdCBkYXRhID0geyBuYW1lLCBhYm91dCB9O1xyXG4gICAgcmV0dXJuIGN1c3RvbUZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lIGAsIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBlZGl0UHJpZmlsZUltZyhkYXRhKSB7XHJcbiAgICByZXR1cm4gY3VzdG9tRmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWUvYXZhdGFyYCwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHByb2ZpbGVQaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2ltYWdlXCIpO1xyXG5leHBvcnQgY29uc3QgbG9nb0ltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2xvZ29cIik7XHJcbmV4cG9ydCBjb25zdCBwaG90b1RlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaG90by1mZWVkX19jYXJkc1wiKS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZmVlZF9fY2FyZFwiKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVQaWNFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19pbWctYnV0dG9uXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybV9lZGl0XCIpO1xyXG5leHBvcnQgY29uc3QgaW5wdXRGdWxsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZS1pbnB1dFwiKTtcclxuZXhwb3J0IGNvbnN0IGlucHV0T2NjdXBhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb2NjdXBhdGlvbi1pbnB1dFwiKTtcclxuZXhwb3J0IGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xyXG5leHBvcnQgY29uc3QgaW5wdXRQcm9maWxlSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlSW1nLWlucHV0XCIpO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZUltZ2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2dpbGUtaW1nX2Zvcm1cIik7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX2Zvcm1cIik7XHJcbmV4cG9ydCBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdFNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtc2F2ZS1idG5cIik7XHJcbmV4cG9ydCBjb25zdCBhZGRTYXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtc2F2ZS1idG5cIik7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlSW1nU2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1pbWctc2F2ZS1idG5cIik7XHJcbmV4cG9ydCBjb25zdCBkZWxldGVDb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWxldGUtY29uZmlybS1idG5cIik7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybUxpc3QgPSB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtU2V0dGluZ3MgPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiBcIi5wb3B1cF9fZm9ybVwiLFxyXG4gIGlucHV0U2VsZWN0b3I6IFwiLnBvcHVwX19pbnB1dFwiLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5wb3B1cF9fc2F2ZS1idXR0b25cIixcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwX19idXR0b25fZGlzYWJsZWRcIixcclxuICBpbnB1dEVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0X3R5cGVfZXJyb3JcIixcclxuICBlcnJvckNsYXNzOiBcInBvcHVwX19lcnJvcl92aXNpYmxlXCIsXHJcbn07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiaW1wb3J0IHByb2ZpbGVwaWNTcmMgZnJvbSBcIi4uL2ltYWdlcy9wcm9maWxlcGljLmdpZlwiO1xyXG5pbXBvcnQgbG9nb1NyYyBmcm9tIFwiLi4vaW1hZ2VzL2xvZ28uc3ZnXCI7XHJcbmltcG9ydCBwcm9maWxlUGljRWRpdEJ1dHRvblNyYyBmcm9tIFwiLi4vaW1hZ2VzL2J1dHRvbi9lZGl0X3Byb2ZpbGVfaW1nX2J1dHRvbi5zdmdcIjtcclxuaW1wb3J0IEFwaSBmcm9tIFwiLi4vc2NyaXB0cy91dGlscy9hcGlcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IHtcclxuICBwcm9maWxlUGljLFxyXG4gIHByb2ZpbGVQaWNFZGl0QnV0dG9uLFxyXG4gIHByb2ZpbGVJbWdmb3JtLFxyXG4gIHBob3RvVGVtcGxhdGUsXHJcbiAgbG9nb0ltYWdlLFxyXG4gIHByb2ZpbGVGb3JtLFxyXG4gIGlucHV0RnVsbE5hbWUsXHJcbiAgaW5wdXRPY2N1cGF0aW9uLFxyXG4gIGVkaXRCdXR0b24sXHJcbiAgYWRkRm9ybSxcclxuICBhZGRCdXR0b24sXHJcbiAgZWRpdFNhdmVCdG4sXHJcbiAgYWRkU2F2ZUJ0bixcclxuICBwcm9maWxlSW1nU2F2ZUJ0bixcclxuICBkZWxldGVDb25maXJtQnRuLFxyXG59IGZyb20gXCIuLi9zY3JpcHRzL3V0aWxzL2NvbnRhbnRzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9zY3JpcHRzL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgUG9wdXBEZWxldGVDYXJkIGZyb20gXCIuLi9zY3JpcHRzL2NvbXBvbmVudHMvUG9wdXBEZWxldGVDYXJkXCI7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9zY3JpcHRzL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL3NjcmlwdHMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vc2NyaXB0cy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9zY3JpcHRzL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL3NjcmlwdHMvY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLyBBUEkvLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpKHtcclxuICBiYXNlVXJsOiBcImh0dHBzOi8vYXJvdW5kLm5vbW9yZXBhcnRpZXMuY28vdjEvZ3JvdXAtMTJcIixcclxuICBoZWFkZXJzOiB7XHJcbiAgICBhdXRob3JpemF0aW9uOiBcIjBlYTQzZDY2LWE4OTAtNDI1Mi1hZWI1LTVmOTc0Yjg1M2MwMlwiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5sZXQgdXNlcklkO1xyXG5cclxuUHJvbWlzZS5hbGwoW2FwaS5nZXRJbml0aWFsQ2FyZHMoKSwgYXBpLmdldFVzZXJJbmZvKCldKVxyXG4gIC50aGVuKChbY2FyZHNEYXRhLCB1c2VyRGF0YV0pID0+IHtcclxuICAgIHVzZXJJZCA9IHVzZXJEYXRhLl9pZDtcclxuICAgIHNlY3Rpb24ucmVuZGVyKGNhcmRzRGF0YSk7XHJcbiAgICB1c2VySW5mby5zZXRVc2VySW5mbyh7IG5hbWU6IHVzZXJEYXRhLm5hbWUsIGFib3V0OiB1c2VyRGF0YS5hYm91dCwgYXZhdGFyOiB1c2VyRGF0YS5hdmF0YXIgfSk7XHJcbiAgfSlcclxuICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vycn1gKTtcclxuICB9KTtcclxuXHJcbnByb2ZpbGVQaWMuc3JjID0gcHJvZmlsZXBpY1NyYztcclxucHJvZmlsZVBpY0VkaXRCdXR0b24uc3JjID0gcHJvZmlsZVBpY0VkaXRCdXR0b25TcmM7XHJcbmxvZ29JbWFnZS5zcmMgPSBsb2dvU3JjO1xyXG5cclxuY29uc3QgcG9wdXBQaG90byA9IG5ldyBQb3B1cFdpdGhJbWFnZShcIi5wb3B1cF9waG90b1wiKTtcclxucG9wdXBQaG90by5zZXRFdmVudExpc3RlbmVycygpO1xyXG5jb25zdCBjb25maXJtRGVsZXRlID0gbmV3IFBvcHVwRGVsZXRlQ2FyZChcIi5wb3B1cF9jb25maXJtYXRpb25cIik7XHJcbmNvbmZpcm1EZWxldGUuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ2FyZChkYXRhKSB7XHJcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICB1c2VyOiB1c2VySWQsXHJcbiAgICBwaG90b1RlbXBsYXRlOiBwaG90b1RlbXBsYXRlLFxyXG4gICAgaGFuZGxlQ2FyZENsaWNrOiAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0O1xyXG4gICAgICBjb25zdCBsaW5rID0gdGFyZ2V0LnNyYztcclxuICAgICAgY29uc3QgbmFtZSA9IHRhcmdldC5hbHQ7XHJcbiAgICAgIHBvcHVwUGhvdG8ub3BlbihsaW5rLCBuYW1lKTtcclxuICAgICAgcG9wdXBQaG90by5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZURlbGV0ZUNhcmQ6IChjYXJkSWQpID0+IHtcclxuICAgICAgY29uZmlybURlbGV0ZS5vcGVuKCk7XHJcbiAgICAgIGNvbmZpcm1EZWxldGUuc2V0QWN0aW9uKCgpID0+IHtcclxuICAgICAgICBkZWxldGVDb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGluZy4uLlwiO1xyXG4gICAgICAgIGFwaVxyXG4gICAgICAgICAgLmRlbGV0ZUNhcmQoY2FyZElkKVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjYXJkLnJlbW92ZUNhcmQoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyfWApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgZGVsZXRlQ29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiWWVzXCI7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlTGlrZUNsaWNrOiAoY2FyZElkKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlzTGlrZWQgPSBjYXJkLmlzTGlrZWQoKTtcclxuICAgICAgaWYgKGlzTGlrZWQpIHtcclxuICAgICAgICBhcGlcclxuICAgICAgICAgIC5kaXNsaWtlQ2FyZChjYXJkSWQpXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNhcmQuc2V0TGlrZXMocmVzLmxpa2VzKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyfWApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXBpXHJcbiAgICAgICAgICAubGlrZUNhcmQoY2FyZElkKVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjYXJkLnNldExpa2VzKHJlcy5saWtlcyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vycn1gKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IHBob3RvZmVlZCA9IGNhcmQuY3JlYXRlQ2FyZCgpO1xyXG4gIHJldHVybiBwaG90b2ZlZWQ7XHJcbn1cclxuXHJcbmNvbnN0IHNlY3Rpb24gPSBuZXcgU2VjdGlvbigoZGF0YSkgPT4ge1xyXG4gIHNlY3Rpb24uYWRkSXRlbShnZW5lcmF0ZUNhcmQoZGF0YSkpO1xyXG59LCBcIi5waG90by1mZWVkX19ncmlkXCIpO1xyXG5cclxuY29uc3QgcG9wdXBBZGQgPSBuZXcgUG9wdXBXaXRoRm9ybShcclxuICBcIi5wb3B1cF9hZGRcIixcclxuICAoZGF0YSkgPT4ge1xyXG4gICAgcG9wdXBBZGQuc2hvd0xvYWRpbmcoKTtcclxuICAgIGFwaVxyXG4gICAgICAuY3JlYXRlQ2FyZChkYXRhLnRpdGxlLCBkYXRhLmltZ2xpbmspXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zdCBjYXJkID0gZ2VuZXJhdGVDYXJkKHJlcyk7XHJcbiAgICAgICAgc2VjdGlvbi5hZGRJdGVtKGNhcmQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBwb3B1cEFkZC5jbG9zZSgpO1xyXG4gICAgICAgIHBvcHVwQWRkLmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgYWRkU2F2ZUJ0bi50ZXh0Q29udGVudCxcclxuICBcIkNyZWF0aW5nLi4uXCJcclxuKTtcclxuXHJcbnBvcHVwQWRkLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XHJcbiAgcHJvZmlsZU5hbWVTZWxlY3RvcjogXCIucHJvZmlsZV9fbmFtZVwiLFxyXG4gIHByb2ZpbGVKb2JTZWxlY3RvcjogXCIucHJvZmlsZV9fb2NjdXBhdGlvblwiLFxyXG4gIHByb2ZpbGVJbWdTZWxlY3RvcjogXCIucHJvZmlsZV9faW1hZ2VcIixcclxufSk7XHJcblxyXG5jb25zdCBwb3B1cEVkaXQgPSBuZXcgUG9wdXBXaXRoRm9ybShcclxuICBcIi5wb3B1cF9lZGl0XCIsXHJcbiAgKGRhdGEpID0+IHtcclxuICAgIHBvcHVwRWRpdC5zaG93TG9hZGluZygpO1xyXG4gICAgYXBpXHJcbiAgICAgIC5lZGl0UHJpZmlsZUluZm8oZGF0YS5uYW1lLCBkYXRhLm9jY3VwYXRpb24pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB1c2VySW5mby5zZXRVc2VySW5mbyhyZXMpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJ9YCk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgcG9wdXBFZGl0LmNsb3NlKCk7XHJcbiAgICAgICAgcG9wdXBFZGl0LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgZWRpdFNhdmVCdG4udGV4dENvbnRlbnQsXHJcbiAgXCJTYXZpbmcuLi5cIlxyXG4pO1xyXG5cclxucG9wdXBFZGl0LnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBmb3JtU2V0dGluZ3MgPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiBcIi5wb3B1cF9fZm9ybVwiLFxyXG4gIGlucHV0U2VsZWN0b3I6IFwiLnBvcHVwX19pbnB1dFwiLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5wb3B1cF9fc2F2ZS1idXR0b25cIixcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwX19idXR0b25fZGlzYWJsZWRcIixcclxuICBpbnB1dEVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0X3R5cGVfZXJyb3JcIixcclxuICBlcnJvckNsYXNzOiBcInBvcHVwX19lcnJvcl92aXNpYmxlXCIsXHJcbn07XHJcblxyXG5jb25zdCBmb3JtVmFsaWRhdG9ycyA9IHt9O1xyXG5cclxuY29uc3QgZW5hYmxlVmFsaWRhdGlvbiA9IChzZXR0aW5ncykgPT4ge1xyXG4gIGNvbnN0IGZvcm1zTGlzdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZXR0aW5ncy5mb3JtU2VsZWN0b3IpKTtcclxuICBmb3Jtc0xpc3QuZm9yRWFjaCgoZm9ybUVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCk7XHJcbiAgICBjb25zdCBmb3JtVHlwZSA9IGZvcm1FbGVtZW50LmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XHJcbiAgICBmb3JtVmFsaWRhdG9yc1tmb3JtVHlwZV0gPSB2YWxpZGF0b3I7XHJcbiAgICB2YWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG4gIH0pO1xyXG59O1xyXG5lbmFibGVWYWxpZGF0aW9uKGZvcm1TZXR0aW5ncyk7XHJcblxyXG5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XHJcbiAgcG9wdXBFZGl0Lm9wZW4oKTtcclxuICBpbnB1dEZ1bGxOYW1lLnZhbHVlID0gZGF0YS5uYW1lO1xyXG4gIGlucHV0T2NjdXBhdGlvbi52YWx1ZSA9IGRhdGEuam9iO1xyXG4gIGZvcm1WYWxpZGF0b3JzW3Byb2ZpbGVGb3JtLmdldEF0dHJpYnV0ZShcIm5hbWVcIildLnJlc2V0VmFsaWRhdGlvbigpO1xyXG59KTtcclxuXHJcbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHBvcHVwQWRkLm9wZW4oKTtcclxuICBmb3JtVmFsaWRhdG9yc1thZGRGb3JtLmdldEF0dHJpYnV0ZShcIm5hbWVcIildLnJlc2V0VmFsaWRhdGlvbigpO1xyXG59KTtcclxuXHJcbmNvbnN0IHBvcHVwUHJvZmlsZUltZyA9IG5ldyBQb3B1cFdpdGhGb3JtKFxyXG4gIFwiLnBvcHVwX3Byb2ZpbGUtaW1nXCIsXHJcbiAgKGRhdGEpID0+IHtcclxuICAgIHBvcHVwUHJvZmlsZUltZy5zaG93TG9hZGluZygpO1xyXG5cclxuICAgIGFwaVxyXG4gICAgICAuZWRpdFByaWZpbGVJbWcoZGF0YSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHJlcyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vycn1gKTtcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBwb3B1cFByb2ZpbGVJbWcuY2xvc2UoKTtcclxuICAgICAgICBwb3B1cFByb2ZpbGVJbWcuaGlkZUxvYWRpbmcoKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBwcm9maWxlSW1nU2F2ZUJ0bi50ZXh0Q29udGVudCxcclxuICBcIlNhdmluZy4uLlwiXHJcbik7XHJcbnBvcHVwUHJvZmlsZUltZy5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxucHJvZmlsZVBpY0VkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBwb3B1cFByb2ZpbGVJbWcub3BlbigpO1xyXG4gIGZvcm1WYWxpZGF0b3JzW3Byb2ZpbGVJbWdmb3JtLmdldEF0dHJpYnV0ZShcIm5hbWVcIildLnJlc2V0VmFsaWRhdGlvbigpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIkNhcmQiLCJkYXRhIiwidXNlciIsInBob3RvVGVtcGxhdGUiLCJoYW5kbGVDYXJkQ2xpY2siLCJoYW5kbGVEZWxldGVDYXJkIiwiaGFuZGxlTGlrZUNsaWNrIiwiX25hbWUiLCJuYW1lIiwiX2xpbmsiLCJsaW5rIiwiX2hhbmRsZUNhcmRDbGljayIsIl9oYW5kbGVEZWxldGVDYXJkIiwiX2lkIiwiX3VzZXJJZCIsIl9vd25lcklkIiwib3duZXIiLCJfbGlrZXMiLCJsaWtlcyIsIl9oYW5kbGVMaWtlQ2xpY2siLCJfZWxlbWVudCIsImNsb25lTm9kZSIsIl9jYXJkSW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwic3JjIiwiYWx0IiwidGV4dENvbnRlbnQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJzdHlsZSIsImRpc3BsYXkiLCJsZW5ndGgiLCJjYXJkSXNMaWtlZCIsInNvbWUiLCJwZXJzb24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjYXJkQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInJlbW92ZSIsIm5ld0xpa2VzIiwiX3JlbmRlckxpa2VzIiwiaXNMaWtlZCIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbGVtZW50IiwiX3NldHRpbmdzIiwiX2Zvcm1FbGVtZW50IiwiX2lucHV0TGlzdCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dFNlbGVjdG9yIiwiX2J1dHRvbkVsZW1lbnQiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImlucHV0RWxlbWVudCIsInZhbGlkYXRpb25NZXNzYWdlIiwiZXJyb3JFbGVtZW50IiwiaWQiLCJhZGQiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiaGFzSW52YWxpZElucHV0IiwidmFsaWRpdHkiLCJ2YWxpZCIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJkaXNhYmxlZCIsIl9zaG93SW5wdXRFcnJvciIsIl9oaWRlSW5wdXRFcnJvciIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiZSIsInByZXZlbnREZWZhdWx0IiwiX3NldEV2ZW50TGlzdGVuZXIiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJrZXkiLCJjbG9zZSIsIl9wb3B1cCIsImRvY3VtZW50IiwiX2hhbmRsZUVzY0Nsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBEZWxldGVDYXJkIiwiYWN0aW9uIiwiX2hhbmRsZVN1Ym1pdCIsImV2ZW50IiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZVN1Ym1pdCIsImJ1dHRvblRleHQiLCJsb2FkaW5nQnV0dG9uVGV4dCIsIl9mb3JtIiwiX2lucHV0cyIsIl9zdWJtaXRCdG4iLCJfYnV0dG9uVGV4dCIsIl9sb2FkaW5nQnV0dG9uVGV4dCIsImlucHV0VmFsdWVzIiwiaW5wdXQiLCJ2YWx1ZSIsIl9nZXRJbnB1dFZhbHVlcyIsInJlc2V0IiwiUG9wdXBXaXRoSW1hZ2UiLCJfcG9wdXBJbWFnZSIsIl9wb3B1cFBob3RvQ2FwdGlvbiIsIlNlY3Rpb24iLCJyZW5kZXJlciIsImNvbnRhaW5lclNlbGVjdG9yIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImNhcmRzIiwiZWxlbWVudCIsInByZXBlbmQiLCJwcm9maWxlSW1nZm9ybSIsIlVzZXJJbmZvIiwicHJvZmlsZU5hbWVTZWxlY3RvciIsInByb2ZpbGVKb2JTZWxlY3RvciIsInByb2ZpbGVJbWdTZWxlY3RvciIsIl9wcm9maWxlTmFtZSIsIl9wcm9maWxlSm9iIiwiX3Byb2ZpbGVJbWciLCJqb2IiLCJhYm91dCIsImF2YXRhciIsImJhY2tncm91bmRJbWFnZSIsImN1c3RvbUZldGNoIiwidXJsIiwiaGVhZGVycyIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJzdGF0dXNUZXh0IiwiQXBpIiwiYmFzZVVybCIsIl9iYXNlVXJsIiwiX2hlYWRlcnMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNhcmRJZCIsInByb2ZpbGVQaWMiLCJsb2dvSW1hZ2UiLCJjb250ZW50IiwicHJvZmlsZVBpY0VkaXRCdXR0b24iLCJwcm9maWxlRm9ybSIsImlucHV0RnVsbE5hbWUiLCJpbnB1dE9jY3VwYXRpb24iLCJlZGl0QnV0dG9uIiwiaW5wdXRQcm9maWxlSW1nIiwiYWRkRm9ybSIsImFkZEJ1dHRvbiIsImVkaXRTYXZlQnRuIiwiYWRkU2F2ZUJ0biIsInByb2ZpbGVJbWdTYXZlQnRuIiwiZGVsZXRlQ29uZmlybUJ0biIsImZvcm1MaXN0IiwiZm9ybVNldHRpbmdzIiwiZm9ybVNlbGVjdG9yIiwicHJvZmlsZXBpY1NyYyIsImxvZ29TcmMiLCJwcm9maWxlUGljRWRpdEJ1dHRvblNyYyIsImFwaSIsImF1dGhvcml6YXRpb24iLCJ1c2VySWQiLCJhbGwiLCJnZXRJbml0aWFsQ2FyZHMiLCJnZXRVc2VySW5mbyIsImNhcmRzRGF0YSIsInVzZXJEYXRhIiwic2VjdGlvbiIsInJlbmRlciIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJwb3B1cFBob3RvIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJjb25maXJtRGVsZXRlIiwiZ2VuZXJhdGVDYXJkIiwiY2FyZCIsIm9wZW4iLCJzZXRBY3Rpb24iLCJkZWxldGVDYXJkIiwicmVtb3ZlQ2FyZCIsImZpbmFsbHkiLCJkaXNsaWtlQ2FyZCIsInNldExpa2VzIiwibGlrZUNhcmQiLCJwaG90b2ZlZWQiLCJjcmVhdGVDYXJkIiwiYWRkSXRlbSIsInBvcHVwQWRkIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImltZ2xpbmsiLCJoaWRlTG9hZGluZyIsInBvcHVwRWRpdCIsImVkaXRQcmlmaWxlSW5mbyIsIm9jY3VwYXRpb24iLCJmb3JtVmFsaWRhdG9ycyIsImVuYWJsZVZhbGlkYXRpb24iLCJmb3Jtc0xpc3QiLCJ2YWxpZGF0b3IiLCJmb3JtVHlwZSIsImdldEF0dHJpYnV0ZSIsInJlc2V0VmFsaWRhdGlvbiIsInBvcHVwUHJvZmlsZUltZyIsImVkaXRQcmlmaWxlSW1nIl0sInNvdXJjZVJvb3QiOiIifQ==