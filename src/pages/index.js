import profilepicSrc from "../images/profilepic.gif";
import logoSrc from "../images/logo.svg";
import profilePicEditButtonSrc from "../images/button/edit_profile_img_button.svg";
import Api from "../scripts/utils/api";
import "./index.css";
import {
  profilePic,
  profilePicEditButton,
  profileImgform,
  photoTemplate,
  logoImage,
  profileForm,
  inputFullName,
  inputOccupation,
  editButton,
  addForm,
  addButton,
  editSaveBtn,
  addSaveBtn,
  profileImgSaveBtn,
  deleteConfirmBtn,
} from "../scripts/utils/contants";
import Card from "../scripts/components/Card.js";
import PopupDeleteCard from "../scripts/components/PopupDeleteCard";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Section from "../scripts/components/Section.js";

///////////////////////
//////// API///////////
//////////////////////

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "0ea43d66-a890-4252-aeb5-5f974b853c02",
    "Content-Type": "application/json",
  },
});

let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cardsData, userData]) => {
    userId = userData._id;
    section.render(cardsData);
    userInfo.setUserInfo({ name: userData.name, about: userData.about, avatar: userData.avatar });
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

profilePic.src = profilepicSrc;
profilePicEditButton.src = profilePicEditButtonSrc;
logoImage.src = logoSrc;

const popupPhoto = new PopupWithImage(".popup_photo");
popupPhoto.setEventListeners();
const confirmDelete = new PopupDeleteCard(".popup_confirmation");
confirmDelete.setEventListeners();

function generateCard(data) {
  const card = new Card({
    data: data,
    user: userId,
    photoTemplate: photoTemplate,
    handleCardClick: (evt) => {
      evt.preventDefault();
      const target = evt.target;
      const link = target.src;
      const name = target.alt;
      popupPhoto.open(link, name);
      popupPhoto.setEventListeners();
    },
    handleDeleteCard: (cardId) => {
      confirmDelete.open();
      confirmDelete.setAction(() => {
        deleteConfirmBtn.textContent = "Deleting...";
        api
          .deleteCard(cardId)
          .then(() => {
            card.removeCard();
          })
          .catch((err) => {
            console.log(`Error: ${err}`);
          })
          .finally(() => {
            deleteConfirmBtn.textContent = "Yes";
          });
      });
    },
    handleLikeClick: (cardId) => {
      const isLiked = card.isLiked();
      if (isLiked) {
        api
          .dislikeCard(cardId)
          .then((res) => {
            card.setLikes(res.likes);
          })
          .catch((err) => {
            console.log(`Error: ${err}`);
          });
      } else {
        api
          .likeCard(cardId)
          .then((res) => {
            card.setLikes(res.likes);
          })
          .catch((err) => {
            console.log(`Error: ${err}`);
          });
      }
    },
  });
  const photofeed = card.createCard();
  return photofeed;
}

const section = new Section((data) => {
  section.addItem(generateCard(data));
}, ".photo-feed__grid");

const popupAdd = new PopupWithForm(
  ".popup_add",
  (data) => {
    popupAdd.showLoading();
    api
      .createCard(data.title, data.imglink)
      .then((res) => {
        const card = generateCard(res);
        section.addItem(card);
      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => {
        popupAdd.close();
        popupAdd.hideLoading();
      });
  },
  addSaveBtn.textContent,
  "Creating..."
);

popupAdd.setEventListeners();

const userInfo = new UserInfo({
  profileNameSelector: ".profile__name",
  profileJobSelector: ".profile__occupation",
  profileImgSelector: ".profile__image",
});

const popupEdit = new PopupWithForm(
  ".popup_edit",
  (data) => {
    popupEdit.showLoading();
    api
      .editPrifileInfo(data.name, data.occupation)
      .then((res) => {
        userInfo.setUserInfo(res);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })

      .finally(() => {
        popupEdit.close();
        popupEdit.hideLoading();
      });
  },
  editSaveBtn.textContent,
  "Saving..."
);

popupEdit.setEventListeners();

const formSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const formValidators = {};

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

const popupProfileImg = new PopupWithForm(
  ".popup_profile-img",
  (data) => {
    popupProfileImg.showLoading();

    api
      .editPrifileImg(data)
      .then((res) => {
        userInfo.setUserInfo(res);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })

      .finally(() => {
        popupProfileImg.close();
        popupProfileImg.hideLoading();
      });
  },
  profileImgSaveBtn.textContent,
  "Saving..."
);
popupProfileImg.setEventListeners();

profilePicEditButton.addEventListener("click", () => {
  popupProfileImg.open();
  formValidators[profileImgform.getAttribute("name")].resetValidation();
});
