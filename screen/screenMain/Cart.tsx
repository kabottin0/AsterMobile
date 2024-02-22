import { Text, View } from "native-base";


const Cart = () => {


  return (
    <View style={{ borderWidth:2, borderColor: 'gray', maxHeight: 300, height:200, width:'auto', margin: 4, borderRadius:10}}>
      <View>
        <Text>Numero ordine</Text>
        <Text>totale</Text>
        <Text>note</Text>
        <Text>lista prodotti</Text>
      </View>
    </View>
  )
}

export default Cart;