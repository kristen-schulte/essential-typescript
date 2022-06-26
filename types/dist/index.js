"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const p1 = { name: "Kayak" };
const p2 = { name: "Kayak" };
const p3 = { name: "Kayak" };
console.log(`Custom mapped type: ${p1.name}`);
console.log(`Built-in mapped type (Pick): ${p2.name}`);
console.log(`Built-in mapped type (Omit): ${p3.name}`);
