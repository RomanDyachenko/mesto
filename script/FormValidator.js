export class FormValidator {
    constructor (data){
        this._formSelector = data.formSelector;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._editButtonSelector = data.editButtonSelector;
        this._addButtonSelector = data.addButtonSelector;
        this._popupOpened = document.querySelector(data.popupOpened);
        this._form = this._popupOpened.querySelector(this._formSelector);
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    }

    _showInputError = (_inputElement, _errorMessage) => {
        const _errorElement = this._form.querySelector(`#error-${_inputElement.id}`);
        _inputElement.classList.add(this._inputErrorClass);
        _errorElement.textContent = _errorMessage;
        _errorElement.classList.add(this._errorClass);
    }
    
    _hideInputError = (_inputElement) => {
        const _errorElement = this._form.querySelector(`#error-${_inputElement.id}`);
        _inputElement.classList.remove(this._inputErrorClass);
        _errorElement.classList.remove(this._errorClass);
        _errorElement.textContent = '';
    }
    
    _checkInputValidity = (_inputElement) => {
        if(!_inputElement.validity.valid){
            this._showInputError(_inputElement, _inputElement.validationMessage)
        }
        else {
            this._hideInputError(_inputElement);
        }
    }
    
    _setEventListeners = () => {
        
        this._inputList.forEach((_inputElement) => {
            _inputElement.addEventListener('input', () => {
                this._checkInputValidity(_inputElement);
                this._toggleButtonState ();
            });
        
        });
    }
    
    _hasInvalidInput = () => {
        return this._inputList.some((_inputElement) => {
            return !_inputElement.validity.valid || _inputElement.value === '';
        })
    }
    
    _toggleButtonState = () => {
        if (this._hasInvalidInput()){
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', 'disabled');
        }
        else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled');
        }
    }

    enableValidation = () => {
        this._toggleButtonState();
        this._setEventListeners(this._form);
        
    }


}