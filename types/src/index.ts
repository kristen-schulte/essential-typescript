import { City, Person, Product, Employee } from "./dataTypes";

type SelectProperties<T, K extends keyof T> = {
    [P in K]: T[P]
};

type MakeReadWrite<T> = {
    -readonly [P in keyof T]: T[P]
};

type optionalType = Partial<Product>;
type requiredType = Required<optionalType>;
type readonlyType = Readonly<requiredType>;
type readWriteType = MakeReadWrite<readonlyType>;

const p1: SelectProperties<Product, "name"> = { name: "Kayak" };
const p2: Pick<Product, "name"> = { name: "Kayak" };
const p3: Omit<Product, "price"> = { name: "Kayak" };

console.log(`Custom mapped type: ${p1.name}`);
console.log(`Built-in mapped type (Pick): ${p2.name}`);
console.log(`Built-in mapped type (Omit): ${p3.name}`);
