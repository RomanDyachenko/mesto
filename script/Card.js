export class Card {

    constructor (data, openFullSizePopup, templateSelector) {
        this._templateSelector = templateSelector;
        this._name = data.name;
        this._link = data.link;
        this._openFullSizePopup = openFullSizePopup;
        this._templateElement = this._templateSelector.content.firstElementChild.cloneNode(true);
        this._templateButton = this._templateElement.querySelector('.cards__like-button')
        this._templateName = this._templateElement.querySelector('.cards__name');
        this._templateImg = this._templateElement.querySelector('.cards__place-img');
    }

    
    _createCard = () => {
        this._templateName.textContent = this._name;
        this._templateImg.src = this._link;
        this._templateImg.alt = this._name;
        this._setDeleteButtonListener(this._templateElement);
        this._setImageClickListener(this._templateImg);
        this._setLikeButtonListener(this._templateButton);
        return this._templateElement;
    }

    _removeCard = (event) => {
        this._todo = event.currentTarget.closest('.cards__place').remove();
        
        this.todo = null;
    }

    _setDeleteButtonListener = (item) => {
        item.querySelector('.cards__delete-button').addEventListener('click', this._removeCard);
    }

    _setImageClickListener = (item) => {
        item.addEventListener('click', this._openFullSizePopup);
    }

    _toggleLike = (event) => {
        event.currentTarget.classList.toggle('cards__like-button_active');
    }

    _setLikeButtonListener = (item) => {
        item.addEventListener('click', this._toggleLike);
    }

    addNewCard = (container) => {
        container.prepend(this._createCard());
    }



}
 