import { Box, Center, CheckIcon, Select, View } from "native-base";
import { useState } from "react";


const FilterSearch = ({label1, label2, label3, value1, value2, value3}) => {
    const [service, setService] = useState("");


    return(
        <>
         <View>
        <Center>
          <Box maxW="300">
            <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Ricerca per.."
              _selectedItem={{
                bg: '#1364B6',
                endIcon: <CheckIcon size="5" />
              }} mt={1} onValueChange={itemValue => setService(itemValue)}>
              <Select.Item label={label1} value={value1} />
              <Select.Item label={label2} value={value2}/>
              <Select.Item label={label3} value={value3} />
            </Select>
          </Box>
        </Center>

          </View>
        </>
    )
}

export default FilterSearch;