import { Button, Input, Text, View } from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";


const LoginScreen = ({ navigation }) => {

  const [value, setValue] = useState()

  return (
    <>
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
          <Button onPress={() => navigation.navigate('Home')} style={styles.button}> Login </Button>
          <Button onPress={() => navigation.navigate('Signup')} style={styles.button}> SignUp </Button>
        </View>
      </View>
    </>
  )
}


export default LoginScreen;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    marginTop: 12,
  },
  button:{
    margin: 8
  }
});