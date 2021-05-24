import express, {Express, Request, Response} from "express"
import cors from "cors"
import {accounts} from "./users"

const app: Express = express()

app.use(express.json())
app.use(cors())

type Transation = {
    value : Number,
    date : Date,
    Description: String
}

export type User = {
    name : String,
    CPF : String,
    birthDate : Date,
    balance : Number,
    statement : Array <Transation>
}


app.post("/user/new", (req:Request, res: Response) => {
    try{
        const {name, CPF, birthDateInit} = req.body
        const [day, month, year] = birthDateInit.split("/")
        const birthDate: Date = new Date(`${year}-${month}-${day}`)
        const age:number = (Date.now() - birthDate.getTime())/1000/60/60/24/365
        if (age < 18){
            res.statusCode = 406
            throw new Error ("Para abrir uma conta é necesssário ter 18 anos ou mais")
        }
        
        accounts.push({
            name,
            CPF,            
            birthDate,
            balance: 0,
            statement: []
        })
        res
        .status(201)
        .send("Conta Criada Com Sucesso!")    
    }
    catch (err) {
        res
        .status(400)
        .send(err.message)
    } 
})


app.get("/user/all", (req:Request, res: Response) => {
    try{

        res
        .status(201)
        .send(accounts)    
    }
    catch (err) {
        res
    .status(400)
    .send(err.message)
    } 
})

app.listen(3004, ()=> {
    console.log ("Servidor 3004, iniciado com sucesso")
})
