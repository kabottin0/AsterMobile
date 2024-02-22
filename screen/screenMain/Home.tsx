import { Box, Button, Center, HStack, Icon, Pressable, useToast } from "native-base";
import { SafeAreaView, Text, View } from "react-native"
import { useEffect, useState } from "react";
import Tables from "../DB/Tables";
import { useNavigation } from "@react-navigation/native";
import Migration from "../DB/models/migrations";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createProductTable } from "../DB/models/dataModel/createAllTable";


const Home = () => {
  const [checkUpdate, setCheckUpdate] = useState(false)
  const navigation = useNavigation()
  const tableSystem = new Tables('systemDB', [{ name: 'version', type: 'string' }])
  const migration = new Migration('systemDB', [{ name: 'date', type: 'string' }])
  const toast = useToast()
  // ToDO create funct for get currentVersion
  const currentVersion = 3

  const data = {
    id: 1,
    version: '4',
    date: '20-20-2024'
  }

  const goToOrders = () => {
    navigation.navigate('Orders')
  }

  const goToCart = () => {
    navigation.navigate('Cart')
  }


  //ToDo sync se non esiste aggiungi se esiste update
  const init = async () => {
    try {
      // await createProductTable.create()
      // await createOrdersTable.create()

      // const versionDb = await tableSystem.get(`version = ${currentVersion}`)
      // let versionValue = versionDb[0]?.version
      // await product.createProductsTable()
      // if (versionValue == currentVersion) {
      //   console.log('versione verificata')
      //   const id = 'map degli id array data'

      //   // const record = await tableSystem.get('id=id');
      //   // console.log('record', record)
      //   // if (record.id) {
      //   //   await tableSystem.update(record.id, data)
      //   // } else {
      //   //   await tableSystem.insert(data)
      //   // }
      //   //ToDo dal serivizio api verificare i dati delle tabelle per eventuale update
      //   //setcheckUpdate()
      // } else {
      //   // ToDO fare la miagration
      //   // setcheckUpdate()
      //   // console.log('effettuare migration')
      // }
    } catch (error) {
      console.log('dati non inseriti', error)
    }
  }



  useEffect(() => {
    if (!checkUpdate) {
      init()
    }
    toast.show({
      render: () => {
        return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
          Toast prova per la sync dei dati
        </Box>;
      },
      placement: "top-left",
      duration: 2000
    });
  }, [checkUpdate]);


  return (
    <>
      <View justifyContent={'center'} alignItems={'center'}>
        <SafeAreaView>
          <Pressable onPress={goToCart}>
            <View flex={1} alignItems={'flex-end'}>
              <MaterialCommunityIcons name="cart" size={30} color="#900" />
            </View>
          </Pressable>

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