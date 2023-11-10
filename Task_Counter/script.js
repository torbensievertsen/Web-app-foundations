const main = document.querySelector("main");
const button = document.querySelector("#button");
let counter = 0;
let number = 0;

main.addEventListener("click", function () {
  counter++;
  number++;
  if (number > 100) {
    number = number - 100;
  }

  main.innerText = counter;
  main.style.background =
    "linear-gradient(90deg, yellow " + number + "%, white " + number + "%)";
});

document.addEventListener("keyup", (event) => {
  if (event.code === "Space" || event.code === "Enter") {
    counter++;
    number++;
    if (number > 100) {
      number = number - 100;
    }
  }
  main.innerText = counter;
  main.style.background =
    "linear-gradient(90deg, yellow " + number + "%, white " + number + "%)";
  if (number > 100) {
    number = number - 100;
  }
});

button.addEventListener("click", function () {
  counter = 0;
  number = 0;
  main.innerText = counter;
  main.style.background =
    "linear-gradient(90deg, yellow " + number + "%, white " + number + "%)";
});
