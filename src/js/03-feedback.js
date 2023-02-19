// import throttle from "./lodash.js" 

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[name="email"]');
const textAreaEl = document.querySelector('textarea[name="message"]');


const checkedLs = () => {
    if (localStorage.getItem('feedback-form-state') || localStorage.getItem('feedback-form-state') !== null) {
        const parsedLs = JSON.parse(localStorage.getItem('feedback-form-state'));
        const { email, message } = parsedLs;
        emailEl.value = email;
        textAreaEl.value = message;
    }
}

checkedLs()


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
    localStorage.removeItem('feedback-form-state');
}


const handleInputLs = ({ target }) => {
    console.dir(target);
    const userData = {
        email: target.form[0].value,
        message: target.form[1].value,
    }

    const jsonUserData = JSON.stringify(userData)

    localStorage.setItem('feedback-form-state', jsonUserData);
}

// const throttledFunction = throttle(handleInputLs, 500);

formEl.addEventListener('submit', handleFormSubmit);
formEl.addEventListener('input', handleInputLs);