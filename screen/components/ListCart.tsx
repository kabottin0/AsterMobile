import { Image, Pressable, Text, View } from "native-base"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { cartTable } from "../DB/models/dataModel/createAllTable";


interface IListCarts {
    props: {
        imagePath: string,
        productName: string,
        price: string,
        // quantity: number,
        id: number,
    }
}
const ListCarts = ({props}: IListCarts) => {
    const {imagePath, productName, price, id} = props.item;

    const deleteItem = async() => {
      await cartTable.delete(id)
    }

    return (

        <>
         <View flexDir={'row'} justifyContent={'center'} alignItems={'center'} maxHeight={'80px'}>
          <View flex={1}>
            <Image
              source={{ uri: imagePath }}
              w={'100%'}
              h={'100%'}
              alt="Image"
            />
          </View>
          <View flex={3} pl={2}>
            <Text fontWeight="bold" fontSize="md" textAlign={'left'} color={'green.700'}>{productName}</Text>
          </View>
          <View flex={1}>
            <Text color={'gray.500'} fontSize="sm" textAlign={'left'} >{price}€</Text>
          </View>
            <View flex={1} alignItems={'flex-end'} py={2}>
              <Text style={{ fontWeight: 'bold', fontSize: 12, paddingVertical: 4 }}>3</Text>
            </View>
            <View>
              <Pressable onPress={deleteItem}>
              <MaterialCommunityIcons name="delete" size={30} color="#900" />
              </Pressable>
            </View>
        </View>
        </>
    )
}

export default ListCarts;