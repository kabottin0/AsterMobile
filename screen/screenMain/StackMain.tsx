import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../auth/LoginScreen";
import SignupScreen from "../auth/SignUpScreen";
import ProductsList from "./ProductsList";
import Terminalino from "./Terminalino";
import Orders from "./Orders";
import BarcodeReader from "../components/BarCodeReader";
import BottomTab from "../components/BottomTab";
import Cart from "./Cart";
import HistoryOrder from "./HistoryOrder";
import UserProfile from "./UserProfile";

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
          name="Start"
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
         <Stack.Screen
          name="Cart"
          component={Cart}
        />
        <Stack.Screen
          name="History"
          component={HistoryOrder}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
        />
      </Stack.Navigator>
    </>
  )
}



export default StackMain;