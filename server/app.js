import express from "express";
import morgan from "morgan";

import todoRouter from "./routes/todos.routes.js";
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use('/api/todos' , todoRouter)
export default app