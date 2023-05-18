const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

const email = document.querySelector("#email");

email.addEventListener("input",()=>{
  console.log(validateEmail(email.value))
  if (!validateEmail(email.value)){
    email.setCustomValidity("Proszę podać poprawny adres e-mail.");
  }
  else{
    email.setCustomValidity("")
  }
})
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const password = document.querySelector("#password")
function validatePassword(password) {
  if (password.length < 8) {
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  if (!/[a-z]/.test(password)) {
    return false;
  }
  if (!/\d/.test(password)) {
    return false;
  }
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    return false;
  }
  else{
  return true;
  }
}