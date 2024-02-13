import { Image, Pressable, Text, View } from "native-base";


const ProductList = ({onPress, imageUri, title, description}) => {




  return (
    <>
      <Pressable
        _pressed={{ opacity: 0.5 }}
        onPress={onPress}
        m={4}
        mb={10}
      >
        <View
          w={'100%'}
          h={'300px'}
          style={{
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4
          }}
          borderRadius={'xl'}
          bgColor={'white'}>
          <Image
            source={{ uri: imageUri }}
            w={'100%'}
            h={'100%'}
            borderRadius={'xl'}
            alt="Image"
          />
        </View>
        <View
          position={'absolute'}
          zIndex={99}
          bottom={-30}
          width={'100%'}
        >
          <View
            bgColor={'white'}
            mx={4}
            borderRadius={'xl'}
            p={4}
            style={{
              shadowColor: "#000000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.17,
              shadowRadius: 3.05,
              elevation: 4
            }}
          >
            <Text fontWeight="bold" fontSize="xl" textAlign={'left'} color={'green.700'} >{title}</Text>
            <Text color={'gray.500'} fontSize="md" textAlign={'left'} >{description}</Text>
          </View>
        </View>
      </Pressable>
    </>
  )
  
}


export default ProductList;



