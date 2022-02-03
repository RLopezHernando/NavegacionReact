import 'react-native-gesture-handler';
import React from 'react';

import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';

import { MenuLateral } from './src/navigator/MenuLateral';

import { AuthProvider } from './src/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';



const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MenuLateral />
      </AppState>
      {/* <StackNavigator/> */}
      {/* <MenuLateralBasico/> */}

    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;
