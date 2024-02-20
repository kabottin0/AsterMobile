import { FlatList, Icon, Input, Text, View } from "native-base"
import { useState } from "react"
import ProductList from "../components/Product"
import FilterSearch from "../components/FilterSearch"
import SearchInput from "../components/SearchInput"


const Orders = () => {
  const [searchText, setSearchText] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('');
  const [detailsProduct, setDetailsProducts] = useState([])
  const arrayFilter = ['Id', 'title', 'description', 'ImageUri']
  const products = [
    {
      id: 1,
      title: 'titolo prodotto',
      description: 'descrizione del prodotto',
      imageUri: 'https://via.placeholder.com/300'
    },
    {
      id: 2,
      title: 'titolo prodotto2',
      description: 'descrizione del prodotto2',
      imageUri: 'https://via.placeholder.com/300'
    },
    {
      id: 3,
      title: 'titolo prodotto3',
      description: 'descrizione del prodotto',
      imageUri: 'https://via.placeholder.com/300'
    },
    {
      id: 4,
      title: 'titolo prodotto4',
      description: 'descrizione del prodotto',
      imageUri: 'https://via.placeholder.com/300'
    },
  ]
  //ToDo tabella operazione "ordini ha più operazioni", status "inviato" "bozza", lista prodotti selezionati
  const requestProductsList = () => { }
  const saveProductsList = () => {
    //ToDo query per il salvataggio nel nostro db dell'operazione con lo status e la lista prodotti
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
  
  const renderItem = ({ item }) => {
    return (
      <ProductList
        onPress={() => console.log('Prodotto selezionato:', item.title)}
        imageUri={item.imageUri}
        title={item.title}
        description={item.description}
      />
    );
  };

  const getSelectValue = (val) => {
    setSelectedFilter(val)
  }

  const handleSearch = (val) => {
   let text = val.toLowerCase()
    let filterData = null
    switch (selectedFilter) {
      case 'id':
        filterData = products.filter(item => item.id == text);
        setDetailsProducts(filterData)
        break;
      case 'title':
        filterData = products.filter(item => item.title.includes(text));
        setDetailsProducts(filterData)

        break;
      case 'description':
        filterData = products.filter(item => item.description.includes(text));
        setDetailsProducts(filterData)
        break;
      default:
        break
    }
    setSearchText(text);
  }
  return (
    <>
      <View justifyContent={'center'} alignItems={'center'}>
        <Text> Pagina degli ordini</Text>
        <View justifyContent={'center'} alignItems={'center'}>
          <SearchInput
          value={searchText}
          handle={(val)=>handleSearch(val)} />
        </View>
        <FilterSearch arrayFilter={arrayFilter} getSelectValue={getSelectValue} />


        <Text>Storico ricevute</Text>
        <Text>Stampa ricevuta</Text>
      </View>

      <FlatList
        data={detailsProduct}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReachedThreshold={0.5}
      // ListFooterComponent={renderFooter}
      />
    </>
  )
}

export default Orders