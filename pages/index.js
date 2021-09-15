let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__close-btn");

function openPopup() {
  popup.classList.add("popup_visible");
}

editButton.addEventListener("click", openPopup);

function closePopup() {
  popup.classList.remove("popup_visible");
}

closeButton.addEventListener("click", closePopup);
