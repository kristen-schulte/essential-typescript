function check(expression: boolean): asserts expression {
    if (!expression) {
        throw new Error("Expression is false");
    }
}

function checkNumber(val: any): asserts val is number {
    if (typeof val != "number") {
        throw new Error("Not a number");
    }
}

function calculateTax(amount: number, discount: number): number;
function calculateTax(amount: null, discount: number): null;
function calculateTax(amount: number | null, discount: number = 0, ...extraFees: number[]): number | null {
    //check(typeof amount == "number");
    checkNumber(amount);
    return (amount * 1.2) - discount
        + extraFees.reduce((total, val) => total + val, 0);
}

function writeValue(label: string, value: number): void {
    console.log(`${label}: ${value}`);
}

writeValue("Tax value", calculateTax(100, 0));
