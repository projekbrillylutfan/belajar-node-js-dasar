export const sum = (a, b) => {
    return a + b;
}

export const sumAll = (numbers) => {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }
    return total;
}