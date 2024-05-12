import Joi from "joi";

const createContactValidation = Joi.object({
  first_name: Joi.string().max(100).required(),
  last_name: Joi.string().max(100).required(),
  email: Joi.string().email().max(200).required(),
  phone: Joi.string().max(20).required(),
});

const getContactValidation = Joi.number().positive().required();

export { createContactValidation, getContactValidation };
