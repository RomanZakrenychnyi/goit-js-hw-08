const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[name="email"]');
const textAreaEl = document.querySelector('textarea[name="message"]');

const LS_KEY = 'feedback-form-state'


const checkedLs = () => {
    if (localStorage.getItem(LS_KEY)) {
        const parsedLs = JSON.parse(localStorage.getItem(LS_KEY));
        const { email, message } = parsedLs;
        emailEl.value = email;
        textAreaEl.value = message;
    }
}

checkedLs(formEl)


const handleFormSubmit = (event) => {
    event.preventDefault();

    const { email, message } = event.target.elements;
    const mail = email.value;
    const text = message.value;

    const userData = {
        email: mail,
        message: text,
    }

    console.log(userData);
    event.target.reset();
    localStorage.removeItem(LS_KEY);
}


const handleInputLs = ({ target }) => {
    const userData = {
        email: target.form[0].value,
        message: target.form[1].value,
    }

    const jsonUserData = JSON.stringify(userData)

    localStorage.setItem(LS_KEY, jsonUserData);
}

const throttledFunction = throttle(handleInputLs, 500);

formEl.addEventListener('submit', handleFormSubmit);
formEl.addEventListener('input', throttledFunction);