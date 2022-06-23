function calculateTax(amount, discount = 0, ...extraFees) {
    if (amount != null) {
        return (amount * 1.2) - discount
            + extraFees.reduce((total, val) => total + val, 0);
    }
    return null;
}
function writeValue(label, value) {
    console.log(`${label}: ${value}`);
}
writeValue("Tax value", calculateTax(100, 0));
