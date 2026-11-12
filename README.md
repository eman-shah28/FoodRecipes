# 🍴 Food Recipes Application

A simple and user-friendly **Food Recipes mobile application** built with **React Native**.

The application allows users to browse a collection of delicious recipes and explore detailed information about each recipe, including its image, description, ingredients, and cooking instructions.

## 👩‍💻 Developed By

**Eman Shah**

## 📱 About the Application

The Food Recipes Application provides an easy and interactive way for users to discover different recipes.

Users can:

- Browse a list of food recipes
- View recipe images
- Read recipe descriptions
- Open a recipe to view its complete details
- View ingredients required for each recipe
- Read step-by-step cooking instructions
- Navigate between the recipe list and recipe detail screens
- Return to the recipe list using the back button

## ✨ Features

### 🏠 Recipe Listing

The application displays multiple recipes in an attractive card-based layout. Each recipe includes:

- Recipe image
- Recipe name
- Short description
- View Recipe button

### 📖 Recipe Details

Users can select any recipe to view:

- Large recipe image
- Recipe name
- Detailed description
- Ingredients
- Cooking instructions

### 🧭 Navigation

The application uses React Navigation to provide smooth navigation between:

- Recipe List Screen
- Recipe Detail Screen

### 🎨 User Interface

The application includes:

- Clean and modern design
- Responsive layout
- Recipe cards
- Green food-themed color scheme
- Easy-to-use navigation
- Mobile-friendly interface

## 🛠️ Technologies Used

- React Native
- JavaScript
- React Navigation
- React Native Safe Area Context
- React Native StyleSheet
- React Native FlatList
- React Native Image
- React Native TouchableOpacity

## 📂 Project Structure

```text
FoodRecipes/
│
├── android/
├── ios/
│
├── src/
│   ├── components/
│   │   └── RecipeCard.jsx
│   │
│   ├── data/
│   │   └── recipes.js
│   │
│   └── screens/
│       ├── RecipeListScreen.jsx
│       └── RecipeDetailScreen.jsx
│
├── App.jsx
├── index.js
├── app.json
├── package.json
└── README.md