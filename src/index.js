import './pages/index.css';
import { Card } from "./script/Card.js";
import { FormValidator } from "./script/FormValidator.js";
import PopupWithImage from './script/PopupWithImage.js';
import PopupWithForm from "./script/PopupWithForm.js";
import UserInfo from "./script/UserInfo.js";
import { templateSelector, cardsContainer, objectValidation, initialCards, profileEditButton, popupEdit, popupEditCloseButton, profileName, popupEditName, profileEmployment, popupEditEmployment, popupEditForm, popupAdd, popupAddName, popupAddLink, profileAddButton, popupAddCloseButton, popupAddForm, popupFullSize, popupFullSizeImg, popupFullSizePlaceName, popupFullSizeCloseButton, popupAddId, popupEditId} from "./script/utils.js";
import Section from "./script/Section.js";

 
const newUserInfo = new UserInfo (profileName, profileEmployment);


const newSection = new Section ({data: initialCards, renderer: (item) => {

    const newCard = new Card ( item, {openFullSizePopup: (evt) => {
        const item = evt.currentTarget.closest('.cards__place');
        newFullSizePopup.open(item);
    }}, templateSelector);
    
    const createCard = newCard.createCard();

    newSection.addItem(createCard);
    
}}, cardsContainer);


newSection.renderItems();

const newFormValidatorEdit = new FormValidator(objectValidation, popupEditId);
newFormValidatorEdit.enableValidation();

const newFormValidatorAdd = new FormValidator(objectValidation, popupAddId);
newFormValidatorAdd.enableValidation();


const newFullSizePopup = new PopupWithImage (popupFullSize);

const newPopupWithFormEdit = new PopupWithForm(popupEdit, newFormValidatorEdit, {submitForm: (inputList) => {
    newUserInfo.setUserInfo(inputList);
}})


const newPopupWithFormAdd = new PopupWithForm (popupAdd, newFormValidatorAdd, {submitForm: (inputList) => {
    const cardList = {
        name: inputList.place,
        link: inputList.url
    }
    const newCard = new Card (cardList, {openFullSizePopup: (evt) => {
        const item = evt.currentTarget.closest('.cards__place');
        newFullSizePopup.open(item);
    }}, templateSelector);
    
    const elementCard = newCard.createCard();

    newSection.addItem(elementCard);
}})

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
    newPopupWithFormAdd.open();
})









