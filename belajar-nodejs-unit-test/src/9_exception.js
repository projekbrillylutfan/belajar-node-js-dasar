export class MyException extends Error {

}

export const callme = (name) => {
    if (name === "Eko") {
        throw new MyException("name not allowed")
    } else {
        return `hello ${name}`
    }
}