import { Box, Button, Center, HStack, Icon, Pressable, useToast } from "native-base";
import { SafeAreaView, Text, View } from "react-native"
import { useEffect, useState } from "react";
import Tables from "../DB/Tables";
import { useNavigation } from "@react-navigation/native";
import Migration from "../DB/models/migrations";
import { createSystemDbTable } from "../DB/models/dataModel/createAllTable";


const Home = () => {
  const [checkUpdate, setCheckUpdate] = useState(false)
  const navigation = useNavigation()
  const migration = new Migration('systemDB', [{ name: 'date', type: 'string' }])
  const toast = useToast()

  // ToDO create funct for get currentVersion
  const currentVersion = 1

  const goToUserProfile = () => {
    navigation.navigate('UserProfile')
  }

  const goToCart = () => {
    navigation.navigate('Cart')
  }


  //ToDo sync se non esiste aggiungi se esiste update
  const init = async () => {
    try {
      const versionDb = await createSystemDbTable.get(`version = ${currentVersion}`)
      let versionValue = versionDb[0]?.version
      if (versionValue == currentVersion) {
        console.log('versione verificata')
        //ToDo dal serivizio api verificare i dati delle tabelle per eventuale update
        setCheckUpdate(true)
      } else {
        console.log('effettuare migration')
        // setcheckUpdate()
      }
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
      <SafeAreaView>
      </SafeAreaView>
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