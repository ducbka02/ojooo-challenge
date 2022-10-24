import { ImageStyle, TextStyle, ViewStyle } from 'react-native'
import { ThemeFonts } from './Fonts'
import { ThemeLayout } from './Layout'

import {
  ThemeColors,
  ThemeFontFamily,
  ThemeFontSize,
  ThemeMetricsSizes,
} from './Variables'
import { ThemeCommon } from './Common'
import { ThemeImages } from './Images'

export type StyleType = TextStyle & ViewStyle & ImageStyle

export type ThemeNavigationTheme = {
  dark: boolean
  colors: ThemeNavigationColors
}
export type ThemeNavigationColors = {
  primary: string
  background: string
  card: string
  text: string
  border: string
  notification: string
}
export type ThemeGutters = { [key: string]: StyleType }

export type ThemeVariables = {
  Colors: ThemeColors
  NavigationColors: ThemeNavigationColors
  FontSize: ThemeFontSize
  FontFamily: ThemeFontFamily
  MetricsSizes: ThemeMetricsSizes
}

export type Theme = {
  Colors: ThemeColors
  NavigationColors: ThemeNavigationColors
  FontSize: ThemeFontSize
  MetricsSizes: ThemeMetricsSizes
  Fonts: ThemeFonts
  Images: ThemeImages
  Layout: ThemeLayout
  Gutters: ThemeGutters
  Common: ThemeCommon
  Variables?: Partial<ThemeVariables>
}
export interface ThemeCommonParams {
  Colors: ThemeColors
  NavigationColors: ThemeNavigationColors
  FontSize: ThemeFontSize
  MetricsSizes: ThemeMetricsSizes
  Fonts: ThemeFonts
  Images: ThemeImages
  Layout: ThemeLayout
  Gutters: ThemeGutters
  Variables?: Partial<ThemeVariables>
}
