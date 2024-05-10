import Joi from "joi";

describe("joi", () => {
    it("should can create schema", () => {
        const schema = Joi.string().min(3).max(100).required()

        const request = "eko";

        const result = schema.validate(request);
        if (result.error) {
            console.info(result.error)
        }

        console.log(result)
    })

    it("should validate data type", () => {
        const usernameSchema = Joi.string().email().required();
        const isAdminSchema = Joi.boolean().required();
        const priceSchema = Joi.number().required().min(1000).max(1000000);


        const resultUsername = usernameSchema.validate("eko");
        console.info(resultUsername);

        const resultIsAdim = isAdminSchema.validate("true");
        console.info(resultUsername);

        const resultPrice = priceSchema.validate("1000");
        console.info(resultUsername);
    })
})