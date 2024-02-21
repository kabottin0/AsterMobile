import Database from "../connectionDB";

class Users {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;

  constructor(
    id: number,
    name: string,
    created_at: Date,
    updated_at: Date,
  ) {
    this.id = id;
    this.name = name;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  create = async () => {
    const db = new Database();
    const connection = await db.getDBConnection();
    if (connection) {
      try {
        await connection.executeSql(`
          CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            name TEXT,
            password TEXT,
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

export default Users;
