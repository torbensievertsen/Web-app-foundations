const button = document.querySelector("#button");
const password = document.querySelector("#textfeld");
let hidden = true;
button.addEventListener("click", function (e) {
  e.preventDefault();
  if (hidden) {
    password.setAttribute("type", "text");
    button.setAttribute("value", "Hide Password");
    hidden = false;
  } else {
    password.removeAttribute("type");
    password.setAttribute("type", "password");
    button.setAttribute("value", "Show Password");
    hidden = true;
  }
});
