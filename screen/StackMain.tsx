import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import LoginScreen from "./auth/LoginScreen";
import SignupScreen from "./auth/SignUpScreen";
import ProductsList from "./ProductsList";
import Terminalino from "./Terminalino";
import Orders from "./Orders";

const Stack = createNativeStackNavigator();


const StackMain = () => {
  const navigation = useNavigation()

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
          component={Home}
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
      </Stack.Navigator>
    </>
  )
}



export default StackMain;