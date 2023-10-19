export const deleteClientModal = () => {
  const deleteModalContent = document.createElement('div')
  const modalClose = document.createElement('button')
  const deleteModalTitle = document.createElement('h2')
  const deleteModalText = document.createElement('p')
  const deleteModal = document.createElement('div')
  const deleteModalDelete = document.createElement('button')
  const deleteModalBack = document.createElement('button')

  deleteModal.classList.add('delete-modal', 'site-modal', 'modal-active')
  deleteModalContent.classList.add(
    'delete-modal__content',
    'site-modal__content',
    'modal-active'
  )
  deleteModalText.classList.add('delete-modal__text')
  deleteModalTitle.classList.add('delete-modal__title', 'modal__title')
  deleteModalDelete.classList.add(
    'delete-modal__delete',
    'btn-reset',
    'site-btn'
  )
  deleteModalBack.classList.add('delete-modal__back', 'btn-reset')
  modalClose.classList.add('modal__close', 'btn-reset')

  deleteModalTitle.textContent = 'Delete client'
  deleteModalText.textContent = 'Are you sure you want to delete client?'
  deleteModalDelete.textContent = 'Delete'
  deleteModalBack.textContent = 'Cancel'

  deleteModalContent.append(
    modalClose,
    deleteModalTitle,
    deleteModalText,
    deleteModalDelete,
    deleteModalBack
  )
  deleteModal.append(deleteModalContent)

  modalClose.addEventListener('click', () => deleteModal.remove())
  deleteModalBack.addEventListener('click', () => deleteModal.remove())

  window.addEventListener('click', (e) => {
    if (e.target === deleteModal) {
      deleteModal.remove()
    }
  })

  return {
    deleteModal,
    deleteModalContent,
    deleteModalDelete,
  }
}
