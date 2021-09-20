let popup = document.querySelector(".popup");
let closeButton = popup.querySelector(".popup__close-btn");
let inputFullName = popup.querySelector("#name-input");
let inputOccupation = popup.querySelector("#occupation-input");
let profileForm = document.querySelector(".popup__form");

let editButton = document.querySelector(".profile__edit-button");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__occupation");

function openPopup() {
  popup.classList.add("popup_visible");
  inputFullName.value = profileName.textContent;
  inputOccupation.value = profileJob.textContent;
}

function closePopup() {
  popup.classList.remove("popup_visible");
}

closeButton.addEventListener("click", closePopup);

editButton.addEventListener("click", openPopup);

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileName.textContent = inputFullName.value;
  profileJob.textContent = inputOccupation.value;
  closePopup();
});
