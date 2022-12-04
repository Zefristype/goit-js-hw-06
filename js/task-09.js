function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const colorName = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
});
