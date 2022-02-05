export default class Card {
  constructor(data, template, handleCardClick, handleDeleteCard) {
    this._name = data.name;
    this._link = data.link;
    this._element = template.cloneNode(true);
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
  }
  createCard() {
    const cardName = this._element.querySelector(".photo-feed__text");
    const cardImage = this._element.querySelector(".photo-feed__image");
    cardName.textContent = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._name;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector(".photo-feed__card-button").addEventListener("click", this._addLikeButtonClickListener);

    this._element.querySelector(".photo-feed__image").addEventListener("click", () => {
      this._handlePreviewImage();
    });

    this._element.querySelector(".photo-feed__delete-btn").addEventListener("click", () => {
      this._handleDeleteCard();
    });
  }

  _addLikeButtonClickListener = (event) => {
    event.target.classList.toggle("photo-feed__card-button_not-active");
    event.target.classList.toggle("photo-feed__card-button_active");
  };

  _handlePreviewImage() {
    this._handleCardClick({ link: this._link, name: this._name });
  }
}
