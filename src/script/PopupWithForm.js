import Popup from './Popup.js'

export default class PopupWithForm extends Popup{

    constructor (popupSelector, validationClassExemplar, {submitForm}) {
        super(popupSelector);
        this._validationClassExemplar = validationClassExemplar;
        this._submitForm = submitForm;
        this._buttonSubmitForm = this._popupSelector.querySelector('.popup__submit');
    }

    _getInputValues = () => {
       this._inputList = this._popupSelector.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.id] = input.value;
        })
        return this._formValues;
    }
    _handleSubmitListener = (evt) => {
        evt.preventDefault();
        this._values = this._getInputValues();
        this._submitForm(this._values);
        this.close()
        evt.target.reset();
        this._validationClassExemplar.toggleButtonState();
    }

    setEventListeners = () => {
        this._popupCloseButton.addEventListener('click', () => {
            this.close();
        })
        document.addEventListener('keydown', evt => {
            this._handleEscClose(evt);
        });
        this._popupSelector.addEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget){
                this.close();
            }
        });
        this._popupSelector.addEventListener('submit', this._handleSubmitListener);
     }
     removeEventListeners = () => {
        this._popupCloseButton.removeEventListener('click', () => {
            this.close();
        })
        document.removeEventListener('keydown', evt => {
            this._handleEscClose(evt);
        });
        this._popupSelector.removeEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget){
                this.close();
            }
        })

        this._popupSelector.removeEventListener('submit', this._handleSubmitListener);
    }

}