import { enablePromise } from "react-native-sqlite-storage";
import Database from "./connectionDB";

enablePromise(true);
class Tables {

  name: string;
  columns: {
    name: string,
    type: string
  }[];

  constructor(
    name: string,
    columns: {
      name: string,
      type: string
    }[],
  ) {
    this.name = name;
    this.columns = columns;
  }

  init = async () => {
    const db = new Database();
    const connection = await db.getDBConnection();
    if (connection) {
      const sql = `SELECT name FROM sqlite_master WHERE type='table' AND name=?;`;
      try {
        const result = await connection.executeSql(sql, [this.name]);
        // console.log('result[0].rows.item::', result[0].rows.item(0))
        if (result[0].rows.length > 0) {
          console.log('controllare se api è da modificare e fare update')
        } else {
          await this.create()
        }
      } catch (error) {
        console.error(`check table "${this.name}" not possible:`, error);
        throw error;
      }
    }
  }

  create = async () => {
    const db = new Database();
    const connection = await db.getDBConnection();
    if (connection) {
      const columnDefinitions = this.columns.map(column => `${column.name} ${column.type}`).join(', ');
      const sql = `
        CREATE TABLE IF NOT EXISTS ${this.name} (
            ${columnDefinitions}
        )
      `;
      try {
        await connection.executeSql(sql);
        console.log(`Table "${this.name}" create!`);
      } catch (error) {
        console.log(`Table::2 "${this.name}" not created:`, error);
        throw error;
      }
    }
  }

  insert = async (data: any) => {
    const db = new Database();
    const connection = await db.getDBConnection();
    if (connection) {
      try {
        for (const item of data) {
          const columns = Object.keys(item).join(', ');
          const values = Object.values(item).map(value => typeof value === 'string' ? `'${value}'` : value).join(', ');
          const sql = `INSERT INTO ${this.name} (${columns}) VALUES (${values})`;
          await connection.executeSql(sql);
        }
        console.log(` Data insert in table: "${this.name}" `);
      } catch (error) {
        console.error(`Error data insert ${this.name}:`, error);
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
        const sql = `UPDATE ${this.name} SET ${updates} WHERE id = ${id}`;
        await connection.executeSql(sql);
        console.log(`Update correct in "${this.name}" table`);
      } catch (error) {
        console.error(`Error update in table ${this.name}:`, error);
        throw error;
      }
    }
  };

  get = async (criteria: string) => {
    const db = new Database();
    const connection = await db.getDBConnection();
    const resultArray= []
    if (connection) {
      try {
        const sql = `SELECT * FROM ${this.name} WHERE ${criteria}`;
        const result = await connection.executeSql(sql);
        const rows = result[0].rows.raw();
        console.log(`Data from table "${this.name}":`);
        for (const row of rows) {
          resultArray.push(row)
        }
        console.log('result::', result)
        return resultArray;
      } catch (error) {
        console.error(`Error in get data from "${this.name}" table:`, error);
        throw error;
      }
    }
  };
  getAll = async () => {
    const db = new Database();
    const connection = await db.getDBConnection();
    let resultArray = []
    if (connection) {
      try {
        const sql = `SELECT * FROM ${this.name}`;
        const result = await connection.executeSql(sql);
        const rows = result[0].rows.raw();
        // console.log('rows', rows)
        // console.log(`Data from table "${this.name}":`);
        for (const row of rows) {
          resultArray.push(row)
        }
        return resultArray;
      } catch (error) {
        console.error(`Error in get data from "${this.name}" table:`, error);
        throw error;
      }
    }
  };

  delete = async (id: number) => {
    const db = new Database();
    const connection = await db.getDBConnection();
    if (connection) {
      try {
        const sql = `DELETE FROM ${this.name} WHERE id = ${id}`;
        await connection.executeSql(sql);
        console.log(`Delete table "${this.name}"`);
      } catch (error) {
        console.error(`Error eliminated ${this.name}:`, error);
        throw error;
      }
    }
  };
  
  dropTable = async () => {
    const db = new Database();
    const connection = await db.getDBConnection();
    if (connection) {
      try {
        const sql = `DROP TABLE IF EXISTS ${this.name}`;
        await connection.executeSql(sql);
        console.log(`Table "${this.name}" dropped successfully.`);
      } catch (error) {
        console.error(`Error dropping table "${this.name}":`, error);
        throw error;
      }
    }
  };
  

  checkIfTableExists = async (connection: any) => {
    const sql = `SELECT name FROM sqlite_master WHERE type='table' AND name=?;`;
    try {
      const result = await connection.executeSql(sql, [this.name]);
      // console.log('result[0].rows.item::', result[0].rows.item(0))
      return result[0].rows.length > 0;
    } catch (error) {
      console.error(`Errore durante il controllo dell'esistenza della tabella "${this.name}":`, error);
      throw error;
    }
  };

  getTableNames = async () => {
    const db = new Database();
    const connection = await db.getDBConnection();
    const sql = "SELECT name FROM sqlite_master WHERE type='table'";
    try {

      const result = await connection.executeSql(sql);
      const tableNames = [];
      for (let i = 0; i < result[0].rows.length; i++) {
        tableNames.push(result[0].rows.item(i).name);
      }
      console.log('tableNames::', tableNames)
      return tableNames;
    } catch (error) {
      console.error('Errore durante il recupero dei nomi delle tabelle:', error);
      throw error;
    }
  };

  getTableInfo = async () => {
    const db = new Database();
    const connection = await db.getDBConnection();
    const sql = `SELECT * FROM ${this.name}`;
    try {
      const result = await connection.executeSql(sql);
      const tableInfo = [];
      for (let i = 0; i < result[0].rows.length; i++) {
        tableInfo.push(result[0].rows.item(i));
      }
        console.log('tatableInfo', tableInfo)
      return tableInfo;
    } catch (error) {
      console.error('Errore durante il recupero dei nomi delle tabelle:', error);
      throw error;
    }
  };

}

export default Tables;



