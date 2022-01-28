export const profilePic = document.querySelector(".profile__image");
export const logoImage = document.querySelector(".header__logo");
export const photoTemplate = document.querySelector("#photo-feed__cards").content.querySelector(".photo-feed__card");

export const profileForm = document.querySelector(".popup__form_edit");
export const inputFullName = document.querySelector("#name-input");
export const inputOccupation = document.querySelector("#occupation-input");
export const editButton = document.querySelector(".profile__edit-button");

export const addForm = document.querySelector("#add_form");
export const addButton = document.querySelector(".profile__add-button");

export const formValidators = {};

export const formSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const feedCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];
