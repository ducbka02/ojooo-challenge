import { StyleSheet } from 'react-native'
import { ThemeCommonParams } from '@/theme/theme.type'
import { BaseDimention, scale, verticleSale } from '@/helpers/dimention'

export default function ({ Colors, Layout }: ThemeCommonParams) {
  const base = {
    ...Layout.center,
    height: BaseDimention.buttonHeight,
  }
  const rounded = {
    ...base,
    borderRadius: BaseDimention.borderRadius,
  }

  const borderWidth = 1

  return StyleSheet.create({
    base,
    rounded,
    fill: {
      ...base,
    },
    fillRounded: {
      ...base,
      ...rounded,
      backgroundColor: Colors.identity,
    },
    smallButton: {
      ...base,
      ...rounded,
      height: scale(24),
    },
    outline: {
      ...base,
      borderWidth,
      backgroundColor: Colors.transparent,
      borderColor: Colors.border,
    },
    outlineRounded: {
      ...rounded,
      borderWidth,
      backgroundColor: Colors.transparent,
      borderColor: Colors.border,
    },
    iconTabActive: {
      tintColor: Colors.gray100,
      height: scale(18),
      width: scale(18),
    },
    iconTabInActive: {
      tintColor: Colors.gray400,
      height: scale(18),
      width: scale(18),
    },
    viewQuantity: {
      width: scale(21),
      height: scale(21),
      backgroundColor: Colors.gray200,
      borderRadius: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    viewSideDish: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingLeft: scale(4),
      marginLeft: scale(32),
    },
    sizeButton: {
      minHeight: scale(44),
      width: scale(97),
    },
    viewAdd: {
      width: scale(2),
      height: scale(10),
      backgroundColor: Colors.backgroundPrimary,
      position: 'absolute',
      borderRadius: scale(5),
    },
    viewAdd1: {
      width: scale(3.4),
      height: scale(17),
      backgroundColor: Colors.white,
      position: 'absolute',
      borderRadius: scale(8),
    },
    viewSubtract: {
      width: scale(10),
      height: scale(2),
      backgroundColor: Colors.backgroundPrimary,
      borderRadius: scale(5),
    },
    viewSubtract1: {
      width: scale(17),
      height: scale(3.4),
      backgroundColor: Colors.white,
      borderRadius: scale(8),
    },
    leftRatio: {
      marginLeft: scale(32),
    },
    viewTrackQuanlity: {
      height: scale(60),
      width: scale(62),
      borderRadius: scale(8),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.identity,
    },
    borderButton: {
      borderWidth,
      backgroundColor: Colors.transparent,
      borderColor: Colors.border,
      borderRadius: BaseDimention.borderRadius,
      minHeight: scale(40),
    },
    diotPagination: {
      width: 8,
      height: 8,
      borderRadius: 8,
      backgroundColor: Colors.gray400,
      marginLeft: 8,
    },
    diotPolygon: {
      width: 9,
      height: 8,
      tintColor: Colors.gray400,
      marginLeft: 8,
    },
    viewBorder: {
      borderWidth: scale(1),
      borderColor: Colors.gray100,
    },
    viewBorderLeft: {
      borderLeftWidth: scale(1),
      borderColor: Colors.gray100,
    },
    closeTop: {
      position: 'absolute',
      top: BaseDimention.navBarPaddingTop + scale(10),
      left: scale(6),
      padding: scale(10),
    },
    selectorItem: {
      flexDirection: 'row',
      width: BaseDimention.screenWidth,
      alignItems: 'center',
      height: scale(56),
      paddingHorizontal: scale(16),
    },
    viewCancel: {
      backgroundColor: Colors.backgroundContext,
      justifyContent: 'center',
      alignItems: 'center',
      height: scale(48),
    },
    rechargeItem: {
      height: verticleSale(92),
      width: verticleSale(100),
      borderRadius: verticleSale(8),
      paddingVertical: verticleSale(10),
      marginRight: verticleSale(17.5),
    },
    minHeightBtn: {
      minHeight: scale(44),
    },
    buttonBig: {
      height: scale(48),
    },
    buttonRegular: {
      height: scale(40),
    },
    buttonMedium: {
      height: scale(44),
    },
    buttonTiny: {
      height: scale(28),
    },
    buttonSmall: {
      height: scale(32),
    },
    button50: {
      height: scale(50),
    },
    button52: {
      height: scale(52),
    },
    buttonxSmall: {
      height: scale(36),
    },
    cursor: {
      height: scale(16),
      width: scale(1),
    },
    buttonKey: {
      height: scale(40),
      width: scale(40),
    },
    buttonBottomLine: {
      position: 'absolute',
      bottom: 0,
      height: scale(2),
      width: '100%',
    },
    buttonBottomDot: {
      position: 'absolute',
      bottom: 0,
      height: scale(12),
      width: scale(12),
      borderRadius: scale(6),
      borderWidth: scale(1),
      borderColor: Colors.shade06,
    },
    buttonDot: {
      height: scale(36),
      width: scale(36),
    },
    roundButton: {
      borderRadius: scale(100),
    },
  })
}
