import { Image, Pressable, Text, View } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { cartTable } from "../DB/models/dataModel/createAllTable";

const ProductList = ({item, addToCart }) => {
  const { productName, price, imagePath, description } = item || {};



  return (
    <>
      <Pressable
        _pressed={{ opacity: 0.5 }}
        onPress={()=> console.log('go to detail')}
        m={2}
      >
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
            <Text color={'gray.500'} fontSize="sm" textAlign={'left'} >{description}</Text>
          </View>
          <View flex={1}>
            <Text color={'gray.500'} fontSize="sm" textAlign={'left'} >{price} €</Text>
          </View>
          <Pressable onPress={()=>addToCart(item)}>
            <View flex={1} alignItems={'flex-end'}>
              <MaterialCommunityIcons name="cart" size={30} color="#900" />
            </View>
          </Pressable>
        </View>
      </Pressable>
    </>
  )


  // return (
  //   <>
  //     <Pressable
  //       _pressed={{ opacity: 0.5 }}
  //       onPress={onPress}
  //       m={4}
  //       mb={10}
  //     >
  //       <View
  //         w={'100%'}
  //         h={'300px'}
  //         style={{
  //           shadowColor: "#000000",
  //           shadowOffset: {
  //             width: 0,
  //             height: 3,
  //           },
  //           shadowOpacity: 0.17,
  //           shadowRadius: 3.05,
  //           elevation: 4
  //         }}
  //         borderRadius={'xl'}
  //         bgColor={'white'}>
  //         <Image
  //           source={{ uri: imageUri }}
  //           w={'100%'}
  //           h={'100%'}
  //           borderRadius={'xl'}
  //           alt="Image"
  //         />
  //       </View>
  //       <View
  //         position={'absolute'}
  //         zIndex={99}
  //         bottom={-30}
  //         width={'100%'}
  //       >
  //         <View
  //           bgColor={'white'}
  //           mx={4}
  //           borderRadius={'xl'}
  //           p={4}
  //           style={{
  //             shadowColor: "#000000",
  //             shadowOffset: {
  //               width: 0,
  //               height: 3,
  //             },
  //             shadowOpacity: 0.17,
  //             shadowRadius: 3.05,
  //             elevation: 4
  //           }}
  //         >
  //           <Text fontWeight="bold" fontSize="xl" textAlign={'left'} color={'green.700'} >{title}</Text>
  //           <Text color={'gray.500'} fontSize="md" textAlign={'left'} >{description}</Text>
  //         </View>
  //       </View>
  //     </Pressable>
  //   </>
  // )

}


export default ProductList;



