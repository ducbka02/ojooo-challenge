// @flow

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as resources from './resources'

const Language = {
  PL: 'pl',
  EN: 'en',
  UN: 'un',
}

i18n.use(initReactI18next).init({
  fallbackLng: Language.EN,
  initImmediate: false,
  returnObjects: true,
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {},
    ),
  },
  lng: Language.EN,
})

export { Language }

export default i18n
