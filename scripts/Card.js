import { openPopup } from "./utils.js";

const popupPhoto = document.querySelector(".popup_photo");
const popupImage = popupPhoto.querySelector(".popup__image");
const popupPhotoCaption = popupPhoto.querySelector(".popup__image-caption");

export default class Card {
  constructor(data, template) {
    this._name = data.name;
    this._link = data.link;
    this._template = template.cloneNode(true);
  }
  createCard() {
    const cardName = this._template.querySelector(".photo-feed__text");
    const cardImage = this._template.querySelector(".photo-feed__image");
    cardName.textContent = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._name;

    this._setEventListeners();

    return this._template;
  }

  _setEventListeners() {
    const cardButton = this._template.querySelector(".photo-feed__card-button");
    const cardImage = this._template.querySelector(".photo-feed__image");
    const cardDeleteBtn = this._template.querySelector(".photo-feed__delete-btn");

    this._likeHandler(cardButton);

    this._popupHandler(cardImage);

    this._deleteHandler(cardDeleteBtn);
  }

  _likeHandler(cardButton) {
    cardButton.addEventListener("click", (event) => {
      cardButton.classList.toggle("photo-feed__card-button_not-active");
      cardButton.classList.toggle("photo-feed__card-button_active");
    });
  }

  _popupHandler(cardImage) {
    cardImage.addEventListener("click", () => {
      popupImage.src = this._link;
      popupImage.alt = this._name;
      popupPhotoCaption.textContent = this._name;
      openPopup(popupPhoto);
    });
  }

  _deleteHandler(cardDeleteBtn) {
    cardDeleteBtn.addEventListener("click", () => this._template.remove());
  }
}
