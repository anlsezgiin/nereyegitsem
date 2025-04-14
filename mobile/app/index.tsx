import { SafeAreaView } from 'react-native';
import LoginScreen from './screens/Landing/LoginScreen';
import SetPassword from './screens/Landing/SetPasswordScreen';
import SignUpScreen from './screens/Landing/SignUpScreen';
import WelcomeScreen from './screens/Landing/WelcomeScreen';

// test aşamasında, güncellenecek.
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WelcomeScreen />
    </SafeAreaView>
  );
}
