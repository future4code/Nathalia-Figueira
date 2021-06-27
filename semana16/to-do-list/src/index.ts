import express, {Express} from 'express'
import cors from 'cors'
import knex from "knex";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.listen(3004, ()=> {
    console.log ("Servidor 3004, iniciado com sucesso")
})
