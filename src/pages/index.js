import './index.css';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { profileAvatar, profileAvatarButton, popupAvatarId, popupAvatar, popupSubmitId ,templateContainer, cardsSelector, objectValidation, initialCards, profileEditButton, popupEdit, popupEditName, popupEditEmployment, popupAdd, profileAddButton, popupAddId, popupEditId, objectUserInfo, popupFullSizeId, baseUrl, headers} from "../utils.js";
import Section from "../components/Section.js";
import Api from '../components/Api';
import PopupWithSubmit from '../components/PopupWithSubmit';


const newUserInfo = new UserInfo (objectUserInfo)
const newApi = new Api(baseUrl, headers)

let userId;


Promise.all([newApi.getUserInfo('users/me'), newApi.getCardsInfo('cards')])
.then((res) => {
    const data = res[0];
    const items = res[1];

    userId = data._id;

    newUserInfo.setUserInfo(data);

    newSection.renderItems(items, userId);

})
.catch(err => {
    alert(err);
})


const newPopupWithSubmit = new PopupWithSubmit(popupSubmitId, {
    submitForm: (removeCard, element, id, close) => {
        newApi.deleteCard(`cards/${id}`)
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




function createCard (item, dataId) {
    const newCard = new Card ( item, dataId, {openFullSizePopup: (cardImgSrc, cardImgTxt) => {
        newFullSizePopup.open(cardImgSrc, cardImgTxt);
    },
    handleDeleteIconClick: (removeCard, element, id) => {
            newPopupWithSubmit.open(removeCard, element, id); 
    },
    handleLikeClick: (isLike, checkLikesNumber, id, deleteLike, addLike) => {
        if (isLike(item)){
            newApi.deleteCardLike(`cards/${id}/likes`)
            .then((res) => {
                deleteLike();
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
        else newApi.putCardLike(`cards/${id}/likes`)
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



const newSection = new Section ({renderer: (item, dataId) => {

    const newCardExemplar = createCard(item, dataId);

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

const newPopupWithFormEdit = new PopupWithForm(popupEditId, {submitForm: (inputList, close, renderLoading) => {

    newFormValidatorEdit.addDisabledAttribute();

    newApi.patchNewInfo('users/me', 
    {
        name: inputList.name,
        about: inputList.employment
    }
    )
    .then(obj => {
        newUserInfo.setUserInfo(obj);
    })
    .then(() => {
        close();
    })
    .catch(err => {
        alert(err)
    })
    .finally(() => {
        newFormValidatorEdit.removeDisabledAttribute;
        renderLoading(false);
    })
    
    
}})
newPopupWithFormEdit.setEventListeners();


const newPopupWithFormAdd = new PopupWithForm (popupAddId,  {submitForm: (inputList, close, renderLoading) => {

    newFormValidatorAdd.addDisabledAttribute();

    newApi.postNewCard('cards', 
    {
        name: inputList.place,
        link: inputList.url
    })
    .then(card => {
        const newCardExemplar = createCard(card, userId);
        newSection.addNewItem(newCardExemplar);
    })
    .then(() => {
        close();
    })
    .catch(err => {
        alert(err)
    })
    .finally(() => {
        newFormValidatorAdd.removeDisabledAttribute;
        renderLoading(false);
    })

}})
newPopupWithFormAdd.setEventListeners();

const newPopupWithFormAvatar = new PopupWithForm (popupAvatarId, {

    submitForm: (inputList, close, renderLoading) => {

        newFormValidatorAvatar.addDisabledAttribute();

        newApi.changeAvatar(`users/me/avatar`, 
        {
            avatar: inputList.link
        })
        .then(result => {
            profileAvatar.src = result.avatar;
            profileAvatar.alt = `${result.name} ${result.about}`
        })
        .then(() => {
            close();
        })
        .catch(err => {
            alert(err)
        })
        .finally(() => {
            newFormValidatorAvatar.removeDisabledAttribute();
            renderLoading(false);
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









