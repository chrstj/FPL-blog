const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 5) === false) {
        nameError.style.display = "block";
    } 

    if (validateEmail(email.value) === false) {
        emailError.style.display = "block";
    } 

    if (checkLength(subject.value, 15) === false) {
        subjectError.style.display = "block";
    } 

    if (checkLength(message.value, 25) === false) {
        messageError.style.display = "block";
    } 
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}