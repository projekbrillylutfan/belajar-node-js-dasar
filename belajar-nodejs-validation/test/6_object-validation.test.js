import Joi from "joi";

describe("joi", () => {
  it("should can validate object", () => {
    const loginSchema = Joi.object({
      username: Joi.string().required().min(3).max(100).email(),
      password: Joi.string().required().min(3).max(100),
    });

    const request = {
      username: "eko",
      password: "eko123",
    };

    const result = loginSchema.validate(request, {
      abortEarly: false,
    });

    console.log(JSON.stringify(result
    ));
  });

  it("should can nested validate object", () => {
    const createUserSchema = Joi.object({
        id: Joi.string().required().max(100),
        name: Joi.string().required().max(100),
        address: Joi.object({
            street: Joi.string().required().max(200),
            city: Joi.string().required().max(100),
            country: Joi.string().required().max(100),
            zipCode: Joi.string().required().max(10),
        }).required()
    })

    const request = {}

    const result = createUserSchema.validate(request, {
        abortEarly: false
    })

    console.log(JSON.stringify(result))
  });
});
