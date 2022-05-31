function onChangeEmail() {
  toggleButtonsDisable();
  toggleEmailErrors();
}

function onChangePassword() {
  toggleButtonsDisable();
  togglePasswordErrors();
}

function isEmailValid() {
  const email = form.email().value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function isPassWordValid() {
  const password = form.password().value;
  if (!password) {
    return false;
  }
  return true;
}

function toggleButtonsDisable(){
  // pegar o valor do campo e-mail e se o email não é vazio e se é um e-mail válido
  const emailValid = isEmailValid();
  // se verdadeiro, habilitar o botão recuperar senha
  form.recoverPassword().disabled = !emailValid;

  const passwordValid = isPassWordValid();
  form.loginButton().disabled = !emailValid || !passwordValid;
  // se feito, então desabilitar o botão de recuperar senha
}

function toggleEmailErrors(){
  const email = form.email().value;
  form.emailRequiredError().style.display = email ? "none" : "block";
 
  form.emailInvalidError().style.display = validateEmail(email) ? "none" :"block";
}

function togglePasswordErrors(){
  const password = form.password().value;
  form.passwordRequiredError().style.display = password ? "none" : "block";
 
}
const form = {
  email: () => document.getElementById('email'),
  emailInvalidError: () => document.getElementById('email-invalid-error'),
  emailRequiredError: () => document.getElementById('email-required-error'),
  loginButton: () => document.getElementById('login-button'),
  password: () => document.getElementById('password'),
  passwordRequiredError: () => document.getElementById('password-required-error'),
  recoverPassword: () =>document.getElementById('recover-password-button')
}