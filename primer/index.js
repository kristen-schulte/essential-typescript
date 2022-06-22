let Product = function (name, price) {
  this.name = name;
  this.price = price;
};

Product.prototype.toString = function () {
  return `toString: Name: ${this.name}, Price: ${this.price}`;
};

Product.process = (...products) =>
  products.forEach((p) => console.log(p.toString()));

Product.process(new Product("Hat", 100, 1.2), new Product("Boots", 100));

// let TaxedProduct = function (name, price, taxRate) {
//   Product.call(this, name, price);
//   this.taxRate = taxRate;
// };
// Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);
// TaxedProduct.prototype.getPriceIncTax = function () {
//   return Number(this.price) * this.taxRate;
// };
// TaxedProduct.prototype.toTaxString = function () {
//   return `${this.toString()}, Tax: ${this.getPriceIncTax()}`;
// };

// let hat = new TaxedProduct("Hat", 100, 1.2);
// let boots = new Product("Boots", 100);
