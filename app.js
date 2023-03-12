const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const output = document.querySelector("#password-match");
const button = document.querySelector(".singup-button");
let matching;

function checkPassword() {
  if (password.value === passwordConfirm.value) {
    output.textContent = "Passwords do match!";
    output.className = "good";
    button.disabled = false;
  } else {
    output.textContent = "Passwords don't match";
    output.className = "bad";
    button.disabled = true;
  }
}

password.addEventListener("keyup", () => {
  if (passwordConfirm.value) {
    checkPassword();
  }
});

passwordConfirm.addEventListener("keyup", () => {
  if (password.value) {
    checkPassword();
  }
});
