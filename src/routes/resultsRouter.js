import { Router } from 'express'
import { getResults } from '../controllers/resultsController.js'

const resultsRouter = Router()

resultsRouter.get("/poll/:id/result", getResults)

export default resultsRouter