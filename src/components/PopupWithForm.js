import Popup from './Popup.js'

export default class PopupWithForm extends Popup{

    constructor (popupElement, {submitForm}) {
        super(popupElement);
        this._submitForm = submitForm;
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
        this._popupForm = this._popupElement.querySelector('.popup__form');
        this._popupButtonSubmit = this._popupForm.querySelector('.popup__submit');
        this._handleSubmitListener = this._handleSubmitListener.bind(this);
    }

    _getInputValues = () => {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.id] = input.value;
        })
        return this._formValues;
    }
    _handleSubmitListener = (evt) => {
        this._renderLoading(true);
        evt.preventDefault();
        this._values = this._getInputValues();
        this._submitForm(this._values, this.close);
    }

    setEventListeners () { 
        super.setEventListeners();	
           
        this._popupForm.addEventListener('submit', this._handleSubmitListener);
     }

     close () {
        
         this._renderLoading(false)
         super.close();
         this._popupForm.reset();
     }

     _renderLoading = (isLoading) => {
        if(isLoading){
           return this._popupButtonSubmit.textContent = 'Сохранение...';
        }
        else {
           return this._popupButtonSubmit.textContent = 'Сохранить';
        }
     }
}