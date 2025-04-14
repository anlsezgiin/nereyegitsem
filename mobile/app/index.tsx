import { SafeAreaView } from 'react-native';
import EditProfileScreen from './screens/Profiles/EditProfileScreen';
import SettingsScreen from './screens/Profiles/SettingsScreen';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SettingsScreen />
    </SafeAreaView>
  );
}
