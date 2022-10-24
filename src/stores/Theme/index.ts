import { buildSlice } from '@/helpers/redux'
import DefaultTheme from './DefaultTheme'
import ChangeTheme from '@/stores/Theme/ChangeTheme'

export default buildSlice('theme', [DefaultTheme, ChangeTheme], {
  theme: null,
  darkMode: null,
}).reducer

export interface ThemeState {
  theme: string | null
  darkMode: boolean | null
}
