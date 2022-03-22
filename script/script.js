let buttonEdit = document.querySelector('.profile__edit-button');
let popupEdit = document.querySelector('#popup-edit');
let buttonClose = popupEdit.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let popupName = popupEdit.querySelector('.popup__name');
let profileEmployment = document.querySelector('.profile__employment');
let popupEmployment = popupEdit.querySelector('.popup__employment');


// Добавление исходного текста в поля попапа

popupName.value = profileName.textContent;

popupEmployment.value = profileEmployment.textContent;

// Закрытие/открытие попапа

function popupOpened (){
    popupEdit.classList.add('popup_opened');
};

buttonEdit.addEventListener('click', popupOpened);

function popupClosed (){
    popupEdit.classList.remove('popup_opened');
};

buttonClose.addEventListener('click', popupClosed);

// Находим форму в DOM

let popupForm = popupEdit.querySelector('.popup__container')

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.


    profileName.textContent = popupName.value;
    profileEmployment.textContent = popupEmployment.value;

    // Вставьте новые значения с помощью textContent
    popupEdit.classList.remove('popup_opened');
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupForm.addEventListener('submit', formSubmitHandler);

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


function addNewCard(item) {
    let templateElement = document.querySelector('#template').content.firstElementChild.cloneNode(true);
    let templateButton =templateElement.querySelector('.cards__like-button')
    let templateName = templateElement.querySelector('.cards__name');
    let templateImg = templateElement.querySelector('.cards__place-img');
    templateName.textContent = item.name;
    templateImg.src = item.link;
    templateImg.alt = item.name;
    setDeleteButtonListeners(templateElement);
    popupFullSizeOpen(templateImg);
    popupSetNameListener(templateElement);
    buttonLikeListener(templateButton);
    sectionCards.append(templateElement);
}


initialCards.map(addNewCard);

let popupAdd = document.querySelector('#popup-add');
let popupAddName = popupAdd.querySelector('.popup__name');
let popupAddLink = popupAdd.querySelector('.popup__employment');
let buttonAdd = document.querySelector('.profile__add-button');
let buttonAddClose = popupAdd.querySelector('.popup__close-button');
let popupAddForm = popupAdd.querySelector('.popup__form');


buttonAdd.addEventListener('click', () => {
    popupAdd.classList.add('popup_opened');
})
buttonAddClose.addEventListener('click', () => {
    popupAdd.classList.remove('popup_opened');
    popupAddForm.reset();
})

popupAddForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (!(Boolean(popupAddName.value) === false) && !(Boolean(popupAddLink.value) === false)){
        let newCard = {
        name: popupAddName.value,
        link: popupAddLink.value
    };
    addNewCard(newCard);

    popupAdd.classList.remove('popup_opened');
    
    evt.currentTarget.reset();
}
})

let buttonDelete = document.querySelector('.cards__delete-button');

function removeCard(event){
    const todo = event.currentTarget.closest('.cards__place');

    todo.remove();
}

function setDeleteButtonListeners(item){
    item.querySelector('.cards__delete-button').addEventListener('click', removeCard);
}

let popupFullSize = document.querySelector('#popup-full-size');
let popupFullSizeImg = popupFullSize.querySelector('.popup__image');
let popupPlaceName = document.querySelector('.popup__place-name');

function popupFullSizeOpen(item) {
    item.addEventListener('click', popupSetImage);
}
function popupSetImage(evt){
    popupFullSize.classList.add('popup_opened');
    popupFullSizeImg.src = evt.currentTarget.src;
}
function popupSetName(evt){
    popupPlaceName.textContent = evt.currentTarget.querySelector('.cards__name').textContent;
}
function popupSetNameListener(item){
    item.addEventListener('click', popupSetName);
}
function closeFullSizePopup(evt){
    const todo = evt.currentTarget.closest('.popup');
    todo.classList.remove('popup_opened');
}
function setCloseFullSizePopup(item){
    item.querySelector('.popup__close-button').addEventListener('click', closeFullSizePopup);
}
setCloseFullSizePopup(popupFullSize);

let likeButton = templateElement.querySelector('.cards__like-button');

function addLikeButtonActive(event){
    event.currentTarget.classList.toggle('cards__like-button_active');
}

function buttonLikeListener(item){
    item.addEventListener('click', addLikeButtonActive);
}

