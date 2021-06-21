import { app } from "./controller/app"
import { taskRouter } from "./routes/taskRouter"
import { userRouter } from "./routes/userRouter"

app.use("/users", userRouter)
app.use("tasks", taskRouter)

app.use((req, res) => {
  res
  .status(404)
  .send ("Não encontramos a sua requisição.")
})



