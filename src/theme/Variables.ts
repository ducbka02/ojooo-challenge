/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { scale } from '@/helpers/dimention'
import { ThemeNavigationColors } from '@/theme/theme.type'

/**
 * Colors
 */
export const Colors = {
  // Example colors:
  transparent: 'transparent',
  white: '#ffffff',
  white100: '#EBEDF0',
  primary: '#E14032',
  success: '#28a745',
  error: '#dc3545',
  border: '#1C1C1C',
  disable: 'rgb(118, 118, 118)',
  app: 'rgb(255, 90, 95)',
  black: '#1C1C1C',
  matterhorn: '#585757',
  lightFade: 'rgba(50, 50, 50, 0.5)',
  borderCard: 'rgba(232, 232, 232, 1)',
  shadowColor: '#000',
  lynxWhite: '#F7F7F7',
  gainsboro: '#dfdfdf',
  selectedAnswer: '#222B4B',
  tab: '#246BFD',
  identity: 'white',
  identity1: '#FF5064',
  identity2: '#5A818D',
  identity3: '#0E3F6C',
  identity4: '#00D1D1',
  identity5: '#D8F4F7',
  identityInverted: '#99E1E1',
  silverSand: '#C4C4C4',
  salomie: '#C2D6DC',
  moderateBlue: '#24444E',
  gray100: '#000000',
  gray200: 'rgba(0, 0, 0, 0.7)',
  gray300: 'rgba(0, 0, 0, 0.4)',
  gray500: 'rgba(0, 0, 0, 0.2)',
  gray700: 'rgba(0, 0, 0, 0.15)',
  gray400: '#868686',
  gray600: '#98A4B1',
  gray999: '#E6E6E6',
  blueBase: '#0085FF',
  blueL20: 'rgba(0, 133, 255, 0.8)',
  blueL40: 'rgba(0, 133, 255, 0.6)',
  blueL60: 'rgba(0, 133, 255, 0.4)',
  blueD20: 'rgb(0, 106, 204)',
  blueD40: 'rgb(0, 80, 153)',
  blueD60: 'rgb(0, 53, 102)',
  blue1D60: 'rgba(0, 133, 255, 0.4)',
  greenBase: '#00BA34',
  greenL20: 'rgba(0, 186, 52, 0.8)',
  greenL40: 'rgba(0, 186, 52, 0.6)',
  greenL60: 'rgba(0, 186, 52, 0.4)',
  greenD20: 'rgb(0, 149, 42)',
  greenD40: 'rgb(0, 112, 31)',
  greenD60: 'rgb(0, 74, 21)',
  green1D60: 'rgba(0, 186, 52, 0.4)',
  orangeBase: '#F98600',
  orangeL20: 'rgba(249, 134, 0, 0.8)',
  orangeL40: 'rgba(249, 134, 0, 0.6)',
  orangeL60: 'rgba(249, 134, 0, 0.4)',
  orangeD20: 'rgb(199, 107, 0)',
  orangeD40: 'rgb(149, 80, 0)',
  orangeD60: 'rgb(100, 54, 0)',
  redBase: '#E92C2C',
  redL20: 'rgba(233,44,44, 0.8)',
  redL40: 'rgba(233,44,44, 0.6)',
  redL60: 'rgba(233,44,44, 0.4)',
  redD20: 'rgb(186, 35, 35)',
  redD40: 'rgb(140, 26, 26)',
  redD60: 'rgb(93, 18, 18)',
  red1D60: 'rgba(233,44,44, 0.4)',
  backgroundPrimary: '#181A20',
  backgroundSecondary: '#EEEEF0',
  backgroundGreen: 'rgba(0, 186, 52, 0.1)',
  backgroundBlue: 'rgba(0, 133, 255, 0.1)',
  backgroundOrange: 'rgba(249, 134, 0, 0.1)',
  backgroundRed: 'rgb(62, 16, 16)',
  backgroundContext: '#FFFFFF',
  backgroundOverlay: 'rgba(62, 64, 66, 0.25)',
  backgroundModal: 'rgba(0, 0, 0, 0.25)',
  backgroundKeyboard: '#DEDEDE',
  shade01: '#246BFD',
  shade03: '#2A3340',
  shade04: '#212833',
  shade05: '#98A4B1',
  shade06: '#717F8D',
  shade07: '#0E1017',
  shade08: '#14EE97',
  shade09: '#372227',
}

export type ThemeColors = {
  [K in keyof typeof Colors]: string
}

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: 'rgb(247, 247, 247)',
}

/**
 * FontSize
 */
export const FontSize = {
  text40: scale(40),
  text32: scale(32),
  text30: scale(30),
  text25: scale(25),
  text24: scale(24),
  text20: scale(20),
  text18: scale(18),
  text17: scale(17),
  text16: scale(16),
  text15: scale(15),
  text14: scale(14),
  text12: scale(12),
  text10: scale(10),
}

export type ThemeFontSize = {
  [K in keyof typeof FontSize]: number
}

export const FontFamily = {
  w100: 'Poppins-Thin',
  w200: 'Poppins-Light',
  w300: 'Poppins-ExtraLight',
  w400: 'Poppins-Regular',
  w500: 'Poppins-SemiBold',
  w600: 'Poppins-SemiBold',
  w700: 'Poppins-Bold',
  w800: 'Poppins-ExtraBold',
  w900: 'Poppins-Black',
}

export type ThemeFontFamily = {
  [K in keyof typeof FontFamily]: string
}

/**
 * Metrics Sizes
 */
const zero = 0
const mini = scale(2)
const little = scale(4)
const tiny = scale(5) // 5
const xTiny = scale(6)
const xxTiny = little * 2 // 8
const small = tiny * 2 // 10
const xsmall = tiny * 2 + scale(2) // 12
const xxsmall = tiny * 2 + scale(4) // 14
const regular = tiny * 3 // 15
const xregular = tiny * 3 + scale(1) // 16
const xxregular = tiny * 4 // 20
const xxxregular = tiny * 4 + little // 24
const medium = xxxregular + little // 28
const large = regular * 2 // 30
const xLarge = small * 4 // 40
const xxLarge = regular * 4 // 60
const xxxLarge = xLarge * 3 // 120
const big = large * 5 // 150

export const MetricsSizes = {
  mini,
  little,
  tiny,
  small,
  regular,
  large,
  xLarge,
  xxLarge,
  xxxLarge,
  big,
  xsmall,
  xxsmall,
  xregular,
  xTiny,
  xxTiny,
  xxregular,
  xxxregular,
  medium,
  zero,
}

export type ThemeMetricsSizes = {
  [K in keyof typeof MetricsSizes]: number
}
