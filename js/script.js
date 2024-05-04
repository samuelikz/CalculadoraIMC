import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { CalculateIMC,notIsNumber } from './utils.js'

//variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = function(event) {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsoNotANumber = notIsNumber(weight) || notIsNumber(height)

    if(weightOrHeightIsoNotANumber){
        AlertError.open()
        Modal.cleanFocus()
        return;
    }

    AlertError.close()
    
    const result = CalculateIMC(weight,height)
    displayResultMessage(result)
}

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`
    
    Modal.open()
    Modal.message.innerText = message
}