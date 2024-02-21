import { openDatabase } from "react-native-sqlite-storage";



class Database {
    getDBConnection = async () => {
        return openDatabase({ name: 'test-app.db', location: 'default' });
      };
      
} 

export default Database;


