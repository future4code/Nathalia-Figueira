import { SignUpInputDTO, User } from "../entities/User";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { userDatabase } from "../data/UserDatabase";

export class UserBusiness{
  async signup(input: SignUpInputDTO): Promise<string> {
    try{
      if (!input.name || !input.email || !input.password) {
        throw new Error('"name", "email" and "password" must be provided')
    }
      const idGenerator = new IdGenerator()
      const id: string = idGenerator.generateId()

      const hashManager = new HashManager()
      const cypherPassword = await hashManager.hash(input.password);

      const user: User ={
        id,
        name: input.name,
        email: input.email,
        password:cypherPassword
      }
      const userDatabase = new UserDatabase()
      await userDatabase.insertUser(user)
      const tokenManager = new TokenManager()
      const token: string = tokenManager.generateToken({ id })
      return token
     }catch(error){
        throw new Error(error.message)
     }
  }

  async login (input: LoginInputDTO): Promise<string>{
    try{
      if (!email || !password) {
        throw new Error('"email" and "password" must be provided')
    }
    const userDatabase = new UserDatabase()
    const user: User =await userDatabase.getUserByEmail(input.email)
      
      if (!queryResult[0]) {
        res.statusCode = 401
        message = "Invalid credentials"
        throw new Error(message)
    }

      const user: user = {
        id: queryResult[0].id,
        name: queryResult[0].name,
        email: queryResult[0].email,
        password: queryResult[0].password
      }

      const passwordIsCorrect: boolean = await compare(password, user.password)

      if (!passwordIsCorrect) {
        res.statusCode = 401
        message = "Invalid credentials"
        throw new Error(message)
    }

      const token: string = generateToken({
        id: user.id
      })
    }catch(error){
      throw new Error(error.mesage)
    }
  }
}