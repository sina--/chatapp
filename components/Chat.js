import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Chat screen component - displays the chat interface
const Chat = ({ route, navigation }) => {
  // Extract name and backgroundColor from route params
  const { name, backgroundColor } = route.params;

  // Set the screen title to the user's name
  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>
        Hello {name}! Welcome to the Chat screen.
      </Text>
      <Text style={styles.text}>
        Coming soon!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Poppins-Regular'
  }
});

export default Chat; 