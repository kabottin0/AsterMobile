import { Button, Input } from "native-base";
import { SafeAreaView, Text, View } from "react-native"
import Database from "./DB/connectionDB";
import Tables from "./DB/Tables";
import { useEffect, useState } from "react";
import AsterApi from "./Api/api";



const Home = () => {
  const [value, setValue] = useState()
  const [getValue, setGetValue] = useState()

  const db = new Database();
  const table = new Tables();

  // const data = {
  //   "userId": 1,
  //   "id": Date.now(),
  //   "title": "delectus aut autem",
  //   "completed": false
  // }
  const colums = [
    {
      name: 'id',
      type: 'INTEGER PRIMARY KEY'
    },
    {
      name: 'userId',
      type: 'INTEGER'
    },
    {
      name: 'title',
      type: 'TEXT'
    },
    {
      name: 'completed',
      type: 'BOOLEAN'
    },
  ]


  const getValueFromTable = (criteria:string) => {
    db.getDBConnection()
      .then((connection) => {
        const result = table.get(connection, 'users', criteria)
          .then((res) => {
            // setGetValue(res);
            console.log('res,', res)
          }).catch((e) => {
            console.log('e:::', e)
          })
        return result
      })
      .catch((error) => {
        console.error("Errore durante la get della tabella:", error);
      });
  }

  const addInTable = (data: any) => {
    db.getDBConnection()
      .then((connection) => {
        table.insert(connection, 'users', data)
      })
      .catch((error) => {
        console.error("Errore durante la creazione della tabella:", error);
      });
  }

  const startConnection = async () => {
    try {
      const connection = await db.getDBConnection();
      if (connection) {
        // const tableList = await table.getTableNames(connection) funge
        const tableExists = await table.checkIfTableExists(connection, 'users');
        if (!tableExists) {
          await table.createTable(connection, 'users', colums);
        } else {
          //todo update recuperare i parametri
          console.log('table exist.');
        }
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  const getDataApi = async () => {
    try {
      const dataApi = await AsterApi.fetchData('https://jsonplaceholder.typicode.com/todos/1')
      addInTable(dataApi)
      getValueFromTable('id=1')
      console.log('dataApi', dataApi)
    } catch (error) {
      
    }
  }


  useEffect(() => {
    startConnection()
  }, [])

  return (
    <>
      <View >
        <SafeAreaView>
          <Text>
            Home Page
          </Text>
          <View justifyContent={'center'} alignItems={'center'}>
            <Input
              mt={1}
              mb={4}
              variant="rounded"
              placeholderTextColor={'gray.600'}
              bgColor={'gray.200'}
              w={'250px'}
              py={4}
              _focus={{
                borderColor: 'gray.600'
              }}
              placeholder={`Insert User name here..`}
              keyboardType="name-phone-pad"
              onChangeText={() => setValue}
              value={value} />
            <Button onPress={addInTable} >
              Add in tables
            </Button>
          </View>
          <View justifyContent={'center'} alignItems={'center'}>
            <Text>
              {getValue}
            </Text>
            <Button onPress={getValueFromTable}> get Value</Button>
            <Text>
              Recupera i dati dalla fetch
            </Text>
            <Button onPress={getDataApi}> Fetch</Button>
          </View>
        </SafeAreaView>
      </View>
    </>
  )
}



export default Home;