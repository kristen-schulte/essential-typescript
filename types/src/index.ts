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

    static reverse<ArrayType>(items: ArrayType[]): ArrayType[] {
        return items.reverse();
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

    getItem(index: number): T {
        return this.items[index];
    }
}

let mixedData = new DataCollection<Person | Product>([...people, ...products]);
function isProduct(target): target is Product {
    return target instanceof Product;
}
const filteredProducts = mixedData.filter<Product>(isProduct);
filteredProducts.forEach(p => console.log(`Product: ${p.name}, ${p.price}`));

let reversedCities = DataCollection.reverse<City>(cities);
reversedCities.forEach(c => console.log(`City: ${c.name}, ${c.population}`));