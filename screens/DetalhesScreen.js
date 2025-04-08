import React from 'react';
import { View, Text } from 'react-native';

export default function DetalhesScreen({ route }) {
  const { produto } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>{produto.nome}</Text>
      <Text style={{ marginBottom: 10 }}>{produto.descricao}</Text>
      <Text style={{ fontWeight: 'bold' }}>{produto.preco}</Text>
    </View>
  );
}
