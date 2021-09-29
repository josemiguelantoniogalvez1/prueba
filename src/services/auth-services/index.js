const defaultUsers = [
  { email: "miguel@gmail.com", password: "migelon", fullName: "jose miguel antonio" },
  { email: "ejemplo@gmail.com", password: "ejemplo", fullName: "guitierritos gutierritos" },
]

async function login(email, password) {
  if (!email || !password) {
    throw new Error("email & password son requeridos")
  }

  const user = defaultUsers.find((user) => {
    return user.email === email
  })

  if (user?.password === password) {
    return true
  } else {
    return false
  }
}


export const AuthService = {
  login
}