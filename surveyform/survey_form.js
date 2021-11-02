function errorMessage() {
  let emailError = document.getElementById("email_error");
  let nameError = document.getElementById("name_error");

  if (
    !document
    .getElementById("email")
    .value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    emailError.textContent = " Enter a valid email id [Eg: xyz@reddit.com]❗";
    emailError.style.color = "#FFEFA1";
    emailError.style.fontSize = "17px";
  } else {
    emailError.textContent = "";
  }

  if (
    document.getElementById("name").value === "" ||
    document.getElementById("name").value.length < 3
  ) {
    nameError.textContent = " Name should contain 3 or more characters❗";
    nameError.style.color = "#FFEFA1";
    nameError.style.fontSize = "17px";
  } else {
    nameError.textContent = "";
  }
}