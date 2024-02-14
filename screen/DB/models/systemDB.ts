import { executeNativeBackPress } from "react-native-screens";
import Tables from "../Tables";
import Database from "../connectionDB";


class SystemDB extends Tables {

  version: number;

  constructor(
    name: string,
    columns: { name: string, type: string }[],
    version: number
  ) {
    super(name, columns);
    this.version = version
  }

  insert = async (data: any) => {
    const db = new Database();
    const connection = await db.getDBConnection();
    if (connection) {
      try {
        const entries = Object.entries(data);
        console.log('entries', entries)
        const columns = entries.map(([key]) => key).join(', ');
        console.log('columns', columns)

        const values = entries.map(([, value]) => `"${value}"`).join(', ');
        console.log('values', values)

        const sql = `INSERT INTO ${this.name} (${columns}) VALUES (${values})`;
        await connection.executeSql(sql);
        console.log(` Data insert in table: "${this.name}" `);
      } catch (error) {
        console.error(`Error data insert ${this.name}:`, error);
        throw error;
      }
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
      console.log('tableInfo::', tableInfo)
      return tableInfo;
    } catch (error) {
      console.error('Errore durante il recupero dei dati delle tabelle:', error);
      throw error;
    }
  };

}

export default SystemDB;