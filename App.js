import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';
import Register from './screens/Register';
const Stack = createStackNavigator();
export default function App() {
return (
<NavigationContainer>
<Stack.Navigator >
<Stack.Screen name="Register" component={Register} />
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Chat" component={ChatScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}

