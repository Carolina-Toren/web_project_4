export default class Card {
  constructor(data, userId, template, handleCardClick, handleDeleteCard, handleDeleteImgForm, handleLikeClick) {
    this._name = data.name;
    this._link = data.link;
    this._element = template.cloneNode(true);
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleDeleteImgForm = handleDeleteImgForm;
    this._id = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._likeCounter = data.likes;
    this._handleLikeClick = handleLikeClick;
  }
  createCard() {
    const cardName = this._element.querySelector(".photo-feed__text");
    const cardImage = this._element.querySelector(".photo-feed__image");
    const cardBtn = this._element.querySelector(".photo-feed__card-button");
    cardName.textContent = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._name;

    this._setEventListeners();

    if (this._userId !== this._ownerId) this._element.querySelector(".photo-feed__delete-btn").style.display = "none";

    this._element.querySelector(".photo-feed__card-button-counter").textContent = this._likeCounter.length;

    const cardIsLiked = this._likeCounter.some((person) => person._id === this._userId);
    if (cardIsLiked) {
      cardBtn.classList.toggle("photo-feed__card-button_not-active");

      cardBtn.classList.toggle("photo-feed__card-button_active");
    }

    return this._element;
  }

  _setEventListeners() {
    const cardBtn = this._element.querySelector(".photo-feed__card-button");
    const likeCounter = this._element.querySelector(".photo-feed__card-button-counter");

    cardBtn.addEventListener("click", () => {
      if (cardBtn.classList.contains("photo-feed__card-button_not-active")) {
        this._handleLikeClick(this._id, cardBtn, true, likeCounter);
      } else this._handleLikeClick(this._id, cardBtn, false, likeCounter);
    });
    this._element.querySelector(".photo-feed__image").addEventListener("click", () => {
      this._handlePreviewImage();
    });

    this._element.querySelector(".photo-feed__delete-btn").addEventListener("click", () => {
      this._handleDeleteCard();
      this._handleDeleteImgForm(this._id, this._element);
    });
  }

  _handlePreviewImage() {
    this._handleCardClick({ link: this._link, name: this._name });
  }
}
