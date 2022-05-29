import Popup from "./Popup"; 

 

export default class PopupWithSubmit extends Popup{ 

    constructor(popupElement, {submitForm}){ 

        super(popupElement) 

        this._submitForm = submitForm; 

        this._popupForm = this._popupElement.querySelector('.popup__form'); 

    } 


    open (removeCard, element, id) {
        super.open();
        
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._handleSubmitListener(removeCard, element, id);
        }, {once: true});
    }


    _handleSubmitListener = (removeCard, element, id) => { 

        this._submitForm(removeCard, element, id, this.close); 
 

    } 

}