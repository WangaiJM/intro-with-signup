const formControl = document.querySelectorAll(".form-control");
const firstName = document.getElementsByName("firstname")[0];
const lastName = document.getElementsByName("lastname")[0];
const email = document.getElementsByName("email")[0];
const password = document.getElementsByName("password")[0];
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  if (firstName.value === "" || firstName.value == null) {
    e.preventDefault();
    firstName.parentElement.classList.add("error");
  }
  if (lastName.value === "" || lastName.value == null) {
    e.preventDefault();
    lastName.parentElement.classList.add("error");
  }
  if (email.value === "" || email.value == null) {
    e.preventDefault();
    email.placeholder = "";
    email.placeholder = "email@example.com";
    email.parentElement.classList.add("error");
    email.parentElement.classList.add("placeholder");
  }
  if (password.value === "" || password.value == null) {
    e.preventDefault();
    password.parentElement.classList.add("error");
  }
});
