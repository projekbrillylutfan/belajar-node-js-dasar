import Joi from "joi"

describe("joi", () => {
    it("should be return validation error", () => {
        const usernameSchema = Joi.string().min(5).email().required()

        const result = usernameSchema.validate("eko", {
            abortEarly: false
        })
        console.info(result.value)

        if (result.error) {
            result.error.details.forEach(detail => {
                console.info(`${detail.path} ${detail.message}`)
            })
        }

    })
})