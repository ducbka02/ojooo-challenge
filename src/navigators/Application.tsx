import React, { useEffect } from 'react'
import { NativeModules, StatusBar, View } from 'react-native'
import moment from 'moment'
import 'moment/locale/vi'
import 'moment/locale/en-gb'
import i18next from 'i18next'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '@/theme'
import { Language } from '@/translations'
import { navigationRef } from '@/helpers/navigation'
import MainStack from './Main'

const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme, Colors } = useTheme()
  const { colors } = NavigationTheme

  const language = 'en'
  const deviceLanguage = NativeModules.I18nManager.localeIdentifier

  useEffect(() => {
    const isPL =
      language === Language.PL ||
      (language === Language.UN && deviceLanguage?.includes('pl'))
    moment.locale(isPL ? 'pl' : 'en-gb')
    i18next.changeLanguage(isPL ? Language.PL : Language.EN, (err, t) => {
      if (err) {
        return 0
      }
      t(isPL ? Language.PL : Language.EN)
    })
  }, [language, deviceLanguage])

  return (
    <View style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar
          backgroundColor={Colors.backgroundPrimary}
          barStyle={darkMode ? 'light-content' : 'dark-content'}
        />
        <MainStack />
      </NavigationContainer>
    </View>
  )
}

export default ApplicationNavigator
