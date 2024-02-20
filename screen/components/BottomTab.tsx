import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { Pressable, Text, View } from "native-base";
import Orders from "../screenMain/Orders";
import Terminalino from "../screenMain/Terminalino";
import Home from "../screenMain/Home";
import Setting from "../screenMain/Setting";
import { useNavigation } from "@react-navigation/native";


const Tab = createBottomTabNavigator();

const BottomTab = () => {
const navigation = useNavigation();

  const CustomTabBarButtom = ({ children, onPress }) => {

    <Pressable
      onPress={onPress}
      justifyContent={'center'}
      alignItems={'center'}
      style={[styles.shadow, { top: -10, marginHorizontal: 20 }]}>
      <View w={70} h={70} borderRadius={35} backgroundColor={'white'}>
        {children}
      </View>
    </Pressable>
  }

  const handleLogout = () => {
    navigation.navigate('Login')
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          bottom: 25,
          position: 'absolute',
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          height: 70,
          shadowColor: '#000',
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          shadowOffset: 10,
        },
        headerRight: () => (
          <Pressable onPress={handleLogout} style={{ marginRight: 15 }}>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>Logout</Text>
          </Pressable>
        ),
      }}>

        <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <View justifyContent={'center'} alignItems={'center'} style={{borderColor: focused ? '#1364B6' : 'black', borderWidth: 2, borderRadius:8, padding: 8, top:10}}>
            <Text style={{ color: focused ? '#1364B6' : 'black', fontSize: 12, fontWeight: 'bold' }}>Home</Text>
          </View>
        ),
        headerTitle: 'Home'
      }} />
      
      <Tab.Screen name="Setting" component={Setting} options={{
        tabBarIcon: ({ focused }) => (
          <View justifyContent={'center'} alignItems={'center'} style={{borderColor: focused ? '#1364B6' : 'black', borderWidth: 2, borderRadius:8, padding: 8, top:10}}>
            <Text style={{ color: focused ? '#1364B6' : 'black', fontSize: 12, fontWeight: 'bold' }}>Setting</Text>
          </View>
        ),
        headerTitle: 'Setting'
      }} />
      <Tab.Screen name="Ordini" component={Orders} options={{
        tabBarIcon: ({ focused }) => (
          <View justifyContent={'center'} alignItems={'center'} style={{borderColor: focused ? '#1364B6' : 'black', borderWidth: 2, borderRadius:8, padding: 8, top:10}} >
            <Text style={{ color: focused ? '#1364B6' : 'black', fontSize: 12, fontWeight: 'bold' }}>Ordini</Text>
          </View>
        ),
        headerTitle: 'Ordini'
      }} />

      <Tab.Screen name="Terminalino" component={Terminalino} options={{
        tabBarIcon: ({ focused }) => (
          <View justifyContent={'center'} alignItems={'center'} style={{borderColor: focused ? '#1364B6' : 'black', borderWidth: 2, borderRadius:8, padding: 8, top: 10}} >
            <Text style={{ color: focused ? '#1364B6' : 'black', fontSize: 11, fontWeight: 'bold' }}>Terminalino</Text>
          </View>
        ),
        headerTitle: 'Terminalino'
      }} />
    </Tab.Navigator>
  )
}

export default BottomTab;

const styles = StyleSheet.create({

  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})