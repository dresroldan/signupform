const form = document.getElementById('form');
const firstNameEl = document.getElementById('firstname');
const lastNameEl = document.getElementById('lastname');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');

const checkFirstName = () => {
  let firstName = firstNameEl.value.trim();

  let valid = false;

  if (!isRequired(firstName)) {
    showError(firstNameEl, 'First name cannot be blank.');
  } else {
    showSuccess(firstNameEl);
    valid = true;
  }
  return valid;
};

const checkLastName = () => {
  let lastName = lastNameEl.value.trim();

  let valid = false;

  if (!isRequired(lastName)) {
    showError(lastNameEl, 'First name cannot be blank.');
  } else {
    showSuccess(lastNameEl);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let email = emailEl.value.trim();

  let valid = false;

  if (!isRequired(email)) {
    showError(emailEl, 'First name cannot be blank.');
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  let password = passwordEl.value.trim();

  let valid = false;

  if (!isRequired(password)) {
    showError(passwordEl, 'First name cannot be blank.');
  } else {
    showSuccess(passwordEl);
    valid = true;
  }
  return valid;
};

const isRequired = (value) => (value === '' ? false : true);

// showError() highlights the border of the input field and displays an error message if the input field is invalid:
const showError = (input, message) => {
  const formField = input.parentElement;
  const span = formField.querySelector('span');

  // show the error message
  span.innerText = message;
  span.classList.add('error-message');
  // add the error class
  input.classList.add('error');
};

// showSuccess() removes the error class, adds the success class, and set the error message to blank.
const showSuccess = (input) => {
  const formField = input.parentElement;

  // remove the error class
  input.classList.remove('error');
  input.classList.add('success');

  // hide the error message
  const error = formField.querySelector('span');
  error.textContent = '';
};

// form submit event listener

form.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();

  let isFirstNameValid = checkFirstName();
  let isLastNameValid = checkLastName();
  let isPasswordValid = checkPassword();
  let isEmailValid = checkEmail();
});
