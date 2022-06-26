"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
function makeObject(constructor, ...args) {
    return new constructor(...args);
}
let prod = makeObject(dataTypes_1.Product, "Kayak", 275);
let city = makeObject(dataTypes_1.City, "London", 8136000);
[prod, city].forEach(item => console.log(`Name: ${item.name}`));
