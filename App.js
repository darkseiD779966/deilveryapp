import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
 
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="home"  component={Homescreen} options={{headerShown:false,}}  />
    </Stack.Navigator>
    </NavigationContainer>

  );
}



