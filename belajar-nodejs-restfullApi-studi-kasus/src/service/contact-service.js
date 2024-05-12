import { prismaClient } from "../application/database.js"
import { ResponseError } from "../error/response-error.js"
import { createContactValidation, getContactValidation } from "../validation/contact-validation.js"
import { validate } from "../validation/validation.js"

const create = async (user, request) => {
    const contact = validate(createContactValidation, request)
    contact.username = user.username

    return prismaClient.contact.create({
        data: contact,
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            phone: true
        }
    })
}

const get = async (user, contactID) => {
    contactID = validate(getContactValidation, contactID)

    const contact = await prismaClient.contact.findFirst({
        where: {
            username: user.username,
            id: contactID
        }, 
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            phone: true
        }
    })

    if (!contact) {
        throw new ResponseError(404, "contact not found")
    }

    return contact;
}

export default{
    create,
    get
}