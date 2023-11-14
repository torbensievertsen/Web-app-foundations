//wenn eine checkbox true gesetzt wird überprüfen wie viele sonst true sind wenn 3 dann remove last true
const Fast = document.querySelector("#fast");
const Cheap = document.querySelector("#cheap");
const Good = document.querySelector("#good");
let test = 0;

Fast.addEventListener("click", function () {
  if (Fast.checked) {
    if (Cheap.checked && Good.checked) {
      if (test === 2) {
        Cheap.checked = false;
      }
      if (test === 3) {
        Good.checked = false;
      }
    }
  }
  test = 1;
});
Cheap.addEventListener("click", function () {
  if (Cheap.checked) {
    if (Fast.checked && Good.checked) {
      if (test === 1) {
        Fast.checked = false;
      }
      if (test === 3) {
        Good.checked = false;
      }
    }
  }
  test = 2;
});
Good.addEventListener("click", function () {
  if (Good.checked) {
    if (Cheap.checked && Fast.checked) {
      if (test === 2) {
        Cheap.checked = false;
      }
      if (test === 1) {
        Fast.checked = false;
      }
    }
  }
  test = 3;
});
