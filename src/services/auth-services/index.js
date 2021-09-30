import * as uuid from "uuid"

const defaultUsers = [
  { email: "miguel@gmail.com", password: "migelon", fullName: "jose miguel antonio", id: 1 },
  { email: "ejemplo@gmail.com", password: "ejemplo", fullName: "guitierritos gutierritos", id: 2 },
]

async function login(email, password) {
  if (!email || !password) {
    throw new Error("email & password son requeridos")
  }

  let storedUsers = JSON.parse(localStorage.getItem('users') || "[]")

  // llenar el localstorage si no hay registros
  if (storedUsers?.length < 1) {
    localStorage.setItem("users", JSON.stringify(defaultUsers))
  }

  storedUsers = JSON.parse(localStorage.getItem('users'))

  const user = storedUsers.find((user) => {
    return user.email === email
  })

  if (user?.password === password) {
    return true
  } else {
    return false
  }
}

const registerUser = (user = {
  email: undefined,
  password: undefined,
  fullName: undefined
}) => {

  if (!Object.values(user).every(value => !!value)) {
    throw new Error("Los datos del usuario son requeridos")
  }

  user.id = uuid.v4()

  const prevStoredUsers = JSON.parse(localStorage.getItem("users") || "[]")

  const emailExists = prevStoredUsers
    .some(prevUser => prevUser.email === user.email)

  if (!user.email?.match(/^\S+@\S+\.\S+$/)) {
      throw new Error("Parece que el email tiene un formato incorrecto")
  }

  if (emailExists) {
    throw new Error("El email ya está siendo usado")
  }

  if (user.fullName?.length < 9) {
    throw new Error("El nombre es demasiado corto")
  }

  const newStoredUsers = [...prevStoredUsers, user]

  localStorage.setItem("users", JSON.stringify(newStoredUsers))

  return user
}


export const AuthService = {
  login,
  registerUser
}