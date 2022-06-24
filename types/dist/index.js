function check(expression) {
    if (!expression) {
        throw new Error("Expression is false");
    }
}
function checkNumber(val) {
    if (typeof val != "number") {
        throw new Error("Not a number");
    }
}
function calculateTax(amount, discount = 0, ...extraFees) {
    //check(typeof amount == "number");
    checkNumber(amount);
    return (amount * 1.2) - discount
        + extraFees.reduce((total, val) => total + val, 0);
}
function writeValue(label, value) {
    console.log(`${label}: ${value}`);
}
writeValue("Tax value", calculateTax(100, 0));
