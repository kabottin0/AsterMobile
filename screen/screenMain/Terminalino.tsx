import { Box, Button, FlatList, Icon, Input, Text, View } from "native-base"
import { useEffect, useRef, useState } from "react"
import { Alert, SafeAreaView, StyleSheet } from "react-native"
import { Camera, CameraApi, CameraType } from 'react-native-camera-kit';
import BarcodeExample from "../components/BarCodeReader";
import { useNavigation } from "@react-navigation/native";
import BarcodeReader from "../components/BarCodeReader";
import Tables from "../DB/Tables";
import ProductList from "../components/Product";
import Form from "../components/Form";
import SearchInput from "../components/SearchInput";
import FilterSearch from "../components/FilterSearch";
import { productModel } from "../DB/models/dataModel/modelSchema";
import { createProductTable } from "../DB/models/dataModel/createAllTable";


const Terminalino = () => {
  const [barCodeValue, setBarCodeValue] = useState(null)
  const [boolean, setBoolean] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('');
  const [products, setProducts] = useState([])

  const [detailsProduct, setDetailsProducts] = useState([])

  const names = productModel.map(item => item.name);





  const getSelectValue = (val) => {
    setSelectedFilter(val)
  }

  const getBarCode = (val) => {
    //ToDo funzione per catturare l'ean del prodotto tramite bar code
    setBarCodeValue(val)

  }
  const requestDetailsProduct = async () => {
    //ToDo query get a sql lite per prendere i dettagli del prodotto
    const details = await table.get(`ean = ${barCodeValue}`)
    setDetailsProducts(details)

  }
  const updateProduct = () => {
    //ToDo salva modifica prodotto nel db locale e invio tramite api al backend
  }

  const gobarcode = () => {
    setBoolean(!boolean);
  }

  const getProducts = async () => {
    const productData = await createProductTable.getAll()
    console.log('productData:::::', productData)
    setProducts(productData)
  }

  const handleSearch = (text) => {
    let filterData = null
    switch (selectedFilter) {
      case 'ean':
        filterData = products.filter(item => item.ean == text);
        setDetailsProducts(filterData)
        break;
      case 'productName':
        filterData = products.filter(item => item?.productName?.toLowerCase().includes(text));
        setDetailsProducts(filterData)
        break;
      case 'price':
        filterData = products.filter(item => item.price == text);
        setDetailsProducts(filterData)

        break;
      default:
        break
    }
    setSearchText(text);
  }


  const renderItem = ({ item }) => {
    return (
      <ProductList
        onPress={() => setDetailsProducts(item)}
        imagePath={item.imageUri}
        price={item.price}
        productName={item.name}
        description={item.description}
      />
    );
  };


  useEffect(() => {
    getProducts()
  }, [])


  useEffect(() => {
    // requestDetailsProduct()
  }, [barCodeValue])



  return (
    <>
      <SafeAreaView>
        <SearchInput
          value={searchText}
          handle={handleSearch}
        />
        <FilterSearch arrayFilter={names} getSelectValue={getSelectValue} />
        <View>
          <Form
            onChange={getProducts}
            detailsProduct={{
              productName: detailsProduct?.productName,
              id: detailsProduct?.id,
              price: detailsProduct?.price?.toString(),
              eanId: detailsProduct?.eanId?.toString()
            }}
          />
        </View>
        <View justifyContent={'center'} alignItems={'center'} >
          <Button onPress={gobarcode}>
            Read bar code
          </Button>

        </View>
        <Text>
          Elenco risultati prodotti
        </Text>
        <FlatList
          data={products}
          extraData={products}
          ListFooterComponent={<View height={'120px'} />}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
        {/* <View justifyContent={'center'} alignItems={'center'}>
          <Text> Pagina del bar code</Text>
          <View justifyContent={'center'} alignItems={'center'} >
            <Button onPress={gobarcode}>
              Read bar code
            </Button>
            {/* {boolean ? (
              <BarcodeReader getBarCode={getBarCode} />
            ) : null}
            <View>
             <ProductList 
             onPress={()=>{console.log('pressed')}}
             title={detailsProduct[0]?.name}
             description={detailsProduct[0]?.price}
             imageUri={'https://picsum.photos/200/300'}
             />
            </View> */}
        {/* <Button>
              Conferma le modifiche e invia
            </Button>
          </View>
        </View> */}
      </SafeAreaView>
    </>
  )
}

export default Terminalino

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    backgroundColor: 'black',
  },

  topButtons: {
    margin: 10,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topButton: {
    padding: 10,
  },

  cameraContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  cameraPreview: {
    aspectRatio: 3 / 4,
    width: '100%',
  },
  bottomButtons: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtnContainer: {
    alignItems: 'flex-start',
  },
  captureButtonContainer: {
  },
  textNumberContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barcodeContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textStyle: {
    padding: 10,
    color: 'white',
    fontSize: 20,
  },
});