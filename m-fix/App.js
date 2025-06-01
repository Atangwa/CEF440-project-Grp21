import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OnboardingScreen1 from './screens/OnboardingScreen1';
import OnboardingScreen2 from './screens/OnboardingScreen2';
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: { backgroundColor: '#101408' },
      tabBarActiveTintColor: '#8bc34a',
      tabBarInactiveTintColor: 'gray',
      tabBarIcon: ({ color, size }) => {
        let iconName;
        switch (route.name) {
          case 'Home':
            iconName = 'home-outline';
            break;
          case 'Scan':
            iconName = 'scan-outline';
            break;
          case 'History':
            iconName = 'time-outline';
            break;
          case 'Settings':
            iconName = 'settings-outline';
            break;
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={DashboardScreen} />
    <Tab.Screen name="Scan" component={() => <></>} />
    <Tab.Screen name="History" component={() => <></>} />
    <Tab.Screen name="Settings" component={() => <></>} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
        <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
