import Joi from "joi";

describe("joi", () => {
  it("should can validate array", () => {
    const hobbieSchema = Joi.array().items(
      Joi.string().required().min(3).max(100)
    );

    const hobbies = ["mancing", "tidur"];
    const result = hobbieSchema.validate(hobbies);
    console.log(result);
  });

  it("should can nested validate array of object", () => {
    const addressesSchema = Joi.array()
      .min(1)
      .items(
        Joi.object({
          street: Joi.string().required().max(200),
          city: Joi.string().required().max(100),
          country: Joi.string().required().max(100),
        })
      );

    const addresses = [];

    const result = addressesSchema.validate(addresses, {
      abortEarly: false,
    });

    console.log(result);
  });
});
