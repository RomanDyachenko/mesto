let buttonEdit = document.querySelector('.profile__edit-button');
let popUp = document.querySelector('.popup');
let buttonClose = popUp.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let popupName = popUp.querySelector('.popup__name');
let profileEmployment = document.querySelector('.profile__employment');
let popupEmployment = popUp.querySelector('.popup__employment');

// Добавление исходного текста в поля попапа

popupName.value = profileName.textContent;

popupEmployment.value = profileEmployment.textContent;

// Закрытие/открытие попапа

function popupOpened (){
    popUp.classList.add('popup_opened');
};

buttonEdit.addEventListener('click', popupOpened);

function popupClosed (){
    popUp.classList.remove('popup_opened');
};

buttonClose.addEventListener('click', popupClosed);

// Находим форму в DOM

let popupForm = popUp.querySelector('.popup__container')

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.


    profileName.textContent = popupName.value;
    profileEmployment.textContent = popupEmployment.value;

    // Вставьте новые значения с помощью textContent
    popUp.classList.remove('popup_opened');
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupForm.addEventListener('submit', formSubmitHandler);
