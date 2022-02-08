export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    this._popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup") || evt.target.classList.contains("popup__close-btn")) this.close();
    });
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") this.close();
  };
}