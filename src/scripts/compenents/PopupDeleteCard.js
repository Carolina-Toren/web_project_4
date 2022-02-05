import Popup from "./Popup";

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  setAction(action) {
    this._submitHandler = action;
  }

  setEventListeners() {
    this._popup.addEventListener("submit", (event) => {
      event.preventDefault();
      // this._submitHandler();
      this.close();
    });
    super.setEventListeners();
  }
}
