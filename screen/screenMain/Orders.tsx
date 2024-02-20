import { FlatList, Icon, Input, Text, View } from "native-base"
import { useState } from "react"
import ProductList from "../components/Product"
import FilterSearch from "../components/FilterSearch"


const Orders = () => {
  const [searchText, setSearchText] = useState('')

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

  const handleSearch = (text: string) => {
    setSearchText(text)
    console.log('searchText', searchText)
  }
  return (
    <>
      <View justifyContent={'center'} alignItems={'center'}>
        <Text> Pagina degli ordini</Text>
        <View justifyContent={'center'} alignItems={'center'}>
          <Input
            mt={4}
            mb={1}
            placeholder="Cerca prodotti..."
            variant="rounded"
            fontSize={'md'}
            width="90%"
            borderRadius="10"
            py={3}
            bgColor={'white'}
            px={2}
            value={searchText}
            InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" name="search" />}
            onChangeText={handleSearch} />
        </View>
        <FilterSearch 
        label1={'Id'}
        label2={'totale'}
        label3={'data'}
        value1={'id'}
        value2={'totale'}
        value3={'data'}
        />
       
        <Text>Storico ricevute</Text>
        <Text>Stampa ricevuta</Text>
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReachedThreshold={0.5}
      // ListFooterComponent={renderFooter}
      />
    </>
  )
}

export default Orders