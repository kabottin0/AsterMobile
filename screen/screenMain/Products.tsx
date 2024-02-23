import { FlatList, Icon, Input, Pressable, Text, View } from "native-base"
import { useEffect, useState } from "react"
import ProductList from "../components/ProductList"
import FilterSearch from "../components/FilterSearch"
import SearchInput from "../components/SearchInput"
import { useNavigation } from "@react-navigation/native"
import { cartTable, createProductTable } from "../DB/models/dataModel/createAllTable"
import { carts, productModel } from "../DB/models/dataModel/modelSchema"

const Products = () => {
  const navigation = useNavigation()
  const [searchText, setSearchText] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('');
  const [detailsProduct, setDetailsProducts] = useState([])
  const [productData, setProductData] = useState([])



  const [show, setShow] = useState(true)
  const names = productModel.map(item => item.name);


  //ToDo tabella operazione "ordini ha più operazioni", status "inviato" "bozza", lista prodotti selezionati
  const requestProductsList = () => { }
  const saveProductsList = () => {
    //ToDo query per il salvataggio nel nostro db (carrello) dell'operazione con lo status e la lista prodotti
  }
  const getProductlist = () => {
    //ToDo query per il recupero del record se bozza o inviato
  }

  const resumeAndSend = () => {
    //ToDo riassuno del carrello in json per l'ivio della ricevuta al backand
  }
  const print = () => {
    //toDo funzione stampa per la termical printer
  }

  const goToCart = () => {
    navigation.navigate('Cart')
  }

  const getData = async () => {
    // await createProductTable.insert(productModel)  
    const productData = await createProductTable.getAll()
    setProductData(productData)
  }

  const addToCart = async (item) => {
    const newItem = [{
      description: item?.description,
      eanId: item?.eanId,
      id: item?.id,
      imagePath: item?.imagePath,
      price: item?.price,
      productName: item?.productName
    }]
    await cartTable.insert(newItem)
  }

  const renderItem = ({ item }) => {
    return (
      <ProductList
        addToCart={addToCart}
        item={item}
      />
    );
  };

  const getSelectValue = (val) => {
    setSelectedFilter(val)
  }

  const handleSearch = (val) => {
    let text = val.toLowerCase()
    let filterData = null
    if (productData.length > 0) {
      switch (selectedFilter) {
        case 'id':
          filterData = productData.filter(item => item.id == text);
          setDetailsProducts(filterData);
          break;
        case 'productName':
          filterData = productData.filter(item => item?.productName?.toLowerCase().includes(text));
          setDetailsProducts(filterData);
          break;
        case 'cart_id':
          filterData = productData.filter(item => item?.cart_id == text);
          setDetailsProducts(filterData);
          break;
        default:
          break;
      }
    }
    setSearchText(text);
    setShow(true);
  }



  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <View justifyContent={'center'} alignItems={'center'}>
        <Text> Pagina dei prodotti</Text>
        <View justifyContent={'center'} alignItems={'center'}>
          <SearchInput
            value={searchText}
            handle={(val) => handleSearch(val)} />
        </View>
        <FilterSearch arrayFilter={names} getSelectValue={getSelectValue} />
      </View>
      {show && show ? (
        <FlatList
          data={detailsProduct}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          onEndReachedThreshold={0.5}
        // ListFooterComponent={renderFooter}
        />
      ) : null}
    </>
  )
}

export default Products;