"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
class Collection {
    constructor(initialItems = []) {
        this.initialItems = initialItems;
        this.items = new Map();
        this.add(...initialItems);
    }
    add(...newItems) {
        newItems.forEach(newItem => this.items.set(newItem.name, newItem));
    }
    get(name) {
        return this.items.get(name);
    }
    get count() {
        return this.items.size;
    }
    values() {
        return this.items.values();
    }
}
let productCollection = new Collection(products);
console.log(`There are ${productCollection.count} products`);
[...productCollection.values()].forEach(p => console.log(`Product: ${p.name}, ${p.price}`));
// let iterator: Iterator<Product> = productCollection.values();
// let result: IteratorResult<Product> = iterator.next();
// while (!result.done) {
//     console.log(`Product: ${result.value.name}, ${result.value.price}`);
//     result = iterator.next();
// }
