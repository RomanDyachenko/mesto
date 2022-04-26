import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { templateSelector, cardsSelector, objectValidation, initialCards, profileEditButton, popupEdit, popupEditCloseButton, profileName, popupEditName, profileEmployment, popupEditEmployment, popupEditForm, popupAdd, popupAddName, popupAddLink, profileAddButton, popupAddCloseButton, popupAddForm, popupFullSize, popupFullSizeImg, popupFullSizePlaceName, popupFullSizeCloseButton} from "./utils.js";
 
function openPopup (popup){
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', isEscapeKeydown);
    popup.addEventListener('mousedown', isOverlay);
};

function closePopup (popup){
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', isEscapeKeydown);
    popup.removeEventListener('click', isOverlay);
};

function isEscapeKeydown (evt){
    if (evt.key === 'Escape'){
        const currentPopup = document.querySelector('.popup_opened');
        closePopup(currentPopup);
    }
}

function isOverlay(evt){
    if (evt.target === evt.currentTarget){
        const currentPopup = document.querySelector('.popup_opened');
        closePopup(currentPopup);
    }
}

function openProfilePopup(){
    setProfilePopupValues();
    openPopup(popupEdit);
    const newFormValidator = new FormValidator(objectValidation);
    newFormValidator.enableValidation();
}
function closeProfilePopup(){
    closePopup(popupEdit);
}

function setProfilePopupValues (){
    popupEditName.value = profileName.textContent;
    popupEditEmployment.value = profileEmployment.textContent;
}

profileEditButton.addEventListener('click', openProfilePopup);

popupEditCloseButton.addEventListener('click', closeProfilePopup);

function handleProfileFormSubmit (evt) {
    evt.preventDefault(); 

    profileName.textContent = popupEditName.value;
    profileEmployment.textContent = popupEditEmployment.value;
    closePopup(popupEdit);
};

popupEditForm.addEventListener('submit', handleProfileFormSubmit);


initialCards.forEach((item)=>{
    const elementCard = new Card (item, openFullSizePopup, templateSelector);
    elementCard.addNewCard(cardsSelector);
});


function openCardPopup() {
    openPopup(popupAdd);
    const newFormValidator = new FormValidator(objectValidation);
    newFormValidator.enableValidation();
};

profileAddButton.addEventListener('click', openCardPopup);

function closeCardPopup(){
    closePopup(popupAdd);
}

popupAddCloseButton.addEventListener('click', closeCardPopup);


popupAddForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    
    const newCard = {
    name: popupAddName.value,
    link: popupAddLink.value
    };

    const elementCard = new Card (newCard, openFullSizePopup, templateSelector);
    
    elementCard.addNewCard(cardsSelector);
    
    closePopup(popupAdd);
    
    evt.currentTarget.reset();

})

function openFullSizePopup(evt){
    const item = evt.currentTarget.closest('.cards__place');
    popupFullSizeImg.src = item.querySelector('.cards__place-img').src;
    popupFullSizeImg.alt = item.querySelector('.cards__name').textContent;
    popupFullSizePlaceName.textContent = item.querySelector('.cards__name').textContent;
    openPopup(popupFullSize);
}

function closeFullSizePopup(){
    closePopup(popupFullSize);
}

popupFullSizeCloseButton.addEventListener('click', closeFullSizePopup);

