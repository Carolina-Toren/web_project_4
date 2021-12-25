import { openPopup } from "./utils.js";

const popupPhoto = document.querySelector(".popup_photo");
const popupImage = popupPhoto.querySelector(".popup__image");
const popupPhotoCaption = popupPhoto.querySelector(".popup__image-caption");

export default class Card {
  constructor(data, template) {
    this._name = data.name;
    this._link = data.link;
    this._element = template.cloneNode(true);
  }
  createCard() {
    const cardName = this._element.querySelector(".photo-feed__text");
    const cardImage = this._element.querySelector(".photo-feed__image");
    cardName.textContent = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._name;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    const cardButton = this._element.querySelector(".photo-feed__card-button");
    const cardImage = this._element.querySelector(".photo-feed__image");
    const cardDeleteBtn = this._element.querySelector(".photo-feed__delete-btn");

    cardButton.addEventListener("click", this._addLikeButtonClickListener);

    cardImage.addEventListener("click", this._addPohotoClickListner);

    cardDeleteBtn.addEventListener("click", this._addDeleteButtonListener);
  }

  _addLikeButtonClickListener = (event) => {
    event.target.classList.toggle("photo-feed__card-button_not-active");
    event.target.classList.toggle("photo-feed__card-button_active");
  };

  _addPohotoClickListner = () => {
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupPhotoCaption.textContent = this._name;
    openPopup(popupPhoto);
  };

  _addDeleteButtonListener = () => {
    this._element.remove();
    this._element = null;
  };
}
