import { BaseDimention } from '@/helpers/dimention'
import { I18nManager, StyleSheet } from 'react-native'
import getTooltipCoordinate from './getTooltipCoordinate'

export const getTooltipStyle = ({
  yOffset,
  xOffset,
  elementHeight,
  elementWidth,
  width,
  height,
  withPointer,
  containerStyle,
}: any) => {
  const { x, y } = getTooltipCoordinate(
    xOffset,
    yOffset,
    elementWidth,
    elementHeight,
    BaseDimention.screenWidth,
    BaseDimention.screenHeight,
    width,
    height,
    withPointer,
  )
  return StyleSheet.flatten([
    {
      position: 'absolute',
      [I18nManager.isRTL ? 'right' : 'left']: x,
      top: y,
      width,
      height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      borderRadius: 10,
      backgroundColor: '#202124',
      padding: 0,
    },
    containerStyle,
  ])
}
