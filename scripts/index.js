/* Cards JS */

let feedCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

/*----------------------------------EDIT POPUP-----------------------------------*/

const popupEdit = document.querySelector(".popup_edit");
const closeButtonEdit = popupEdit.querySelector("#close_btn_edit");
const inputFullName = popupEdit.querySelector("#name-input");
const inputOccupation = popupEdit.querySelector("#occupation-input");
const profileForm = popupEdit.querySelector(".popup__form_edit");

const editButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__occupation");

function openPopupEdit() {
  popupEdit.classList.add("popup_visible");
  inputFullName.value = profileName.textContent;
  inputOccupation.value = profileJob.textContent;
}

function closePopupEdit() {
  popupEdit.classList.remove("popup_visible");
}

closeButtonEdit.addEventListener("click", closePopupEdit);

editButton.addEventListener("click", openPopupEdit);

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileName.textContent = inputFullName.value;
  profileJob.textContent = inputOccupation.value;
  closePopupEdit();
});

/*------------------------ADD POPUP---------------------------------------*/

const popupAdd = document.querySelector(".popup_add");
const closeButtonAdd = popupAdd.querySelector("#close_btn_add");
const inputTitle = popupAdd.querySelector("#title-input");
const inputImageLink = popupAdd.querySelector("#img-link-input");
const addForm = popupAdd.querySelector("#add_form");
const addButton = document.querySelector(".profile__add-button");
const photoTemplate = document
  .querySelector("#photo-feed__cards")
  .content.querySelector(".photo-feed__card");
const photoGrid = document.querySelector(".photo-feed__grid");

function photoGenerator({ name, link }) {
  const card = photoTemplate.cloneNode(true);
  card.querySelector(".photo-feed__text").textContent = name;
  card.querySelector(".photo-feed__image").src = link;

  return card;
}

function openPopupAdd() {
  popupAdd.classList.add("popup_visible");
  inputTitle.value = "";
  inputImageLink.value = "";
}

function closePopupAdd() {
  popupAdd.classList.remove("popup_visible");
}

addButton.addEventListener("click", openPopupAdd);

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  feedCards.unshift({ name: inputTitle.value, link: inputImageLink.value });
  const cardElement = photoGenerator({
    name: inputTitle.value,
    link: inputImageLink.value,
  });
  photoGrid.append(cardElement);
  closePopupAdd();
});

closeButtonAdd.addEventListener("click", closePopupAdd);

feedCards.forEach((feedCardsData) => {
  photoGrid.append(photoGenerator(feedCardsData));
});

/*---------------like button -------------------*/

document.querySelectorAll(".photo-feed__card-button").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.style.backgroundImage =
      "url(../../../images/button/like_button_active.svg)";
  });
});

/*---------------------delete button--------------*/

document.querySelectorAll(".photo-feed__delete-btn").forEach((item) => {
  item.addEventListener("click", (event) => {
    const deletedCard = item.parentNode;
    deletedCard.remove();
  });
});

/*-----------------photo popup------------*/

const popupPhoto = document.querySelector(".popup_photo");
const popupImage = document.querySelector(".popup__image");
const closeButtonPhoto = document.querySelector("#close_btn_photo");
const popupPhotoCaption = document.querySelector(".popup__image-caption");

document.querySelectorAll(".photo-feed__image").forEach((item) => {
  item.addEventListener("click", (event) => {
    popupPhoto.classList.add("popup_visible");
    popupImage.src = item.src;
    popupPhotoCaption.textContent =
      item.nextElementSibling.firstElementChild.textContent;
  });
});

function closePopupPohto() {
  popupPhoto.classList.remove("popup_visible");
}

closeButtonPhoto.addEventListener("click", closePopupPohto);
