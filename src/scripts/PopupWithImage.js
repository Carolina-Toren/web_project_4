import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open = ({ link, name }) => {
    const popupImage = this._popup.querySelector(".popup__image");
    const popupPhotoCaption = this._popup.querySelector(".popup__image-caption");

    popupImage.src = link;
    popupImage.alt = link;
    popupPhotoCaption.textContent = name;

    this._popup.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscClose);
  };
}
