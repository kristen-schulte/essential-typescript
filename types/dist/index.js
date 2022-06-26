"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
function getValue(data, propName) {
    if (Array.isArray(data)) {
        return data[0][propName];
    }
    else {
        return data[propName];
    }
}
const products = [new dataTypes_1.Product("Kayak", 275), new dataTypes_1.Product("Lifejacket", 48.95)];
console.log(`Array Value: ${getValue(products, "price")}`);
console.log(`Single Total: ${getValue(products[0], "price")}`);
