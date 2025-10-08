import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function RouteDetailScreen({ navigation }) {
  return (
    <View className="flex-1 bg-white justify-center items-center px-5">
      <View className="bg-gray-100 rounded-2xl p-6 w-full max-w-md shadow">
        <Text className="text-xl font-bold text-gray-800 mb-3">
          🚌 Ruta San José - Heredia
        </Text>
        <Text className="text-gray-700 mb-1">Tarifa: ₡650</Text>
        <Text className="text-gray-700 mb-4">
          Paradas: La Coca Cola, Santo Domingo, Heredia Centro
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Map')}
          className="bg-green-600 px-5 py-3 rounded-2xl"
        >
          <Text className="text-white text-center font-semibold">
            Ver en mapa
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}