import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};
const formData = {};

populateTextarea();

refs.form.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('submit', evt => {
  evt.preventDefault();
  evt.target.reset();
  const objectValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(objectValue);
  localStorage.removeItem(STORAGE_KEY);
});

function onTextareaInput(evt) {
  formData[evt.target.name] = evt.target.value;
  const stringData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, stringData);
}

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage === null) {
    return;
  }
  refs.textarea.value = savedMessage['message'] || '';
  refs.input.value = savedMessage['email'] || '';
}
