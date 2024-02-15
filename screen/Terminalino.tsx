import { Button, Text, View } from "native-base"
import { useState } from "react"
import { SafeAreaView } from "react-native"


const Terminalino = () => {
  const [barCodeValue, setBarCodeValue] = useState()
  const barCodeFunct = () => {
    //ToDo funzione per catturare l'ean del prodotto tramite bar code
  }
  const requestDetailsProduct = () => {
    //ToDo richiesta api per i dettagli del proddoto filtrato per ean scansionato
  }
  const updateProduct = () => {
    //ToDo salva modifica prodotto nel db locale e invio tramite api al backend
  }




  return (
    <>
      <SafeAreaView>
        <View justifyContent={'center'} alignItems={'center'}>
          <Text> Pagina del bar code</Text>
          <View justifyContent={'center'} alignItems={'center'}>
            <Button>
              Read bar code
            </Button>
            <View>
              <Text>
                renderizziamo i dettagli ricevuti-componente per la renderizzazione dettagli
              </Text>
            </View>
            <Button>
              Conferma le modifiche e invia
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default Terminalino

