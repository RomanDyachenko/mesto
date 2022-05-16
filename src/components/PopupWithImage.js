import Popup from './Popup.js';

export default class PopupWithImage extends Popup{

    constructor (popupSelector){
        super (popupSelector);
        super._popupElement;
        this._popupFullSizeImg = this._popupElement.querySelector('.popup__image');
        this._popupFullSizePlaceName = this._popupElement.querySelector('.popup__place-name');
        
    }
    
    open (cardImgSrc, cardImgTxt) {
        this._popupFullSizeImg.src = cardImgSrc;
        this._popupFullSizeImg.alt = cardImgTxt;
        this._popupFullSizePlaceName.textContent = cardImgTxt;
        super.open();
    }

}