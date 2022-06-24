let person1 = {
    id: "bsmith",
    name: "Bob Smith",
    city: "London",
    company: "Acme Co",
    dept: "Sales",
    getContact(field) {
        return typeof field === "string" ? "Alice" : 6512345643;
    }
};
let person2 = {
    id: "dpeters",
    name: "Dora Peters",
    city: "New York",
    company: "Acme Co",
    dept: "Development",
    getContact(field) {
        return typeof field === "string" ? "Alice" : 6512345643;
    }
};
let typetest = person1.getContact;
let stringParamTypeTest = person1.getContact("Alice");
let numberParamTypeTest = person1.getContact(12);
console.log(`Contact: ${person1.getContact("Alice")}`);
console.log(`Contact: ${person1.getContact(12)}`);
