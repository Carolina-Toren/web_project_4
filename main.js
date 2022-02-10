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
      this._cardImage = this._element.querySelector(".photo-feed__image");
      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;
      this._element.querySelector(".photo-feed__text").textContent = this._name;

      this._setEventListeners(); //show trash bin icon only to the owner


      if (this._userId !== this._ownerId) {
        this._element.querySelector(".photo-feed__delete-btn").style.display = "none";
      }

      this._renderLikes();

      return this._element;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      var cardBtn = this._element.querySelector(".photo-feed__card-button");

      cardBtn.addEventListener("click", function () {
        _this._handleLikeClick(_this._id);
      }); //photo popup

      this._element.querySelector(".photo-feed__image").addEventListener("click", function (evt) {
        _this._handleCardClick(evt);
      }); //deleting cards


      this._element.querySelector(".photo-feed__delete-btn").addEventListener("click", function () {
        _this._handleDeleteCard(_this._id);
      });
    }
  }, {
    key: "checkIfLiked",
    value: function checkIfLiked() {
      var _this2 = this;

      return this._likes.some(function (person) {
        return person._id === _this2._userId;
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
      if (this.checkIfLiked()) {
        this._element.querySelector(".photo-feed__card-button").classList.add("photo-feed__card-button_active");
      } else {
        this._element.querySelector(".photo-feed__card-button").classList.remove("photo-feed__card-button_active");
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

/***/ "./src/scripts/utils/constants.js":
/*!****************************************!*\
  !*** ./src/scripts/utils/constants.js ***!
  \****************************************/
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
/* harmony import */ var _scripts_utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/utils/constants */ "./src/scripts/utils/constants.js");
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
_scripts_utils_constants__WEBPACK_IMPORTED_MODULE_5__.profilePic.src = _images_profilepic_gif__WEBPACK_IMPORTED_MODULE_0__;
_scripts_utils_constants__WEBPACK_IMPORTED_MODULE_5__.profilePicEditButton.src = _images_button_edit_profile_img_button_svg__WEBPACK_IMPORTED_MODULE_2__;
_scripts_utils_constants__WEBPACK_IMPORTED_MODULE_5__.logoImage.src = _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__; ///////////////////////
///// Photo Popup//////
//////////////////////

var popupPhoto = new _scripts_components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_9__["default"](".popup_photo");
popupPhoto.setEventListeners();
var deleteConfirmationPopup = new _scripts_components_PopupDeleteCard__WEBPACK_IMPORTED_MODULE_7__["default"](".popup_confirmation");
deleteConfirmationPopup.setEventListeners(); ///////////////////////
////Creating cards////
//////////////////////

function generateCard(data) {
  var card = new _scripts_components_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    data: data,
    user: userId,
    photoTemplate: _scripts_utils_constants__WEBPACK_IMPORTED_MODULE_5__.photoTemplate,
    handleCardClick: function handleCardClick(evt) {
      evt.preventDefault();
      var target = evt.target;
      var link = target.src;
      var name = target.alt;
      popupPhoto.open(link, name);
      popupPhoto.setEventListeners();
    },
    handleDeleteCard: function handleDeleteCard(cardId) {
      deleteConfirmationPopup.open();
      deleteConfirmationPopup.setAction(function () {
        _scripts_utils_constants__WEBPACK_IMPORTED_MODULE_5__.deleteConfirmBtn.textContent = "Deleting...";
        api.deleteCard(cardId).then(function () {
          card.removeCard();
        }).catch(function (err) {
          console.log("Error: ".concat(err));
        }).finally(function () {
          _scripts_utils_constants__WEBPACK_IMPORTED_MODULE_5__.deleteConfirmBtn.textContent = "Yes";
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
} ///////////////////////
////Creating Section///
//////////////////////


var section = new _scripts_components_Section_js__WEBPACK_IMPORTED_MODULE_12__["default"](function (data) {
  section.addItem(generateCard(data));
}, ".photo-feed__grid");
var popupAdd = new _scripts_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_10__["default"](".popup_add", function (data) {
  popupAdd.showLoading();
  api.createCard(data.title, data.imglink).then(function (res) {
    var card = generateCard(res);
    section.addItem(card);
    popupAdd.close();
  }).catch(function (res) {
    console.log(res);
  }).finally(function () {
    popupAdd.hideLoading();
  });
}, _scripts_utils_constants__WEBPACK_IMPORTED_MODULE_5__.addSaveBtn.textContent, "Creating...");
popupAdd.setEventListeners();
var userInfo = new _scripts_components_UserInfo_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
  profileNameSelector: ".profile__name",
  profileJobSelector: ".profile__occupation",
  profileImgSelector: ".profile__image"
}); ///////////////////////
//////Edit Popup///////
//////////////////////

var popupEdit = new _scripts_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_10__["default"](".popup_edit", function (data) {
  popupEdit.showLoading();
  api.editPrifileInfo(data.name, data.occupation).then(function (res) {
    userInfo.setUserInfo(res);
    popupEdit.close();
  }).catch(function (err) {
    console.log("Error: ".concat(err));
  }).finally(function () {
    popupEdit.hideLoading();
  });
}, _scripts_utils_constants__WEBPACK_IMPORTED_MODULE_5__.editSaveBtn.textContent, "Saving...");
popupEdit.setEventListeners(); ///////////////////////
//////Validation//////
//////////////////////

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

enableValidation(formSettings); ///////////////////////
////Button Listeners///
//////////////////////

_scripts_utils_constants__WEBPACK_IMPORTED_MODULE_5__.editButton.addEventListener("click", function () {
  var data = userInfo.getUserInfo();
  popupEdit.open();
  _scripts_utils_constants__WEBPACK_IMPORTED_MODULE_5__.inputFullName.value = data.name;
  _scripts_utils_constants__WEBPACK_IMPORTED_MODULE_5__.inputOccupation.value = data.job;
  formValidators[_scripts_utils_constants__WEBPACK_IMPORTED_MODULE_5__.profileForm.getAttribute("name")].resetValidation();
});
_scripts_utils_constants__WEBPACK_IMPORTED_MODULE_5__.addButton.addEventListener("click", function () {
  popupAdd.open();
  formValidators[_scripts_utils_constants__WEBPACK_IMPORTED_MODULE_5__.addForm.getAttribute("name")].resetValidation();
});
_scripts_utils_constants__WEBPACK_IMPORTED_MODULE_5__.profilePicEditButton.addEventListener("click", function () {
  popupProfileImg.open();
  formValidators[_scripts_utils_constants__WEBPACK_IMPORTED_MODULE_5__.profileImgform.getAttribute("name")].resetValidation();
}); ///////////////////////////
//////Profile img popup////
//////////////////////////

var popupProfileImg = new _scripts_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_10__["default"](".popup_profile-img", function (data) {
  popupProfileImg.showLoading();
  api.editPrifileImg(data).then(function (res) {
    userInfo.setUserInfo(res);
    popupProfileImg.close();
  }).catch(function (err) {
    console.log("Error: ".concat(err));
  }).finally(function () {
    popupProfileImg.hideLoading();
  });
}, _scripts_utils_constants__WEBPACK_IMPORTED_MODULE_5__.profileImgSaveBtn.textContent, "Saving...");
popupProfileImg.setEventListeners();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ2IrQyxJQUFBQSxRQUFRLENBQUNDLFdBQVQsQ0FBcUJoRCxHQUFyQjtBQUNBcUYsSUFBQUEsZUFBZSxDQUFDekksS0FBaEI7QUFDRCxHQUxILEVBTUdxRyxLQU5ILENBTVMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixrQkFBc0JGLEdBQXRCO0FBQ0QsR0FSSCxFQVVHWSxPQVZILENBVVcsWUFBTTtBQUNidUIsSUFBQUEsZUFBZSxDQUFDWCxXQUFoQjtBQUNELEdBWkg7QUFhRCxDQWxCcUIsRUFtQnRCN0MsbUZBbkJzQixFQW9CdEIsV0FwQnNCLENBQXhCO0FBc0JBd0QsZUFBZSxDQUFDL0IsaUJBQWhCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvUG9wdXBEZWxldGVDYXJkLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvdXRpbHMvYXBpLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcclxuICBjb25zdHJ1Y3Rvcih7IGRhdGEsIHVzZXIsIHBob3RvVGVtcGxhdGUsIGhhbmRsZUNhcmRDbGljaywgaGFuZGxlRGVsZXRlQ2FyZCwgaGFuZGxlTGlrZUNsaWNrIH0pIHtcclxuICAgIHRoaXMuX25hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xyXG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCA9IGhhbmRsZURlbGV0ZUNhcmQ7XHJcbiAgICB0aGlzLl9pZCA9IGRhdGEuX2lkO1xyXG4gICAgdGhpcy5fdXNlcklkID0gdXNlcjtcclxuICAgIHRoaXMuX293bmVySWQgPSBkYXRhLm93bmVyLl9pZDtcclxuICAgIHRoaXMuX2xpa2VzID0gZGF0YS5saWtlcztcclxuICAgIHRoaXMuX2hhbmRsZUxpa2VDbGljayA9IGhhbmRsZUxpa2VDbGljaztcclxuICAgIHRoaXMuX2VsZW1lbnQgPSBwaG90b1RlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNhcmQoKSB7XHJcbiAgICB0aGlzLl9jYXJkSW1hZ2UgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZmVlZF9faW1hZ2VcIik7XHJcblxyXG4gICAgdGhpcy5fY2FyZEltYWdlLnNyYyA9IHRoaXMuX2xpbms7XHJcbiAgICB0aGlzLl9jYXJkSW1hZ2UuYWx0ID0gdGhpcy5fbmFtZTtcclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1mZWVkX190ZXh0XCIpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgLy9zaG93IHRyYXNoIGJpbiBpY29uIG9ubHkgdG8gdGhlIG93bmVyXHJcbiAgICBpZiAodGhpcy5fdXNlcklkICE9PSB0aGlzLl9vd25lcklkKSB7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1mZWVkX19kZWxldGUtYnRuXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9yZW5kZXJMaWtlcygpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgY2FyZEJ0biA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1mZWVkX19jYXJkLWJ1dHRvblwiKTtcclxuXHJcbiAgICBjYXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VDbGljayh0aGlzLl9pZCk7XHJcbiAgICB9KTtcclxuICAgIC8vcGhvdG8gcG9wdXBcclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1mZWVkX19pbWFnZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2soZXZ0KTtcclxuICAgIH0pO1xyXG4gICAgLy9kZWxldGluZyBjYXJkc1xyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWZlZWRfX2RlbGV0ZS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCh0aGlzLl9pZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrSWZMaWtlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9saWtlcy5zb21lKChwZXJzb24pID0+IHBlcnNvbi5faWQgPT09IHRoaXMuX3VzZXJJZCk7XHJcbiAgfVxyXG4gIHJlbW92ZUNhcmQoKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzZXRMaWtlcyhuZXdMaWtlcykge1xyXG4gICAgdGhpcy5fbGlrZXMgPSBuZXdMaWtlcztcclxuICAgIHRoaXMuX3JlbmRlckxpa2VzKCk7XHJcbiAgfVxyXG5cclxuICBfcmVuZGVyTGlrZXMoKSB7XHJcbiAgICBpZiAodGhpcy5jaGVja0lmTGlrZWQoKSkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZmVlZF9fY2FyZC1idXR0b25cIikuY2xhc3NMaXN0LmFkZChcInBob3RvLWZlZWRfX2NhcmQtYnV0dG9uX2FjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1mZWVkX19jYXJkLWJ1dHRvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicGhvdG8tZmVlZF9fY2FyZC1idXR0b25fYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWZlZWRfX2NhcmQtYnV0dG9uLWNvdW50ZXJcIikudGV4dENvbnRlbnQgPSB0aGlzLl9saWtlcy5sZW5ndGg7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCkge1xyXG4gICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2V0dGluZ3MuaW5wdXRTZWxlY3RvcikpO1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UpIHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcclxuXHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fc2V0dGluZ3MuZXJyb3JDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9zZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmVycm9yQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKCkge1xyXG4gICAgY29uc3QgaGFzSW52YWxpZElucHV0ID0gdGhpcy5faW5wdXRMaXN0LnNvbWUoKGlucHV0RWxlbWVudCkgPT4gIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCk7XHJcbiAgICBpZiAoaGFzSW52YWxpZElucHV0KSB7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KSB7XHJcbiAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSh0aGlzLl9pbnB1dExpc3QsIHRoaXMuX2J1dHRvbkVsZW1lbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVyKCk7XHJcbiAgfVxyXG5cclxuICByZXNldFZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9wb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwX3Zpc2libGVcIik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF92aXNpYmxlXCIpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldnQpID0+IHtcclxuICAgICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBcIikgfHwgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cF9fY2xvc2UtYnRuXCIpKSB0aGlzLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVFc2NDbG9zZSA9IChldnQpID0+IHtcclxuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBEZWxldGVDYXJkIGV4dGVuZHMgUG9wdXAge1xyXG4gIHNldEFjdGlvbihhY3Rpb24pIHtcclxuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdCA9IGFjdGlvbjtcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5faGFuZGxlU3VibWl0KCk7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0pO1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIG9wZW4gPSAoKSA9PiB7XHJcbiAgICBzdXBlci5vcGVuKCk7XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvciwgaGFuZGxlU3VibWl0LCBidXR0b25UZXh0LCBsb2FkaW5nQnV0dG9uVGV4dCkge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9oYW5kbGVTdWJtaXQgPSBoYW5kbGVTdWJtaXQ7XHJcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcclxuICAgIHRoaXMuX2lucHV0cyA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX2lucHV0XCIpO1xyXG4gICAgdGhpcy5fc3VibWl0QnRuID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fc2F2ZS1idXR0b25cIik7XHJcbiAgICB0aGlzLl9idXR0b25UZXh0ID0gYnV0dG9uVGV4dDtcclxuICAgIHRoaXMuX2xvYWRpbmdCdXR0b25UZXh0ID0gbG9hZGluZ0J1dHRvblRleHQ7XHJcbiAgfVxyXG5cclxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHt9O1xyXG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIGlucHV0VmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaW5wdXRWYWx1ZXM7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5faGFuZGxlU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHNob3dMb2FkaW5nKCkge1xyXG4gICAgdGhpcy5fc3VibWl0QnRuLnRleHRDb250ZW50ID0gdGhpcy5fbG9hZGluZ0J1dHRvblRleHQ7XHJcbiAgfVxyXG5cclxuICBoaWRlTG9hZGluZygpIHtcclxuICAgIHRoaXMuX3N1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IHRoaXMuX2J1dHRvblRleHQ7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcclxuICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9wb3B1cEltYWdlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2VcIik7XHJcbiAgICB0aGlzLl9wb3B1cFBob3RvQ2FwdGlvbiA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltYWdlLWNhcHRpb25cIik7XHJcbiAgfVxyXG5cclxuICBvcGVuKGxpbmssIG5hbWUpIHtcclxuICAgIHRoaXMuX3BvcHVwSW1hZ2Uuc3JjID0gbGluaztcclxuICAgIHRoaXMuX3BvcHVwSW1hZ2UuYWx0ID0gbGluaztcclxuICAgIHRoaXMuX3BvcHVwUGhvdG9DYXB0aW9uLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IocmVuZGVyZXIsIGNvbnRhaW5lclNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY2FyZHMpIHtcclxuICAgIGNhcmRzLmZvckVhY2godGhpcy5fcmVuZGVyZXIpO1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbShlbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKHsgcHJvZmlsZU5hbWVTZWxlY3RvciwgcHJvZmlsZUpvYlNlbGVjdG9yLCBwcm9maWxlSW1nU2VsZWN0b3IgfSkge1xyXG4gICAgdGhpcy5fcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVOYW1lU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fcHJvZmlsZUpvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvZmlsZUpvYlNlbGVjdG9yKTtcclxuICAgIHRoaXMuX3Byb2ZpbGVJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVJbWdTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWU6IHRoaXMuX3Byb2ZpbGVOYW1lLnRleHRDb250ZW50LFxyXG4gICAgICBqb2I6IHRoaXMuX3Byb2ZpbGVKb2IudGV4dENvbnRlbnQsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlckluZm8oeyBuYW1lLCBhYm91dCwgYXZhdGFyIH0pIHtcclxuICAgIHRoaXMuX3Byb2ZpbGVOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHRoaXMuX3Byb2ZpbGVKb2IudGV4dENvbnRlbnQgPSBhYm91dDtcclxuICAgIHRoaXMuX3Byb2ZpbGVJbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7YXZhdGFyfVwiKWA7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IGN1c3RvbUZldGNoID0gKHVybCwgaGVhZGVycykgPT5cclxuICBmZXRjaCh1cmwsIGhlYWRlcnMpLnRoZW4oKHJlcykgPT4gKHJlcy5vayA/IHJlcy5qc29uKCkgOiBQcm9taXNlLnJlamVjdChyZXMuc3RhdHVzVGV4dCkpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XHJcbiAgY29uc3RydWN0b3IoeyBiYXNlVXJsLCBoZWFkZXJzIH0pIHtcclxuICAgIHRoaXMuX2Jhc2VVcmwgPSBiYXNlVXJsO1xyXG4gICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgfVxyXG5cclxuICBnZXRJbml0aWFsQ2FyZHMoKSB7XHJcbiAgICByZXR1cm4gY3VzdG9tRmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHNgLCB7IGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIHJldHVybiBjdXN0b21GZXRjaChgJHt0aGlzLl9iYXNlVXJsfS91c2Vycy9tZWAsIHsgaGVhZGVyczogdGhpcy5faGVhZGVycyB9KTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbWcoKSB7XHJcbiAgICByZXR1cm4gY3VzdG9tRmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWUvYXZhdGFyYCwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDYXJkKG5hbWUsIGxpbmspIHtcclxuICAgIGNvbnN0IGRhdGEgPSB7IG5hbWUsIGxpbmsgfTtcclxuICAgIHJldHVybiBjdXN0b21GZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkc2AsIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUNhcmQoY2FyZElkKSB7XHJcbiAgICByZXR1cm4gY3VzdG9tRmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHMvJHtjYXJkSWR9IGAsIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsaWtlQ2FyZChjYXJkSWQpIHtcclxuICAgIHJldHVybiBjdXN0b21GZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkcy9saWtlcy8ke2NhcmRJZH0gYCwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRpc2xpa2VDYXJkKGNhcmRJZCkge1xyXG4gICAgcmV0dXJuIGN1c3RvbUZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzL2xpa2VzLyR7Y2FyZElkfSBgLCB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZWRpdFByaWZpbGVJbmZvKG5hbWUsIGFib3V0KSB7XHJcbiAgICBjb25zdCBkYXRhID0geyBuYW1lLCBhYm91dCB9O1xyXG4gICAgcmV0dXJuIGN1c3RvbUZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lIGAsIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBlZGl0UHJpZmlsZUltZyhkYXRhKSB7XHJcbiAgICByZXR1cm4gY3VzdG9tRmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWUvYXZhdGFyYCwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHByb2ZpbGVQaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2ltYWdlXCIpO1xyXG5leHBvcnQgY29uc3QgbG9nb0ltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2xvZ29cIik7XHJcbmV4cG9ydCBjb25zdCBwaG90b1RlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaG90by1mZWVkX19jYXJkc1wiKS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZmVlZF9fY2FyZFwiKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVQaWNFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19pbWctYnV0dG9uXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybV9lZGl0XCIpO1xyXG5leHBvcnQgY29uc3QgaW5wdXRGdWxsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZS1pbnB1dFwiKTtcclxuZXhwb3J0IGNvbnN0IGlucHV0T2NjdXBhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb2NjdXBhdGlvbi1pbnB1dFwiKTtcclxuZXhwb3J0IGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xyXG5leHBvcnQgY29uc3QgaW5wdXRQcm9maWxlSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlSW1nLWlucHV0XCIpO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZUltZ2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2dpbGUtaW1nX2Zvcm1cIik7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX2Zvcm1cIik7XHJcbmV4cG9ydCBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdFNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtc2F2ZS1idG5cIik7XHJcbmV4cG9ydCBjb25zdCBhZGRTYXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtc2F2ZS1idG5cIik7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlSW1nU2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1pbWctc2F2ZS1idG5cIik7XHJcbmV4cG9ydCBjb25zdCBkZWxldGVDb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWxldGUtY29uZmlybS1idG5cIik7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybUxpc3QgPSB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtU2V0dGluZ3MgPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiBcIi5wb3B1cF9fZm9ybVwiLFxyXG4gIGlucHV0U2VsZWN0b3I6IFwiLnBvcHVwX19pbnB1dFwiLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5wb3B1cF9fc2F2ZS1idXR0b25cIixcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwX19idXR0b25fZGlzYWJsZWRcIixcclxuICBpbnB1dEVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0X3R5cGVfZXJyb3JcIixcclxuICBlcnJvckNsYXNzOiBcInBvcHVwX19lcnJvcl92aXNpYmxlXCIsXHJcbn07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiaW1wb3J0IHByb2ZpbGVwaWNTcmMgZnJvbSBcIi4uL2ltYWdlcy9wcm9maWxlcGljLmdpZlwiO1xyXG5pbXBvcnQgbG9nb1NyYyBmcm9tIFwiLi4vaW1hZ2VzL2xvZ28uc3ZnXCI7XHJcbmltcG9ydCBwcm9maWxlUGljRWRpdEJ1dHRvblNyYyBmcm9tIFwiLi4vaW1hZ2VzL2J1dHRvbi9lZGl0X3Byb2ZpbGVfaW1nX2J1dHRvbi5zdmdcIjtcclxuaW1wb3J0IEFwaSBmcm9tIFwiLi4vc2NyaXB0cy91dGlscy9hcGlcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IHtcclxuICBwcm9maWxlUGljLFxyXG4gIHByb2ZpbGVQaWNFZGl0QnV0dG9uLFxyXG4gIHByb2ZpbGVJbWdmb3JtLFxyXG4gIHBob3RvVGVtcGxhdGUsXHJcbiAgbG9nb0ltYWdlLFxyXG4gIHByb2ZpbGVGb3JtLFxyXG4gIGlucHV0RnVsbE5hbWUsXHJcbiAgaW5wdXRPY2N1cGF0aW9uLFxyXG4gIGVkaXRCdXR0b24sXHJcbiAgYWRkRm9ybSxcclxuICBhZGRCdXR0b24sXHJcbiAgZWRpdFNhdmVCdG4sXHJcbiAgYWRkU2F2ZUJ0bixcclxuICBwcm9maWxlSW1nU2F2ZUJ0bixcclxuICBkZWxldGVDb25maXJtQnRuLFxyXG59IGZyb20gXCIuLi9zY3JpcHRzL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vc2NyaXB0cy9jb21wb25lbnRzL0NhcmQuanNcIjtcclxuaW1wb3J0IFBvcHVwRGVsZXRlQ2FyZCBmcm9tIFwiLi4vc2NyaXB0cy9jb21wb25lbnRzL1BvcHVwRGVsZXRlQ2FyZFwiO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vc2NyaXB0cy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9zY3JpcHRzL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL3NjcmlwdHMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vc2NyaXB0cy9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9zY3JpcHRzL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8gQVBJLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuY29uc3QgYXBpID0gbmV3IEFwaSh7XHJcbiAgYmFzZVVybDogXCJodHRwczovL2Fyb3VuZC5ub21vcmVwYXJ0aWVzLmNvL3YxL2dyb3VwLTEyXCIsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgYXV0aG9yaXphdGlvbjogXCIwZWE0M2Q2Ni1hODkwLTQyNTItYWViNS01Zjk3NGI4NTNjMDJcIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxubGV0IHVzZXJJZDtcclxuXHJcblByb21pc2UuYWxsKFthcGkuZ2V0SW5pdGlhbENhcmRzKCksIGFwaS5nZXRVc2VySW5mbygpXSlcclxuICAudGhlbigoW2NhcmRzRGF0YSwgdXNlckRhdGFdKSA9PiB7XHJcbiAgICB1c2VySWQgPSB1c2VyRGF0YS5faWQ7XHJcbiAgICBzZWN0aW9uLnJlbmRlcihjYXJkc0RhdGEpO1xyXG4gICAgdXNlckluZm8uc2V0VXNlckluZm8oeyBuYW1lOiB1c2VyRGF0YS5uYW1lLCBhYm91dDogdXNlckRhdGEuYWJvdXQsIGF2YXRhcjogdXNlckRhdGEuYXZhdGFyIH0pO1xyXG4gIH0pXHJcbiAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJ9YCk7XHJcbiAgfSk7XHJcblxyXG5wcm9maWxlUGljLnNyYyA9IHByb2ZpbGVwaWNTcmM7XHJcbnByb2ZpbGVQaWNFZGl0QnV0dG9uLnNyYyA9IHByb2ZpbGVQaWNFZGl0QnV0dG9uU3JjO1xyXG5sb2dvSW1hZ2Uuc3JjID0gbG9nb1NyYztcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vIFBob3RvIFBvcHVwLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmNvbnN0IHBvcHVwUGhvdG8gPSBuZXcgUG9wdXBXaXRoSW1hZ2UoXCIucG9wdXBfcGhvdG9cIik7XHJcbnBvcHVwUGhvdG8uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuY29uc3QgZGVsZXRlQ29uZmlybWF0aW9uUG9wdXAgPSBuZXcgUG9wdXBEZWxldGVDYXJkKFwiLnBvcHVwX2NvbmZpcm1hdGlvblwiKTtcclxuZGVsZXRlQ29uZmlybWF0aW9uUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy9DcmVhdGluZyBjYXJkcy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVDYXJkKGRhdGEpIHtcclxuICBjb25zdCBjYXJkID0gbmV3IENhcmQoe1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIHVzZXI6IHVzZXJJZCxcclxuICAgIHBob3RvVGVtcGxhdGU6IHBob3RvVGVtcGxhdGUsXHJcbiAgICBoYW5kbGVDYXJkQ2xpY2s6IChldnQpID0+IHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2dC50YXJnZXQ7XHJcbiAgICAgIGNvbnN0IGxpbmsgPSB0YXJnZXQuc3JjO1xyXG4gICAgICBjb25zdCBuYW1lID0gdGFyZ2V0LmFsdDtcclxuICAgICAgcG9wdXBQaG90by5vcGVuKGxpbmssIG5hbWUpO1xyXG4gICAgICBwb3B1cFBob3RvLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlRGVsZXRlQ2FyZDogKGNhcmRJZCkgPT4ge1xyXG4gICAgICBkZWxldGVDb25maXJtYXRpb25Qb3B1cC5vcGVuKCk7XHJcbiAgICAgIGRlbGV0ZUNvbmZpcm1hdGlvblBvcHVwLnNldEFjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlQ29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRpbmcuLi5cIjtcclxuICAgICAgICBhcGlcclxuICAgICAgICAgIC5kZWxldGVDYXJkKGNhcmRJZClcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY2FyZC5yZW1vdmVDYXJkKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vycn1gKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZUNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSBcIlllc1wiO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZUxpa2VDbGljazogKGNhcmRJZCkgPT4ge1xyXG4gICAgICBjb25zdCBpc0xpa2VkID0gY2FyZC5pc0xpa2VkKCk7XHJcbiAgICAgIGlmIChpc0xpa2VkKSB7XHJcbiAgICAgICAgYXBpXHJcbiAgICAgICAgICAuZGlzbGlrZUNhcmQoY2FyZElkKVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjYXJkLnNldExpa2VzKHJlcy5saWtlcyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vycn1gKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFwaVxyXG4gICAgICAgICAgLmxpa2VDYXJkKGNhcmRJZClcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY2FyZC5zZXRMaWtlcyhyZXMubGlrZXMpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJ9YCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCBwaG90b2ZlZWQgPSBjYXJkLmNyZWF0ZUNhcmQoKTtcclxuICByZXR1cm4gcGhvdG9mZWVkO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vQ3JlYXRpbmcgU2VjdGlvbi8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5jb25zdCBzZWN0aW9uID0gbmV3IFNlY3Rpb24oKGRhdGEpID0+IHtcclxuICBzZWN0aW9uLmFkZEl0ZW0oZ2VuZXJhdGVDYXJkKGRhdGEpKTtcclxufSwgXCIucGhvdG8tZmVlZF9fZ3JpZFwiKTtcclxuXHJcbmNvbnN0IHBvcHVwQWRkID0gbmV3IFBvcHVwV2l0aEZvcm0oXHJcbiAgXCIucG9wdXBfYWRkXCIsXHJcbiAgKGRhdGEpID0+IHtcclxuICAgIHBvcHVwQWRkLnNob3dMb2FkaW5nKCk7XHJcbiAgICBhcGlcclxuICAgICAgLmNyZWF0ZUNhcmQoZGF0YS50aXRsZSwgZGF0YS5pbWdsaW5rKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGdlbmVyYXRlQ2FyZChyZXMpO1xyXG4gICAgICAgIHNlY3Rpb24uYWRkSXRlbShjYXJkKTtcclxuICAgICAgICBwb3B1cEFkZC5jbG9zZSgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBwb3B1cEFkZC5oaWRlTG9hZGluZygpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIGFkZFNhdmVCdG4udGV4dENvbnRlbnQsXHJcbiAgXCJDcmVhdGluZy4uLlwiXHJcbik7XHJcblxyXG5wb3B1cEFkZC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xyXG4gIHByb2ZpbGVOYW1lU2VsZWN0b3I6IFwiLnByb2ZpbGVfX25hbWVcIixcclxuICBwcm9maWxlSm9iU2VsZWN0b3I6IFwiLnByb2ZpbGVfX29jY3VwYXRpb25cIixcclxuICBwcm9maWxlSW1nU2VsZWN0b3I6IFwiLnByb2ZpbGVfX2ltYWdlXCIsXHJcbn0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vRWRpdCBQb3B1cC8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuY29uc3QgcG9wdXBFZGl0ID0gbmV3IFBvcHVwV2l0aEZvcm0oXHJcbiAgXCIucG9wdXBfZWRpdFwiLFxyXG4gIChkYXRhKSA9PiB7XHJcbiAgICBwb3B1cEVkaXQuc2hvd0xvYWRpbmcoKTtcclxuICAgIGFwaVxyXG4gICAgICAuZWRpdFByaWZpbGVJbmZvKGRhdGEubmFtZSwgZGF0YS5vY2N1cGF0aW9uKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgdXNlckluZm8uc2V0VXNlckluZm8ocmVzKTtcclxuICAgICAgICBwb3B1cEVkaXQuY2xvc2UoKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyfWApO1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwRWRpdC5oaWRlTG9hZGluZygpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIGVkaXRTYXZlQnRuLnRleHRDb250ZW50LFxyXG4gIFwiU2F2aW5nLi4uXCJcclxuKTtcclxuXHJcbnBvcHVwRWRpdC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vVmFsaWRhdGlvbi8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5jb25zdCBmb3JtU2V0dGluZ3MgPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiBcIi5wb3B1cF9fZm9ybVwiLFxyXG4gIGlucHV0U2VsZWN0b3I6IFwiLnBvcHVwX19pbnB1dFwiLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5wb3B1cF9fc2F2ZS1idXR0b25cIixcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwX19idXR0b25fZGlzYWJsZWRcIixcclxuICBpbnB1dEVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0X3R5cGVfZXJyb3JcIixcclxuICBlcnJvckNsYXNzOiBcInBvcHVwX19lcnJvcl92aXNpYmxlXCIsXHJcbn07XHJcblxyXG5jb25zdCBmb3JtVmFsaWRhdG9ycyA9IHt9O1xyXG5cclxuY29uc3QgZW5hYmxlVmFsaWRhdGlvbiA9IChzZXR0aW5ncykgPT4ge1xyXG4gIGNvbnN0IGZvcm1zTGlzdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZXR0aW5ncy5mb3JtU2VsZWN0b3IpKTtcclxuICBmb3Jtc0xpc3QuZm9yRWFjaCgoZm9ybUVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCk7XHJcbiAgICBjb25zdCBmb3JtVHlwZSA9IGZvcm1FbGVtZW50LmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XHJcbiAgICBmb3JtVmFsaWRhdG9yc1tmb3JtVHlwZV0gPSB2YWxpZGF0b3I7XHJcbiAgICB2YWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG4gIH0pO1xyXG59O1xyXG5lbmFibGVWYWxpZGF0aW9uKGZvcm1TZXR0aW5ncyk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vQnV0dG9uIExpc3RlbmVycy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XHJcbiAgcG9wdXBFZGl0Lm9wZW4oKTtcclxuICBpbnB1dEZ1bGxOYW1lLnZhbHVlID0gZGF0YS5uYW1lO1xyXG4gIGlucHV0T2NjdXBhdGlvbi52YWx1ZSA9IGRhdGEuam9iO1xyXG4gIGZvcm1WYWxpZGF0b3JzW3Byb2ZpbGVGb3JtLmdldEF0dHJpYnV0ZShcIm5hbWVcIildLnJlc2V0VmFsaWRhdGlvbigpO1xyXG59KTtcclxuXHJcbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHBvcHVwQWRkLm9wZW4oKTtcclxuICBmb3JtVmFsaWRhdG9yc1thZGRGb3JtLmdldEF0dHJpYnV0ZShcIm5hbWVcIildLnJlc2V0VmFsaWRhdGlvbigpO1xyXG59KTtcclxuXHJcbnByb2ZpbGVQaWNFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgcG9wdXBQcm9maWxlSW1nLm9wZW4oKTtcclxuICBmb3JtVmFsaWRhdG9yc1twcm9maWxlSW1nZm9ybS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpXS5yZXNldFZhbGlkYXRpb24oKTtcclxufSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vUHJvZmlsZSBpbWcgcG9wdXAvLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5jb25zdCBwb3B1cFByb2ZpbGVJbWcgPSBuZXcgUG9wdXBXaXRoRm9ybShcclxuICBcIi5wb3B1cF9wcm9maWxlLWltZ1wiLFxyXG4gIChkYXRhKSA9PiB7XHJcbiAgICBwb3B1cFByb2ZpbGVJbWcuc2hvd0xvYWRpbmcoKTtcclxuXHJcbiAgICBhcGlcclxuICAgICAgLmVkaXRQcmlmaWxlSW1nKGRhdGEpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB1c2VySW5mby5zZXRVc2VySW5mbyhyZXMpO1xyXG4gICAgICAgIHBvcHVwUHJvZmlsZUltZy5jbG9zZSgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJ9YCk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgcG9wdXBQcm9maWxlSW1nLmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgcHJvZmlsZUltZ1NhdmVCdG4udGV4dENvbnRlbnQsXHJcbiAgXCJTYXZpbmcuLi5cIlxyXG4pO1xyXG5wb3B1cFByb2ZpbGVJbWcuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuIl0sIm5hbWVzIjpbIkNhcmQiLCJkYXRhIiwidXNlciIsInBob3RvVGVtcGxhdGUiLCJoYW5kbGVDYXJkQ2xpY2siLCJoYW5kbGVEZWxldGVDYXJkIiwiaGFuZGxlTGlrZUNsaWNrIiwiX25hbWUiLCJuYW1lIiwiX2xpbmsiLCJsaW5rIiwiX2hhbmRsZUNhcmRDbGljayIsIl9oYW5kbGVEZWxldGVDYXJkIiwiX2lkIiwiX3VzZXJJZCIsIl9vd25lcklkIiwib3duZXIiLCJfbGlrZXMiLCJsaWtlcyIsIl9oYW5kbGVMaWtlQ2xpY2siLCJfZWxlbWVudCIsImNsb25lTm9kZSIsIl9jYXJkSW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwic3JjIiwiYWx0IiwidGV4dENvbnRlbnQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJzdHlsZSIsImRpc3BsYXkiLCJfcmVuZGVyTGlrZXMiLCJjYXJkQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInNvbWUiLCJwZXJzb24iLCJyZW1vdmUiLCJuZXdMaWtlcyIsImNoZWNrSWZMaWtlZCIsImNsYXNzTGlzdCIsImFkZCIsImxlbmd0aCIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbGVtZW50IiwiX3NldHRpbmdzIiwiX2Zvcm1FbGVtZW50IiwiX2lucHV0TGlzdCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dFNlbGVjdG9yIiwiX2J1dHRvbkVsZW1lbnQiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImlucHV0RWxlbWVudCIsInZhbGlkYXRpb25NZXNzYWdlIiwiZXJyb3JFbGVtZW50IiwiaWQiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiaGFzSW52YWxpZElucHV0IiwidmFsaWRpdHkiLCJ2YWxpZCIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJkaXNhYmxlZCIsIl9zaG93SW5wdXRFcnJvciIsIl9oaWRlSW5wdXRFcnJvciIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiZSIsInByZXZlbnREZWZhdWx0IiwiX3NldEV2ZW50TGlzdGVuZXIiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJrZXkiLCJjbG9zZSIsIl9wb3B1cCIsImRvY3VtZW50IiwiX2hhbmRsZUVzY0Nsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBEZWxldGVDYXJkIiwiYWN0aW9uIiwiX2hhbmRsZVN1Ym1pdCIsImV2ZW50IiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZVN1Ym1pdCIsImJ1dHRvblRleHQiLCJsb2FkaW5nQnV0dG9uVGV4dCIsIl9mb3JtIiwiX2lucHV0cyIsIl9zdWJtaXRCdG4iLCJfYnV0dG9uVGV4dCIsIl9sb2FkaW5nQnV0dG9uVGV4dCIsImlucHV0VmFsdWVzIiwiaW5wdXQiLCJ2YWx1ZSIsIl9nZXRJbnB1dFZhbHVlcyIsInJlc2V0IiwiUG9wdXBXaXRoSW1hZ2UiLCJfcG9wdXBJbWFnZSIsIl9wb3B1cFBob3RvQ2FwdGlvbiIsIlNlY3Rpb24iLCJyZW5kZXJlciIsImNvbnRhaW5lclNlbGVjdG9yIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImNhcmRzIiwiZWxlbWVudCIsInByZXBlbmQiLCJVc2VySW5mbyIsInByb2ZpbGVOYW1lU2VsZWN0b3IiLCJwcm9maWxlSm9iU2VsZWN0b3IiLCJwcm9maWxlSW1nU2VsZWN0b3IiLCJfcHJvZmlsZU5hbWUiLCJfcHJvZmlsZUpvYiIsIl9wcm9maWxlSW1nIiwiam9iIiwiYWJvdXQiLCJhdmF0YXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjdXN0b21GZXRjaCIsInVybCIsImhlYWRlcnMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0Iiwic3RhdHVzVGV4dCIsIkFwaSIsImJhc2VVcmwiLCJfYmFzZVVybCIsIl9oZWFkZXJzIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYXJkSWQiLCJwcm9maWxlUGljIiwibG9nb0ltYWdlIiwiY29udGVudCIsInByb2ZpbGVQaWNFZGl0QnV0dG9uIiwicHJvZmlsZUZvcm0iLCJpbnB1dEZ1bGxOYW1lIiwiaW5wdXRPY2N1cGF0aW9uIiwiZWRpdEJ1dHRvbiIsImlucHV0UHJvZmlsZUltZyIsInByb2ZpbGVJbWdmb3JtIiwiYWRkRm9ybSIsImFkZEJ1dHRvbiIsImVkaXRTYXZlQnRuIiwiYWRkU2F2ZUJ0biIsInByb2ZpbGVJbWdTYXZlQnRuIiwiZGVsZXRlQ29uZmlybUJ0biIsImZvcm1MaXN0IiwiZm9ybVNldHRpbmdzIiwiZm9ybVNlbGVjdG9yIiwicHJvZmlsZXBpY1NyYyIsImxvZ29TcmMiLCJwcm9maWxlUGljRWRpdEJ1dHRvblNyYyIsImFwaSIsImF1dGhvcml6YXRpb24iLCJ1c2VySWQiLCJhbGwiLCJnZXRJbml0aWFsQ2FyZHMiLCJnZXRVc2VySW5mbyIsImNhcmRzRGF0YSIsInVzZXJEYXRhIiwic2VjdGlvbiIsInJlbmRlciIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJwb3B1cFBob3RvIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJkZWxldGVDb25maXJtYXRpb25Qb3B1cCIsImdlbmVyYXRlQ2FyZCIsImNhcmQiLCJvcGVuIiwic2V0QWN0aW9uIiwiZGVsZXRlQ2FyZCIsInJlbW92ZUNhcmQiLCJmaW5hbGx5IiwiaXNMaWtlZCIsImRpc2xpa2VDYXJkIiwic2V0TGlrZXMiLCJsaWtlQ2FyZCIsInBob3RvZmVlZCIsImNyZWF0ZUNhcmQiLCJhZGRJdGVtIiwicG9wdXBBZGQiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiaW1nbGluayIsImhpZGVMb2FkaW5nIiwicG9wdXBFZGl0IiwiZWRpdFByaWZpbGVJbmZvIiwib2NjdXBhdGlvbiIsImZvcm1WYWxpZGF0b3JzIiwiZW5hYmxlVmFsaWRhdGlvbiIsImZvcm1zTGlzdCIsInZhbGlkYXRvciIsImZvcm1UeXBlIiwiZ2V0QXR0cmlidXRlIiwicmVzZXRWYWxpZGF0aW9uIiwicG9wdXBQcm9maWxlSW1nIiwiZWRpdFByaWZpbGVJbWciXSwic291cmNlUm9vdCI6IiJ9