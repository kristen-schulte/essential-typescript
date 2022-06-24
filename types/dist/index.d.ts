declare type Person = {
    id: string;
    name: string;
    city: string;
    getContact(field: number): number;
};
declare type Employee = {
    id: string;
    company: string;
    dept: string;
    getContact(field: string): string;
};
declare type EmployedPerson = Person & Employee;
declare let person1: EmployedPerson;
declare let person2: EmployedPerson;
declare let typetest: ((field: number) => number) & ((field: string) => string);
declare let stringParamTypeTest: string;
declare let numberParamTypeTest: number;
