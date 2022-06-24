type Person = {
    id: string,
    name: string,
    city: string,
    getContact(field: number): number
}

type Employee = {
    id: string,
    company: string,
    dept: string,
    getContact(field: string): string
}

type EmployedPerson = Person & Employee;

let person1: EmployedPerson = {
    id: "bsmith",
    name: "Bob Smith",
    city: "London",
    company: "Acme Co",
    dept: "Sales",
    getContact(field: string | number): any {
        return typeof field === "string" ? "Alice" : 6512345643
    }
}

let person2: EmployedPerson = {
    id: "dpeters",
    name: "Dora Peters",
    city: "New York",
    company: "Acme Co",
    dept: "Development",
    getContact(field: string | number): any {
        return typeof field === "string" ? "Alice" : 6512345643
    }
}

let typetest = person1.getContact;
let stringParamTypeTest = person1.getContact("Alice");
let numberParamTypeTest = person1.getContact(12);

console.log(`Contact: ${person1.getContact("Alice")}`);
console.log(`Contact: ${person1.getContact(12)}`);