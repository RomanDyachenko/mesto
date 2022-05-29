import './index.css';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {profileAvatar, profileAvatarButton, popupAvatarId, popupAvatar, popupSubmitId ,templateContainer, cardsSelector, objectValidation, initialCards, profileEditButton, popupEdit, popupEditName, popupEditEmployment, popupAdd, profileAddButton, popupAddId, popupEditId, objectUserInfo, popupFullSizeId} from "../utils.js";
import Section from "../components/Section.js";
import Api from '../components/Api';
import PopupWithSubmit from '../components/PopupWithSubmit';

const newUserInfo = new UserInfo (objectUserInfo)
const newApi = new Api()

let userInfo;

newApi.getUserInfo('https://nomoreparties.co/v1/cohort-41/users/me', {
    authorization: '75fdb49e-7217-4f03-ae58-c16a91160381'
})
.then(data => {
    userInfo = data
    newUserInfo.setUserInfo(data)
    newApi.getCardsInfo('https://mesto.nomoreparties.co/v1/cohort-41/cards', {
    authorization: '75fdb49e-7217-4f03-ae58-c16a91160381'
})
.then(items => {
        newSection.renderItems(items, data);
    })
})
.catch(err => {
    alert(err);
})




const newPopupWithSubmit = new PopupWithSubmit(popupSubmitId, {
    submitForm: (removeCard, element, id, close) => {
        
        newApi.deleteCard(`https://mesto.nomoreparties.co/v1/cohort-41/cards/${id}`, {
            authorization: '75fdb49e-7217-4f03-ae58-c16a91160381'
        })
        .then(() => {
            removeCard(element);
        })
        .then(()=> {
            close();
        })
        .catch(err => {
            alert (err)
        })
    }
});
newPopupWithSubmit.setEventListeners();




function createCard (item, data) {
    const newCard = new Card ( item, data._id, {openFullSizePopup: (cardImgSrc, cardImgTxt) => {
        newFullSizePopup.open(cardImgSrc, cardImgTxt);
    },
    handleDeleteIconClick: (removeCard, element, id) => {
            newPopupWithSubmit.open(removeCard, element, id); 
    },
    handleLikeClick: (isLike, checkLikesNumber, id, deleteLike, addLike) => {
        if (isLike(item)){
            newApi.deleteCardLike(`https://mesto.nomoreparties.co/v1/cohort-41/cards/${id}/likes`, {
                authorization: '75fdb49e-7217-4f03-ae58-c16a91160381'
            }
            )
            .then((res) => {
                deleteLike();
                checkLikesNumber(res);
                return res;
            })
            .then(result => {
                return item = result;
            })
            .catch(err => {
                alert (err)
            })
            
        }
        else newApi.putCardLike(`https://mesto.nomoreparties.co/v1/cohort-41/cards/${id}/likes`, {
            authorization: '75fdb49e-7217-4f03-ae58-c16a91160381'
        })
        .then((res) => {
            addLike();
            checkLikesNumber(res);
            return res
        })
        .then(result => {
            return item = result;
        })
        .catch(err => {
            alert (err)
        })
        
        
    }
    }, templateContainer);
    
    return newCard.createCard();
    
}



const newSection = new Section ({renderer: (item, data) => {

    const newCardExemplar = createCard(item, data);

    newSection.addItems(newCardExemplar);
    
}}, cardsSelector);





const newFormValidatorEdit = new FormValidator(objectValidation, popupEdit);
newFormValidatorEdit.enableValidation();

const newFormValidatorAdd = new FormValidator(objectValidation, popupAdd);
newFormValidatorAdd.enableValidation();

const newFormValidatorAvatar = new FormValidator(objectValidation, popupAvatar);
newFormValidatorAvatar.enableValidation();


const newFullSizePopup = new PopupWithImage (popupFullSizeId);
newFullSizePopup.setEventListeners();

const newPopupWithFormEdit = new PopupWithForm(popupEditId, {submitForm: (inputList, renderLoading, close) => {
    newApi.patchNewInfo('https://mesto.nomoreparties.co/v1/cohort-41/users/me', {
        authorization: '75fdb49e-7217-4f03-ae58-c16a91160381',
        'Content-Type': 'application/json'
    },
    {
        name: inputList.name,
        about: inputList.employment
    }
    )
    .then(obj => {
        newUserInfo.setUserInfo(obj);
    })
    .then(() => {
        renderLoading(false);
        close();
    })
    .catch(err => {
        alert(err)
    })
    
    
}})
newPopupWithFormEdit.setEventListeners();


const newPopupWithFormAdd = new PopupWithForm (popupAddId, {submitForm: (inputList, renderLoading, close) => {
    newApi.postNewCard('https://mesto.nomoreparties.co/v1/cohort-41/cards', {
        authorization: '75fdb49e-7217-4f03-ae58-c16a91160381',
        'Content-Type': 'application/json'
    },
    {
        name: inputList.place,
        link: inputList.url
    })
    .then(card => {
        console.log(userId)
        const newCardExemplar = createCard(card, userInfo);
        newSection.addNewItem(newCardExemplar);
        
    })
    .then(() => {
        renderLoading(false);
        close();
    })
    .catch(err => {
        alert (err)
    })

}})
newPopupWithFormAdd.setEventListeners();

const newPopupWithFormAvatar = new PopupWithForm (popupAvatarId, {
    submitForm: (inputList, renderLoading, close) => {
        newApi.changeAvatar(`https://mesto.nomoreparties.co/v1/cohort-41/users/me/avatar`, {
            authorization: '75fdb49e-7217-4f03-ae58-c16a91160381',
            'Content-Type': 'application/json'
        },
        {
            avatar: inputList.link
        })
        .then(result => {
            console.log(result)
            profileAvatar.src = result.avatar;
            profileAvatar.alt = `${result.name} ${result.about}`
            
        })
        .then(() => {
            renderLoading(false);
            close();
        })
        .catch(err => {
            alert (err)
        })
    }
})
newPopupWithFormAvatar.setEventListeners();

profileAvatarButton.addEventListener('click', () => {
    newPopupWithFormAvatar.open()
})


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









