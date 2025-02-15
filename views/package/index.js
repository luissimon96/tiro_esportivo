const username = document.getElementById('username')
const password = document.getElementById('password')
const check = document.getElementById('check')
const spinner = document.getElementById('spinner')
const button = document.getElementById('connect')

let username_valid = false
let password_valid = false

username.oninput = function () {
  const usernameRegex = /^\w{5,}$/;
  if (usernameRegex.test(this.value)) {
    username_valid = true;
  } else {
    username_valid = false;
  }
  form_valid(username_valid, password_valid);
}

password.oninput = function () {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (passwordRegex.test(this.value)) {
    password_valid = true;
  } else {
    password_valid = false;
  }
  form_valid(username_valid, password_valid);
}

function form_valid(username_valid, password_valid) {
  if (username_valid && password_valid) {
    spinner.style.display = 'none'
    check.style.display = 'block'

    button.classList.add('valid')
    check.classList.add('up')
  } else {
    spinner.style.display = 'block'
    check.style.display = 'none'
    button.classList.remove('valid')

    check.classList.remove('up')
  }
}
