import Axios from "axios";
import { Product, Order } from "./entities";


const urls = {
    products: "/api/products",
    orders: "/api/orders",
}

export class HttpHandler {
    loadProducts(callback: (products: Product[]) => void): void {
        Axios.get(urls.products).then(response => callback(response.data))
    }

    storeOrder(order: Order, callback: (id: number) => void): void {
        const orderData = {
            lines: [...order.orderLines.values()].map(ol => ({
                prodctId: ol.product.id,
                productName: ol.product.name,
                quantity: ol.quantity
            }))
        }
        Axios.post(urls.orders, orderData).then(response => callback(response.data.id));
    }
}