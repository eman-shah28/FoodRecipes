import React from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import RecipeCard from '../components/RecipeCard';
import recipes from '../data/recipes';

const RecipeListScreen = ({ navigation }) => {

  const handleRecipePress = recipe => {
    navigation.navigate('RecipeDetail', {
      recipe,
    });
  };

  return (
    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#1B5E20"
        translucent={false}
      />

      <SafeAreaView
        style={styles.safeArea}
        edges={['top']}
      >

        {/* Header */}
        <View style={styles.header}>

          <Text style={styles.title}>
            Food Recipes
          </Text>

          <Text style={styles.subtitle}>
            Discover delicious recipes
          </Text>

        </View>

        {/* Recipe List */}
        <FlatList
          data={recipes}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <RecipeCard
              recipe={item}
              onPress={() => handleRecipePress(item)}
            />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />

      </SafeAreaView>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F9F4',
  },

  safeArea: {
    flex: 1,
    backgroundColor: '#F5F9F4',
  },

  header: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  subtitle: {
    fontSize: 16,
    color: '#E8F5E9',
    marginTop: 6,
  },

  list: {
    padding: 16,
    paddingBottom: 30,
  },

});

export default RecipeListScreen;