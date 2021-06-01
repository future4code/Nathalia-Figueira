import express, { Express, Request, Response } from "express"
import knex from "knex"
import cors from "cors"
import {config} from "dotenv"
import { AddressInfo } from "net"


config()
 const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

export default async function selectAllUsers():Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `)

   return result[0]
}

const app: Express = express()
app.use(express.json())
app.use(cors())

app.get("/users/all", async function (
   req: Request,
   res: Response
): Promise<void> {
 const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
      try {
         const users = await selectAllUsers()
   
         if(!users.length){
            res.statusCode = 404
            throw new Error("No User Found")
         }
   
         res.status(200).send(users)
         
      } catch (error) {
         console.log(error)
         res.send(error.message || error.sqlMessage)
      }
   }
})
app.get("/users/search", async function (
   req: Request,
   res: Response
): Promise<void> { 
      try {
         const user = req.query.name as string
   
    const result = await connection.raw(`
    SELECT name , name AS "name",
    FROM aula48_exercicio
    JOIN users_aula48
    ON user_id = users_aula48.id
    WHERE name LIKE "%${name}%";
    `)
         
      } catch (error) {
         console.log(error)
         res.send(error.message || error.sqlMessage)
      }
      
   }
)


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})
