"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
function getValue(item, keyname) {
    return item[keyname];
}
// type priceType = Product["price"];
// type allTypes = Product[keyof Product];
// let p = new Product("Running Shoes", 100);
// console.log(getValue<Product, "name">(p, "name"));
// console.log(getValue(p, "price"));
// let e = new Employee("Bob Smith", "Sales");
// console.log(getValue(e, "name"));
// console.log(getValue(e, "role"));
let products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
// type shapeType = { name: string };
class Collection {
    constructor(initialItems = [], propertyName) {
        this.propertyName = propertyName;
        this.items = new Map();
        this.add(...initialItems);
    }
    add(...newItems) {
        newItems.forEach(newItem => this.items.set(newItem[this.propertyName], newItem));
    }
    get(key) {
        return this.items.get(key);
    }
    get count() {
        return this.items.size;
    }
    [Symbol.iterator]() {
        return this.items.values();
    }
}
const productCollection = new Collection(products, "price");
console.log(`There are ${productCollection.count} products`);
let itemByKey = productCollection.get(100);
console.log(`Item: ${itemByKey.name}, ${itemByKey.price}`);
// [...productCollection].forEach(p => console.log(`Product: ${p.name}, ${p.price}`));
