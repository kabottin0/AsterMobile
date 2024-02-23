import { FlatList, View } from "native-base";
import ProductList from "../components/ProductList";
import Product from "../DB/models/product";


const ProductsList = () => {
  const ProductsTable = new Product(
    1, // id
    123456, // eanId
    'Prodotto 1', // productName
    10, // quantity
    [ // priceList
      { id: 1, productName: 'Prodotto 1', price: 9.99 },
      { id: 2, productName: 'Prodotto 2', price: 19.99 },
      { id: 3, productName: 'Prodotto 3', price: 29.99 }
    ],
    new Date(), // created_at
    new Date(), // updated_at
    'products', // name
    [ // columns
      { name: 'id', type: 'integer' },
      { name: 'eanId', type: 'integer' },
      { name: 'productName', type: 'text' },
      { name: 'quantity', type: 'integer' },
      // Aggiungi altre colonne se necessario
    ]
  );

  // Array di prodotti da visualizzare
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

  return (
    <>
      <View>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          onEndReachedThreshold={0.5}
        // ListFooterComponent={renderFooter}
        />
      </View>
    </>
  )
}

export default ProductsList;