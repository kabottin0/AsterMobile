import { Button, FlatList, Image, Pressable, Text, View } from "native-base";
import { useEffect, useState } from "react";
import { cartTable } from "../DB/models/dataModel/createAllTable";
import ListCarts from "../components/ListCart";


const Cart = () => {
  const [cartProduct, setCartProduct] = useState([])
  const [total, setTotal] = useState(0)


  const getDataCart = async () =>{
    const dati = await cartTable.getAll()
    setCartProduct(dati)
    const prices = await cartTable.getAllCriteria('price')
    console.log('prices', prices)
    const totalPrice = prices.reduce((acc, curr) => acc + curr.price, 0);
    setTotal(totalPrice)
    // console.log('Total Price:', totalPrice);
  }

  const renderItem = (item: any) =>{
    // console.log('item.price', item.item.price)

    return (
      <ListCarts
      props={item} 
      key={item.id}/>
    )
  }

  useEffect(() => {
  getDataCart()
  }, [])
  


  return (
    <View style={{ borderWidth:2, borderColor: 'gray',  width:'auto', margin: 4, borderRadius:10}}>
      <FlatList 
      data={cartProduct}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      onEndReachedThreshold={0.5}/>
      <View>
      <Text>total: {total}</Text>
      </View>
      <View>
        <Button>
          Conferma ordine
        </Button>
      </View>
    </View>
  )
}

export default Cart;