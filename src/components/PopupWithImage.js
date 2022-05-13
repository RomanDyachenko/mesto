import Popup from './Popup.js';

export default class PopupWithImage extends Popup{

    constructor (popupElement, popupFullSizeImg, popupFullSizePlaceName){
        super (popupElement);

        this._popupFullSizeImg = popupFullSizeImg;
        this._popupFullSizePlaceName = popupFullSizePlaceName;
        
    }
    
    open (cardImgSrc, cardImgTxt) {
        this._popupFullSizeImg.src = cardImgSrc.src;
        this._popupFullSizeImg.alt = cardImgTxt.textContent;
        this._popupFullSizePlaceName.textContent = cardImgTxt.textContent;
        super.open();
    }

}