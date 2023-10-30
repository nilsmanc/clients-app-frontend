export const sortTable = () => {
  const table = document.querySelector('table')
  const headers = table.querySelectorAll('th')
  const tbody = table.querySelector('tbody')

  const directions = Array.from(headers).map(() => '')

  const transform = (type, content) => {
    switch (type) {
      case 'id':
        return parseFloat(content)
      case 'create':
      case 'update':
        return content.split('.').reverse().join('-')
      case 'text':
      default:
        return content
    }
  }

  ;[].forEach.call(headers, (header, index) => {
    header.addEventListener('click', () => {
      sortColumn(index)
    })
  })
}
