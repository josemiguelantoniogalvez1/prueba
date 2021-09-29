function login(email, password) {
  if(!email || !password){
    throw new Error("email & password son requeridos")
  }
  return true
}


export const AuthService = {
  login
}