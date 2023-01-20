import throttle from "lodash.throttle" 

const form = document.querySelector('.feedback-form')
const email = document.querySelector('input')
const textarea = document.querySelector('textarea')

form.addEventListener('submit', onFormSubmit)
form.addEventListener('input', throttle(onFormInput, 500))

populateTextarea();

function onFormInput() {
    const userDate = {
        email: email.value,
        text: textarea.value,
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(userDate))
}

function onFormSubmit(event) {
    event.preventDefault();
    localStorage.removeItem('feedback-form-state');
    event.target.reset()
}

function populateTextarea() {
    const userDateObj = JSON.parse(localStorage.getItem('feedback-form-state'))
    if (userDateObj) {
        email.value = userDateObj.email
        textarea.value = userDateObj.text
        console.log(userDateObj)
    }
}


