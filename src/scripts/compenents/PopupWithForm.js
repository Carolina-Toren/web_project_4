import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector(".popup__form");
    this._inputs = this._popup.querySelectorAll(".popup__input");
    this._submitBtn = this._popup.querySelector(".popup__save-button");
  }

  _getInputValues() {
    const inputValues = {};
    this._inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (this._submitBtn.textContent === "Save") {
        this._submitBtn.textContent = "Saving...";
      } else if (this._submitBtn.textContent === "Create") {
        this._submitBtn.textContent = "Creating...";
      }
      this._submitHandler(this._getInputValues());
      this.close();
    });
    if (this._submitBtn.textContent === "Saving...") {
      this._submitBtn.textContent = "Save";
    } else if (this._submitBtn.textContent === "Creating...") {
      this._submitBtn.textContent = "Create";
    }
    super.setEventListeners();
  }

  close() {
    this._form.reset();
    super.close();
  }
}
