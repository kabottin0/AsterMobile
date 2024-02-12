import Tables from "../Tables";

class Order extends Tables {
  id: number;
  orderDate: string;
  note: string;
  created_at: Date;
  updated_at: Date;

  constructor(
    id: number,
    orderDate: string,
    note: string,
    created_at: Date,
    updated_at: Date,
    name: string,
    columns: { name: string, type: string }[]
  ) {
    super(name, columns);
    this.id = id;
    this.orderDate = orderDate;
    this.note = note
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

export default Order;


