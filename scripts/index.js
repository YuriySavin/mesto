const popup = document.querySelector('.popup_type_edit');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile-info__edit-button');
const popupForm = document.querySelector('.popup__form');
const popupFormAddCard = document.querySelector('.popup__form_type_add-card');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_title');
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');
const profileName = document.querySelector('.profile-info__title');
const profileJob = document.querySelector('.profile-info__subtitle');
const popupAddCardCloseButton = document.querySelector('.popup__close_type_add-card');
const popupImageCloseButton = document.querySelector('.popup__close_type_image');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupImage = document.querySelector(".popup_type_image");
const addButton = document.querySelector('.profile__add-button')
const elements = document.querySelector(".elements");
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


function showPopup(somePopup){
    somePopup.classList.add('popup_opened');
}


function closePopup(somePopup){
    somePopup.classList.remove('popup_opened');
}

function openProfilePopup(somePopup){
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    showPopup(somePopup);
}

function submitForm(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

function addCardForm(evt) {
    evt.preventDefault();
    const card = document.querySelector(".card-template").content.cloneNode(true);
    card.querySelector(".element-title-box__title").textContent = placeInput.value;
    card.querySelector(".element__image").src = linkInput.value;
    card.querySelector(".element__image").alt = placeInput.value;

    card.querySelector(".element__delete-button").addEventListener("click", event =>{
        const todo = event.target.closest(".element");
        if (todo) {
            todo.remove()
        }
    })

    card.querySelector('.element-title-box__heart-button').addEventListener('click', evt => {
        evt.target.classList.toggle('element-title-box__heart-button_active');
        console.log('changeeee');
    });
    const link = linkInput.value;
    const place = placeInput.value;
    card.querySelector('.element__image').addEventListener('click', () => makeImagePopup(link, place));
    elements.prepend(card);

    popupAddCard.classList.remove('popup_opened');
    popupFormAddCard.reset();
}

function makeImagePopup(link, text){
    console.log(link);
    console.log(text);
    popupImage.querySelector('.popup__image').src = link;
    popupImage.querySelector('.popup__image-text').textContent = text;
    showPopup(popupImage);
}

editButton.addEventListener('click', () => openProfilePopup(popup));
popupCloseButton.addEventListener('click', () =>closePopup(popup));
popupAddCardCloseButton.addEventListener('click', () => closePopup(popupAddCard));
popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));
popupForm.addEventListener('submit', submitForm);
popupAddCard.addEventListener('submit', addCardForm);
addButton.addEventListener('click', () => showPopup(popupAddCard));


function createCard (initialCards) {
    const card = document.querySelector(".card-template").content.cloneNode(true);
    card.querySelector(".element-title-box__title").textContent = initialCards.name;
    card.querySelector(".element__image").src = initialCards.link;
    card.querySelector(".element__image").alt = initialCards.name;

    card.querySelector(".element__delete-button").addEventListener("click", event =>{
        const todo = event.target.closest(".element");
        if (todo) {
            todo.remove()
        }
        })

    card.querySelector('.element-title-box__heart-button').addEventListener('click', evt => {
        evt.target.classList.toggle('element-title-box__heart-button_active');
    });

    card.querySelector('.element__image').addEventListener('click', () => makeImagePopup(initialCards.link, initialCards.name));

    elements.append(card);



}
initialCards.forEach(createCard);

