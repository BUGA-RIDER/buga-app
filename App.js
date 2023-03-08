import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/RiderScreens/Home';
import { useFonts } from 'expo-font';
import DriverLogin from './screens/DriverScreens/LoginSignUp/DriverLogin';
import DriverCreate from './screens/DriverScreens/LoginSignUp/DriverCreate';
import OTPScreen from './screens/DriverScreens/LoginSignUp/OTPScreen';
import Emergency from './screens/DriverScreens/LoginSignUp/Emergency';
import RiderLogin from './screens/RiderScreens/LoginSignUp/RiderLogin';
import RiderCreate from './screens/RiderScreens/LoginSignUp/RiderCreate';
import RiderOTPScreen from './screens/RiderScreens/LoginSignUp/RiderOTPScreen';
import RiderEmergency from './screens/RiderScreens/LoginSignUp/RiderEmergency';
import UniversitySelectScreen from './screens/RiderScreens/LoginSignUp/UniversitySelectScreen';
import StepOne from './screens/DriverScreens/Registration/StepOne';
import StepTwo from './screens/DriverScreens/Registration/StepTwo';
import LoadingScreenOne from './screens/LoadingScreens/LoadingScreenOne';
import Successful from './screens/LoadingScreens/Successful';
import DriverOnboarding from './screens/DriverScreens/DriverOnboarding';
import DriverHome from './screens/DriverScreens/LoggedIn/DriverHome';
import RiderHome from './screens/RiderScreens/LoggedIn/RiderHome';
import EconomyBooking from './screens/RiderScreens/LoggedIn/EconomyBooking';
import ChoosePackage from './screens/RiderScreens/LoggedIn/ChoosePackage';
import ScheduledPackage from './screens/RiderScreens/LoggedIn/ScheduledPackage';
import SelectDriver from './screens/RiderScreens/LoggedIn/SelectDriver';
import ChoosePayment from './screens/RiderScreens/LoggedIn/ChoosePayment';
import SplitFare from './screens/RiderScreens/LoggedIn/SplitFare';
import SplitOptions from './screens/RiderScreens/LoggedIn/SplitOptions';
import SplitFarePayment from './screens/RiderScreens/LoggedIn/SplitFarePayment';



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
        initialRouteName = "SplitFarePayment">
          <Stack.Screen name = "Home" component ={Home}/>
          {/* driver screens */}
          <Stack.Screen name = "DriverOnboarding" component ={DriverOnboarding}/>
          <Stack.Screen name = "DriverLogin" component ={DriverLogin}/>
          <Stack.Screen name = "DriverCreate" component ={DriverCreate}/>
          <Stack.Screen name = "OTPScreen" component ={OTPScreen}/>
          <Stack.Screen name = "Emergency" component ={Emergency}/>
          <Stack.Screen name = "StepOne" component ={StepOne}/>
          <Stack.Screen name = "StepTwo" component ={StepTwo}/>
          <Stack.Screen name = "DriverHome" component ={DriverHome}/>
          {/* rider screens */}
          <Stack.Screen name = "RiderHome" component ={RiderHome}/>
          <Stack.Screen name = "RiderLogin" component ={RiderLogin}/>
          <Stack.Screen name = "RiderCreate" component ={RiderCreate}/>
          <Stack.Screen name = "RiderOTPScreen" component ={RiderOTPScreen}/>
          <Stack.Screen name = "RiderEmergency" component ={RiderEmergency}/>
          <Stack.Screen name = "UniversitySelectScreen" component ={UniversitySelectScreen}/>
          <Stack.Screen name = "Economy" component ={EconomyBooking}/>
          <Stack.Screen name = "ChoosePackage" component ={ChoosePackage}/>
          <Stack.Screen name = "ScheduledPackage" component ={ScheduledPackage}/>
          <Stack.Screen name = "SelectDriver" component ={SelectDriver}/>
          <Stack.Screen name = "ChoosePayment" component ={ChoosePayment}/>
          <Stack.Screen name = "SplitFare" component ={SplitFare}/>
          <Stack.Screen name = "SplitOptions" component ={SplitOptions}/>
          <Stack.Screen name = "SplitFarePayment" component ={SplitFarePayment}/>
          {/* loading screens */}
          <Stack.Screen name = "LoadingScreenOne" component ={LoadingScreenOne}/>
          <Stack.Screen name = "Successful" component ={Successful}/>
          </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
