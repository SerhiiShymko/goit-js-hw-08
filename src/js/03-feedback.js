import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const TIME_KEY = 'feedback-form-state';

const handleSuccess = () => {
  document.querySelector('form');
  // document
  //   .querySelector(".login-form")
  //   .insertAdjacentHTML("afterend", "<h2>Вхід успішний</h2>");
};

const handleError = () => {
  const errorText = document.createElement('p');
  errorText.style.color = 'red';
  errorText.textContent = alert('Всі поля повинні бути заповнені');
//   document.querySelector('.login-form').append(errorText);
};

const handleSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  if (email.value === '' || message.value === '') {
    handleError();

    return;
  }
  handleSuccess();

//   const userData = { email: email.value, message: message.value };
//   console.log(userData);

  event.currentTarget.reset();
};

form.addEventListener('submit', handleSubmit);