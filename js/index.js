function onChangeEmail() {
  toggleButtonsDisable();
  toggleEmailErrors();
}

function onChangePassword() {
  toggleButtonsDisable();
  togglePasswordErrors();
}

function isEmailValid() {
  const email = document.getElementById("email").value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function isPassWordValid() {
  const password = document.getElementById('password').value;
  if (!password) {
    return false;
  }
  return true;
}
function validateEmail(email){
  return /\S+@\S+\.\S+/.test(email);
}

function toggleButtonsDisable(){
  // pegar o valor do campo e-mail e se o email não é vazio e se é um e-mail válido
  const emailValid = isEmailValid();
  // se verdadeiro, habilitar o botão recuperar senha
  document.getElementById('recover-password-button').disabled = !emailValid;

  const passwordValid = isPassWordValid();
  document.getElementById('login-button').disabled = !emailValid || !passwordValid;
  // se feito, então desabilitar o botão de recuperar senha
}

function toggleEmailErrors(){
  const email = document.getElementById('email').value;
  if (!email) {
    // Mostrar mensagem de erro
    document.getElementById('email-required-error').style.display = "block";
  } else {
    document.getElementById('email-required-error').style.display = "none";
  }
  if (validateEmail(email)) {
    document.getElementById('email-invalid-error').style.display = "none";
  } else {
    document.getElementById('email-invalid-error').style.display = "block";
  }
}

function togglePasswordErrors(){
  const password = document.getElementById('password').value;
  if (!password) {
    document.getElementById('password-required-error').style.display = "block";
  } else {
    document.getElementById('password-required-error').style.display = "none";
  }
}