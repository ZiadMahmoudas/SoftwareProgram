let passSignup = document.getElementById("pass1");
let btnLoginIN = document.getElementById("LoginForm");
let btneye = document.getElementById("eye")
let btneye1 = document.getElementById("eye1")
let mail = document.getElementById("mail")
let password = document.getElementById("password")
let emailLogin = document.getElementById("Email")
let passLogin = document.getElementById("pass");
const regEmail = /\w+@(gmail|mail|outlook).(com|net|org)$/i;
const regpassword = /^\w{4,}$/i;
const regname= /^[a-zA-Z]{2,}$/i;
const regid= /^[0-9]{1,}$/i;
let btnSignUp = document.getElementById("signup");
let names = document.getElementById("name");
let id = document.getElementById("id");
let emailSignup = document.getElementById("email");
const errorname = document.getElementById("errorname");
const errorid = document.getElementById("errorid");
const erroremail = document.getElementById("erroremail");
const errorpass = document.getElementById("errorpass");

document.querySelectorAll(".lnk-toggler").forEach(btn => {
  btn.addEventListener("click", function () {
    const panelSelector = btn.getAttribute("data-panel");
    document.querySelectorAll(".authfy-panel").forEach(panel => panel.classList.remove("active"));
    document.querySelector(panelSelector).classList.add("active");    
  });
});
emailSignup.addEventListener("input", () => erroremail.textContent = "");
passSignup.addEventListener("input", () => errorpass.textContent = "");
names.addEventListener("input", () => errorname.textContent = "");
id.addEventListener("input", () => errorid.textContent = "");

btnSignUp.addEventListener("click", () => {
  const fields = {
    email: emailSignup.value.trim(),
    password: passSignup.value.trim(),
    name: names.value.trim(),
    id: id.value.trim(),
  };

  let isValid = true;

  if (!fields.id) {
    errorid.textContent = "ID is required.";
    isValid = false;
  } else {
    errorid.textContent = "";
  }

  if (!fields.email) {
    erroremail.textContent = "Email is required.";
    isValid = false;
  }  else {
    erroremail.textContent = "";
  }

  if (!fields.name) {
    errorname.textContent = "Name is required.";
    isValid = false;
  } else {
    errorname.textContent = "";
  }

  if (!fields.password) {
    errorpass.textContent = "Password is required.";
    isValid = false;
  } else {
    errorpass.textContent = "";
  }

});

btnLoginIN.addEventListener("click", function (e) {
  const fields = {
    email: emailLogin.value.trim(),
    password: passLogin.value.trim(),
  };

  const errorBox = document.getElementById("errorBox");
  const errorBoxs = document.getElementById("errorBoxs");

  if (!fields.email) {
    errorBox.textContent = "Email is required.";
    isValid = false;
  }  else {
    errorBox.textContent = "";
  }

  if (!fields.password) {
    errorBoxs.textContent = "Password is required.";
    isValid = false;
  }  else {
    errorBoxs.textContent = "";
  }

});
/* close&Open Eyes */
btneye1.addEventListener("click",function(){
  if( passSignup.type === "password"){
      this.classList.add("bi-eye-fill");
      this.classList.remove("bi-eye-slash-fill")
      passSignup.type = "text";
    }
    else{
      this.classList.add("bi-eye-slash-fill");
      this.classList.remove("bi-eye-fill")
      passSignup.type = "password";
    }
});
  btneye.addEventListener("click",function(){
    if( passLogin.type === "password"){
        this.classList.add("bi-eye-fill");
        this.classList.remove("bi-eye-slash-fill")
      passLogin.type = "text";
      }
      else{
        this.classList.add("bi-eye-slash-fill");
        this.classList.remove("bi-eye-fill")
        passLogin.type = "password";
      }
})
