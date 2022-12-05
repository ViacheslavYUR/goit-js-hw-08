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
// ==========================================================================================================

// import throttle from 'lodash.throttle';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   email: document.querySelector('.feedback-form').email,
//   message: document.querySelector('.feedback-form').message,
// };

// // Записываем значения в локальное хранилище =====================================================

// let FeedbackData;

// const saveFeedbackDataToLocalStorage = e => {
//   FeedbackData = {
//     email: refs.email.value,
//     message: refs.message.value,
//   };

//   localStorage.setItem('feedback-form-state', JSON.stringify(FeedbackData));
// };

// refs.form.addEventListener(
//   'input',
//   throttle(saveFeedbackDataToLocalStorage, 500)
// );

// // Возвращаем значения в форму =====================================================

// if (localStorage.getItem('feedback-form-state')) {
//   refs.email.value = JSON.parse(
//     localStorage.getItem('feedback-form-state')
//   ).email;
//   refs.message.value = JSON.parse(
//     localStorage.getItem('feedback-form-state')
//   ).message;
// }

// // Обрабатываем событие Submit =====================================================

// const onSubmitFormEvent = e => {
//   event.preventDefault();

//   if (localStorage.getItem('feedback-form-state')) {
//     localStorage.removeItem('feedback-form-state');
//   }

//   if (refs.email.value && refs.message.value) {
//     FeedbackData = {
//       email: refs.email.value,
//       message: refs.message.value,
//     };
//   } else {
//     window.alert('The form is not completed! You need to fill it!');
//   }

//   console.log(FeedbackData);

//   refs.form.reset();
// };

// refs.form.addEventListener('submit', onSubmitFormEvent);
