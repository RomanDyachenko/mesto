import './index.css';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { templateContainer, cardsContainer, objectValidation, initialCards, profileEditButton, popupEdit, popupEditCloseButton, profileName, popupEditName, profileEmployment, popupEditEmployment, popupEditForm, popupAdd, popupAddName, popupAddLink, profileAddButton, popupAddCloseButton, popupAddForm, popupFullSize, popupFullSizeImg, popupFullSizePlaceName, popupFullSizeCloseButton, popupAddId, popupEditId, objectUserInfo} from "../components/utils.js";
import Section from "../components/Section.js";

 
const newUserInfo = new UserInfo (objectUserInfo);

function createCard (item) {
    const newCard = new Card ( item, {openFullSizePopup: (element) => {
        const cardImg = element.querySelector('.cards__place-img');
        const cardTxt = element.querySelector('.cards__name');
        newFullSizePopup.open(cardImg, cardTxt);
    }}, templateContainer);
    
    return newCard.createCard();
}



const newSection = new Section ({data: initialCards, renderer: (item) => {

    const newCardExemplar = createCard(item);

    newSection.addItem(newCardExemplar);
    
}}, cardsContainer);


newSection.renderItems();

const newFormValidatorEdit = new FormValidator(objectValidation, popupEdit);
newFormValidatorEdit.enableValidation();

const newFormValidatorAdd = new FormValidator(objectValidation, popupAdd);
newFormValidatorAdd.enableValidation();


const newFullSizePopup = new PopupWithImage (popupFullSize, popupFullSizeImg, popupFullSizePlaceName);
newFullSizePopup.setEventListeners();

const newPopupWithFormEdit = new PopupWithForm(popupEdit, {submitForm: (inputList) => {
    newUserInfo.setUserInfo(inputList);
}})
newPopupWithFormEdit.setEventListeners();


const newPopupWithFormAdd = new PopupWithForm (popupAdd, {submitForm: (inputList) => {
    const cardList = {
        name: inputList.place,
        link: inputList.url
    }

    const newCardExemplar = createCard(cardList);

    newSection.addItem(newCardExemplar);
}})
newPopupWithFormAdd.setEventListeners();

const setProfilePopupValues = ({profileName, profileEmployment}) => {
    popupEditName.value = profileName;
    popupEditEmployment.value = profileEmployment
}

profileEditButton.addEventListener('click', () => {
    const userInfo = newUserInfo.getUserInfo();
    setProfilePopupValues(userInfo);
    newPopupWithFormEdit.open();
});



profileAddButton.addEventListener('click', () => {
    newFormValidatorAdd.toggleButtonState();
    newPopupWithFormAdd.open();
})









