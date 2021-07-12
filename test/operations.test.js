let { multiply, divide, add, subtract } = require("../assets/operationFuncs.js");

describe("Operations", () => {
    describe("Multiply", () => {
        it("Should return product as proper fraction", () => {
            const product = multiply("1/3", "1/2");
            expect(product).toBe("1/6");
        });
    });

    describe("Divide", () => {
        it("Should return quotient as proper fraction", () => {
            const quotient = divide("1/3", "2/4");

            expect(quotient).toBe("2/3");
        });
    });

    describe("Add", () => {
        it("Should return sum as proper fraction", () => {
            const sum = add("1/5", "2/7");

            expect(sum).toBe("17/35");
        });
    });

    describe("Subtract", () => {
        it("Should return difference as proper fraction", () => {
            const difference = subtract("4/5", "2/3");

            expect(difference).toBe("2/15");
        });
    });
})