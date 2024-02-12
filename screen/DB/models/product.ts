import Tables from "../Tables";

class Product extends Tables {
  id: number;
  eanId: number;
  productName: string;
  quantity: number;
  priceList: { id: number, productName: string, price: number }[];
  created_at: Date;
  updated_at: Date;

  constructor(
    id: number,
    eanId: number,
    productName: string,
    quantity: number,
    priceList: { id: number, productName: string, price: number }[],
    created_at: Date,
    updated_at: Date,
    name: string,
    columns: { name: string, type: string }[]
  ) {
    super(name, columns);
    this.id = id;
    this.eanId = eanId;
    this.productName = productName;
    this.quantity = quantity;
    this.priceList = priceList;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

export default Product;



