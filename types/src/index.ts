function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

let price = 100;
let taxNumber = calculateTax(price, false) as number;
let taxString = calculateTax(price, true);


console.log(`Number Value: ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${taxString}`);