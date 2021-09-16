let popup = document.querySelector(".popup");
let popupSubmitButton = popup.querySelector(".popup__save-button");
let closeButton = popup.querySelector(".popup__close-btn");
let inputFullName = popup.querySelector(".popup__fullName");
let inputOccupation = popup.querySelector(".popup__occupation");

let editButton = document.querySelector(".profile__edit-button");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__occupation");

function openPopup() {
  popup.classList.add("popup_visible");
}

function closePopup() {
  popup.classList.remove("popup_visible");
}

closeButton.addEventListener("click", closePopup);

editButton.addEventListener("click", () => {
  inputFullName.value = profileName.textContent;
  inputOccupation.value = profileJob.textContent;
  openPopup();
});

popupSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();
  profileName.textContent = inputFullName.value;
  profileJob.textContent = inputOccupation.value;
  closePopup();
});
