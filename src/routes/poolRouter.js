import { Router } from "express"
import { createPoll } from "../controllers/poolController.js"

const pollRouter = Router()

pollRouter.post("/poll", createPoll)


export default pollRouter