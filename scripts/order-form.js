document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".order_form");
  const inputs = form.querySelectorAll(
    ".input_item input, .input_item textarea"
  );
  const submitBtn = document.querySelector(".order_submit"); 

  const isEmpty = (input) => input.value.trim() === "";

  const isEmailValid = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateForm = () => {
    let isValid = true;

    inputs.forEach((input) => {
      const errorMessage = input
        .closest(".input_item")
        ?.querySelector(".error_message");
      if (!errorMessage) return; 

      if (isEmpty(input)) {
        errorMessage.style.display = "block";
        isValid = false;
      } else {
        errorMessage.style.display = "none";

        if (input.type === "email" && !isEmailValid(input.value)) {
          errorMessage.style.display = "block";
          errorMessage.querySelector("span").innerText =
            "Введите корректный email!";
          isValid = false;
        }
      }
    });

    return isValid;
  };

  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (validateForm()) {
      alert("Форма успешно отправлена!");
      window.location.reload();

    }
  });
});
