import Popup from "./Popup"; 

 

export default class PopupWithSubmit extends Popup{ 

    constructor(popupElement, {submitForm}){ 

        super(popupElement) 

        this._submitForm = submitForm; 

        this._popupForm = this._popupElement.querySelector('.popup__form');

    } 


    open = (removeCard, element, id) => {
        super.open();
        this._element = element;
        this._id = id;
        this._removeCard = removeCard;
    }
    
    setEventListeners = () => {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._removeCard, this._element, this._id, this.close);
        });
    }
    

}