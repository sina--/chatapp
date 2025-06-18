import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Platform, Image } from 'react-native';

// Start screen component - allows user to enter their name and choose a background color
const Start = ({ navigation }) => {
  // State for user's name and selected background color
  const [name, setName] = useState('');
  const [selectedColor, setSelectedColor] = useState('#090C08');

  // Color options for chat background
  const colors = ['#090C08', '#474056', '#8A95A5', '#B9C6AE'];

  return (
    <ImageBackground
      source={require('../assets/Background Image.png')}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Chat App</Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <View style={styles.inputIconWrapper}>
              <Image
                source={require('../assets/user-icon.png')}
                style={styles.userIcon}
              />
              <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={setName}
                placeholder='Your Name'
                placeholderTextColor="#757083"
              />
            </View>
          </View>

          <View style={styles.colorSelector}>
            <Text style={styles.colorSelectorText}>Choose Background Color:</Text>
            <View style={styles.colorOptions}>
              {colors.map((color, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.colorCircle,
                    { backgroundColor: color },
                    selectedColor === color && styles.selectedColorCircle
                  ]}
                  onPress={() => setSelectedColor(color)}
                />
              ))}
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Navigate to Chat screen with user's name and selected background color
              navigation.navigate('Chat', {
                name: name || 'User',
                backgroundColor: selectedColor
              });
            }}
          >
            <Text style={styles.buttonText}>Start Chatting</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    marginBottom: 50
  },
  titleText: {
    fontSize: 45,
    fontWeight: '600',
    color: '#FFFFFF'
  },
  inputContainer: {
    width: '88%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 20
  },
  inputIconWrapper: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
  },
  userIcon: {
    position: 'absolute',
    left: 15,
    top: '50%',
    width: 20,
    height: 20,
    transform: [{ translateY: -10 }],
    tintColor: '#757083',
    zIndex: 1,
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#757083',
    padding: 15,
    paddingLeft: 45,
    borderRadius: 5,
    color: '#757083',
    fontSize: 16,
    fontWeight: '300',
  },
  colorSelector: {
    width: '100%',
    marginBottom: 20
  },
  colorSelectorText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    marginBottom: 10
  },
  colorOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  selectedColorCircle: {
    borderWidth: 2,
    borderColor: '#757083'
  },
  button: {
    backgroundColor: '#757083',
    padding: 15,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600'
  }
});

export default Start; 