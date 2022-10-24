import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SurveyScreen } from '@/containers'

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerShown: false,
      }}
    >
      <Stack.Screen name="SurveyScreen" component={SurveyScreen} />
    </Stack.Navigator>
  )
}
export default MainStack
