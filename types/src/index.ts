function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hat: [string, number, number?, ...number[]] = ["Hat", 100, 10, 1.2, 3, .95];
let gloves: [string, number, number?, ...number[]] = ["Gloves", 75, 10];

[hat, gloves].forEach(tuple => {
    let [name, price, taxRate, ...coupons] = tuple;

    if (taxRate != undefined) {
        price += price * (taxRate / 100);
    }
    coupons.forEach(c => price -= c);
    writePrice(name, price);
})

// let products: [string, number][] = [["Hat", 100], ["Gloves", 75]];
// let tupleUnion: ([string, number] | boolean)[] = [true, false, hat, ...products];

// tupleUnion.forEach((elem: [string, number] | boolean) => {
//     if (elem instanceof Array) {
//         let [str, num] = elem;
//         writePrice(str, calculateTax(num));
//     } else if (typeof elem === "boolean") {
//         console.log(`Boolean Value: ${elem}`);
//     }
// });