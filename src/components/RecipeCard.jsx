import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const RecipeCard = ({ recipe, onPress }) => {
  return (
    <View style={styles.card}>

      <Image
        source={{ uri: recipe.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>

        <Text style={styles.title}>
          {recipe.name}
        </Text>

        <Text
          style={styles.description}
          numberOfLines={2}
        >
          {recipe.description}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            View Recipe →
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    overflow: 'hidden',
    marginBottom: 20,

    elevation: 5,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },

  image: {
    width: '100%',
    height: 220,
    backgroundColor: '#E8F5E9',
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 27,
    fontWeight: '800',
    color: '#1B5E20',
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    lineHeight: 25,
    color: '#555555',
    marginBottom: 15,
  },

  button: {
    alignSelf: 'flex-start',
    paddingVertical: 5,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2E7D32',
  },
});

export default RecipeCard;