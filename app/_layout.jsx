import { Stack } from "expo-router"
import {Colors}  from '../constants/Colors.js'
import { useColorScheme ,StatusBar } from "react-native"


export default function RootLayout() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <>
      <StatusBar value="auto" />
      <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
      }}>
        {/* Individual Screens */}
        <Stack.Screen name="(auth)" options={{ headerShown:false }} />
        <Stack.Screen name="index" options={{ title: "Home" }} />
        
        
      </Stack>
    </>
  )
}