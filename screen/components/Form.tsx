import { FormControl, Input, Stack } from "native-base"


const Form = () => {


    return (
        <>
       <FormControl >
      <Stack space={5}>
        <Stack>
          <FormControl.Label>Product name</FormControl.Label>
          <Input variant="underlined" p={2} placeholder="Product name" />
        </Stack>
        <Stack>
          <FormControl.Label>Price</FormControl.Label>
          <Input variant="underlined" p={2} placeholder="Price" />
        </Stack>
        <Stack>
          <FormControl.Label>Ean</FormControl.Label>
          <Input variant="underlined" p={2} placeholder="Ean" />
        </Stack>
      </Stack>
    </FormControl>
        </>
    )
}

export default Form;