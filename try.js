function subtractNumbers(a, b) {
    try {
        if (isNaN(a)||isNaN(b)) {
            throw new Error("Invalid input: Both inputs must be numbers.");
        }
        return a - b;
    } catch (error) {
        console.log(error.message);
    }
}
console.log(subtractNumbers(10, 5)); 