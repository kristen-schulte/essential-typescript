"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("./calc");
let printMessage = (msg) => {
    console.log(`Message: ${msg}`);
};
printMessage("Hello, TypeScript");
debugger;
let total = calc_1.sum(100, 200, 300);
console.log(`Total: ${total}`);
// let data = new Map();
// data.set("Bob", "London");
// data.set("Alice", "Paris");
// data.forEach((val, key) => console.log(`${key} lives in ${val}`));
//# sourceMappingURL=index.js.map