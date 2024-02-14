import { Button } from "native-base";
import { SafeAreaView, Text, View } from "react-native"
import { useEffect, useState } from "react";
import Tables from "./DB/Tables";
import { useNavigation } from "@react-navigation/native";
import Migration from "./DB/models/migrations";

const Home = () => {
  const [checkUpdate, setCheckUpdate] = useState(false)
  const navigation = useNavigation()
  const tableSystem = new Tables('systemDB', [{ name: 'version', type: 'string' }])
  const migration = new Migration('systemDB', [{ name: 'date', type: 'string' }])

  // ToDO create funct for get currentVersion
  const currentVersion = 3

  const goToProduct = () => {
    navigation.navigate('Products')
  }


  const init = async () => {
    try {
      const versionDb = await tableSystem.get(`version = ${currentVersion}`)
      let versionValue = versionDb[0]?.version
      if (versionValue == currentVersion) {
        console.log('versione verificata')
        //ToDo dal serivizio api verificare i dati delle tabelle per eventuale update
        //setcheckUpdate()
      } else {
        // ToDO fare la miagration
        // setcheckUpdate()
        // console.log('effettuare migration')
      }

    } catch (error) {
      console.log('dati non inseriti', error)
    }
  }

  useEffect(() => {
    if (checkUpdate) {
      init()
    }
  }, [checkUpdate]);


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

// const initTables = async () => {
//   try {
//     await Promise.all(tablesToInit.map(async (tableInfo) => {
//       const table = new Tables(tableInfo.name, tableInfo.columns);
//       // await table.init();
//       await table.getTableInfo()
//     }));
//   } catch (error) {
//     console.log('Error', error);
//   }
// };