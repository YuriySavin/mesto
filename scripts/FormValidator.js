
export class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
    }
    _showError = (input) => {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(this._config.inputInvalidClass);
    };

    _hideError = (input) => {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = "";
        input.classList.remove(this._config.inputInvalidClass);
    };

    _checkInputValidity = (input) => {
        if (!input.validity.valid) {
            this._showError(input);
        } else {
            this._hideError(input);
        }
    };

    _setButtonState = (isActive) => {
        if (!isActive) {
            this._button.classList.add(this._config.buttonInvalidClass);
            this._button.disabled = true;
        } else {
            this._button.classList.remove(this._config.buttonInvalidClass);
            this._button.disabled = false;
        }
    };


    _disableValidation = () => {
        const inputList = this._form.querySelectorAll(this._config.inputSelector);
        inputList.forEach((input) => {
            this._hideError(input);
        });
    };

    _setEventListeners = () => {
        const inputsList = this._form.querySelectorAll(this._config.inputSelector);

        inputsList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._setButtonState(this._form.checkValidity());
            });
        });
    }

    enableValidation = () => {
        this._button = this._form.querySelector(this._config.submitButtonSelector);
        this._setEventListeners();
        this._disableValidation();
        this._setButtonState(this._form.checkValidity());

    }

}






