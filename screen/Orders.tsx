import { Text, View } from "native-base"


const Orders = () => {

  //ToDo tabella operazione "ordini ha più operazioni", status "inviato" "bozza", lista prodotti selezionati
  const requestProductsList = () => { }
  const saveProductsList = () => {
    //ToDo query per il salvataggio nel nostro db dell'operazione con lo status e la lista prodotti
  }
  const getProductlist = () => {
    //ToDo query per il recupero del record se bozza o inviato
  }

  const resumeAndSend = () =>{
    //ToDo riassuno del carrello in json per l'ivio della ricevuta al backand
  }
const print = () => {
  //toDo funzione stampa per la termical printer
}
  return (
    <>
      <View justifyContent={'center'} alignItems={'center'}>
        <Text> Pagina degli ordini</Text>
        <View>
          <Text>
            renderizzazione lista dei prodotti - componente prodotto selezionabile ed inserimento in un "carrello"
          </Text>
        </View>
        <Text>Storico ricevute</Text>
        <Text>Stampa ricevuta</Text>
      </View>
    </>
  )
}

export default Orders