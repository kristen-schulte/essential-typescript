"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
function total(data, propName) {
    return data.reduce((t, item) => t += Number(item[propName]), 0);
}
const products = [new dataTypes_1.Product("Kayak", 275), new dataTypes_1.Product("Lifejacket", 48.95)];
console.log(`Total: ${total(products, "price")}`);
