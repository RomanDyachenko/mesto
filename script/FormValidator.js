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
    }

    _showInputError = (_formElement, _inputElement, _errorMessage) => {
        const _errorElement = _formElement.querySelector(`#error-${_inputElement.id}`);
        _inputElement.classList.add(this._inputErrorClass);
        _errorElement.textContent = _errorMessage;
        _errorElement.classList.add(this._errorClass);
    }
    
    _hideInputError = (_formElement, _inputElement) => {
        const _errorElement = _formElement.querySelector(`#error-${_inputElement.id}`);
        _inputElement.classList.remove(this._inputErrorClass);
        _errorElement.classList.remove(this._errorClass);
        _errorElement.textContent = '';
    }
    
    _checkInputValidity = (_formElement, _inputElement) => {
        if(!_inputElement.validity.valid){
            this._showInputError(_formElement, _inputElement, _inputElement.validationMessage)
        }
        else {
            this._hideInputError(_formElement, _inputElement);
        }
    }
    
    _setEventListeners = (_formElement) => {
        const _inputList = Array.from(_formElement.querySelectorAll(this._inputSelector));
        const _buttonElement = _formElement.querySelector(this._submitButtonSelector);
        const _buttonEdit = document.querySelector(this._editButtonSelector);
        const _buttonAdd = document.querySelector(this._addButtonSelector);
        _buttonEdit.addEventListener('click', () => {
            this._toggleButtonState (_inputList, _buttonElement);
        });
        _buttonAdd.addEventListener('click', () => {
            this._toggleButtonState (_inputList, _buttonElement);
        });
        _inputList.forEach((_inputElement) => {
            _inputElement.addEventListener('input', () => {
                this._checkInputValidity(_formElement, _inputElement);
                this._toggleButtonState (_inputList, _buttonElement);
            });
        
        });
    }
    
    _hasInvalidInput = (_inputList) => {
        return _inputList.some((_inputElement) => {
            return !_inputElement.validity.valid || _inputElement.value === '';
        })
    }
    
    _toggleButtonState = (_inputList, _buttonElement) => {
        if (this._hasInvalidInput(_inputList)){
            _buttonElement.classList.add(this._inactiveButtonClass);
            _buttonElement.setAttribute('disabled', 'disabled');
        }
        else {
            _buttonElement.classList.remove(this._inactiveButtonClass);
            _buttonElement.removeAttribute('disabled');
        }
    }

    enableValidation = () => {
        const _formList = Array.from(document.querySelectorAll(this._formSelector));
        
        _formList.forEach((_formElement) => {
            this._setEventListeners(_formElement);
        })
    }


}