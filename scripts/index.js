const cardTemp = document.querySelector(".card-template");
const popupProfile = document.querySelector('.popup_type_edit');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile-info__edit-button');
const popupProfileForm = document.querySelector('.popup__form_profile');
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
const escCode = 27;
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



function showPopup(somePopup) {
    somePopup.classList.add('popup_opened');
    document.addEventListener('keydown', escClose);
    somePopup.addEventListener('click', closeByOverlayClick);
}

function closeByOverlayClick (evt){
    if (evt.target.classList.contains('popup')) {
        closePopup(document.querySelector('.popup_opened'));
    }
}

function escClose (evt){
    if (evt.keyCode === escCode) {
        closePopup(document.querySelector('.popup_opened'));
    }
}

function closePopup(somePopup){
    somePopup.classList.remove('popup_opened');
    somePopup.removeEventListener('click', closeByOverlayClick);
    document.removeEventListener('keydown', escClose);
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
    closePopup(popupProfile);
}

function makeImagePopup(link, text){
    const currentImage = popupImage.querySelector('.popup__image');
    currentImage.src = link;
    currentImage.alt = text;
    popupImage.querySelector('.popup__image-text').textContent = text;
    showPopup(popupImage);
}

editButton.addEventListener('click', () => openProfilePopup(popupProfile));
popupCloseButton.addEventListener('click', () =>closePopup(popupProfile));
popupAddCardCloseButton.addEventListener('click', () => closePopup(popupAddCard));
popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));
popupProfileForm.addEventListener('submit', submitForm);
popupAddCard.addEventListener('submit', prependCard);
addButton.addEventListener('click', () => {
    showPopup(popupAddCard);
    popupFormAddCard.reset();
    popupAddCard.querySelector(".popup__submit").classList.add('popup__submit_invalid');
    });


function createCard (initialCards) {
    const card = cardTemp.content.cloneNode(true);
    const elementTitleBoxTitle = card.querySelector(".element-title-box__title");
    const elementImage = card.querySelector(".element__image");
    elementTitleBoxTitle.textContent = initialCards.name;
    elementImage.src = initialCards.link;
    elementImage.alt = initialCards.name;

    card.querySelector(".element__delete-button").addEventListener("click", event =>{
        event.target.closest(".element").remove()
        })

    card.querySelector('.element-title-box__heart-button').addEventListener('click', evt => {
        evt.target.classList.toggle('element-title-box__heart-button_active');
    });

    card.querySelector('.element__image').addEventListener('click', () => makeImagePopup(initialCards.link, initialCards.name));


    return card;
}

initialCards.forEach(function (cardData){
    const cardElement = createCard(cardData);
    elements.append(cardElement);
});

function prependCard(evt) {
    evt.preventDefault();
    const cardData = {
        name: placeInput.value,
        link: linkInput.value
    }
    const cardElement = createCard(cardData);
    elements.prepend(cardElement);
    closePopup(popupAddCard);
}

