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


const Terminalino = () => {
  const [barCodeValue, setBarCodeValue] = useState(null)
  const [boolean, setBoolean] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('');

  const [detailsProduct, setDetailsProducts] = useState([])

  const table = new Tables('esempioProdotti', [
    { name: 'ean', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'price', type: 'integer' },
  ])

  const data = [

    {
      ean: '3',
      name: 'prova2',
      price: 12
    },
    {
      ean: '4',
      name: 'prova3',
      price: 11
    },

  ]


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

  // const handleSearch = (text: string) => {
  //   setSearchText(text)
  //   console.log('searchText', searchText)
  // }

  //ToDo fare lo switch per la select del filtro
  // const handleSearch = (text) => {
  //   const filtered = data
  //     .filter((item) =>
  //       item.name.toLowerCase().includes(text.toLowerCase())
  //     )
  //   setDetailsProducts(filtered)
  //   setSearchText(text);

  // };
  const handleSearch = (text) => {
    let filtered = [];
    switch (selectedFilter) {
      case 'ean':
        filtered = data.filter(item => item.ean.toLowerCase().includes(text.toLowerCase()));
        console.log('selectedFilter, ean', selectedFilter)
        break;
      case 'name':
        filtered = data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
        console.log('selectedFilter, name', selectedFilter)
        break;
      case 'price':
        filtered = data.filter(item => item.price.toString().toLowerCase().includes(text.toLowerCase()));
        console.log('selectedFilter, price', selectedFilter)
        break;
      default:
        filtered = data;
        break;
    }
    setDetailsProducts(filtered);
    setSearchText(text);
  };
  const renderItem = ({ item }) => {
    return (
      <ProductList
        onPress={() => console.log('Prodotto selezionato:', item.title)}
        imageUri={item.imageUri}
        title={item.name}
        description={item.price}
      />
    );
  };
  useEffect(() => {
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
        <FilterSearch
          label1={'Ean'}
          label2={'Name'}
          label3={'Price'}
          value1={'ean'}
          value2={'name'}
          value3={'price'}
        />
        <View>
          <Form />
        </View>
        <View justifyContent={'center'} alignItems={'center'} >
          <Button onPress={gobarcode}>
            Read bar code
          </Button>
          <Button>
            Conferma le modifiche e invia
          </Button>
        </View>
        <Text>
          Elenco risultati prodotti
        </Text>
        <FlatList
          data={detailsProduct}
          ListFooterComponent={<View height={'120px'} />}
          keyExtractor={(item) => item.ean}
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