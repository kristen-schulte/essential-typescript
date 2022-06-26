import { City, Person, Product, Employee } from "./dataTypes";

type MakeOptional<T> = {
    [P in keyof T]?: T[P]
};

type MakeRequired<T> = {
    [P in keyof T]-?: T[P]
};

type MakeReadOnly<T> = {
    readonly [P in keyof T]: T[P]
};

type MakeReadWrite<T> = {
    -readonly [P in keyof T]: T[P]
};

type optionalType = MakeOptional<Product>;
type requiredType = MakeRequired<optionalType>;
type readonlyType = MakeReadOnly<requiredType>;
type readWriteType = MakeReadWrite<readonlyType>;

let p: readWriteType = { name: "Kayak", price: 275 };
console.log(`Mapped type: ${p.name}, ${p.price}`);

// let c: Mapped<City> = { name: "London", population: 8136000 };
// console.log(`Mapped type: ${c.name}, ${c.population}`);
