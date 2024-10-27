import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen.js';
import SignupScreen from './screens/SignupScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import ConversationalRoutineSetup from './screens/ConversationalRoutineSetup.js';
import UserProfile from './screens/UserProfileScreen.js';
import RoutineManagement from './screens/RoutineManagementScreen.js';
import HobbyExplorer from './screens/HobbyExplorerScreen.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='RoutineManagement' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='RoutineSetup' component={ConversationalRoutineSetup} />
        <Stack.Screen name='UserProfile' component={UserProfile} />
        <Stack.Screen name='RoutineManagement' component={RoutineManagement} />
        <Stack.Screen name='HobbyExplorer' component={HobbyExplorer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;