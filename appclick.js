const username = document.querySelector("#inputname");
const password = document.querySelector("#inputpass");
const button = document.querySelector(".sign-up");

button.addEventListener("click", function (event) {
  event.preventDefault();
  const usernameValue = username.value;
  const passwordValue = password.value;

  console.log(usernameValue, passwordValue);

  if (usernameValue !== "appclick" || passwordValue !== "appclick123") {
    alert("wrong credentials");
    return;
  }
});
