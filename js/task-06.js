const inputEl = document.querySelector("#validation-input");

function onInputBlur(event) {
  event.currentTarget.classList.remove("valid", "invalid");

  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.getAttribute("data-length"))
  ) {
    event.currentTarget.classList.add("valid");
  } else event.currentTarget.classList.add("invalid");
}

inputEl.addEventListener("blur", onInputBlur);
