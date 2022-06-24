type Person = {
    id: string,
    name: string,
    city: string
}

class Employee {
    id: string;
    name: string;
    dept: string;
    city: string;

    constructor(id: string, name: string, dept: string, city: string) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    };

    writeDept = function () {
        console.log(`${this.name} works in ${this.dept}`);
    }
}


let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");

let data: (Person | Employee)[] = [{
    id: "bsmith",
    name: "Bob Smith",
    city: "London"
}, {
    id: "dpeters",
    name: "Dora Peters",
    city: "New York"
}, {
    id: "ajones", name: "Alice Jones", city: "Paris"
}, salesEmployee];

data.forEach(item => {
    if (item instanceof Employee) {
        item.writeDept();
    } else {
        console.log(`${item.id} ${item.name}, ${item.city}`)
    }
})