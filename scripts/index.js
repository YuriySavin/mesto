let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');
let editButton = document.querySelector('.profile-info__edit-button');
let popupForm = document.querySelector('.popup__form');


function showPopup(){
    popup.classList.add('popup_opened');
    let nameInput = document.querySelector('.popup__input_type_name');
    let jobInput = document.querySelector('.popup__input_type_title');
    let profileName = document.querySelector('.profile-info__title');
    let profileJob = document.querySelector('.profile-info__subtitle');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function closePopup(){
    popup.classList.remove('popup_opened');
}

function submitForm(evt) {
    evt.preventDefault();
    let nameInput = document.querySelector('.popup__input_type_name');
    let jobInput = document.querySelector('.popup__input_type_title');
    let profileName = document.querySelector('.profile-info__title');
    let profileJob = document.querySelector('.profile-info__subtitle');
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}


editButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', submitForm);