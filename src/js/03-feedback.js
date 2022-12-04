const throttle = require('lodash.throttle');

const STORAGE_KEY = 'feedback-form-state';

const formRef = {
  email: document.querySelector('.feedback-form').email,
  message: document.querySelector('.feedback-form').message,
  form: document.querySelector('.feedback-form'),
};
const formData = {};

formRef.email.addEventListener('input', throttle(onInput, 500));
formRef.message.addEventListener('input', throttle(onInput, 500));
formRef.form.addEventListener('submit', onSubmitForm);

function onInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formRef.message.textContent = evt.target.value;
}

function populateForm() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    console.log(savedMessage);
    console.log(JSON.parse(savedMessage));

    const { email, message } = JSON.parse(savedMessage);
    formRef.email.value = email;
    formRef.message.textContent = message;
  }
}
populateForm();
// console.log(formRef);
