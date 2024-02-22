import { FlatList, Text, View } from "native-base";
import { createOrdersTable } from "../DB/models/dataModel/createAllTable";
import { useEffect, useState } from "react";


const HistoryOrder = () => {
  const [ordersInfo, setOrdersInfo] = useState([])

  const getOrdersData = async () => {
    const ordersData = await createOrdersTable.getAll();
    setOrdersInfo(ordersData)
  }
  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.note}</Text>
        <Text>{item.total}</Text>
        <Text>{item.user_id}</Text>
      </View>
    )
  }
  useEffect(() => {
    getOrdersData()
  }, [])

  return (
    <>
      <View>
        <FlatList
          data={ordersInfo}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          onEndReachedThreshold={0.5}
        />
      </View>
    </>
  )

}


export default HistoryOrder;