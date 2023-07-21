import { Router } from "express"
import pollRouter from "./poolRouter.js"
import choiceRouter from "./choiceRouter.js"
import voteRouter from "./voteRouter.js"
import resultsRouter from "./resultsRouter.js"
const router = Router()

router.use(pollRouter)
router.use(choiceRouter)
router.use(voteRouter)
router.use(resultsRouter)

export default router