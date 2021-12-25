const inputFullName = document.querySelector("#name-input");
const inputOccupation = document.querySelector("#occupation-input");
const profileForm = document.querySelector(".popup__form_edit");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__occupation");
const inputTitle = document.querySelector("#title-input");
const inputImageLink = document.querySelector("#img-link-input");

function closePopup(popup) {
  popup.classList.remove("popup_visible");
  document.removeEventListener("keydown", handleKeyDown);
  popup.removeEventListener("mouseup", handleMouseUp);
}

function openPopup(popup) {
  popup.classList.add("popup_visible");
  document.addEventListener("keydown", handleKeyDown);
  popup.addEventListener("mouseup", handleMouseUp);
}

function handleKeyDown(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_visible"));
  }
}

function handleMouseUp(evt) {
  if (evt.target.classList.contains("popup_visible"));
  {
    closePopup(evt.target);
  }
}

export { openPopup, closePopup };
