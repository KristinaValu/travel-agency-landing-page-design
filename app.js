const inputElement = document.getElementById("input-email");
const buttonElement = document.getElementById("suscribe-button");

function showAlert(e) {
  const emailValue = inputElement.value;
  if (emailValue === "") {
    alert("Please enter the email first.");
  } else {
    alert(`Thank you ${emailValue} successfully added to our subscribers list`);
  }
  e.preventDefault();
}
buttonElement.addEventListener("click", showAlert);
