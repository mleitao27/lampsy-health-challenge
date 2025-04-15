import { Tabs } from 'expo-router';
import { Platform, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Tab menu for navigation between the different screens
export default function TabLayout() {
  return (
      <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#f1f1f1',
        tabBarInactiveTintColor: '#d8d8d8',
        tabBarBackground: () => (
            <View style={{ backgroundColor: '#8952df', flex: 1 }} />
          ),
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
        <Tabs.Screen 
            name="index" 
            options={{ 
                title: "Home",
                tabBarIcon: ({focused}) => {
                    return <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={focused ? '#f1f1f1' : '#d8d8d8'} />
                }
            }}
        />
        <Tabs.Screen 
            name="live" 
            options={{ 
                title: "Live video",
                tabBarIcon: ({focused}) => <Ionicons name={focused ? 'aperture' : 'aperture-outline'} size={24} color={focused ? '#f1f1f1' : '#d8d8d8'} />
            }}
        />
        <Tabs.Screen 
            name="settings" 
            options={{ 
                title: "Settings",
                tabBarIcon: ({focused}) => <Ionicons name={focused ? 'settings' : 'settings-outline'} size={24} color={focused ? '#f1f1f1' : '#d8d8d8'} />
            }} 
        />
      </Tabs>
  );
}
