import { Button, FormControl, Input, Stack } from "native-base"
import { createProductTable } from "../DB/models/dataModel/createAllTable"
import { useEffect, useReducer } from "react"

interface IForm {
  onChange: () => void,
  detailsProduct: {
    productName: string,
    price: string,
    eanId: string,
    id: number,
  }

}

const reducer = (s: any, v: any): any => ({ ...s, ...v });
const Form = ({ detailsProduct,  onChange}: IForm) => {

  const [productEdited, setProductEdited] = useReducer(reducer, { ...detailsProduct })
  const { productName, price, eanId, id } = productEdited;

  const updateForm = async (productEdited: any) => {
    await createProductTable.update(id, productEdited)
    onChange()
    setProductEdited({productName: '', price:'', eanId:'', id:''})
  }
  useEffect(() => {
    setProductEdited({ ...detailsProduct })
  }, [detailsProduct])



  return (
    <>
      <FormControl >
        <Stack space={5}>
          <Stack>
            <FormControl.Label>Product name</FormControl.Label>
            <Input variant="underlined" p={2} placeholder="Product name" value={productName} onChangeText={(val) => { setProductEdited({ ...productEdited, productName: val }) }} />
          </Stack>
          <Stack>
            <FormControl.Label>Price</FormControl.Label>
            <Input variant="underlined" p={2} placeholder="Price" value={price} onChangeText={(val) => { setProductEdited({ ...productEdited, price: val }) }} />
          </Stack>
          <Stack>
            <FormControl.Label>Ean</FormControl.Label>
            <Input variant="underlined" p={2} placeholder="Ean" value={eanId} onChangeText={(val) => { setProductEdited({ ...productEdited, eanId: val }) }} />
          </Stack>
          <Button onPress={() => updateForm(productEdited)}>
            Conferma le modifiche e invia
          </Button>
        </Stack>
      </FormControl>
    </>
  )
}

export default Form;