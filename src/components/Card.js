export class Card {

    constructor (object, data, {openFullSizePopup, handleDeleteIconClick, handleLikeClick}, templateContainer) {
        this._data = data;
        this._object = object;
        this._name = object.name;
        this._link = object.link;
        this._id = object._id;
        this._templateContainer = templateContainer;
        this._openFullSizePopup = openFullSizePopup;
        this._handleDeleteIconClick = handleDeleteIconClick;
        this._handleLikeClick = handleLikeClick;
        this._templateElement = this._templateContainer.content.firstElementChild.cloneNode(true);
        this._templateButton = this._templateElement.querySelector('.cards__like-button')
        this._templateName = this._templateElement.querySelector('.cards__name');
        this._templateImg = this._templateElement.querySelector('.cards__place-img');
        this._templateLikesNumber = this._templateElement.querySelector('.cards__like-numbers');
        this._templateDeleteButton = this._templateElement.querySelector('.cards__delete-button');
    }

    _isOwnerCard = () => {
        if (this._object.owner._id !== this._data._id){
            this._templateDeleteButton.remove();
        }
    }

    
    _checkOwnerLike = () => {
        this._object.likes.forEach(() => {
           if (this._checkSomeLikes(this._object)){
            this._templateButton.classList.add('cards__like-button_active')
           }
          else this._templateButton.classList.remove('cards__like-button_active')
        })
    }

    _checkSomeLikes = (obj) => {
       return obj.likes.some((item) => {
            return item._id == this._data._id
            })
        }  


    removeCard = () => {
        this._templateElement.remove();

        this._templateElement = null;
    }

    createCard = () => {
        this._isOwnerCard();
        this._checkOwnerLike();
        this._templateName.textContent = this._name;
        this._templateImg.src = this._link;
        this._templateImg.alt = this._name;
        this._setEventListeners();
        this._handleLikesNumber(this._object);
        return this._templateElement;
    }

   


    _setEventListeners = () => {
        this._templateDeleteButton.addEventListener('click', () => this._handleDeleteIconClick(this._templateElement, this._id));
        this._templateImg.addEventListener('click', () => {this._openFullSizePopup(this._link, this._name)});
        this._templateButton.addEventListener('click', () => {
            this._handleLikeClick(this._checkSomeLikes, this._handleLikesNumber, this._id, this._templateButton)})
    }

    _handleLikesNumber = (obj) => {
        this._templateLikesNumber.textContent = obj.likes.length;
    }

}
 