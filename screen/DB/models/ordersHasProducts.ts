// extend table
import Tables from "../Tables";
import Product from "./product";

class OrderHasProducts extends Tables {
  id: number;
  products: Product[];
  created_at: Date;
  updated_at: Date;

  constructor(
    id: number,
    products: Product[],
    created_at: Date,
    updated_at: Date,
    name: string,
    columns: { name: string, type: string }[]
  ) {
    super(name, columns);
    this.id = id;
    this.products = products
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

export default OrderHasProducts;


