import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackMain from './screen/screenMain/StackMain';
import { NativeBaseProvider } from 'native-base';



const App = () => {

  return (
    <>
      <NativeBaseProvider>
        <NavigationContainer>
          <StackMain />
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  )
}



export default App;
