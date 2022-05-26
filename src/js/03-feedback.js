'use strict'

const formInputsEl = document.querySelector('.feedback-form')
const formData = {}

const onContactForm = event => {
    const {target} = event

    const value = target.value
    const name = target.name

    formData[name] = value

    localStorage.setItem('formData', JSON.stringify(formData))
}

formInputsEl.addEventListener('input', onContactForm)