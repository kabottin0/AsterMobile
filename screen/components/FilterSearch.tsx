import { Box, Center, CheckIcon, Select, View } from "native-base";


const FilterSearch = ({ arrayFilter, getSelectValue }: any) => {


  return (
    <>
      <View>
        <Center>
          <Box maxW="300">
            <Select
              minWidth="200" accessibilityLabel="Choose Service" placeholder="Ricerca per.."
              _selectedItem={{
                bg: '#1364B6',
                endIcon: <CheckIcon size="5" />
              }} mt={1} onValueChange={(item) => getSelectValue(item)}>
              {arrayFilter?.map((item: any) => (
                <Select.Item key={item} label={item} value={item} />
              ))}
            </Select>
          </Box>
        </Center>

      </View>
    </>
  )
}

export default FilterSearch;