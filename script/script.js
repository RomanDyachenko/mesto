const profileEditButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('#popup-edit');
const popupEditCloseButton = popupEdit.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const popupEditName = popupEdit.querySelector('.popup__name');
const profileEmployment = document.querySelector('.profile__employment');
const popupEditEmployment = popupEdit.querySelector('.popup__employment');


function openPopup (popup){
    popup.classList.add('popup_opened');
};

function closePopup (popup){
    popup.classList.remove('popup_opened');
};

function setListenerEditOpen(){
    popupEditName.value = profileName.textContent;
    popupEmployment.value = profileEmployment.textContent;
    openPEditopup(popupEdit);
}
function setListenerEditClose(){
    closePopup(popupEdit);
}

profileEditButton.addEventListener('click', setListenerEditOpen);

popupEditCloseButton.addEventListener('click', setListenerEditClose);

const popupEditForm = popupEdit.querySelector('.popup__container')

function handleProfileFormSubmit (evt) {
    evt.preventDefault(); 

    profileName.textContent = popupEditName.value;
    profileEmployment.textContent = popupEmployment.valEditue;
    popupEdit.classList.remove('popup_opened');
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
const popupAddName = popupAdd.querySelector('.popup__name');
const popupAddLink = popupAdd.querySelector('.popup__employment');
const profileAddButton = document.querySelector('.profile__add-button');
const popupAddCloseButton = popupAdd.querySelector('.popup__close-button');
const popupAddForm = popupAdd.querySelector('.popup__form');

function setListenerAddOpen() {
    openPopup(popupAdd);
};

profileAddButton.addEventListener('click', setListenerAddOpen);

function setListenerAddClose(){
    closePopup(popupAdd);
}

popupAddCloseButton.addEventListener('click', setListenerAddClose);

popupAddForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (!(Boolean(popupAddName.value) === false) && !(Boolean(popupAddLink.value) === false)){
        const newCard = {
        name: popupAddName.value,
        link: popupAddLink.value
    };
    addNewCard(newCard);

    popupAdd.classList.remove('popup_opened');
    
    evt.currentTarget.reset();
}
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
    item.addEventListener('click', setListenerFullSizeOpen);
}
function setListenerFullSizeOpen(evt){
    const item = evt.currentTarget.closest('.cards__place');
    popupFullSizeImg.src = item.querySelector('.cards__place-img').src;
    popupFullSizeImg.alt = item.querySelector('.cards__name').textContent;
    popupFullSizePlaceName.textContent = item.querySelector('.cards__name').textContent;
    openPopup(popupFullSize);
}

function setListenerFullSizeClose(){
    closePopup(popupFullSize);
}

popupFullSizeCloseButton.addEventListener('click', setListenerFullSizeClose);


function toggleLike(event){
    event.currentTarget.classList.toggle('cards__like-button_active');
}

function setLikeButtonListener(item){
    item.addEventListener('click', toggleLike);
}

