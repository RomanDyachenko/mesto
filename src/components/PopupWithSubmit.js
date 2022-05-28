import Popup from "./Popup";

export default class PopupWithSubmit extends Popup{
    constructor(popupElement, {submitForm}){
        super(popupElement)
        this._submitForm = submitForm;
        this._popupForm = this._popupElement.querySelector('.popup__form');
    }

    open(element, id){
        super.open();
        this._popupForm.addEventListener('submit', (evt) => {this._handleSubmitListener(evt, element, id)});
    }

    _handleSubmitListener = (evt, element, id) => {
        evt.preventDefault();
        this._submitForm(element, id);
        this.close();
    }


    getIdValue = Promise.resolve().then(res => {return res})
}