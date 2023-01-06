import { Modal } from './modal.js'

export function calculateImc(weight, height, message) {
    const imc = (Number(weight.value) / ((Number(height.value) / 100) ** 2)).toFixed(2);
    message.innerHTML = `Seu IMC é de ${imc}`;
    clearInputs();
    Modal.open();
};

export function notANumber(value) {
    return isNaN(value) || value == ""
}

function clearInputs() {
    weight.value = '';
    height.value = '';
};