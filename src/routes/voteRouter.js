import { Router } from 'express'
import { vote } from "../controllers/voteController.js"

const voteRouter = Router()

voteRouter.post("/choice/:id/vote", vote)

export default voteRouter