import Database from "../connectionDB";

class Carts {
  id: number;
  eanId: string;
  productName: string;
  price: number;
  order_id: number;
  user_id: number;
  created_at: Date;
  updated_at: Date;

  constructor(
    id: number,
    eanId: string,
    productName: string,
    price: number,
    order_id: number,
    user_id: number,
    created_at: Date,
    updated_at: Date,

  ) {
    this.id = id;
    this.eanId = eanId;
    this.productName = productName;
    this.price = price;
    this.order_id = order_id;
    this.user_id = user_id;
    this.created_at = created_at;
    this.updated_at = updated_at;

  }

  create = async () => {
    const db = new Database();
    const connection = await db.getDBConnection();
    if (connection) {
      try {
        await connection.executeSql(`
          CREATE TABLE IF NOT EXISTS carts (
            id INTEGER PRIMARY KEY,
            eanId TEXT,
            productName TEXT,
            price INTEGER,
            order_id,
            user_id,
            FOREIGN KEY (order_id) REFERENCES orders(id),
            FOREIGN KEY (user_id) REFERENCES users(id),
            created_at DATE,
            updated_at DATE,
          )
        `);
        console.log('Tabella "products" creata correttamente.');
      } catch (error) {
        console.error('Errore durante la creazione della tabella "products":', error);
        throw error;
      }
    }
  }
}

export default Carts;
