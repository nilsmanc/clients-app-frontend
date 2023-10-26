export const validateClientContact = (contactType, contactInput) => {
  const writeValue = document.getElementById('writeName')
  const onlyNumbers = /[^0-9]+$/g
  const onlyEmail = /[^a-zA-Z|@|.]+$/g

  const onInputValue = (input) => {
    input.addEventListener('input', () => {
      input.style.borderColor = 'var(--color-gray-suit)'
      writeValue.textContent = ''
    })

    input.oncut =
      input.oncopy =
      input.onpaste =
        () => {
          input.style.borderColor = 'var(--color-gray-suit)'
          writeValue.textContent = ''
        }
  }

  const showErrorMessage = (message, block, input) => {
    block.textContent = message
    input.style.borderColor = 'var(--color-burnt-sienna)'
  }

  onInputValue(contactInput)

  if (!contactInput.value) {
    showErrorMessage('Fill in all the fields', writeValue, contactInput)
    return false
  }

  switch (contactType.innerHTML) {
    case 'Phone':
      if (onlyNumbers.test(contactInput.value)) {
        showErrorMessage('Use numbers only', writeValue, contactInput)
        return false
      } else if (contactInput.value.length !== 11) {
        showErrorMessage('Numbers have 11 digits', writeValue, contactInput)
        return false
      }

      return true
    case 'Email':
      if (onlyEmail.test(contactInput.value)) {
        showErrorMessage('Incorrect email', writeValue, contactInput)
        return false
      }

      return true
    default:
      return true
  }
}
