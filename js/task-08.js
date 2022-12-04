const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {elements: { email, password }} = event.currentTarget;

  if (!email.value || !password.value) {
    return alert("Some of the fields are empty");
  }

  const user = {
    email: email.value,
    password: password.value,
  };

  event.currentTarget.reset();

  console.log(user);
}
