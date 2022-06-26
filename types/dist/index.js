"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let people = [new dataTypes_1.Person("Bob Smith", "London"), new dataTypes_1.Person("Dora Peters", "New York")];
let products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
let cities = [new dataTypes_1.City("London", 8136000), new dataTypes_1.City("Paris", 2141000)];
let employees = [new dataTypes_1.Employee("Bob Smith", "Sales"), new dataTypes_1.Employee("Alice Jones", "Sales")];
class DataCollection {
    constructor(initialItems) {
        this.items = [];
        this.items.push(...initialItems);
    }
    filter(predicate) {
        return this.items.filter(item => predicate(item));
    }
    collate(targetData, itemProp, targetProp) {
        let results = [];
        this.items.forEach(item => {
            let match = targetData.find(d => d[targetProp] === item[itemProp]);
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        });
        return results;
    }
    add(newItem) {
        this.items.push(newItem);
    }
    // getNames(): string[] {
    //     return this.items.map(item => item.name);
    // }
    getItem(index) {
        return this.items[index];
    }
}
// class SearchableCollection<T extends Employee | Person> extends DataCollection<T>{
//     constructor(initialItems: T[]) {
//         super(initialItems);
//     }
//     find(searchTerm: string): T[] {
//         return this.items.filter(item => {
//             if (item instanceof Employee) {
//                 return item.name === searchTerm || item.role === searchTerm;
//             } else if (item instanceof Person) {
//                 return item.name === searchTerm || item.city === searchTerm;
//             }
//         });
//     }
// }
let mixedData = new DataCollection([...people, ...products]);
function isProduct(target) {
    return target instanceof dataTypes_1.Product;
}
const filteredProducts = mixedData.filter(isProduct);
filteredProducts.forEach(p => console.log(`Product: ${p.name}, ${p.price}`));
// let employeeData = new SearchableCollection<Employee>(employees);
// employeeData.find("Sales").forEach(e =>
//     console.log(`Employee ${e.name}, ${e.role}`));
