import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calculadora  from './Calculadora';
import Historico from './Historico';

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculadora" component={Calculadora}/>
        <Stack.Screen name="Historico" component={Historico}/>
      </Stack.Navigator>
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
