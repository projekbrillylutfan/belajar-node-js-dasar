beforeEach(() => {
    console.log("before each 1")
})

afterEach(() => {
    console.log("after each 1")
})

describe('inner scope ', () => {
    beforeEach(() => {
        console.log("inner before each 1")
    })

    afterEach(() => {
        console.log("inner after each 1")
    })

    describe('inner inner scope ', () => {
        beforeEach(() => {
            console.log("inner inner before each 1")
        })

        afterEach(() => {
            console.log("inner inner after each 1")
        })

        test('test 1', () => console.info("test 1"))
        test('test 2', () => console.info("test 2"))
    })
})