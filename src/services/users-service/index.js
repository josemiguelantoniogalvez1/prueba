async function getAll() {
  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]")
  return storedUsers
}

export const UsersService = {
  getAll
}

