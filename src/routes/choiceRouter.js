import { Router } from "express";
import { createChoice, sendChoice } from "../controllers/choiceController.js";
import { choiceValidate } from "../middleware/choiceValidate.js";

const choiceRouter = Router();

choiceRouter.post("/choice", choiceValidate(choiceSchema), createChoice);

export default choiceRouter;