export type authenticationData ={
  id: string
}

export type User = {
  id: string,
  name: string,
  email:string,
  password:string
}

export interface SignUpInputDTO{
  name: string,
  email: string,
  password: string
}

export interface SignUpInputDTO{
  email: string,
  password: string
}

export function toUserModel(obj: any): User{
  return obj && {
    id: obj.id,
    email: obj.email,
    name: obj.name,
    password: obj.password
  }
}