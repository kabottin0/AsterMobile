import { Button, Input } from "native-base";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";



const SignupScreen = ({navigation}) => {

  const [value, setValue] = useState()


  return(
    <>
    <View>
    <View py={2} justifyContent={'center'} alignItems={'center'}>
        <Text>Name</Text>
        <Input
          mt={1}
          variant="rounded"
          placeholderTextColor={'gray.600'}
          bgColor={'gray.200'}
          w={'250px'}
          py={3}
          _focus={{
            borderColor: 'gray.600'
          }}
          placeholder={`Insert User name here..`}
          keyboardType="name-phone-pad"
          onChangeText={() => setValue}
          value={value} />

        <Text>Password</Text>
        <Input
          mt={1}
          variant="rounded"
          placeholderTextColor={'gray.600'}
          bgColor={'gray.200'}
          w={'250px'}
          py={3}
          _focus={{
            borderColor: 'gray.600'
          }}
          placeholder={`Insert Password here..`}
          keyboardType="name-phone-pad"
          onChangeText={() => setValue}
          value={value} />

        <View style={styles.buttons}>
          <Button onPress={() => navigation.navigate('Home')} style={styles.button}> SignUp </Button>
        </View>
      </View>
    </View>
    </>
  )
}


export default SignupScreen;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    marginTop: 12,
  },
  button:{
    margin: 8
  }
});