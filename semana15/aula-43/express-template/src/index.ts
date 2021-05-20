import express, {Request, Response} from "express"
import cors from "cors"
import {countries} from './countries'

const app = express()

app.use(express.json())
app.use(cors())


app.get("/test", (req: Request, resp: Response) => {
    
    const nome = req.body.nome
    const cabelo = req.query.cabelo

    resp.send({message: `Hello  ${nome}, seu cabelo é ${cabelo} `})
})


app.get ("/countries/all", (req: Request, res: Response) => { 
    const countriesNameId = countries.map(country =>({
        id: country.id,
        name :country.name
    }))

    res
    .status(200)
    .send(countriesNameId)
})



app.get("/countries/:id",(req: Request, res: Response) => {
    const id = Number(req.params.id)
     
     
     if (id) {
        res.status(200).send(countries.find((c=>c.id === id)))
     } else {
        res.status(404).send("Not found")
     }

})

app.listen(3004, () => {
    console.log("server s running in http://localhost:3004")
});
