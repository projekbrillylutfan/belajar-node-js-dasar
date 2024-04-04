const samplePromise = () => {
    return Promise.resolve("Hello World")
}

const data = await samplePromise();
console.log(data)