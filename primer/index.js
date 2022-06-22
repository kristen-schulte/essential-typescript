class Product {
  constructor(name, price) {
    this.id = Symbol();
    this.name = name;
    this.price = price;
  }

  toString() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  }
}

let product = new Product("Hat", 100);
let productArray = [];
let productSet = new Set();

for (let i = 0; i < 5; i++) {
  productArray.push(product);
  productSet.add(product);
}

console.log(`Array length: ${productArray.length}`);
console.log(`Set size: ${productSet.size}`);

// class Supplier {
//   constructor(name, productids) {
//     this.name - name;
//     this.productids = productids;
//   }
// }

// let acmeProducts = [new Product("Hat", 100), new Product("Boots", 100)];
// let zoomProducts = [new Product("Hat", 100), new Product("Boots", 100)];

// let products = new Map();
// [...acmeProducts, ...zoomProducts].forEach((p) => products.set(p.id, p));

// let suppliers = new Map();
// suppliers.set(
//   "acme",
//   new Supplier(
//     "Acme Co",
//     acmeProducts.map((p) => p.id)
//   )
// );
// suppliers.set(
//   "zoom",
//   new Supplier(
//     "Zoom Shoes",
//     zoomProducts.map((p) => p.id)
//   )
// );

// suppliers
//   .get("acme")
//   .productids.forEach((id) => console.log(`Name: ${products.get(id).name}`));

// let data = new Map();
// data.set("hat", new Product("Hat", 100));
// data.set("boots", new Product("Boots", 100));

// [...data.keys()].forEach((key) => console.log(data.get(key).toString()));
