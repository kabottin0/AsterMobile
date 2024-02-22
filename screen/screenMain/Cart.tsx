import { Text, View } from "native-base";
import { useEffect } from "react";
import { cartTable } from "../DB/models/dataModel/createAllTable";


const Cart = () => {

  const getDataCart = async () =>{
    const dati = await cartTable.getAll()
    console.log('dati', dati)
  }

  useEffect(() => {
  getDataCart()
  }, [])
  


  return (
    <View style={{ borderWidth:2, borderColor: 'gray', maxHeight: 300, height:200, width:'auto', margin: 4, borderRadius:10}}>
      <View>
        <Text>lista prodotti</Text>
        <Text>totale</Text>
      </View>
    </View>
  )
}

export default Cart;