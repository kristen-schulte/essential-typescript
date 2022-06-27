import { LocalDataSource } from "./data/localDataSource";

async function displayData(): Promise<string> {
    const ds = new LocalDataSource();
    const allProducts = await ds.getProducts("name");
    const categories = await ds.getCategories();
    const chessProducts = await ds.getProducts("name", "Chess");

    let result = "";

    allProducts.forEach(p => result += `Product: ${p.name}, ${p.category}\n`);
    categories.forEach(c => result += (`Category: ${c}\n`))
    chessProducts.forEach(p => ds.order.addProduct(p, 1));
    result += `Order total: $${ds.order.total.toFixed(2)}`;

    return result;
}

displayData().then(res => console.log(res));