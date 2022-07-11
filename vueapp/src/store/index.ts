import { createStore } from 'vuex';
import { Product, Order } from '@/data/entities';

export interface StoreState {
  products: Product[],
  order: Order,
  selectedCategory: string
}

type ProductSelection = {
  product: Product,
  quantity: number
}

export default createStore<StoreState>({
  state: {
    products: [1, 2, 3, 4, 5].map((num) =>
      new Product(num, `Prod${num}`, `Product ${num}`, `Cat${num % 2}`, 450)
    ),
    order: new Order(),
    selectedCategory: "All"
  },
  mutations: {
    selectCategory(currentState: StoreState, category: string) {
      currentState.selectedCategory = category;
    },
    addToOrder(currentState: StoreState, selection: ProductSelection) {
      currentState.order.addProduct(selection.product, selection.quantity);
    }
  },
  getters: {
    categories(state): string[] {
      return ["All", ...new Set(state.products.map(p => p.category))];
    },
    filteredProducts(state): Product[] {
      return state.products.filter(p => state.selectedCategory === "All" || state.selectedCategory === p.category);
    }
  },
  actions: {
  },
  modules: {
  }
})
