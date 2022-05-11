export class Card {

    constructor ({name, link}, {openFullSizePopup}, templateSelector) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
        this._openFullSizePopup = openFullSizePopup;
        this._templateElement = this._templateSelector.content.firstElementChild.cloneNode(true);
        this._templateButton = this._templateElement.querySelector('.cards__like-button')
        this._templateName = this._templateElement.querySelector('.cards__name');
        this._templateImg = this._templateElement.querySelector('.cards__place-img');
    }

    
    createCard = () => {
        this._templateName.textContent = this._name;
        this._templateImg.src = this._link;
        this._templateImg.alt = this._name;
        this._setDeleteButtonListener(this._templateElement);
        this._handleCardClick(this._templateImg);
        this._setLikeButtonListener(this._templateButton);
        return this._templateElement;
    }

    _removeCard = () => {
        this._templateElement.remove();
        
        this._templateElement = null;
    }

    _setDeleteButtonListener = (item) => {
        item.querySelector('.cards__delete-button').addEventListener('click', () => this._removeCard());
    }

    _handleCardClick = (item) => {
        item.addEventListener('click', this._openFullSizePopup);
    }

    _toggleLike = (event) => {
        event.currentTarget.classList.toggle('cards__like-button_active');
    }

    _setLikeButtonListener = (item) => {
        item.addEventListener('click', this._toggleLike);
    }



}
 