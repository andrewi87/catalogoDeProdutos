import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ProdutosScreen from './screens/ProdutosScreen';
import DetalhesScreen from './screens/DetalhesScreen';
import InfoScreen from './screens/InfoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="Produtos" component={ProdutosScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
        <Stack.Screen name="Informações" component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
