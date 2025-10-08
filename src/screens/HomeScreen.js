import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 bg-blue-50 justify-center items-center px-6">
      <Text className="text-3xl font-bold text-blue-700 mb-2">
        🚍 BusCR
      </Text>

      <Text className="text-lg text-gray-600 text-center mb-6">
        Encuentra tu bus, horarios, tarifas y ubicación en tiempo real.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('RouteDetail')}
        className="bg-blue-600 px-6 py-3 rounded-2xl shadow-lg active:bg-blue-700"
      >
        <Text className="text-white text-lg font-semibold">
          Buscar mi ruta
        </Text>
      </TouchableOpacity>
    </View>
  );
}