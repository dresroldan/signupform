const form = document.getElementById('form');
const firstNameEl = document.getElementById('firstname');
const lastNameEl = document.getElementById('lastname');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');

// form submit event listener

form.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();

  let firstName = firstNameEl.value.trim();
  let lastName = lastNameEl.value.trim();
  let email = emailEl.value.trim();
  let password = passwordEl.value.trim();

  if (firstName === '') {
    showError(firstNameEl, 'First Name is required');
  } else {
    showSuccess(firstNameEl);
  }

  if (lastName === '') {
    showError(lastNameEl, 'Last Name is required');
  } else {
    showSuccess(lastNameEl);
  }

  if (email === '') {
    showError(emailEl, 'Email Address cannot be blank.');
  } else if (!isEmailValid(email)) {
    showError(emailEl, 'Email is not valid');
  } else {
    showSuccess(emailEl);
  }

  if (password === '') {
    showError(passwordEl, 'Password cannot be blank.');
  } else if (!isPasswordSecure(password)) {
    showError(passwordEl, 'Password is not valid');
  } else {
    showSuccess(passwordEl);
  }
});

// showError() highlights the border of the input field and displays an error message if the input field is invalid:
const showError = (input, message) => {
  const formField = input.parentElement;

  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('span');
  error.textContent = message;
};

// showSuccess() removes the error class, adds the success class, and set the error message to blank.
const showSuccess = (input) => {
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('span');
  error.textContent = '';
};

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isPasswordSecure = (password) => {
  const re = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
  );
  return re.test(password);
};
