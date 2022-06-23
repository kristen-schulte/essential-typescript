function calculateTax(amount, discount) {
    return (amount * 1.2) - (discount || 0);
}
let taxValue = calculateTax(100, 0);
console.log(`Total Amount: ${taxValue}`);
taxValue = calculateTax(100);
console.log(`Total Amount: ${taxValue}`);
