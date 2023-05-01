import Joi, { ObjectSchema } from "joi";

export const errorMessages = {
  INVALID_TITLE: "Title is missing",
  INVALID_TAGS: "Tags must be an array of strings",
  INVALID_SLUG: "Slug is missing",
  INVALID_META: "Meta description is missing",
  INVALID_CONTENT: "Post content is missing",
};

export const postValidationSchema = Joi.object().keys({
  title: Joi.string().required().messages({
    "string.empty": errorMessages.INVALID_TITLE,
    "any.required": "Title is required",
  }),
  content: Joi.string().required().messages({
    "string.empty": errorMessages.INVALID_CONTENT,
    "any.required": "Content is required",
  }),
  slug: Joi.string().required().messages({
    "string.empty": errorMessages.INVALID_SLUG,
    "any.required": "Slug is required",
  }),
  meta: Joi.string().required().messages({
    "string.empty": errorMessages.INVALID_META,
    "any.required": "Meta is required",
  }),
  tags: Joi.array().items(Joi.string()).messages({
    "string.base": errorMessages.INVALID_TAGS,
    "string.emptry": "Tags is empty",
  }),
});

export const validateSchema = (schema: ObjectSchema, value: any) => {
  const { error } = schema.validate(value, {
    errors: { label: "key", wrap: { label: false, array: false } },
    allowUnknown: true,
  });
  if (error) return error.details[0].message;
  return "";
};
