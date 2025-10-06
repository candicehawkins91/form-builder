document.getElementById("registerForm").onsubmit = function(event) {
  event.preventDefault();
}

const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const email = document.getElementById("email").value;
const birthdate = document.getElementById("birthdate").value;
const password = document.getElementById("password").value;