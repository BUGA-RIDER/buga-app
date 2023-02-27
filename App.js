import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/RiderScreens/Home';
import { useFonts } from 'expo-font';
import DriverHome from './screens/DriverScreens/DriverHome';
import DriverLogin from './screens/DriverScreens/LoginSignUp/DriverLogin';
import DriverCreate from './screens/DriverScreens/LoginSignUp/DriverCreate';
import OTPScreen from './screens/DriverScreens/LoginSignUp/OTPScreen';
import Emergency from './screens/DriverScreens/LoginSignUp/Emergency';
import RiderLogin from './screens/RiderScreens/LoginSignUp/RiderLogin';
import RiderCreate from './screens/RiderScreens/LoginSignUp/RiderCreate';
import RiderOTPScreen from './screens/RiderScreens/LoginSignUp/RiderOTPScreen';
import RiderEmergency from './screens/RiderScreens/LoginSignUp/RiderEmergency';
import UniversitySelectScreen from './screens/RiderScreens/LoginSignUp/UniversitySelectScreen';



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
          {/* driver screens */}
          <Stack.Screen name = "DriverHome" component ={DriverHome}/>
          <Stack.Screen name = "DriverLogin" component ={DriverLogin}/>
          <Stack.Screen name = "DriverCreate" component ={DriverCreate}/>
          <Stack.Screen name = "OTPScreen" component ={OTPScreen}/>
          <Stack.Screen name = "Emergency" component ={Emergency}/>
          {/* rider screens */}
          <Stack.Screen name = "RiderLogin" component ={RiderLogin}/>
          <Stack.Screen name = "RiderCreate" component ={RiderCreate}/>
          <Stack.Screen name = "RiderOTPScreen" component ={RiderOTPScreen}/>
          <Stack.Screen name = "RiderEmergency" component ={RiderEmergency}/>
          <Stack.Screen name = "UniversitySelectScreen" component ={UniversitySelectScreen}/>
          </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
