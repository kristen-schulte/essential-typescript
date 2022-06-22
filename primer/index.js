import calcTaxandSum, { calculateTax } from "./tax";
import { printDetails, applyDiscount } from "./utils";

class Product {
  constructor(name, price) {
    this.id = Symbol();
    this.name = name;
    this.price = price;
  }

  toString() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  }
}

let product = new Product("Hat", 100);
applyDiscount(product, 10);
let taxedPrice = calculateTax(product.price);
printDetails(product);

let products = [new Product("Gloves", 23), new Product("Boots", 100)];
let totalPrice = calcTaxandSum(...products.map((p) => p.price));
console.log(`Total Price: ${totalPrice.toFixed(2)}`);
