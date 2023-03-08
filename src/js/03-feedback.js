import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  const objData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);

  if (email.value === '' || message.value === '') {
    return alert(`Будь ласка, заповніть всі обов'язкові поля.`);
}

function onTextareaInput(evt) {
  formData[evt.target.name] = evt.target.value;
  const stringifiedData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, stringifiedData);
}

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage) {
    refs.textarea.value = savedMessage['message'] || '';
    refs.input.value = savedMessage['email'] || '';
  }
}
// localStorage.setItem(
//   '.feedback-form',
//   JSON.stringify({ name: 'mango', age: 2 })
// );
// console.log(localStorage);
// const savedData = localStorage.getItem('.feedback-form');
// console.log('savedData:', savedData);
// const parsedData = JSON.parse(savedData);
// console.log('parsedData:', parsedData);

// const handleSuccess = () => {
//   document.querySelector('form');
//   document
//     .querySelector('.login-form')
//     .insertAdjacentHTML('afterend', '<h2>Вхід успішний</h2>');
// };

// const handleError = () => {
//   const errorText = document.createElement('p');
//   errorText.style.color = 'red';
//   errorText.textContent = alert('Всі поля повинні бути заповнені');
//     document.querySelector('.login-form').append(errorText);
// };

// const handleSubmit = event => {
//   event.preventDefault();
//   const {
//     elements: { email, message },
//   } = event.currentTarget;
//   if (email.value === '' || message.value === '') {
//     handleError();

//     return;
//   }
//   handleSuccess();

//     const userData = { email: email.value, message: message.value };
//     console.log(userData);

//   event.currentTarget.reset();
// };

// form.addEventListener('submit', handleSubmit);
