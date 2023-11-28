import throttle from "lodash.throttle";

const email = document.querySelector("input[name = email]");
const message = document.querySelector("textarea[name = message]");
const form = document.querySelector(".feedback-form");
const feedback = { email, message };

function formSaver() {
    feedback.email = email.value;
    feedback.message = message.value;    
    localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}

form.addEventListener('input', throttle(formSaver, 500));

form.addEventListener('submit', (event) => {
    event.preventDefault();   
    console.log(feedback);
    localStorage.removeItem('feedback-form-state');
    email.value = null;
    message.value = null;
    feedback.email = null;
    feedback.message = null;
})

window.addEventListener('DOMContentLoaded', () => {
    try {
        email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
        message.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
    } catch (error) {
        console.log(error.name);
        console.log(error.value);
    }    
})