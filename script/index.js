const profileEditButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('#popup-edit');
const popupEditCloseButton = popupEdit.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const popupEditName = popupEdit.querySelector('.popup__input_type_name');
const profileEmployment = document.querySelector('.profile__employment');
const popupEditEmployment = popupEdit.querySelector('.popup__input_type_employment');

function openPopup (popup){
    setProfilePopupValues();
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', isEscapeKeydown);
    popup.addEventListener('click', isOverlay);
};

function closePopup (popup){
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', isEscapeKeydown);
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
    openPopup(popupEdit);
}
function closeProfilePopup(){
    closePopup(popupEdit);
}

function setProfilePopupValues (){
    popupEditName.value = profileName.textContent;
    popupEditEmployment.value = profileEmployment.textContent;
}

setProfilePopupValues();

profileEditButton.addEventListener('click', openProfilePopup);

popupEditCloseButton.addEventListener('click', closeProfilePopup);

const popupEditForm = popupEdit.querySelector('.popup__container')

function handleProfileFormSubmit (evt) {
    evt.preventDefault(); 

    profileName.textContent = popupEditName.value;
    profileEmployment.textContent = popupEditEmployment.value;
    closePopup(popupEdit);
};

popupEditForm.addEventListener('submit', handleProfileFormSubmit);

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];


const sectionCards = document.querySelector('.cards');


function createCard(item){
    const templateElement = document.querySelector('#template').content.firstElementChild.cloneNode(true);
    const templateButton = templateElement.querySelector('.cards__like-button')
    const templateName = templateElement.querySelector('.cards__name');
    const templateImg = templateElement.querySelector('.cards__place-img');
    templateName.textContent = item.name;
    templateImg.src = item.link;
    templateImg.alt = item.name;
    setDeleteButtonListener(templateElement);
    setImageClickListener(templateImg);
    setLikeButtonListener(templateButton);
    return templateElement;
}

function addNewCard(item) {
    const templateCard = createCard(item);
    sectionCards.prepend(templateCard);
}

initialCards.map(addNewCard);

const popupAdd = document.querySelector('#popup-add');
const popupAddName = popupAdd.querySelector('.popup__input_type_name');
const popupAddLink = popupAdd.querySelector('.popup__input_type_employment');
const profileAddButton = document.querySelector('.profile__add-button');
const popupAddCloseButton = popupAdd.querySelector('.popup__close-button');
const popupAddForm = popupAdd.querySelector('.popup__form');

function openCardPopup() {
    const popupAddSubmitButton = popupAdd.querySelector('.popup__submit');
    openPopup(popupAdd);
    popupAddSubmitButton.classList.add('popup__submit_disabled')
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

    addNewCard(newCard);

    closePopup(popupAdd);
    
    evt.currentTarget.reset();

})


function removeCard(event){
    const todo = event.currentTarget.closest('.cards__place');

    todo.remove();
}

function setDeleteButtonListener(item){
    item.querySelector('.cards__delete-button').addEventListener('click', removeCard);
}

const popupFullSize = document.querySelector('#popup-full-size');
const popupFullSizeImg = popupFullSize.querySelector('.popup__image');
const popupFullSizePlaceName = document.querySelector('.popup__place-name');
const popupFullSizeCloseButton = popupFullSize.querySelector('.popup__close-button')

function setImageClickListener (item) {
    item.addEventListener('click', openFullSizePopup);
}
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


function toggleLike(event){
    event.currentTarget.classList.toggle('cards__like-button_active');
}

function setLikeButtonListener(item){
    item.addEventListener('click', toggleLike);
}

