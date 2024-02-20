import { Box, Center, CheckIcon, Icon, Input, Select, View } from "native-base";
import { useState } from "react";
import FilterSearch from "./FilterSearch";


const SearchInput = ({ value, handle }) => {
  
  return (
    <>
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
          value={value}
          InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" name="search" />}
          onChangeText={handle} />
       
      </View>
    </>
  )
}

export default SearchInput;