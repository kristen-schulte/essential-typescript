import { SportsProduct, SPORT } from "./product";
import { Cart } from "./cart";
import { sizeFormatter, costFormatter } from "./formatters";

const kayak = new SportsProduct(1, "Kayak", 275, SPORT.Watersports);
const hat = new SportsProduct(2, "Hat", 22.10, SPORT.Running, SPORT.Watersports);
const ball = new SportsProduct(3, "Soccer Ball", 19.50, SPORT.Soccer);

const cart = new Cart("Bob");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);

sizeFormatter("Cart", cart.itemCount);
costFormatter("Cart", cart.totalPrice);
costFormatter("Cart", "100");
