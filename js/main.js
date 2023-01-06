import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateImc, notANumber } from './utils.js'

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = function (event) {
    event.preventDefault();
    let weightOrHeightIsNotANumber = notANumber(this.weight.value) || notANumber(this.height.value)
    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close()
    calculateImc(this.weight, this.height, Modal.message);
};

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()