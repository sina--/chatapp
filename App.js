import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

// Import screen components
import Start from './components/Start';
import Chat from './components/Chat';

// Create the navigator
const Stack = createNativeStackNavigator();

// Main app component with navigation structure
export default function App() {
  // State to track if fonts are loaded
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Load custom fonts
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Poppins-Regular': require('./assets/Poppins-Regular.ttf'),
        'Poppins-Bold': require('./assets/Poppins-Bold.ttf'),
        'Poppins-Light': require('./assets/Poppins-Light.ttf'),
        'Poppins-Medium': require('./assets/Poppins-Medium.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  // Don't render app until fonts are loaded
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen 
          name="Start" 
          component={Start} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Chat" 
          component={Chat} 
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
