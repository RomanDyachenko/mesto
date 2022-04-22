import {openFullSizePopup} from './index.js';

export class Card {
    constructor (data) {
        this._name = data.name;
        this._link = data.link;
    }

    _createCard = () => {
        const _templateElement = document.querySelector('#template').content.firstElementChild.cloneNode(true);
        const _templateButton = _templateElement.querySelector('.cards__like-button')
        const _templateName = _templateElement.querySelector('.cards__name');
        const _templateImg = _templateElement.querySelector('.cards__place-img');
        _templateName.textContent = this._name;
        _templateImg.src = this._link;
        _templateImg.alt = this._name;
        this._setDeleteButtonListener(_templateElement);
        this._setImageClickListener(_templateImg);
        this._setLikeButtonListener(_templateButton);
        return _templateElement;
    }

    _removeCard = (event) => {
        const _todo = event.currentTarget.closest('.cards__place');
    
        _todo.remove();
    }

    _setDeleteButtonListener = (item) => {
        item.querySelector('.cards__delete-button').addEventListener('click', this._removeCard);
    }

    _setImageClickListener = (item) => {
        item.addEventListener('click', openFullSizePopup);
    }

    _toggleLike = (event) => {
        event.currentTarget.classList.toggle('cards__like-button_active');
    }

    _setLikeButtonListener = (item) => {
        item.addEventListener('click', this._toggleLike);
    }

    addNewCard = () => {
        const sectionCards = document.querySelector('.cards');
        sectionCards.prepend(this._createCard());
    }



}
 