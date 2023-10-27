export const getClients = async () => {
  const response = await fetch('http://localhost:3000/api/clients', {
    method: 'GET',
  })

  const result = await response.json()
  console.log(result)

  return result
}

export const sendClientData = async (client, method, id = null) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/clients/${method === 'POST' ? '' : id}`,
      {
        method,
        body: JSON.stringify(client),
      }
    )

    const result = await response.json()

    return result
  } catch (error) {
    console.log(error)
  }
}

export const deleteClientItem = async (id) => {
  const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
    method: 'DELETE',
  })
}
