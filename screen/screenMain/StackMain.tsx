import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../auth/LoginScreen";
import SignupScreen from "../auth/SignUpScreen";
import ProductsList from "./ProductsList";
import Terminalino from "./Terminalino";
import Orders from "./Orders";
import BarcodeReader from "../components/BarCodeReader";
import BottomTab from "../components/BottomTab";

const Stack = createNativeStackNavigator();


const StackMain = () => {
  const navigation = useNavigation()

  const BottomNav = () => {
    return (
      <> 
        <BottomTab />
      </>
    )
  }

  return (
    <>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
        />
      <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          component={BottomNav}
          options={{
            headerShown: false
          }}
        />
         <Stack.Screen
          name="Products"
          component={ProductsList}
        />
          <Stack.Screen
          name="Terminalino"
          component={Terminalino}
        />
          <Stack.Screen
          name="Orders"
          component={Orders}
        />
         <Stack.Screen
          name="Barcode"
          component={BarcodeReader}
        />
      </Stack.Navigator>
    </>
  )
}



export default StackMain;