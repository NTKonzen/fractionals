let { multiply, divide, add, subtract } = require("../assets/operationFuncs.js");

describe("Operations", () => {
    describe("Multiply", () => {
        it("returns product as proper fraction when given proper fractions", () => {
            const product = multiply("1/3", "1/2");
            expect(product).toBe("1/6");
        });
        it("returns product as proper fraction when given mixed number fractions", () => {
            const product = multiply("1_1/3", "1/2");
            expect(product).toBe("2/3");
        });
    });

    describe("Divide", () => {
        it("returns quotient as proper fraction when given proper fractions", () => {
            const quotient = divide("1/3", "2/4");

            expect(quotient).toBe("2/3");
        });
    });

    describe("Add", () => {
        it("returns sum as proper fraction when given proper fractions", () => {
            const sum = add("1/5", "2/7");

            expect(sum).toBe("17/35");
        });
    });

    describe("Subtract", () => {
        it("returns difference as proper fraction when given proper fractions", () => {
            const difference = subtract("4/5", "2/3");

            expect(difference).toBe("2/15");
        });
    });
})