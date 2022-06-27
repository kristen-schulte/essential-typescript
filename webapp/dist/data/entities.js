export class OrderLine {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    get total() {
        return this.product.price * this.quantity;
    }
}
export class Order {
    constructor(initiaLines) {
        this.lines = new Map();
        if (initiaLines) {
            initiaLines.forEach(ol => this.lines.set(ol.product.id, ol));
        }
    }
    addProduct(prod, quantity) {
        if (this.lines.has(prod.id)) {
            if (quantity === 0) {
                this.removeProduct(prod.id);
            }
            else {
                this.lines.get(prod.id).quantity += quantity;
            }
        }
        else {
            this.lines.set(prod.id, new OrderLine(prod, quantity));
        }
    }
    removeProduct(id) {
        this.lines.delete(id);
    }
    get orderLines() {
        return [...this.lines.values()];
    }
    get productCount() {
        return [...this.lines.values()].reduce((total, ol) => total += ol.quantity, 0);
    }
}
