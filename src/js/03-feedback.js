import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formRef = {
  email: document.querySelector('.feedback-form').email,
  message: document.querySelector('.feedback-form').message,
  form: document.querySelector('.feedback-form'),
};
let formData;

formRef.form.addEventListener('input', throttle(onInput, 500));
formRef.form.addEventListener('submit', onSubmitForm);

function onInput(e) {
  formData = {
    email: formRef.email.value,
    message: formRef.message.value,
  };
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
    // console.log(savedMessage);
    console.log(JSON.parse(savedMessage));

    const { email, message } = JSON.parse(savedMessage);
    formRef.email.value = email;
    formRef.message.textContent = message;
  }
}
populateForm();
// console.log(formRef);
