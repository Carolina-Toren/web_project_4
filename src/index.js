import profilepicSrc from "./images/profilepic.png";
import logoSrc from "./images/logo.svg";

import "./pages/index.css";

import feedCards from "./scripts/feedCards.js";
import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import UserInfo from "./scripts/UserInfo.js";
import Section from "./scripts/Section.js";

const profilePic = document.querySelector(".profile__image");
profilePic.src = profilepicSrc;

const logoImage = document.querySelector(".header__logo");
logoImage.src = logoSrc;

const popupPhoto = new PopupWithImage(".popup_photo");
popupPhoto.setEventListeners();

const photoTemplate = document.querySelector("#photo-feed__cards").content.querySelector(".photo-feed__card");
const photoGrid = document.querySelector(".photo-feed__grid");

const generateCard = (data) => {
  return new Card(data, photoTemplate, popupPhoto.open);
  //photoGrid.prepend(card.createCard());
};

const section = new Section(
  {
    items: feedCards,
    renderer: (data) => {
      const card = generateCard(data);
      section.addItem(card.createCard());
    },
  },
  ".photo-feed__grid"
);

section.render();

const formValidators = {};

//EDIT POPUP
const userInfo = new UserInfo({
  profileNameSelector: ".profile__name",
  profileJobSelector: ".profile__occupation",
});
const profileForm = document.querySelector(".popup__form_edit");
const inputFullName = document.querySelector("#name-input");
const inputOccupation = document.querySelector("#occupation-input");
const editButton = document.querySelector(".profile__edit-button");

//ADD POPUP
const addForm = document.querySelector("#add_form");
const addButton = document.querySelector(".profile__add-button");

const popupEdit = new PopupWithForm(".popup_edit", (data) => {
  userInfo.SetUserInfo(data);
});
popupEdit.setEventListeners();

const popupAdd = new PopupWithForm(".popup_add", (data) => {
  const cardData = {
    name: data.title,
    link: data["img-link"],
  };
  const card = generateCard(cardData);

  section.addItem(card.createCard());
});

popupAdd.setEventListeners();

const formSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const enableValidation = (settings) => {
  const formsList = Array.from(document.querySelectorAll(settings.formSelector));
  formsList.forEach((formElement) => {
    const validator = new FormValidator(settings, formElement);
    const formType = formElement.getAttribute("name");
    formValidators[formType] = validator;
    validator.enableValidation();
  });
};

enableValidation(formSettings);

editButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  popupEdit.open();
  inputFullName.value = data.name;
  inputOccupation.value = data.job;
  formValidators[profileForm.getAttribute("name")].resetValidation();
  profileForm.querySelector(".popup__save-button").classList.add("popup__button_disabled");
});

addButton.addEventListener("click", () => {
  popupAdd.open();
  formValidators[addForm.getAttribute("name")].resetValidation();
  addForm.querySelector(".popup__save-button").classList.add("popup__button_disabled");
});
