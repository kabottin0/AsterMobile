import Database from "../connectionDB";

class Product {
  id: number;
  eanId: string;
  productName: string;
  price: number;
  cart_id: number;
  created_at: Date;
  updated_at: Date;

  constructor(
    id: number,
    eanId: string,
    productName: string,
    price: number,
    cart_id: number,
    created_at: Date,
    updated_at: Date,
  ) {
    this.id = id;
    this.eanId = eanId;
    this.productName = productName;
    this.price = price;
    this.cart_id = cart_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
  
  createProductsTable = async () => {
    const db = new Database();
    const connection = await db.getDBConnection();
    if (connection) {
      try {
        await connection.executeSql(`
          CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY,
            eanId TEXT,
            productName TEXT,
            price INTEGER,
            created_at DATE,
            updated_at DATE,
            cart_id INTEGER,
            FOREIGN KEY (cart_id) REFERENCES carts(id)
          )
        `);
        console.log('Tabella "products" creata correttamente.');
      } catch (error) {
        console.error('Errore durante la creazione della tabella "products":', error);
        throw error;
      }
    }
  };

  insert = async (data: any) => {
    const db = new Database();
    const connection = await db.getDBConnection();
    if (connection) {
      try {
        const entries = Object.entries(data);
        const columns = entries.map(([key]) => key).join(', ');
        const values = entries.map(([, value]) => `"${value}"`).join(', ');
        const sql = `INSERT INTO ${this.productName} (${columns}) VALUES (${values})`;
        await connection.executeSql(sql);
        console.log(` Data insert in table: "${this.productName}" `);
      } catch (error) {
        console.error(`Error data insert ${this.productName}:`, error);
        throw error;
      }
    }
  };

  update = async (id: number, data: any) => {
    const db = new Database();
    const connection = await db.getDBConnection();
    if (connection) {
      try {
        const updates = Object.entries(data).map(([key, value]) => `${key} = "${value}"`).join(', ');
        const sql = `UPDATE ${this.productName} SET ${updates} WHERE id = ${id}`;
        await connection.executeSql(sql);
        console.log(`Update correct in "${this.productName}" table`);
      } catch (error) {
        console.error(`Error update in table ${this.productName}:`, error);
        throw error;
      }
    }
  };

  get = async (criteria: string) => {
    const db = new Database();
    const connection = await db.getDBConnection();
    if (connection){
      try {
        const sql = `SELECT * FROM ${this.productName} WHERE ${criteria}`;
        const result = await connection.executeSql(sql);
        console.log('result[0].rows.item', result[0].rows.item(0))
        return result[0].rows.raw();
      } catch (error) {
        console.error(`Error in get data from "${this.productName}" table:`, error);
        throw error;
      }
    }
  };

  delete = async (id: number) => {
    const db = new Database();
    const connection = await db.getDBConnection();
    if(connection) {
      try {
        const sql = `DELETE FROM ${this.productName} WHERE id = ${id}`;
        await connection.executeSql(sql);
        console.log(`Delete table "${this.productName}"`);
      } catch (error) {
        console.error(`Error eliminated ${this.productName}:`, error);
        throw error;
      }
    }
  };



}

export default Product;



