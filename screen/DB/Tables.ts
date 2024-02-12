import { enablePromise } from "react-native-sqlite-storage";

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
  //toDO inserire qui tutti i metodi crud per le tabelle
  //todo init se esistono le tabelle o ci sonoi cambiamenti
  createTable = async (connection: any) => {
    const columnDefinitions = this.columns.map(column => `${column.name} ${column.type}`).join(', ');
    const sql = `
            CREATE TABLE IF NOT EXISTS ${this.name} (
                ${columnDefinitions}
            )
        `;
    try {
      await connection.executeSql(sql);
      console.log(`Table ${this.name} create!`);
    } catch (error) {
      console.error(`Errore durante la creazione della tabella ${this.name}:`, error);
      throw error;
    }
  };

  insert = async (connection: any,  data: any) => {
    try {
      const entries = Object.entries(data);
      const columns = entries.map(([key]) => key).join(', ');
      const values = entries.map(([, value]) => `"${value}"`).join(', ');
      const sql = `INSERT INTO ${this.name} (${columns}) VALUES (${values})`;
      await connection.executeSql(sql);
      console.log(`Dati inseriti nella tabella ${this.name} con successo!`);
    } catch (error) {
      console.error(`Errore durante l'inserimento dei dati nella tabella ${this.name}:`, error);
      throw error;
    }
  };

  update = async (connection: any, id: number, data: any) => {
    try {
      const updates = Object.entries(data).map(([key, value]) => `${key} = "${value}"`).join(', ');
      const sql = `UPDATE ${this.name} SET ${updates} WHERE id = ${id}`;
      await connection.executeSql(sql);
      console.log(`Dati aggiornati nella tabella ${this.name} con successo!`);
    } catch (error) {
      console.error(`Errore durante l'aggiornamento dei dati nella tabella ${this.name}:`, error);
      throw error;
    }
  };

  get = async (connection: any,  criteria: string) => {
    try {
      const sql = `SELECT * FROM ${this.name} WHERE ${criteria}`;
      const result = await connection.executeSql(sql);
      console.log('result[0].rows.item', result[0].rows.item(0))
      return result[0].rows.raw();
    } catch (error) {
      console.error(`Errore durante il recupero dei dati dalla tabella ${this.name}:`, error);
      throw error;
    }
  };

  delete = async (connection: any,  id: number) => {
    try {
      const sql = `DELETE FROM ${this.name} WHERE id = ${id}`;
      await connection.executeSql(sql);
      console.log(`Dati eliminati dalla tabella ${this.name} con successo!`);
    } catch (error) {
      console.error(`Errore durante l'eliminazione dei dati dalla tabella ${this.name}:`, error);
      throw error;
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
  getTableNames = async (connection: any) => {
    const sql = "SELECT name FROM sqlite_master WHERE type='table'";
    try {

      const result = await connection.executeSql(sql);
      console.log('result', result[0])
      console.log('result[0].rows.item(0)', result[0].rows.item(0))
      const tableNames = [];
      for (let i = 0; i < result[0].rows.length; i++) {
        tableNames.push(result[0].rows.item(i).name);
      }
      return tableNames;
    } catch (error) {
      console.error('Errore durante il recupero dei nomi delle tabelle:', error);
      throw error;
    }
  };




}

export default Tables;



