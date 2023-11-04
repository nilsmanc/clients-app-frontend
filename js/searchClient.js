export const searchClients = (clients) => {
  const findList = document.querySelector('.find-list')
  const input = document.querySelector('.header__input')

  clients.forEach((client) => {
    const findItem = document.createElement('li')
    const findLink = document.createElement('a')

    findItem.classList.add('find-list__item')
    findLink.classList.add('find-list__link')

    findLink.textContent = `${client.name} ${client.surname} ${client.lastName}`
    findLink.href = '#'

    findItem.append(findLink)
    findList.append(findItem)
  })

  const rewriteTable = async (str) => {
    const response = await findClient(str)
    const tbody = document.querySelector('.clients__tbody')
    tbody.innerHTML = ''

    for (const client of response) {
      tbody.append(createClientItem(client))
    }
  }
}
