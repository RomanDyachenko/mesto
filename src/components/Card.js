export class Card {

    constructor ({name, link}, {openFullSizePopup}, templateContainer) {
        this._name = name;
        this._link = link;
        this._templateContainer = templateContainer;
        this._openFullSizePopup = openFullSizePopup;
        this._templateElement = this._templateContainer.content.firstElementChild.cloneNode(true);
        this._templateButton = this._templateElement.querySelector('.cards__like-button')
        this._templateName = this._templateElement.querySelector('.cards__name');
        this._templateImg = this._templateElement.querySelector('.cards__place-img');
    }

    
    createCard = () => {
        this._templateName.textContent = this._name;
        this._templateImg.src = this._link;
        this._templateImg.alt = this._name;
        this._setEventListeners();
        return this._templateElement;
    }

    _removeCard = () => {
        this._templateElement.remove();
        
        this._templateElement = null;
    }

    _setEventListeners = () => {
        this._templateElement.querySelector('.cards__delete-button').addEventListener('click', () => this._removeCard());
        this._templateImg.addEventListener('click', () => {this._openFullSizePopup(this._templateElement)});
        this._templateButton.addEventListener('click', () => {
            this._templateButton.classList.toggle('cards__like-button_active')
        })
    }


}
 