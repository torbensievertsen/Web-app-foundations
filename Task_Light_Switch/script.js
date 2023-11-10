const Button = document.querySelector("#button");
Button.addEventListener("click", function () {
  if (document.title === "Good Morning") {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
  Button.classList.toggle("day");
  Button.classList.toggle("night");
  document.body.classList.toggle("dark");
});
