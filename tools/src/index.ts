import { sum } from "./calc";

let printMessage = (msg: string): void => {
    console.log(`Message: ${msg}`);
}

printMessage("Hello, TypeScript");

let total = sum(100, 200, 300);
console.log(`Total: ${total}`);

// let data = new Map();
// data.set("Bob", "London");
// data.set("Alice", "Paris");
// data.forEach((val, key) => console.log(`${key} lives in ${val}`));