import { SportsProduct, SPORT } from "./product";
import { Cart } from "./cart";

const kayak = new SportsProduct(1, "Kayak", 275, SPORT.Watersports);
const hat = new SportsProduct(2, "Hat", 22.10, SPORT.Running, SPORT.Watersports);
const ball = new SportsProduct(3, "Soccer Ball", 19.50, SPORT.Soccer);

const cart = new Cart("Bob");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);

console.log(`Cart has ${cart.itemCount} items`);
console.log(`Cart value is $${cart.totalPrice.toFixed(2)}`);