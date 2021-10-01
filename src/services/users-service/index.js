async function getAll() {
  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]")
  return storedUsers
}

async function updateUser({ id, email, ...user }) {
  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]")
  const userToUpdate = storedUsers.find(storedUser => storedUser.email === email)

  Object.assign(userToUpdate, user)

  const newStoredUsers = storedUsers.filter(storedUser => storedUser.email !== email)
  newStoredUsers?.push(userToUpdate)

  localStorage.setItem("users", JSON.stringify(newStoredUsers))
}

export const UsersService = {
  getAll,
  updateUser
}

