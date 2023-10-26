import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calculadora  from './Calculadora';
import Historico from './Historico';
import { UtilsContext } from './Context';
import { useState } from 'react';

export default function App() {
  const [utils, setUtils] = useState({})
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <UtilsContext.Provider value={{utils, setUtils}}>
        <Stack.Navigator>
          <Stack.Screen name="Calculadora" options={{headerShown: false}} component={Calculadora}/>
          <Stack.Screen name="Historico" options={{title: 'Histórico:'}} component={Historico}/>
        </Stack.Navigator>  
      </UtilsContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
