let { multiply, divide, add, subtract } = require("../assets/operationFuncs.js");

describe("Operations", () => {
    describe("Multiply", () => {
        it("proper fraction => proper fraction", () => {
            const product = multiply("1/3", "1/2");
            expect(product).toBe("1/6");
        });
        it("mixed number => proper fraction", () => {
            const product = multiply("1_1/3", "1/2");
            expect(product).toBe("2/3");
        });
        it("improper fraction => mixed number", () => {
            const product = multiply("7/2", "6/8");
            expect(product).toBe("2_5/8");
        });
        it("mixed number => mixed number", () => {
            const product = multiply("1_1/3", "2_4/5");
            expect(product).toBe("3_11/15");
        });
        it("whole number => mixed number", () => {
            const product = multiply("1/3", "4");
            expect(product).toBe("1_1/3")
        });
        it("fractions => whole number", () => {
            const product = multiply("3/5", "10/3");
            expect(product).toBe("2")
        });
        it("negative proper fraction => negative proper fraction", () => {
            const product = multiply("-3/5", "1/8");
            expect(product).toBe("-3/40");
        });
        it("negative denominator fraction => negative proper fraction", () => {
            const product = multiply("3/-5", "1/8");
            expect(product).toBe("-3/40");
        });
        it("negative mixed number => negative mixed number", () => {
            const product = multiply("-3_1/2", "3/5");
            expect(product).toBe("-2_1/10");
        });
        it("negative mixed numbers & negative denominator => proper fraction", () => {
            const product = multiply("-3_1/2", "1/-8");
            expect(product).toBe("7/16");
        });
        it("negative proper fraction => negative proper fraction", () => {
            const product = multiply("-1/2", "2/3");
            expect(product).toBe("-1/3");
        });
        it("negative improper fraction => negative mixed number", () => {
            const product = multiply("-10/3", "4/3");
            expect(product).toBe("-4_4/9");
        });
        it("proper fraction => zero", () => {
            const product = multiply("56/70", "0");
            expect(product).toBe("0");
        });
        it("improper fraction => zero", () => {
            const product = multiply("0/1", "9948/45");
            expect(product).toBe("0");
        });
        it("mixed number => zero", () => {
            const product = multiply("0_0/2", "3_23/4");
            expect(product).toBe("0");
        });
        it("whole numbers => zero", () => {
            const product = multiply("0", "8849");
            expect(product).toBe("0");
        });
    });

    describe("Divide", () => {
        it("proper fraction => proper fraction", () => {
            const quotient = divide("1/3", "2/4");
            expect(quotient).toBe("2/3");
        });
        it("mixed number => proper fraction", () => {
            const quotient = divide("1_2/3", "4_5/6");
            expect(quotient).toBe("10/29");
        });
        it("proper fraction => mixed number", () => {
            const quotient = divide("7/9", "3/4");
            expect(quotient).toBe("1_1/27");
        });
        it("mixed number => mixed number", () => {
            const quotient = divide("7_8/9", "3_2/4");
            expect(quotient).toBe("2_16/63");
        });
        it("whole number => mixed number", () => {
            const quotient = divide("3", "2/3");
            expect(quotient).toBe("4_1/2");
        });
        it("whole number => proper fraction", () => {
            const quotient = divide("3", "10/3");
            expect(quotient).toBe("9/10");
        });
        it("fractions => whole number", () => {
            const quotient = divide("1/3", "2/12");
            expect(quotient).toBe("2");
        });
        it("negative proper fraction => negative mixed number", () => {
            const quotient = divide("5/6", "-4/5");
            expect(quotient).toBe("-1_1/24");
        });
        it("negative improper fraction => negative proper fraction", () => {
            const quotient = divide("-12/3", "11/2");
            expect(quotient).toBe("-8/11");
        });
        it("negative proper fractions => proper fraction", () => {
            const quotient = divide("1/-3", "-2/4");
            expect(quotient).toBe("2/3");
        });
        it("negative mixed number => negative proper fraction", () => {
            const quotient = divide("1_-2/3", "4_5/6");
            expect(quotient).toBe("-10/29");
        });
        it("proper fraction => zero", () => {
            const quotient = divide("0", "67/90");
            expect(quotient).toBe("0");
        });
        it("improper fraction => zero", () => {
            const quotient = divide("0", "-43/2");
            expect(quotient).toBe("0");
        });
        it("mixed number => zero", () => {
            const quotient = divide("0", "4_7/-3");
            expect(quotient).toBe("0");
        });
        it("whole numbers => zero", () => {
            const quotient = divide("0", "84893");
            expect(quotient).toBe("0");
        });
    });

    describe("Add", () => {
        it("proper fraction => proper fraction", () => {
            const sum = add("1/5", "2/7");
            expect(sum).toBe("17/35");
        });
        it("mixed number => mixed number", () => {
            const sum = add("2/5", "3_1/7");
            expect(sum).toBe("3_19/35");
        });
        it("whole number => mixed number", () => {
            const sum = add("7/8", "6");
            expect(sum).toBe("6_7/8");
        });
        it("fractions => whole number", () => {
            const sum = add("7/8", "1/8");
            expect(sum).toBe("1");
        });
        it("neg & pos proper fractions => proper fraction", () => {
            const sum = add("1/-5", "6/7");
            expect(sum).toBe("23/35");
        });
        it("neg & pos proper fractions => negative proper fraction", () => {
            const sum = add("-3/5", "1/2");
            expect(sum).toBe("-1/10")
        }); 6
        it("pos & neg proper fraction => proper fraction", () => {
            const sum = add("6/7", "-1/5");
            expect(sum).toBe("23/35");
        });
        it("pos & neg proper fraction => neg proper fraction", () => {
            const sum = add("1/2", "3/-5");
            expect(sum).toBe("-1/10");
        });
        it("neg & neg proper fraction => neg proper fraction", () => {
            const sum = add("-4/7", "3/-10");
            expect(sum).toBe("-61/70");
        });
        it("neg & pos improper fractions => proper fraction", () => {
            const sum = add("-7/2", "15/4");
            expect(sum).toBe("1/4");
        });
        it("neg & pos improper fractions => neg proper fraction", () => {
            const sum = add("10/-9", "3/24");
            expect(sum).toBe("-71/72");
        });
        it("pos & neg improper fraction => proper fraction", () => {
            const sum = add("15/4", "-7/2");
            expect(sum).toBe("1/4");
        });
        it("pos & neg improper fraction => neg proper fraction", () => {
            const sum = add("3/24", "-10/9");
            expect(sum).toBe("-71/72");
        });
        it("neg & neg improper fraction => neg mixed number", () => {
            const sum = add("-14/9", "-56/43");
            expect(sum).toBe("-2_332/387");
        });
        it("neg & pos mixed numbers => proper fraction", () => {
            const sum = add("-1_1/3", "2_1/4");
            expect(sum).toBe("11/12");
        });
        it("neg & pos mixed numbers => neg mixed number", () => {
            const sum = add("-4_24/30", "2_6/10");
            expect(sum).toBe("-2_1/5");
        });
        it("proper fraction => zero", () => {
            let sum = add("-1/2", "1/2");
            expect(sum).toBe("0");
        });
        it("improper fraction => zero", () => {
            let sum = add("4/2", "4/-2");
            expect(sum).toBe("0");
        });
        it("mixed number => zero", () => {
            let sum = add("1_-3/4", "7/4");
            expect(sum).toBe("0");
        });
        it("whole numbers => zero", () => {
            let sum = add("-3", "3");
            expect(sum).toBe("0")
        });
    });

    describe("Subtract", () => {
        it("proper fraction => proper fraction", () => {
            const difference = subtract("4/5", "2/3");
            expect(difference).toBe("2/15");
        });
        it("mixed number => proper fraction", () => {
            const difference = subtract("1_6/7", "1_1/2");
            expect(difference).toBe("5/14");
        });
        it("improper fraction => proper fraction", () => {
            const difference = subtract("17/10", "3/4");
            expect(difference).toBe("19/20");
        });
        it("mixed number => mixed number", () => {
            const difference = subtract("5_1/3", "2_9/8");
            expect(difference).toBe("2_5/24");
        });
        it("whole number => proper fraction", () => {
            const difference = subtract("1", "2/3");
            expect(difference).toBe("1/3");
        });
        it("whole number => mixed number", () => {
            const difference = subtract("4", "4/3");
            expect(difference).toBe("2_2/3");
        });
        it("fractions => whole number", () => {
            const difference = subtract("2_3/4", "3/4");
            expect(difference).toBe("2");
        });
        it("proper fraction => zero", () => {
            const difference = subtract("-3/4", "3/-4");
            expect(difference).toBe("0");
        });
        it("improper fraction => zero", () => {
            const difference = subtract("14/3", "-14/-3");
            expect(difference).toBe("0");
        });
        it("mixed number => zero", () => {
            const difference = subtract("3_1/3", "-3_2/-6");
            expect(difference).toBe("0");
        });
        it("whole numbers => zero", () => {
            const difference = subtract("1", "1");
            expect(difference).toBe("0");
        })
    });
})