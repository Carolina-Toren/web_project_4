import profilepicSrc from "../images/profilepic.gif";
import logoSrc from "../images/logo.svg";
import profilePicEditButtonSrc from "../images/button/edit_profile_img_button.svg";
import Api from "../scripts/utils/api";
import "./index.css";
import {
  profilePic,
  profilePicEditButton,
  profileImgform,
  logoImage,
  photoTemplate,
  profileForm,
  inputFullName,
  inputOccupation,
  editButton,
  addForm,
  addButton,
  formSettings,
  formValidators,
  editSaveBtn,
  addSaveBtn,
  profileImgSaveBtn,
  deleteConfirmBtn,
} from "../scripts/utils/contants";
import Card from "../scripts/compenents/Card.js";
import PopupDeleteCard from "../scripts/compenents/PopupDeleteCard";
import FormValidator from "../scripts/compenents/FormValidator.js";
import PopupWithImage from "../scripts/compenents/PopupWithImage.js";
import PopupWithForm from "../scripts/compenents/PopupWithForm.js";
import UserInfo from "../scripts/compenents/UserInfo.js";
import Section from "../scripts/compenents/Section.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "0ea43d66-a890-4252-aeb5-5f974b853c02",
    "Content-Type": "application/json",
  },
});

let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()]).then(([cardData, userData]) => {
  userId = userData._id;
  section.render(cardData);
  userInfo.setUserInfo({ name: userData.name, about: userData.about, avatar: userData.avatar });
});

const handleDeleteImgForm = (cardId, cardToDelete) => {
  confirmDelete.setAction(() => {
    deleteConfirmBtn.textContent = "Deleting";

    api
      .deleteCard(cardId)
      .then(() => {
        cardToDelete.remove();
        cardToDelete = null;
      })

      .catch((err) => console.log(err));
  });
  deleteConfirmBtn.textContent = "Yes";
};

const handleLikeClick = (cardId, cardBtn, likeState, likeCounter) => {
  if (likeState) {
    api
      .likeCard(cardId)
      .then((res) => {
        cardBtn.classList.toggle("photo-feed__card-button_not-active");
        cardBtn.classList.toggle("photo-feed__card-button_active");
        likeCounter.textContent = res.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api.dislikeCard(cardId).then((res) => {
      cardBtn.classList.toggle("photo-feed__card-button_not-active");
      cardBtn.classList.toggle("photo-feed__card-button_active");
      likeCounter.textContent = res.likes.length;
    });
  }
};

profilePic.src = profilepicSrc;
profilePicEditButton.src = profilePicEditButtonSrc;
logoImage.src = logoSrc;

const popupPhoto = new PopupWithImage(".popup_photo");
popupPhoto.setEventListeners();
const confirmDelete = new PopupDeleteCard(".popup_confirmation");
confirmDelete.setEventListeners();

const generateCard = (data) => {
  return new Card(
    data,
    userId,
    photoTemplate,
    popupPhoto.open,
    confirmDelete.open,
    handleDeleteImgForm,
    handleLikeClick
  );
};

const section = new Section(
  {
    renderer: (data) => {
      const card = generateCard(data);
      section.addItem(card.createCard());
    },
  },
  ".photo-feed__grid"
);

const popupAdd = new PopupWithForm(".popup_add", (data) => {
  api.createCard(data.title, data.imglink).then((res) => {
    const card = generateCard(res);

    section.addItem(card.createCard());
  });
});

popupAdd.setEventListeners();

const userInfo = new UserInfo({
  profileNameSelector: ".profile__name",
  profileJobSelector: ".profile__occupation",
  profileImgSelector: ".profile__image",
});

const popupEdit = new PopupWithForm(".popup_edit", (data) => {
  api
    .editPrifileInfo(data.name, data.occupation)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .catch((err) => console.log(err));
});
popupEdit.setEventListeners();

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

const popupProfileImg = new PopupWithForm(".popup_profile-img", (data) => {
  api.editPrifileImg(data).then((res) => {
    userInfo.setUserInfo(res);
  });
});
popupProfileImg.setEventListeners();

profilePicEditButton.addEventListener("click", () => {
  popupProfileImg.open();
  formValidators[profileImgform.getAttribute("name")].resetValidation();
});
