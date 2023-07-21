import { Router } from "express"
import pollRouter from "./poolRouter.js"
import choiceRouter from "./choiceRouter.js"

const router = Router()

router.use(pollRouter)
router.use(choiceRouter)

export default router