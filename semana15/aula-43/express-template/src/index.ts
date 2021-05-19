import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3004, () => {
    console.log("server s running in http://localhost:3004")
});