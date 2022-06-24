interface Person {
    name: string;
    getDetails(): string;
    dogName?: string;
    getDogDetails?(): string;
}

abstract class AbstractDogOwner implements Person {
    abstract name: string;
    abstract dogName?: string;

    abstract getDetails(): string;

    getDogDetails(): string {
        if (this.dogName) {
            return `${this.name} has a dog called ${this.dogName}`;
        }
    }
}

class DogOwningCustomer extends AbstractDogOwner {
    constructor(public readonly id: string,
        public name: string,
        public city: string,
        public creditLimit: number, public dogName) {
        super();
    }

    getDetails(): string {
        return `${this.name} has ${this.creditLimit} limit`;
    }
}

// class Employee implements Person {
//     constructor(
//         public readonly id: string,
//         public name: string,
//         private dept: string,
//         public city: string) {
//     };

//     getDetails(): string {
//         return `${this.name} works in ${this.dept}`;
//     }
// }

// class Customer implements Person {
//     constructor(
//         public readonly id: string,
//         public name: string,
//         public city: string,
//         public creditLimit: number,
//         public dogName) {
//     }

//     getDetails(): string {
//         return `${this.name} has ${this.creditLimit} limit`;
//     }

//     getDogDetails(): string {
//         return `${this.name} has a dog named ${this.dogName}`;
//     }
// }

let alice = new DogOwningCustomer("ajones", "Alice Jones", "London", 500, "Fido");
if (alice.getDogDetails) {
    console.log(alice.getDogDetails());
}

// let data: Person[] = [
//     new Employee("fvega", "Fidel Vega", "Sales", "Paris"), alice];

// data.forEach(item => {
//     console.log(item.getDetails());
//     if (item.getDogDetails) {
//         console.log(item.getDogDetails());
//     }
// });