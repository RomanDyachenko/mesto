export default class Popup{
    constructor (popupSelector){
        this._popupSelector = popupSelector;
        this._popupCloseButton = this._popupSelector.querySelector('.popup__close-button');
    }

    open = () => {
        this._popupSelector.classList.add('popup_opened');
        this.setEventListeners();
    }

    close = () => {
        this._popupSelector.classList.remove('popup_opened');
        this.removeEventListeners();
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape')
            this.close();
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
       })
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
    }
}