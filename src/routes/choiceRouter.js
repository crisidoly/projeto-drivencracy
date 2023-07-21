import { Router } from "express";
import { createChoice, getChoices } from "../controllers/choiceController.js";
import { choiceValidate } from "../middlewares/validarChoice.js";

const choiceRouter = Router();

choiceRouter.post("/choice", choiceValidate, createChoice);
choiceRouter.get("/poll/:id/choice", getChoices)

export default choiceRouter;