"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
function convertProduct(p) {
    return { name: p.name, price: `$${p.price.toFixed(2)}` };
}
const kayak = convertProduct(new dataTypes_1.Product("Kayak", 275));
console.log(`Product: ${kayak.name}, ${kayak.price}`);
