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
        it("returns product as mixed number fraction when given improper fractions", () => {
            const product = multiply("7/2", "6/8");
            expect(product).toBe("2_5/8");
        });
        it("returns product as mixed number fraction when given mixed number fractions", () => {
            const product = multiply("1_1/3", "2_4/5");
            expect(product).toBe("3_11/15");
        });
        it("returns mixed number fraction when given whole number", () => {
            const product = multiply("1/3", "4");
            expect(product).toBe("1_1/3")
        });
        it("returns whole number when given fractions", () => {
            const product = multiply("3/5", "10/3");
            expect(product).toBe("2")
        });
    });

    describe("Divide", () => {
        it("returns quotient as proper fraction when given proper fractions", () => {
            const quotient = divide("1/3", "2/4");

            expect(quotient).toBe("2/3");
        });
        it("returns quotient as proper fraction when given mixed number fractions", () => {
            const quotient = divide("1_2/3", "4_5/6");

            expect(quotient).toBe("10/29");
        });
        it("returns quotient as mixed fraction when given proper fractions", () => {
            const quotient = divide("7/9", "3/4");

            expect(quotient).toBe("1_1/27");
        });
        it("returns quotient as mixed number fraction when given mixed number fractions", () => {
            const quotient = divide("7_8/9", "3_2/4");

            expect(quotient).toBe("2_16/63");
        });
        it("returns quotient as mixed number fraction when given whole number", () => {
            const quotient = divide("3", "2/3");

            expect(quotient).toBe("4_1/2");
        });
        it("returns quotient as proper fraction when given whole number", () => {
            const quotient = divide("3", "10/3");

            expect(quotient).toBe("9/10");
        });
        it("returns quotient as whole number when given fractions", () => {
            const quotient = divide("1/3", "2/12");

            expect(quotient).toBe("2");
        });
    });

    describe("Add", () => {
        it("returns sum as proper fraction when given proper fractions", () => {
            const sum = add("1/5", "2/7");

            expect(sum).toBe("17/35");
        });
        it("returns sum as mixed number fraction when given mixed number fractions", () => {
            const sum = add("2/5", "3_1/7");

            expect(sum).toBe("3_19/35");
        });
        it("returns sum as mixed number fraction when given whole number", () => {
            const sum = add("7/8", "6");

            expect(sum).toBe("6_7/8");
        });
        it("returns sum as whole number when given fractions", () => {
            const sum = add("7/8", "1/8");

            expect(sum).toBe("1");
        });
    });

    describe("Subtract", () => {
        it("returns difference as proper fraction when given mixed number fractions", () => {
            const difference = subtract("4/5", "2/3");

            expect(difference).toBe("2/15");
        });
        it("returns difference as proper fraction when given mixed number fractions", () => {
            const difference = subtract("1_6/7", "1_1/2");

            expect(difference).toBe("5/14");
        });
        it("returns difference as mixed number fraction when given improper fractions", () => {
            const difference = subtract("17/10", "3/4");

            expect(difference).toBe("19/20");
        });
        it("returns difference as mixed number fraction when given mixed number fractions", () => {
            const difference = subtract("5_1/3", "2_9/8");

            expect(difference).toBe("2_5/24");
        });
        it("returns difference as proper fraction when given whole number", () => {
            const difference = subtract("1", "2/3");

            expect(difference).toBe("1/3");
        });
        it("returns difference as mixed number fraction when given whole number", () => {
            const difference = subtract("4", "4/3");

            expect(difference).toBe("2_2/3");
        });
        it("returns difference as whole number when given fractions", () => {
            const difference = subtract("2_3/4", "3/4");

            expect(difference).toBe("2");
        });
    });
})