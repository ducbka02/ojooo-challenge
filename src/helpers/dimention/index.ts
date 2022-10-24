import { Dimensions, Platform, StatusBar, PixelRatio } from 'react-native'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

export const isIos = () => Platform.OS === 'ios'

export const isIphoneX = () => {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (screenHeight === 693 ||
      screenWidth === 693 ||
      screenHeight === 780 ||
      screenWidth === 780 ||
      screenHeight === 812 ||
      screenWidth === 812 ||
      screenHeight === 844 ||
      screenWidth === 844 ||
      screenHeight === 896 ||
      screenWidth === 896 ||
      screenHeight === 926 ||
      screenWidth === 926)
  )
}

export const isSmallScreen = screenHeight < 569

export const ifIphoneX = (iphoneXStyle: number, regularStyle: number) => {
  if (isIphoneX()) {
    return iphoneXStyle
  }
  return regularStyle
}

export const getStatusBarHeight = (safe: boolean) => {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  })
}

export const getBottomSpace = () => {
  return isIphoneX() ? 34 : 0
}

export const widthPercentageToDP = (widthPercent: number) => {
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100)
}

export const heightPercentageToDP = (heightPercent: number) => {
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100)
}

const guidelineBaseWidth = 375
const guidelineBaseHeight = 812

export const scale = (size: number) => {
  return (screenHeight / guidelineBaseHeight) * size
}

export const verticleSale = (size: number) => {
  return (screenWidth / guidelineBaseWidth) * size
}

export const moderateScale = (size: number, factor = 0.5) => {
  return size + (scale(size) - size) * factor
}

export const BaseDimention = {
  screenWidth,
  screenHeight,
  buttonHeight: scale(40),
  borderRadius: scale(5),
  navBarHeight: Platform.OS === 'ios' ? (isIphoneX() ? 52 + 34 : 72) : 56,
  tabBarHeight:
    Platform.OS === 'ios'
      ? isIphoneX()
        ? scale(62) + 40
        : scale(62)
      : scale(62),
  navBarPaddingTop: Platform.OS === 'ios' ? (isIphoneX() ? 34 : 20) : 0,
  tabBarPaddingBottom: Platform.OS === 'ios' ? (isIphoneX() ? 34 : 0) : 0,
  marginKeyBoard: Platform.OS === 'ios' ? (isIphoneX() ? 96 : 84) : 0,
}
