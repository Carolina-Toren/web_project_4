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

//global functions~~~~~~~~>
function closePopup(popup) {
  popup.classList.remove("popup_visible");
}

function openPopup(popupType) {
  popupType.classList.add("popup_visible");
}

/*----------------------------------EDIT POPUP-----------------------------------*/

const popupEdit = document.querySelector(".popup_edit");
const closeButtonEdit = popupEdit.querySelector("#close_btn_edit");
const inputFullName = popupEdit.querySelector("#name-input");
const inputOccupation = popupEdit.querySelector("#occupation-input");
const profileForm = popupEdit.querySelector(".popup__form_edit");

const editButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__occupation");

closeButtonEdit.addEventListener("click", () => closePopup(popupEdit));

editButton.addEventListener("click", () => {
  prepareEditProfilePopup();
  openPopup(popupEdit);
});
function prepareEditProfilePopup() {
  inputFullName.value = profileName.textContent;

  inputOccupation.value = profileJob.textContent;
}
profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileName.textContent = inputFullName.value;
  profileJob.textContent = inputOccupation.value;

  closePopup(popupEdit);
});

/*------------------------ADD POPUP---------------------------------------*/

const popupAdd = document.querySelector(".popup_add");
const closeButtonAdd = popupAdd.querySelector("#close_btn_add");
const inputTitle = popupAdd.querySelector("#title-input");
const inputImageLink = popupAdd.querySelector("#img-link-input");
const addForm = popupAdd.querySelector("#add_form");
const addButton = document.querySelector(".profile__add-button");
const photoTemplate = document.querySelector("#photo-feed__cards").content.querySelector(".photo-feed__card");
const photoGrid = document.querySelector(".photo-feed__grid");

//function for adding photos and adding the tamplate and photos at launch
function photoGenerator({ name, link }) {
  const card = photoTemplate.cloneNode(true);
  card.querySelector(".photo-feed__text").textContent = name;
  card.querySelector(".photo-feed__image").src = link;
  card.querySelector(".photo-feed__delete-btn").addEventListener("click", (event) => {
    const deletedCard = card;
    deletedCard.remove();
  });
  card.querySelector(".photo-feed__card-button").addEventListener("click", (event) => {
    card.querySelector(".photo-feed__card-button").style.backgroundImage =
      "url(../../../images/button/like_button_active.svg)";
  });

  card.querySelector(".photo-feed__image").addEventListener("click", (event) => {
    popupPhoto.classList.add("popup_visible");

    popupImage.src = card.querySelector(".photo-feed__image").src;

    popupPhotoCaption.textContent = card.querySelector(".photo-feed__card-caption").textContent;
  });

  return card;
}

feedCards.forEach((feedCardsData) => {
  photoGrid.append(photoGenerator(feedCardsData));
});

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  feedCards.unshift({ name: inputTitle.value, link: inputImageLink.value });
  const cardElement = photoGenerator({
    name: inputTitle.value,
    link: inputImageLink.value,
  });
  photoGrid.append(cardElement);
  closePopup(popupAdd);
});

closeButtonAdd.addEventListener("click", () => closePopup(popupAdd));

addButton.addEventListener("click", () => {
  prepareAddPopup();
  openPopup(popupAdd);
});

function prepareAddPopup() {
  inputTitle.value = "";

  inputImageLink.value = "";
}
const popupPhoto = document.querySelector(".popup_photo");
const popupImage = document.querySelector(".popup__image");
const closeButtonPhoto = document.querySelector("#close_btn_photo");
const popupPhotoCaption = document.querySelector(".popup__image-caption");

closeButtonPhoto.addEventListener("click", () => closePopup(popupPhoto));
