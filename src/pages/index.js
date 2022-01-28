import profilepicSrc from "../images/profilepic.gif";
import logoSrc from "../images/logo.svg";

import "./index.css";
import {
  profilePic,
  logoImage,
  photoTemplate,
  profileForm,
  inputFullName,
  inputOccupation,
  editButton,
  addForm,
  addButton,
  formSettings,
  feedCards,
  formValidators,
} from "../scripts/utils/contants";
import Card from "../scripts/compenents/Card.js";
import FormValidator from "../scripts/compenents/FormValidator.js";
import PopupWithImage from "../scripts/compenents/PopupWithImage.js";
import PopupWithForm from "../scripts/compenents/PopupWithForm.js";
import UserInfo from "../scripts/compenents/UserInfo.js";
import Section from "../scripts/compenents/Section.js";

profilePic.src = profilepicSrc;

logoImage.src = logoSrc;

const popupPhoto = new PopupWithImage(".popup_photo");
popupPhoto.setEventListeners();

const generateCard = (data) => {
  return new Card(data, photoTemplate, popupPhoto.open);
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

const userInfo = new UserInfo({
  profileNameSelector: ".profile__name",
  profileJobSelector: ".profile__occupation",
});

const popupEdit = new PopupWithForm(".popup_edit", (data) => {
  userInfo.setUserInfo(data);
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
});

addButton.addEventListener("click", () => {
  popupAdd.open();
  formValidators[addForm.getAttribute("name")].resetValidation();
});
