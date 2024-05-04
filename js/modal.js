export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),
    inputWeight: document.querySelector('#weight'),
    inputHeight: document.querySelector('#height'),

    open(){
        this.wrapper.classList.add('open')
    },
    close(){
        this.wrapper.classList.remove('open')
    },
    cleanFocus(){
        const {inputHeight,inputWeight} = this

        inputHeight.value = ''
        inputWeight.value = ''
        inputWeight.focus()
    }
}

window.addEventListener('keydown', handleKeydown)

Modal.buttonClose.onclick = () => { 
    Modal.cleanFocus()
    Modal.close()
}

function handleKeydown(event) {
    if (event.key === 'Escape'){
        Modal.close()
        Modal.cleanFocus()
    }
}
