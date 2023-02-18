// const formEl = document.querySelector('.feedback-form');
// console.log('formEl');
// const handleFormSubmit = event => {
//     event.preventDefault()
//     console.log(event.target)
// }

// formEl.addEventListener('submit', handleFormSubmit);



// console.log('dsadasd');





























// import throttle from "lodash.throttle" 

// const form = document.querySelector('.feedback-form')
// const email = document.querySelector('input')
// const textarea = document.querySelector('textarea')

// form.addEventListener('submit', onFormSubmit)
// form.addEventListener('input', throttle(onFormInput, 500))

// populateTextarea();

// const userDate = {
//         email: '',
//         text: '',
//     }

// function onFormInput() {
//     userDate.email = email.value;
//     userDate.text = textarea.value;
//     localStorage.setItem('feedback-form-state', JSON.stringify(userDate))
// }

// function onFormSubmit(event) {
//     event.preventDefault();
//     localStorage.removeItem('feedback-form-state');
//     event.target.reset()
//     console.log(userDate)
// }

// function populateTextarea() {
//     const userDateObj = JSON.parse(localStorage.getItem('feedback-form-state'))
//     if (userDateObj) {
//         email.value = userDateObj.email
//         textarea.value = userDateObj.text
//         console.log(userDateObj)
//     }
// }


