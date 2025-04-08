import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const produtos = [
  { id: '1', nome: 'Produto A', preco: 'R$ 10,00', descricao: 'Produto A de alta qualidade.' },
  { id: '2', nome: 'Produto B', preco: 'R$ 20,00', descricao: 'Produto B excelente custo-benefício.' },
];

export default function ProdutosScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { produto: item })}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>{item.nome} - {item.preco}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
