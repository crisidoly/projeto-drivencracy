import joi from "joi";

const choiceSchema = joi.object({
  title: joi.string().required(),
  pollId: joi.string().required(),
  choice: joi.string()
});

export default choiceSchema;