function validateForm() {
  var firstName = document.getElementById("firstName").value;
  var password = document.getElementById("password").value;
  var mobile = document.getElementById("mobile").value;

  var valid = true;

  if (!/^[a-zA-Z]{6,}$/.test(firstName)) {
    document.getElementById("firstNameError").textContent = "First name should contain alphabets and be at least 6 characters long";
    valid = false;
  } else {
    document.getElementById("firstNameError").textContent = "";
  }

  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password should be at least 6 characters long";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }


  if (!/^\d{10}$/.test(mobile)) {
    document.getElementById("mobileError").textContent = "Mobile number should contain 10 digits only";
    valid = false;
  } else {
    document.getElementById("mobileError").textContent = "";
  }

  return valid;
}
