import React from 'react';

import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const RecipeDetailScreen = ({ route, navigation }) => {

  const { recipe } = route.params;

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

        <ScrollView
          showsVerticalScrollIndicator={false}
        >

          {/* Top Bar */}
          <View style={styles.topBar}>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
              activeOpacity={0.8}
            >
              <Text style={styles.backText}>
                ← Back
              </Text>
            </TouchableOpacity>

            <Text style={styles.topBarTitle}>
              Recipe Details
            </Text>

          </View>

          {/* Recipe Image */}
          <Image
            source={{ uri: recipe.image }}
            style={styles.image}
            resizeMode="cover"
          />

          {/* Main Content */}
          <View style={styles.content}>

            <Text style={styles.title}>
              {recipe.name}
            </Text>

            <Text style={styles.description}>
              {recipe.description}
            </Text>

            {/* Ingredients */}
            <View style={styles.card}>

              <Text style={styles.sectionTitle}>
                Ingredients
              </Text>

              {recipe.ingredients.map((ingredient, index) => (
                <View
                  key={index}
                  style={styles.ingredientRow}
                >

                  <Text style={styles.bullet}>
                    •
                  </Text>

                  <Text style={styles.ingredient}>
                    {ingredient}
                  </Text>

                </View>
              ))}

            </View>

            {/* Instructions */}
            <View style={styles.card}>

              <Text style={styles.sectionTitle}>
                Instructions
              </Text>

              <Text style={styles.instructions}>
                {recipe.instructions}
              </Text>

            </View>

            {/* Bottom Back Button */}
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={() => navigation.goBack()}
              activeOpacity={0.8}
            >

              <Text style={styles.bottomButtonText}>
                ← Back to Recipes
              </Text>

            </TouchableOpacity>

          </View>

        </ScrollView>

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

  topBar: {
    height: 58,
    backgroundColor: '#2E7D32',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  backButton: {
    paddingVertical: 8,
    paddingRight: 18,
  },

  backText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  topBarTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '700',
  },

  image: {
    width: '100%',
    height: 300,
    backgroundColor: '#E8F5E9',
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '800',
    color: '#1B5E20',
    marginBottom: 14,
  },

  description: {
    fontSize: 18,
    lineHeight: 29,
    color: '#555555',
    marginBottom: 24,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 22,
    marginBottom: 22,

    elevation: 4,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },

  sectionTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#2E7D32',
    marginBottom: 18,
  },

  ingredientRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 13,
  },

  bullet: {
    fontSize: 22,
    color: '#2E7D32',
    marginRight: 10,
    lineHeight: 27,
  },

  ingredient: {
    flex: 1,
    fontSize: 18,
    lineHeight: 27,
    color: '#444444',
  },

  instructions: {
    fontSize: 18,
    lineHeight: 30,
    color: '#444444',
  },

  bottomButton: {
    backgroundColor: '#2E7D32',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 25,
  },

  bottomButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

});

export default RecipeDetailScreen;