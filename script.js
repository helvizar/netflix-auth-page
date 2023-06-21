function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  console.log("Login:", email, password);
}

function toggleVariant() {
  var usernameGroup = document.getElementById("username-group");
  var title = document.querySelector(".title");
  var account = document.querySelector(".account");
  var createAccountLink = account.querySelector("span");
  var loginButton = document.querySelector(".button");

  if (title.innerText === "Sign In") {
    title.innerText = "Register";
    createAccountLink.innerText = "Login";
    usernameGroup.style.display = "flex";
    account.innerHTML =
      "Already have an account? " + createAccountLink.outerHTML;
    loginButton.innerText = "Register";
  } else {
    title.innerText = "Sign In";
    createAccountLink.innerText = "Create an account";
    usernameGroup.style.display = "none";
    account.innerHTML = "New to Netflix? " + createAccountLink.outerHTML;
    loginButton.innerText = "Login";
  }
}

function handleGetFormData() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
    name,
    city,
    email,
    zipCode,
    status,
  };
}

function isNumber(input) {
  return !isNaN(input);
}

const zipCodeInput = document.getElementById("zip-code");

zipCodeInput.addEventListener("input", function () {
  const zipCodeValue = zipCodeInput.value;

  if (!isNumber(zipCodeValue)) {
    console.log("Zip-code harus berupa angka!");
  }
});

function checkboxIsChecked() {
  const checkbox = document.getElementById("status");
  return checkbox.checked;
}

function validateFormData(formData) {
  if (!formData) {
    return false;
  }

  if (!isNumber(formData.zipCode)) {
    return false;
  }

  if (!checkboxIsChecked()) {
    return false;
  }

  return true;
}

function submit() {
  const formData = handleGetFormData();
  const warning = document.getElementById("warning");

  if (!validateFormData(formData)) {
    warning.innerText = "Periksa form anda sekali lagi";
  } else {
    warning.innerText = "";
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  submit();
});
