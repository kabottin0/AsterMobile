import Database from "../connectionDB";




class PriceList {
	id: number;
	price_list: number;
	name_list: string;
	product_id: number;
	created_at: Date;
	updated_at: Date;

	constructor(
		id: number,
		price_list: number,
		name_list: string,
		product_id: number,
		created_at: Date,
    updated_at: Date,
	) {
		this.id = id;
		this.price_list = price_list;
		this.name_list = name_list;
		this.product_id = product_id;
		this.created_at = created_at;
    this.updated_at = updated_at;
	}

  createOrdersTable = async () => {
    const db = new Database();
    const connection = await db.getDBConnection();
    if (connection) {
      try {
        await connection.executeSql(`
          CREATE TABLE IF NOT EXISTS priceLists (
            id INTEGER PRIMARY KEY,
            price_list INTEGER,
            name_list TEXT,
            created_at DATE,
            updated_at DATE,
            product_id INTEGER,
            FOREIGN KEY (product_id) REFERENCES product(id)
          )
        `);
        console.log('Tabella "products" creata correttamente.');
      } catch (error) {
        console.error('Errore durante la creazione della tabella "products":', error);
        throw error;
      }
    }
  };
}

export default PriceList;
