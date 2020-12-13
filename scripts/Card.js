import { makeImagePopup } from "./index.js";

export class Card{
    constructor(item, templateSelector) {
        this._title = item.name;
        this._image = item.link;
        this._templateSelector = templateSelector;
    }

    _getTemplate(){
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        const cardElementImage = this._element.querySelector(".element__image");
        const cardElementText = this._element.querySelector(".element-title-box__title");

        cardElementText.textContent = this._title;
        cardElementImage.src = this._image;
        cardElementImage.alt = cardElementText.textContent;

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector(".element__delete-button").addEventListener("click", event =>{
            event.target.closest(".element").remove()
        })

        this._element.querySelector('.element-title-box__heart-button').addEventListener('click', evt => {
            evt.target.classList.toggle('element-title-box__heart-button_active');
        });

        this._element.querySelector('.element__image').addEventListener('click', () => makeImagePopup(this._image, this._title));
    }
}