function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls input");

createBtn.addEventListener("click", () => {
  const boxesMarkup = [];
  if (inputEl.value > 100) {
    return alert("Number is greater than 100");
  }
  for (let i = 0; i < inputEl.value; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.width = 30 + 10 * i + "px";
    boxEl.style.height = 30 + 10 * i + "px";
    boxEl.style.backgroundColor = getRandomHexColor();
    boxesMarkup.push(boxEl);
  }

  boxesEl.append(...boxesMarkup);
});

destroyBtn.addEventListener("click", () => {
  boxesEl.innerHTML = "";
  inputEl.value = "";
});
