import {Pressable, Text, View } from "native-base"

import { useNavigation } from "@react-navigation/native"

const Orders = () => {
  const navigation = useNavigation()
 

  return (
    <>
      <View justifyContent={'center'} alignItems={'center'}>
        <Text> Pagina degli ordini</Text>
        <Pressable onPress={() => navigation.navigate('History')}>
          <Text>Storico ricevute</Text>
        </Pressable>
        <Text>Stampa ricevuta</Text>
      </View>
   
    </>
  )
}

export default Orders