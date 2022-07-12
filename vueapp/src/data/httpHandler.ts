import Axios from "axios";
import { Product, Order } from "./entities";

const baseUrl = "http://localhost:4600";

const urls = {
    products: `${baseUrl}/products`,
    orders: `${baseUrl}/orders`
}

export class HttpHandler {
    loadProducts(): Promise<Product[]> {
        return Axios.get<Product[]>(urls.products).then(response => response.data);
    }

    storeOrder(order: Order): Promise<number> {
        const orderData = {
            lines: [...order.orderLines.values()].map(ol => ({
                productId: ol.product.id,
                productName: ol.product.name,
                quantity: ol.quantity
            }))
        }

        return Axios.post<{ id: number }>(urls.orders, orderData).then(response => response.data.id);
    }
}