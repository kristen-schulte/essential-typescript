import React, { Component } from "react";
import { Header } from "./header";
import { ProductItem } from "./productItem";
import { CategoryList } from "./categoryList";
import { Product, Order } from "./data/entities";

interface Props {
  products: Product[];
  categories: string[];
  order: Order;
  addToOrder: (product: Product, quantity: number) => void;
}

interface State {
  selectedCategory: string;
}

export class ProductList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedCategory: "All",
    };
  }

  render() {
    return (
      <div>
        <Header order={this.props.order} />
        <div className="row">
          <div className="col-3 p-2">
            <CategoryList
              categories={this.props.categories}
              selected={this.state.selectedCategory}
              selectCategory={this.selectCategory}
            />
          </div>
          <div className="col-9 p-2">
            {this.props.products.map((p) => (
              <ProductItem
                key={p.id}
                product={p}
                callback={this.props.addToOrder}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  getProducts(): Product[] {
    const filteredProds = this.props.products.filter(
      (p) =>
        this.state.selectedCategory === "All" ||
        p.category === this.state.selectedCategory
    );

    // console.log(`Products: ${filteredProds.map((p) => p.name).join(", ")}`);

    return filteredProds;
  }

  selectCategory = (cat: string) => {
    this.setState({ selectedCategory: cat });
  };
}
