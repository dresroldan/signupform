const form = document.getElementById('form');
const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let firstName = fname.value.trim();
  let lastName = fname.value.trim();
  let email = fname.value.trim();
  let password = fname.value.trim();

  console.log(firstName);
});
