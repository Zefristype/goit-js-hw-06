const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const value = document.querySelector("#value");

let counter = 0;

decrementBtn.addEventListener("click", () => {
  counter -= 1;
  value.textContent = counter;
});

incrementBtn.addEventListener("click", () => {
  counter += 1;
  value.textContent = counter;
});
