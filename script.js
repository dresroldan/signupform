const form = document.getElementById('form');
const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

// form fields and submit event listener

form.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();

  let firstName = fname.value.trim();
  let lastName = fname.value.trim();
  let email = fname.value.trim();
  let password = fname.value.trim();

  if (firstName === '') {
    showError(fname, 'First Name cannot be empty');
  } else {
    showSuccess(fname);
  }
});

// showError() highlights the border of the input field and displays an error message if the input field is invalid:

const showError = (input, message) => {
  const formField = input.parentElement;
  const span = formField.querySelector('span');

  span.innerText = message;

  span.classList.add('error-message');
  input.classList.add('error');
};

// showSuccess() removes the error class, adds the success class, and set the error message to blank.

const showSuccess = (input) => {
  input.classList.remove('error');
  input.classList.add('success');
};
