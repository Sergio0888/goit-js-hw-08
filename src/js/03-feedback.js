'use strict'
import throttle from 'lodash.throttle';

const formInputsEl = document.querySelector('.feedback-form')
const formData = {}

const onContactForm = event => {
    const {target} = event

    const value = target.value
    const name = target.name

    formData[name] = value

    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

const onCheckedForm = form => {
    const formDataLocal = JSON.parse(localStorage.getItem("feedback-form-state"))
    const formElements = form.elements
    console.log(formDataLocal);

    for (const key in formDataLocal) {
        if(formDataLocal.hasOwnProperty(key)) {
            formElements[key].value = formDataLocal[key]
        }
    }
}

onCheckedForm(formInputsEl)

const onSubmitForm = event => {
    event.preventDefault()

    localStorage.removeItem("feedback-form-state")
    event.currentTarget.reset()
}

formInputsEl.addEventListener('input', throttle(onContactForm, 500))
formInputsEl.addEventListener('submit', onSubmitForm)