import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/stores'
import { ApplicationNavigator } from '@/navigators'
import './translations'
import { FlashMessage } from './components'
import { Platform } from 'react-native'
import { enableFreeze, enableScreens } from 'react-native-screens'

if (Platform.OS === 'ios') {
  enableScreens()
}

enableFreeze(true)

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
        <FlashMessage />
      </PersistGate>
    </Provider>
  )
}

export default App
