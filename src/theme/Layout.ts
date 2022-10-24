import { StyleSheet, useWindowDimensions } from 'react-native'
import { ThemeVariables } from '@/theme/theme.type'
import { BaseDimention, scale } from '@/helpers/dimention'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function Layout(_: ThemeVariables) {
  return StyleSheet.create({
    /* Column Layouts */
    column: {
      flexDirection: 'column',
    },
    columnReverse: {
      flexDirection: 'column-reverse',
    },
    colCenter: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    colVCenter: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    colHCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    /* Row Layouts */
    rowWrap: {
      flexWrap: 'wrap',
    },
    row: {
      flexDirection: 'row',
    },
    rowReverse: {
      flexDirection: 'row-reverse',
    },
    rowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    rowVCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    rowHCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    /* Default Layouts */
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    alignItemsCenter: {
      alignItems: 'center',
    },
    alignItemsStart: {
      alignItems: 'flex-start',
    },
    alignItemsStretch: {
      alignItems: 'stretch',
    },
    justifyContentStart: {
      justifyContent: 'flex-start',
    },
    justifyContentCenter: {
      justifyContent: 'center',
    },
    justifyContentAround: {
      justifyContent: 'space-around',
    },
    justifyContentEnd: {
      justifyContent: 'flex-end',
    },
    alignItemsEnd: {
      alignItems: 'flex-end',
    },
    justifyContentBetween: {
      justifyContent: 'space-between',
    },
    scrollSpaceAround: {
      flexGrow: 1,
      justifyContent: 'space-around',
    },
    scrollSpaceBetween: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    selfStretch: {
      alignSelf: 'stretch',
    },
    selfCenter: {
      alignSelf: 'center',
    },
    selfEnd: {
      alignSelf: 'flex-end',
    },
    /* Sizes Layouts */
    fill: {
      flex: 1,
    },
    flex3: {
      flex: 3,
    },
    flex4: {
      flex: 4,
    },
    fullSize: {
      height: '100%',
      width: '100%',
    },
    fullWidthPercent: {
      width: '100%',
    },
    fullWidth: {
      width: useWindowDimensions().width,
    },
    fullHeight: {
      height: '100%',
    },
    fullWidthPadding: {
      width: useWindowDimensions().width - scale(40),
    },
    halfWidth: {
      width: BaseDimention.screenWidth * 0.5,
    },
    maxHalfWidth: {
      maxWidth: BaseDimention.screenWidth * 0.5,
    },
    width60: {
      width: BaseDimention.screenWidth * 0.6,
    },
    width100: {
      width: scale(100),
    },
    width70: {
      width: BaseDimention.screenWidth * 0.7,
    },
    width80: {
      width: BaseDimention.screenWidth * 0.8,
    },
    width40: {
      width: BaseDimention.screenWidth * 0.4,
    },
    threeQuartersWidth: {
      width: BaseDimention.screenWidth * 0.73,
    },
    fullScreen: {
      width: BaseDimention.screenWidth,
      height: BaseDimention.screenHeight,
    },
    halfScreen: {
      width: BaseDimention.screenWidth,
      height: BaseDimention.screenHeight,
    },
    maxWidth180: {
      maxWidth: scale(180),
    },
    /* Operation Layout */
    mirror: {
      transform: [{ scaleX: -1 }],
    },
    rotate90: {
      transform: [{ rotate: '90deg' }],
    },
    rotate90Inverse: {
      transform: [{ rotate: '-90deg' }],
    },
    zIndex1: {
      zIndex: 1,
    },
  })
}

export type ThemeLayout = ReturnType<typeof Layout>
