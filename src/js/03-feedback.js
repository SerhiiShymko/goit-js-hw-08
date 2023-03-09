import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};
const formData = {};

refs.form.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  const objectValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(objectValue);
  localStorage.removeItem(STORAGE_KEY);

  if (objectValue === null) {
    return alert(`Будь ласка, заповніть всі обов'язкові поля.`);
  }
}
function onTextareaInput(evt) {
  formData[evt.target.name] = evt.target.value;
  const stringData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, stringData);
}
