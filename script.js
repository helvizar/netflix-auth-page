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
