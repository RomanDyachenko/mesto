/*function enableValidation (item){
    const form = document.forms[`form-${item}`];
    
    form.addEventListener('submit', handleFormSubmit);
    form.addEventListener('input', handleFormInput);
}

function showInputError(){

}

function handleFormSubmit (evt){
    evt.preventDefault();

    const form = evt.currentTarget;
    const isValid = form.checkValidity;


}*/
const popupForm = document.querySelector(".popup__form");
const popupErrorMessage = document.querySelector('.popup__span-error');
const popupInput = popupForm.querySelector('.popup__input');

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
    toggleButtonState (inputList, buttonElement, obj);
    inputList.forEach((inputElement) => {
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
    errorClass : 'popup__span-error_type_active'
  });


