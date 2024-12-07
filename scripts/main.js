function setSuccessBlock() {
  document.querySelector(".success_contact_form").classList.remove("hidden");
  document.querySelector(".contacts_us_form_form").classList.add("hidden");
}
document.querySelector(".send_btn").addEventListener("click", (event) => {
  event.preventDefault();
  let isValid = true;

  const nameInput = document.querySelector('.input_item input[type="text"]');
  const nameError = document.querySelector(".input_item .error_message");
  if (!nameInput.value.trim()) {
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  const phoneInput = document.querySelector('.phone_input input[type="text"]');
  const phoneError = document.querySelector(".phone_input .error_message");
  if (!phoneInput.value.trim() || !/^\d+$/.test(phoneInput.value)) {
    phoneError.style.display = "block";
    isValid = false;
  } else {
    phoneError.style.display = "none";
  }

  const emailInput = document.querySelectorAll(
    '.input_item input[type="text"]'
  )[2];
  const emailError = document.querySelectorAll(".input_item .error_message")[2];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  if (isValid) {
    setSuccessBlock();
  }
});
