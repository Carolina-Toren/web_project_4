import feedCards from "./feedCards.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { openPopup, closePopup, prepareEditProfilePopup, prepareAddPopup } from "./utils.js";

/*------------variables--------*/

//global
const formValidators = {};

const allPopups = document.querySelectorAll(".popup");

//EDIT POPUP

const popupEdit = document.querySelector(".popup_edit");
const closeButtonEdit = popupEdit.querySelector("#close_btn_edit");
const inputFullName = popupEdit.querySelector("#name-input");
const inputOccupation = popupEdit.querySelector("#occupation-input");
const profileForm = popupEdit.querySelector(".popup__form_edit");
const editButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__occupation");

//ADD POPUP

const popupAdd = document.querySelector(".popup_add");
const closeButtonAdd = popupAdd.querySelector("#close_btn_add");
const inputTitle = popupAdd.querySelector("#title-input");
const inputImageLink = popupAdd.querySelector("#img-link-input");
const addForm = popupAdd.querySelector("#add_form");
const addButton = document.querySelector(".profile__add-button");
const photoTemplate = document.querySelector("#photo-feed__cards").content.querySelector(".photo-feed__card");
const photoGrid = document.querySelector(".photo-feed__grid");

//
const closeButtonPhoto = document.querySelector("#close_btn_photo");
const popupPhoto = document.querySelector(".popup_photo");

///

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

/*~~~~~~~~~~~~~~~~~~ OPENING AND CLOSING POPUPS ~~~~~~~~~~~*/
editButton.addEventListener("click", () => {
  prepareEditProfilePopup();
  formValidators[profileForm.getAttribute("name")].resetValidation();
  openPopup(popupEdit);
});

addButton.addEventListener("click", () => {
  prepareAddPopup();
  formValidators[addForm.getAttribute("name")].resetValidation();

  openPopup(popupAdd);
});

closeButtonPhoto.addEventListener("click", () => closePopup(popupPhoto));

closeButtonEdit.addEventListener("click", () => closePopup(popupEdit));

closeButtonAdd.addEventListener("click", () => closePopup(popupAdd));

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*################# POPUP SUBMIT BUTTONS ###############*/

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileName.textContent = inputFullName.value;
  profileJob.textContent = inputOccupation.value;
  closePopup(popupEdit);
});

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const cardData = {
    name: inputTitle.value,
    link: inputImageLink.value,
  };
  const card = new Card(cardData, photoTemplate);
  photoGrid.append(card.createCard());
  closePopup(popupAdd);
});

/*###################################################################*/

//function for adding photos and adding the tamplate and photos at launch

feedCards.forEach((feedCardsData) => {
  const card = new Card(feedCardsData, photoTemplate);
  photoGrid.append(card.createCard());
});
