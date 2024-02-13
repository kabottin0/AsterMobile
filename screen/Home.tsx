import { Button } from "native-base";
import { SafeAreaView, Text, View } from "react-native"
import { useEffect, useState } from "react";
import Tables from "./DB/Tables";
import { useNavigation } from "@react-navigation/native";
import Orders from "./DB/models/orders";



const Home = () => {
  const [checkUpdate, setCheckUpdate] = useState(false)
  const navigation = useNavigation()


  const tablesToInit = [
    {
      name: 'orders2',
      columns: [
        { name: 'id', type: 'INTEGER PRIMARY KEY' },
        { name: 'orderDate', type: 'TEXT' },
        { name: 'note', type: 'TEXT' },
        { name: 'created_at', type: 'DATE' },
        { name: 'updated_at', type: 'DATE' },

      ]
    }
  ];

  const dataOrder = {
    id: 1,
    orderDate: '22-11-2024',
    note: 'primo prezzo',
    created_at: 10 - 12 - 2024,
    updated_at: 10 - 12 - 2024,
  }

  const goToProduct = () => {
    navigation.navigate('Products')
  }

  const initTables = async () => {
    try {
      await Promise.all(tablesToInit.map(async (tableInfo) => {
        const table = new Tables(tableInfo.name, tableInfo.columns);
        await table.init();
      }));
    } catch (error) {
      console.log('Error', error);
    }
  };

  useEffect(() => {
    if (!checkUpdate) {
      initTables()
    }
  }, [checkUpdate])

  return (
    <>
      <View justifyContent={'center'} alignItems={'center'}>
        <SafeAreaView>
          <Text>
            Home Page
          </Text>
          <View justifyContent={'center'} alignItems={'center'}>
            <Button onPress={goToProduct} >
              go to Product list
            </Button>
          </View>
        </SafeAreaView>
      </View>
    </>
  )
}



export default Home;


// const getDataApi = async () => {
//   try {
//     const dataApi = await AsterApi.fetchData('https://jsonplaceholder.typicode.com/todos/1')
//     addInTable(dataApi)
//     console.log('dataApi', dataApi)
//   } catch (error) {
//     console.log('error', error)
//   }
// }