import { Router } from "express"
import { createPoll, getPoll } from "../controllers/poolController.js"
import validatePool from "../middlewares/validarPool.js"

const pollRouter = Router()

pollRouter.post("/poll", validatePool, createPoll)
pollRouter.get("/poll", getPoll);


export default pollRouter