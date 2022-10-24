import { ThemeNavigationColors } from '@/theme/theme.type'
import { ThemeColors } from '@/theme/Variables'

const Colors: Partial<ThemeColors> = {
  primary: 'lightblue',
  border: 'rgb(255, 255, 255)',
  matterhorn: '#b8b8b8',
  lightFade: 'rgba(0, 0, 0, 0.8)',
  borderCard: 'rgba(255, 255, 255, 0.1)',
  lynxWhite: '#1C1C1C',
  gainsboro: '#494949',
  blueBase: '#168FFF',
  blueL20: '#45a5ff',
  blueL40: '#73bcff',
  blueL60: '#a2d2ff',
  blueD20: 'rgb(18, 114, 204)',
  blueD40: 'rgb(13, 86, 153)',
  blueD60: 'rgb(9, 57, 102)',
  blue1D60: 'rgb(9, 57, 102)',
  greenBase: '#17CB49',
  greenL20: '#45d56d',
  greenL40: '#74e092',
  greenL60: '#A2EAB6',
  greenD20: 'rgb(18, 162, 58)',
  greenD40: 'rgb(14, 122, 44)',
  greenD60: 'rgb(9, 81, 29)',
  green1D60: 'rgb(9, 81, 29)',
  orangeBase: '#FFA52C',
  orangeL20: '#fa9e33',
  orangeL40: '#fbb666',
  orangeL60: '#fdcf99',
  orangeD20: 'rgb(204, 127, 36)',
  orangeD40: 'rgb(153, 95, 27)',
  orangeD60: 'rgb(102, 64, 18)',
  redBase: '#F75555',
  redL20: '#f96767',
  redL40: '#fa8d8d',
  redL60: '#fcb3b3',
  redD20: 'rgb(198, 52, 52)',
  redD40: 'rgb(148, 39, 39)',
  redD60: 'rgb(99, 26, 26)',
  red1D60: 'rgb(99, 26, 26)',
  backgroundPrimary: 'rgb(249, 249, 249)',
  backgroundSecondary: '#1C1C1C',
  backgroundGreen: 'rgb(6, 51, 18)',
  backgroundBlue: 'rgb(6, 36, 64)',
  backgroundOrange: 'rgb(64, 40, 11)',
  backgroundRed: 'rgb(62, 16, 16)',
  backgroundContext: '#181A20',
  shade01: '#246BFD',
  shade03: '#2A3340',
  shade04: '#212833',
  shade05: '#98A4B1',
  shade06: '#717F8D',
  shade07: '#0E1017',
  shade08: '#14EE97',
  shade09: '#372227',
  shade10: '#2A271F',
  shade11: '#60616F',
  backgroundKeyboard: '#DEDEDE',
}

const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: '#313131',
}

export default {
  Colors,
  NavigationColors,
}