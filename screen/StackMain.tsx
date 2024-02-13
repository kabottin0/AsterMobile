import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import LoginScreen from "./auth/LoginScreen";
import SignupScreen from "./auth/SignUpScreen";
import ProductList from "./components/Product";
import ProductsList from "./ProductsList";

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
      </Stack.Navigator>
    </>
  )
}



export default StackMain;