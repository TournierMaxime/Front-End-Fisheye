const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const formValidation = document.getElementById("form-validation");
const contactModal = document.getElementById("contact_modal");
const modal = document.querySelector(".modal");
const errorMessage = document.querySelectorAll(".error-message");
const inputBorder = document.querySelectorAll(".input");

function displayModal() {
  contactModal.style.display = "flex";
}

function closeModal() {
  contactModal.style.display = "none";
  inputBorder.forEach((item) => (item.style.border = "none"));
  form.reset();
  errorMessage.forEach((element) => (element.innerHTML = ""));
}

window.addEventListener("keydown", (e) => {
  if (contactModal.style.display === "flex" && e.key === "Escape") {
    closeModal();
  }
});

window.addEventListener("click", (event) => {
  if (event.target === contactModal) {
    closeModal();
  }
});

let isValidate;
// Regx for Email
const regexName = /^[a-zA-Z\s-]{2,35}$/;
// Regex 1st group (lowercase, uppercase, number, dot and hyphens)
// 2nd group same
// 3th group Lowercase, Uppercase
// Finally range 2 at 6
const regexEmail = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

const validate = () => {
  const dataForm = [];
  isValidate = true;
  for (let i = 0; i < formData.length; i++) {
    const inputBalise = formData[i].querySelector(".input");
    const labelBalise = formData[i].querySelector("label");
    const errorBalise = formData[i].querySelector(".error-message");
    let errorMessage = "";

    // Switch to give an action by type.
    switch (inputBalise.type) {
      case "text":
        if (regexName.test(inputBalise.value) === false) {
          errorMessage =
            "Veuillez entrer 2 caractères ou plus pour le champ du " +
            labelBalise.textContent;
          isValidate = false;
        }
        break;

      case "email":
        if (regexEmail.test(email.value) === false) {
          errorMessage = "Votre email n'est pas valide.";
          isValidate = false;
        }
        break;

      case "textarea":
        if (inputBalise.value.length < 2) {
          errorMessage =
            "Veuillez entrer 2 caractères ou plus pour le champ du " +
            labelBalise.textContent;
          isValidate = false;
        }
        break;
    }

    // If input is empty
    if (inputBalise.value === "") {
      errorMessage = "Vous devez entrer votre " + labelBalise.textContent;
      isValidate = false;
    }

    // Border color
    if (errorMessage !== "") {
      inputBalise.style.border = "3px red solid";
    } else {
      inputBalise.style.border = "3px #279e7a solid";
      dataForm.push(inputBalise.value);
    }

    // Show error message
    errorBalise.style.display = "block";
    errorBalise.innerHTML = errorMessage;
  }

  // Global message validation
  if (isValidate) {
    formValidation.style.display = "flex";
    modal.style.display = "none";
    console.log("Voici les informations du formulaire: ", dataForm);
  }
};

// No refreh form
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
