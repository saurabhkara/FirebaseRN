import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const navigation= useNavigation()
  return (
    <View>
      <Text>Home Screen</Text>
      <Button 
        title="Go to Details" 
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
