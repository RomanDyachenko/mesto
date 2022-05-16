import './index.css';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { templateContainer, cardsContainer, objectValidation, initialCards, profileEditButton, popupEdit, popupEditName, popupEditEmployment, popupAdd, profileAddButton, popupAddId, popupEditId, objectUserInfo, popupFullSizeId} from "./utils/utils.js";
import Section from "../components/Section.js";

 
const newUserInfo = new UserInfo (objectUserInfo);

function createCard (item) {
    const newCard = new Card ( item, {openFullSizePopup: (cardImgSrc, cardImgTxt) => {
        newFullSizePopup.open(cardImgSrc, cardImgTxt);
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


const newFullSizePopup = new PopupWithImage (popupFullSizeId);
newFullSizePopup.setEventListeners();

const newPopupWithFormEdit = new PopupWithForm(popupEditId, {submitForm: (inputList) => {
    newUserInfo.setUserInfo(inputList);
}})
newPopupWithFormEdit.setEventListeners();


const newPopupWithFormAdd = new PopupWithForm (popupAddId, {submitForm: (inputList) => {
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









