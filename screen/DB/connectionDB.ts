import { openDatabase } from "react-native-sqlite-storage";



class Database {
    getDBConnection = async () => {
        return openDatabase({ name: 'aster-mobile.db', location: 'default' });
      };
      
} 

export default Database;


