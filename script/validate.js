function showInputError (formElement, inputElement, errorMessage, obj){
    errorElement = formElement.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.add(obj.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(obj.errorClass);
}

function hideInputError(formElement, inputElement, obj){
    errorElement = formElement.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.remove(obj.inputErrorClass);
    errorElement.classList.remove(obj.errorClass);
    errorElement.textContent = '';
}

function checkInputValidity (inputElement, formElement, obj){
    if(!inputElement.validity.valid){
        showInputError(formElement, inputElement, inputElement.validationMessage, obj)
    }
    else {
        hideInputError(formElement, inputElement, obj);
    }
}

function setEventListeners(formElement, obj){
    const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
    const buttonElement = formElement.querySelector(obj.submitButtonSelector);
    const buttonEdit = document.querySelector(obj.editButtonSelector);
    const buttonAdd = document.querySelector(obj.addButtonSelector);
    inputList.forEach((inputElement) => {
        buttonEdit.addEventListener('click', () => {
            toggleButtonState (inputList, buttonElement, obj);
        });
        buttonAdd.addEventListener('click', () => {
            toggleButtonState (inputList, buttonElement, obj);
        });
        inputElement.addEventListener('input', () => {
            checkInputValidity(inputElement, formElement, obj);
            toggleButtonState (inputList, buttonElement, obj);
        });
    
    });
}
function enableValidation (obj){
    const formList = Array.from(document.querySelectorAll(obj.formSelector));

    formList.forEach((formElement) => {
        setEventListeners(formElement, obj);
    })
}

function hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
        inputElement.preventDefault;
        return !inputElement.validity.valid || inputElement.value === '';
    })
}

function toggleButtonState (inputList, buttonElement, obj){
    if (hasInvalidInput(inputList)){
        buttonElement.classList.add(obj.inactiveButtonClass);
        buttonElement.setAttribute('disabled', 'disabled');
    }
    else {
        buttonElement.classList.remove(obj.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}

enableValidation({
    formSelector : '.popup__form',
    inputSelector : '.popup__input',
    submitButtonSelector : '.popup__submit',
    inactiveButtonClass : 'popup__submit_disabled',
    inputErrorClass : 'popup__input_type_error',
    errorClass : 'popup__span-error_type_active',
    editButtonSelector : '.profile__edit-button',
    addButtonSelector : '.profile__add-button'
  });


