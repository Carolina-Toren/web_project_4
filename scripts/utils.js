const inputFullName = document.querySelector("#name-input");
const inputOccupation = document.querySelector("#occupation-input");
const profileForm = document.querySelector(".popup__form_edit");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__occupation");
const inputTitle = document.querySelector("#title-input");
const inputImageLink = document.querySelector("#img-link-input");

function closePopup(popup) {
  popup.classList.remove("popup_visible");
  document.removeEventListener("keydown", escButtonInPopup);
  popup.removeEventListener("mouseup", mouseClickInPopup);
}

function openPopup(popup) {
  popup.classList.add("popup_visible");
  document.addEventListener("keydown", escButtonInPopup);
  popup.addEventListener("mouseup", mouseClickInPopup);
  popup.querySelector(".popup__save-button").classList.add("popup__button_disabled");
}

function escButtonInPopup(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_visible"));
  }
}

function mouseClickInPopup(evt) {
  if (evt.target.classList.contains("popup_visible"));
  {
    closePopup(evt.target);
  }
}

function prepareEditProfilePopup() {
  inputFullName.value = profileName.textContent;
  inputOccupation.value = profileJob.textContent;
}

function prepareAddPopup() {
  inputTitle.value = "";
  inputImageLink.value = "";
}

export { openPopup, closePopup, prepareEditProfilePopup, prepareAddPopup };
