function calculateTax(amount: number, discount: number): number;
function calculateTax(amount: null, discount: number): null;
function calculateTax(amount: number | null, discount: number = 0, ...extraFees: number[]): number | null {
    if (amount != null) {
        return (amount * 1.2) - discount
            + extraFees.reduce((total, val) => total + val, 0);
    }
    return null;
}

function writeValue(label: string, value: number): void {
    console.log(`${label}: ${value}`);
}

writeValue("Tax value", calculateTax(100, 0));
