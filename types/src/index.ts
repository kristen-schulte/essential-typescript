import { Person, Product, City, Employee } from "./dataTypes";

let people = [new Person("Bob Smith", "London"), new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];
let employees = [new Employee("Bob Smith", "Sales"), new Employee("Alice Jones", "Sales")];

class DataCollection<T> {
    protected items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    filter<V extends T>(predicate: (target) => target is V): V[] {
        return this.items.filter(item => predicate(item)) as V[];
    }

    collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
        let results = [];
        this.items.forEach(item => {
            let match = targetData.find(d => d[targetProp] === item[itemProp]);
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        });
        return results;
    }

    add(newItem: T) {
        this.items.push(newItem);
    }

    // getNames(): string[] {
    //     return this.items.map(item => item.name);
    // }

    getItem(index: number): T {
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

let mixedData = new DataCollection<Person | Product>([...people, ...products]);
function isProduct(target): target is Product {
    return target instanceof Product;
}
const filteredProducts = mixedData.filter<Product>(isProduct);
filteredProducts.forEach(p => console.log(`Product: ${p.name}, ${p.price}`));

// let employeeData = new SearchableCollection<Employee>(employees);
// employeeData.find("Sales").forEach(e =>
//     console.log(`Employee ${e.name}, ${e.role}`));