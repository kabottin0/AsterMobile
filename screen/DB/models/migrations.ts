import Database from "../connectionDB";

class Migration  {
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


  alterTableAdd = async () => {
    const db = new Database();
    const connection = await db.getDBConnection();
    if (connection) {
      const columnDefinitions = this.columns.map(column => `${column.name} ${column.type}`).join(', ');
      const sql = `ALTER TABLE ${this.name} ADD COLUMN ${columnDefinitions}`;
      console.log(sql)
      try {
        await connection.executeSql(sql);
        console.log(`Table "${this.name}" create!`);
      } catch (error) {
        console.log(`Table "${this.name}" not created:`, error);
        throw error;
      }
    }
  }

  alterTableDrop = async () => {
    const db = new Database();
    const connection = await db.getDBConnection();
    if (connection) {
      const columnDefinitions = this.columns.map(column => `${column.name} ${column.type}`).join(', ');
      const sql = `ALTER TABLE ${this.name} DROP COLUMN ${columnDefinitions}`;
      try {
        await connection.executeSql(sql);
        console.log(`Table "${this.name}" create!`);
      } catch (error) {
        console.log(`Table "${this.name}" not created:`, error);
        throw error;
      }
    }
  }

}


export default Migration;