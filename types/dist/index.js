class Employee {
    constructor(id, name, dept, city) {
        this.writeDept = function () {
            console.log(`${this.name} works in ${this.dept}`);
        };
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    ;
}
let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
let data = [{
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
    }
    else {
        console.log(`${item.id} ${item.name}, ${item.city}`);
    }
});
