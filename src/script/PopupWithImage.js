import Popup from './Popup.js';
import {popupFullSizeImg, popupFullSizePlaceName} from './utils.js';

export default class PopupWithImage extends Popup{

    constructor (popupSelector){
        super (popupSelector);
    }
    
    open = (item) => {
        this._popupSelector.classList.add('popup_opened');
        this.setEventListeners();
        popupFullSizeImg.src = item.querySelector('.cards__place-img').src;
        popupFullSizeImg.alt = item.querySelector('.cards__name').textContent;
        popupFullSizePlaceName.textContent = item.querySelector('.cards__name').textContent;
        
    }

}