class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  toString() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  }
}

class GiftPack {
  constructor(name, prod1, prod2, prod3) {
    this.name = name;
    this.prod1 = prod1;
    this.prod2 = prod2;
    this.prod3 = prod3;
  }

  getTotalPrice() {
    return [this.prod1, this.prod2, this.prod3].reduce(
      (total, p) => total + p.price,
      0
    );
  }

  *[Symbol.iterator]() {
    yield this.prod1;
    yield this.prod2;
    yield this.prod3;
  }
}

let winter = new GiftPack(
  "winter",
  new Product("Hat", 100),
  new Product("Boots", 80),
  new Product("Gloves", 23)
);

console.log(`Total price: ${winter.getTotalPrice()}`);
[...winter].forEach((p) => console.log(`Product: ${p}`));

// function* createProductIterator() {
//   yield new Product("Hat", 100);
//   yield new Product("Boots", 100);
//   yield new Product("Umbrella", 23);
// }

// [...createProductIterator()].forEach((p) => console.log(p.toString()));

// class TaxedProduct extends Product {
//   constructor(name, price, taxRate = 1.2) {
//     super(name, price);
//     this.taxRate = taxRate;
//   }

//   getPriceIncTax() {
//     return Number(this.price) * this.taxRate;
//   }

//   toString() {
//     let chainResult = super.toString();
//     return `${chainResult}, Tax: ${this.getPriceIncTax()}`;
//   }

//   static process(...products) {
//     products.forEach((p) => console.log(p.toString()));
//   }
// }

// TaxedProduct.process(
//   new TaxedProduct("Hat", 100, 1.2),
//   new TaxedProduct("Boots", 100)
// );
