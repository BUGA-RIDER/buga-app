import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/RiderScreens/Home';
import { useFonts } from 'expo-font';
import DriverHome from './screens/DriverScreens/DriverHome';



const Stack = createNativeStackNavigator ();

const App = () => {

  const [loaded] = useFonts({
    SatoshiRegular: require('./assets/fonts/Satoshi-Regular.ttf'),
    SatoshiBold: require('./assets/fonts/Satoshi-Bold.ttf'),
    SatoshiMedium: require('./assets/fonts/Satoshi-Medium.ttf'),
    SatoshiLight: require('./assets/fonts/Satoshi-Light.ttf'),
    SatoshiVariable: require('./assets/fonts/Satoshi-Variable.ttf'),
  });

  if(!loaded) return null;

  return ( 
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{ headerShown: false }} 
        initialRouteName = "Home">
          <Stack.Screen name = "Home" component ={Home}/>
          <Stack.Screen name = "DriverHome" component ={DriverHome}/>
          </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
