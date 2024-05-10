import Joi from "joi";

describe("joi", () => {
  it("should schema message", () => {
    const schema = Joi.string().min(3).max(100).required().messages({
      "string.min": "{{#label}} Minimal {#limit} karakter",
    });

    const request = "e";

    const result = schema.validate(request);

    if (result.error) {
      console.info(result.error);
    }
  });

  it("should schema message complex", () => {
    const schema = Joi.object({
      username: Joi.string().required().email().messages({
        "any.required": "email harus di isi",
        "string.email": "email harus valid",
      }),
      password: Joi.string().min(6).max(100).required().messages({
        "any.required": "password harus di isi",
        "string.min": "password minimal {#limit} karakter",
        "string.max": "password maksimal {#limit} karakter",
      }),
    });

    const request = {};

    const result = schema.validate(request, {
      abortEarly: false,
    });
    console.log(result);
  });

  it("should can crete custom validation", () => {
      const registerSchema = Joi.object({
          username: Joi.string().required().min(3).max(100).email(),
          password: Joi.string().required().min(6).max(100).custom((value, helpers) => {
              if(value.starWith("eko")) {
                return helpers.error("password.wrong")
              }
              return value;
          }).messages({
              "password.wrong": "password must not start with eko"
          }),
          confirmPassword: Joi.string().required().min(6).max(100)
      })
  })
});
