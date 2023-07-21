import { Router } from "express";
import { createChoice } from "../controllers/choiceController.js";
import { choiceValidate } from "../middlewares/validarChoice.js";

const choiceRouter = Router();

choiceRouter.post("/choice", choiceValidate, createChoice);

export default choiceRouter;