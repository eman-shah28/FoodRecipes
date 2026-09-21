import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RecipeListScreen from './src/screens/RecipeListScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      
      {/* Phone's real status / notification bar */}
      <StatusBar
        translucent={false}
        backgroundColor="#101010"
        barStyle="light-content"
      />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="RecipeList"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="RecipeList"
            component={RecipeListScreen}
          />

          <Stack.Screen
            name="RecipeDetail"
            component={RecipeDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}