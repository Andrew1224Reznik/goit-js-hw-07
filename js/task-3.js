const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const nameUser = input.value.trim();
  if (nameUser === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = nameUser;
  }
});
