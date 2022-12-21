/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function displayModal () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'flex'
}

function closeModal () {
  const errorMessage = document.querySelectorAll('.error-message')
  const modal = document.getElementById('contact_modal')
  const messageValidate = document.getElementById('form-validation')
  const inputBorder = document.querySelectorAll('.input')
  modal.style.display = 'none'
  messageValidate.style.display = 'none'
  inputBorder.forEach(function (item) {
    item.style.border = 'none'
  })
  form.reset()
  errorMessage.forEach(element => {
    element.innerHTML = ('')
  })
}

window.addEventListener('keydown', (e) => {
  const modal = document.getElementById('contact_modal')
  // eslint-disable-next-line no-cond-assign
  if (modal.style.display = 'flex' && e.key === 'Escape') {
    closeModal()
  }
})

window.addEventListener('click', (event) => {
  const modal = document.getElementById('contact_modal')
  if (event.target === modal) {
    closeModal()
  }
})

const modalbg = document.querySelector('.bground')
const modalBtn = document.querySelectorAll('.modal-btn')
const formData = document.querySelectorAll('.formData')
const messageValidate = document.getElementById('form-validation')
let isValidate
// Regx for Email
const myRegx =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const validate = () => {
  const dataForm = []
  isValidate = true
  for (let i = 0; i < formData.length; i++) {
    const inputBalise = formData[i].querySelector('.input')
    const labelBalise = formData[i].querySelector('label')
    const errorBalise = formData[i].querySelector('.error-message')
    let errorMessage = ''

    // Switch to give an action by type.
    switch (inputBalise.type) {
      case 'text':
        if (inputBalise.value.length < 2) {
          errorMessage =
            'Veuillez entrer 2 caractères ou plus pour le champ du ' +
            labelBalise.textContent
          isValidate = false
        }
        break

      case 'email':
        if (myRegx.test(email.value) === false) {
          errorMessage = "Votre email n'est pas valide."
          isValidate = false
        }
        break

      case 'textarea':
        if (inputBalise.value.length < 2) {
          errorMessage =
            'Veuillez entrer 2 caractères ou plus pour le champ du ' +
            labelBalise.textContent
          isValidate = false
        }
        break
    }

    // If input is empty
    if (inputBalise.value === '') {
      errorMessage = 'Vous devez entrer votre ' + labelBalise.textContent
      isValidate = false
    }

    // Border color
    if (errorMessage !== '') {
      inputBalise.style.border = '3px red solid'
    } else {
      inputBalise.style.border = '3px #279e7a solid'
      dataForm.push(inputBalise.value)
    }

    // Show error message
    errorBalise.style.display = 'block'
    errorBalise.innerHTML = errorMessage
  }

  // Global message validation
  if (isValidate) {
    messageValidate.style.display = 'flex'
    console.log('Voici les information du formulaire: ', dataForm)
  }
}

// No refreh form
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
})
