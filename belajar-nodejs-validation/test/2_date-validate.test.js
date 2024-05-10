import Joi from "joi"

describe("joi", () => {
    it("should be able to validate date", () => {
        const birthDateSchema = Joi.date().required().max("now").min("1-1-1988");

        const result = birthDateSchema.validate("2022-25-01");

        const result2 = birthDateSchema.validate("12-5-1995")

        console.log(result)
        console.log(result2)
    })
})