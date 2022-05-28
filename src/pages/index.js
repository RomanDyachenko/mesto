import './index.css';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {profileAvatar, profileAvatarButton, popupAvatarId, popupAvatar, popupSubmitId ,templateContainer, cardsSelector, objectValidation, initialCards, profileEditButton, popupEdit, popupEditName, popupEditEmployment, popupAdd, profileAddButton, popupAddId, popupEditId, objectUserInfo, popupFullSizeId} from "./utils/utils.js";
import Section from "../components/Section.js";
import Api from '../components/Api';
import PopupWithSubmit from '../components/PopupWithSubmit';

const newUserInfo = new UserInfo (objectUserInfo)
const newApi = new Api()

newApi.getAllInfo('https://nomoreparties.co/v1/cohort-41/users/me', {
    authorization: '75fdb49e-7217-4f03-ae58-c16a91160381'
})
.then(res => {
    return res
})
.then(data => {
    newUserInfo.setUserInfo(data)

    newApi.getAllInfo('https://mesto.nomoreparties.co/v1/cohort-41/cards', {
    authorization: '75fdb49e-7217-4f03-ae58-c16a91160381'
})
.then(res => {
    return res;
})
.then(items => {
        newSection.renderItems(items, data)
    })
})
.catch(err => {
    alert(err);
})




const newPopupWithSubmit = new PopupWithSubmit(popupSubmitId, {
    submitForm: (element, id) => {
        newApi.deleteCard(`https://mesto.nomoreparties.co/v1/cohort-41/cards/${id}`, {
            authorization: '75fdb49e-7217-4f03-ae58-c16a91160381'
        })
        .then(() => {
            element.remove();
            element = null;
        })
        .catch(err => {
            alert (err)
        })
    }
});
newPopupWithSubmit.setEventListeners();




function createCard (item, data) {
    const newCard = new Card ( item, data, {openFullSizePopup: (cardImgSrc, cardImgTxt) => {
        newFullSizePopup.open(cardImgSrc, cardImgTxt);
    },
    handleDeleteIconClick: (element, id) => {

        newPopupWithSubmit.open(element, id);
        
    },
    handleLikeClick: (isLike, checkLikesNumber, id, likeButtonElement) => {
        if (isLike(item)){
            newApi.deleteCardLike(`https://mesto.nomoreparties.co/v1/cohort-41/cards/${id}/likes`, {
                authorization: '75fdb49e-7217-4f03-ae58-c16a91160381'
            }
            )
            .then((res) => {
                likeButtonElement.classList.remove('cards__like-button_active');
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
            likeButtonElement.classList.add('cards__like-button_active');
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

    newSection.addItem(newCardExemplar);
    
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
    .then(res => {
        return res;
    })
    .then(obj => {
        newUserInfo.setUserInfo(obj);
    })
    .finally(() => {
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
    .then(res => {
        return res
    })
    .then(card => {

        newApi.getAllInfo('https://nomoreparties.co/v1/cohort-41/users/me', {
        authorization: '75fdb49e-7217-4f03-ae58-c16a91160381'
        })
        .then(res => {
        return res;
        })
        .then(obj => {
            const newCardExemplar = createCard(card, obj);
            newSection.addItem(newCardExemplar);
        }

        )
        
    })
    .finally(() => {
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
        .then(res => {
            return res;
        })
        .then(result => {
            console.log(result)
            profileAvatar.src = result.avatar;
            profileAvatar.alt = `${result.name} ${result.about}`
            
        })
        .finally(() => {
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









