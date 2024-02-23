import { Image,Modal,Pressable, Text, View } from "native-base";
import { useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailsProduct from "./modal/DetailsProduct";
import { Alert, StyleSheet } from "react-native";
import { Button,} from "react-native";
// import Modal from "react-native-modal";

interface IProductList {
  addToCart: (obj: any) => void,
  item: {
    productName: string,
    price: string,
    imagePath: string,
    description: string
  }
}

const ProductList = ({ item, addToCart }: IProductList) => {
  const { productName, price, imagePath, description } = item || {};
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <Pressable
        _pressed={{ opacity: 0.5 }}
        onPress={toggleModal}
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
          <Pressable onPress={() => addToCart(item)}>
            <View flex={1} alignItems={'flex-end'} py={2}>
              <MaterialCommunityIcons name="cart" size={30} color="#900" />
              <Text style={{ fontWeight: 'bold', fontSize: 12, paddingVertical: 4 }}>3</Text>
            </View>
          </Pressable>
        </View>
      </Pressable>

      {/* <View >
      <Modal isVisible={isModalVisible}>
        <View style={{backgroundColor: 'white', height:'20%'}}>
        <View flexDir={'row'} justifyContent={'center'} alignItems={'center'}>
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
          <Pressable onPress={() => addToCart(item)}>
            <View flex={1} alignItems={'flex-end'} py={2}>
              <MaterialCommunityIcons name="cart" size={30} color="#900" />
              <Text style={{ fontWeight: 'bold', fontSize: 12, paddingVertical: 4 }}>3</Text>
            </View>
          </Pressable>
        </View>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View> */}
      <Modal isOpen={isModalVisible} onClose={() => setIsModalVisible(false)} size={"xl"}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>{productName}</Modal.Header>
          <Modal.Body>
            <View flexDir={'row'} justifyContent={'center'} alignItems={'center'}>
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
                {/* <Text color={'gray.500'} fontSize="sm" textAlign={'left'} >adslad,la,sdlòa,dòla,da,sdl,alòd,sadslad,la,sdlòa,dòla,da,sdl,alòd,sadslad,la,sdlòa,dòla,da,sdl,alòd,sadslad,la,sdlòa,dòla,da,sdl,alòd,sadslad,la,sdlòa,dòla,da,sdl,alòd,sadslad,la,sdlòa,dòla,da,sdl,alòd,sadslad,la,sdlòa,dòla,da,sdl,alòd,sadslad,la,sdlòa,dòla,da,sdl,alòd,sadslad,la,sdlòa,dòla,da,sdl,alòd,sadslad,la,sdlòa,dòla,da,sdl,alòd,sadslad,la,sdlòa,dòla,da,sdl,alòd,sadslad,la,sdlòa,dòla,da,sdl,alòd,sadslad,la,sdlòa,dòla,da,sdl,alòd,sadslad,la,sdlòa,dòla,da,sdl,alòd,sadslad,la,sdlòa,dòla,da,sdl,alòd,s</Text> */}
              </View>
              <View flex={1}>
                <Text color={'gray.500'} fontSize="sm" textAlign={'left'} >{price} €</Text>
              </View>
              <Pressable onPress={() => addToCart(item)}>
                <View flex={1} alignItems={'flex-end'} py={2}>
                  <MaterialCommunityIcons name="cart" size={30} color="#900" />
                  <Text style={{ fontWeight: 'bold', fontSize: 12, paddingVertical: 4 }}>3</Text>
                </View>
              </Pressable>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  )
}


export default ProductList;



const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});