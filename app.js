const buttonElement = document.getElementById("suscribe-button");

function showAlert(e) {
  const inputElement = document.getElementById("input-email");
  const emailValue = inputElement.value;
  e.preventDefault();
  if (emailValue === "") {
    alert("Please enter the email first.");
  } else {
    alert(`Thank you ${emailValue} successfully added to our subscribers list`);
  }
}
buttonElement.addEventListener("click", showAlert);
