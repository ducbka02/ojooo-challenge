/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import buttonStyles from './components/Buttons'
import imageStyles from './components/Image'
import { ThemeCommonParams } from '@/theme/theme.type'
import { BaseDimention, scale, verticleSale } from '@/helpers/dimention'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function Common({ Colors, Fonts, ...args }: ThemeCommonParams) {
  return {
    image: imageStyles({ Colors, Fonts, ...args }),
    button: buttonStyles({ Colors, Fonts, ...args }),
    ...StyleSheet.create({
      background: {
        backgroundColor: Colors.primary,
      },
      backgroundWhite: {
        backgroundColor: Colors.white,
      },
      backgroundPrimary: {
        backgroundColor: Colors.backgroundPrimary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      backgroundSecondary: {
        backgroundColor: Colors.backgroundSecondary,
      },
      backgroundRedL20: {
        backgroundColor: Colors.redL20,
      },
      backgroundOrange: {
        backgroundColor: Colors.backgroundOrange,
      },
      backgroundBlue: {
        backgroundColor: Colors.backgroundBlue,
      },
      backgroundIdentity: {
        backgroundColor: Colors.identity,
      },
      backgroundIdentity1: {
        backgroundColor: Colors.identity1,
      },
      backgroundBlack: {
        backgroundColor: Colors.black,
      },
      backgroundIdentityInverted: {
        backgroundColor: Colors.identityInverted,
      },
      backgroundLynxWhite: {
        backgroundColor: Colors.lynxWhite,
      },
      backgroundContext: {
        backgroundColor: Colors.backgroundContext,
      },
      backgroundgray200: {
        backgroundColor: Colors.gray200,
      },
      backgroundgray100: {
        backgroundColor: Colors.gray100,
      },
      backgroundsilverSand: {
        backgroundColor: Colors.silverSand,
      },
      overLayStyle: {
        backgroundColor: Colors.lightFade,
      },
      backgroundGreenBase: {
        backgroundColor: Colors.greenBase,
      },
      backgroundModerateBlue: {
        backgroundColor: Colors.moderateBlue,
      },
      backgroundModal: {
        backgroundColor: Colors.backgroundModal,
      },
      backgroundGray300: {
        backgroundColor: Colors.gray300,
      },
      backgroundRed: {
        backgroundColor: 'rgba(247, 65, 65, 0.25)',
      },
      backgroundGray400: {
        backgroundColor: Colors.gray400,
      },
      backgroundGray700: {
        backgroundColor: Colors.gray700,
      },
      backgroundShade01: {
        backgroundColor: Colors.shade01,
      },
      backgroundShade03: {
        backgroundColor: Colors.shade03,
      },
      backgroundShade04: {
        backgroundColor: Colors.shade04,
      },
      backgroundShade05: {
        backgroundColor: Colors.shade05,
      },
      backgroundShade07: {
        backgroundColor: Colors.shade07,
      },
      backgroundShade08: {
        backgroundColor: Colors.shade08,
      },
      backgroundShade09: {
        backgroundColor: Colors.shade09,
      },
      backgroundKeyboard: {
        backgroundColor: Colors.backgroundKeyboard,
      },
      backgroundScan: {
        backgroundColor: 'rgba(43, 43, 46, 0.8)',
      },
      inputView: {
        minHeight: BaseDimention.buttonHeight,
        backgroundColor: Colors.white,
        height: scale(44),
        alignItems: 'center',
        borderBottomColor: Colors.salomie,
        borderBottomWidth: 1,
      },
      textInputMultiline: {
        minHeight: scale(52),
        textAlignVertical: 'top',
        paddingVertical: scale(12),
        height: 'auto',
      },
      buttonHeader: {
        width: scale(20),
        height: scale(20),
      },
      shadowBottom: {
        justifyContent: 'center',
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
      },
      navbarStyle: {
        height: BaseDimention.navBarHeight,
        paddingTop: BaseDimention.navBarPaddingTop,
        paddingBottom: scale(5),
        width: BaseDimention.screenWidth,
      },
      headerMagin: {
        paddingTop: BaseDimention.navBarPaddingTop + scale(20),
        backgroundColor: Colors.backgroundPrimary,
      },
      borderRadius: {
        borderRadius: scale(8),
      },
      borderRadius12: {
        borderRadius: scale(12),
      },
      borderRadius16: {
        borderRadius: scale(16),
      },
      borderRadius100: {
        borderRadius: scale(100),
      },
      borderBlue: {
        borderWidth: 2,
        borderColor: Colors.tab,
      },
      backgroundSelectedAnswer: {
        backgroundColor: Colors.selectedAnswer,
      },
      ctaButton: {
        borderRadius: scale(100),
        width: scale(215),
        height: scale(52),
        backgroundColor: Colors.tab,
      },
      radioButton: {
        width: scale(20),
        height: scale(20),
        borderRadius: scale(10),
        borderWidth: scale(2),
        justifyContent: 'center',
        alignItems: 'center',
      },
      radioSelect: {
        width: scale(10),
        height: scale(10),
        borderRadius: scale(5),
      },
      hideOverFlow: {
        overflow: 'hidden',
      },
      bottomView: {
        position: 'absolute',
        paddingBottom: BaseDimention.tabBarPaddingBottom,
        bottom: 0,
      },
      borderRed: {
        borderColor: Colors.redBase,
      },
      checkButton: {
        width: scale(18),
        height: scale(18),
        borderRadius: scale(3),
        borderWidth: scale(2),
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      checkedButton: {
        width: scale(18),
        height: scale(18),
        borderRadius: scale(3),
        backgroundColor: Colors.identity,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalizeContainer: {
        paddingBottom: BaseDimention.tabBarPaddingBottom + scale(12),
        paddingTop: scale(20),
      },
      modalStyle: {
        backgroundColor: Colors.backgroundContext,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
      },
      modalContent: {
        borderRadius: scale(12),
        paddingTop: scale(16),
        paddingBottom: scale(20),
        paddingHorizontal: scale(12),
        backgroundColor: Colors.backgroundContext,
        width: BaseDimention.screenWidth - scale(40),
        maxHeight: (BaseDimention.screenHeight * 2) / 3,
      },
      borderBottom: {
        borderBottomWidth: 0.5,
        borderColor: Colors.gray100,
      },
      borderLeft: {
        borderLeftWidth: 0.5,
        borderColor: Colors.gray100,
      },
      borderRight: {
        borderRightWidth: 0.5,
        borderColor: Colors.gray100,
      },
      bigBorderBottom: {
        borderBottomWidth: scale(3),
        borderColor: Colors.gray100,
      },
      smallBorderTop: {
        borderTopWidth: 0.5,
      },
      borderGray400: {
        borderColor: Colors.gray400,
      },
      borderGray100: {
        borderColor: Colors.gray100,
      },
      borderGray200: {
        borderColor: Colors.gray200,
      },
      borderGray300: {
        borderColor: Colors.gray300,
      },
      borderGray500: {
        borderColor: Colors.gray500,
      },
      borderGray600: {
        borderColor: Colors.gray600,
      },
      borderGray700: {
        borderColor: Colors.gray700,
      },
      borderGray999: {
        borderColor: Colors.gray999,
      },
      borderIdentity: {
        borderColor: Colors.identity,
      },
      borderIdentityInverted: {
        borderColor: Colors.identityInverted,
      },
      borderSecondary: {
        borderColor: Colors.backgroundSecondary,
      },
      borderOrangeL20: {
        borderColor: Colors.orangeL20,
      },
      borderWhite: {
        borderColor: Colors.white,
      },
      borderModerateBlue: {
        borderColor: Colors.moderateBlue,
      },
      borderGreenBase: {
        borderColor: Colors.greenBase,
      },
      borderBlueBase: {
        borderColor: Colors.blueBase,
      },
      borderOrangeBase: {
        borderColor: Colors.orangeBase,
      },
      borderShade01: {
        borderColor: Colors.shade01,
      },
      borderShade04: {
        borderColor: Colors.shade04,
      },
      borderTop: {
        borderTopWidth: 1,
      },
      borderTop8: {
        borderTopWidth: scale(8),
      },
      bigBorder: {
        borderWidth: 2,
      },
      smallBorder: {
        borderWidth: 0.5,
      },
      noBorder: {
        borderWidth: 0,
      },
      modalView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: Colors.lightFade,
      },
      absoluteView: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 1,
      },
      absoluteOnly: {
        position: 'absolute',
        justifyContent: 'center',
        zIndex: 100,
      },
      scanAnimatedView: {
        height: scale(3),
        backgroundColor: Colors.shade01,
      },
      qrCodeView: {
        width: scale(220),
        height: scale(220),
        position: 'absolute',
        top: -scale(19),
      },
      cornerView: {
        position: 'absolute',
        borderColor: Colors.shade01,
        width: scale(39),
        height: scale(39),
      },
      cornerTopLeft: {
        borderTopWidth: scale(4),
        borderLeftWidth: scale(4),
        borderTopLeftRadius: scale(12),
        top: 0,
        left: 0,
      },
      cornerTopRight: {
        borderTopWidth: scale(4),
        borderRightWidth: scale(4),
        borderTopRightRadius: scale(12),
        top: 0,
        right: 0,
      },
      cornerBottomLeft: {
        borderBottomWidth: scale(4),
        borderLeftWidth: scale(4),
        borderBottomLeftRadius: scale(12),
        bottom: 0,
        left: 0,
      },
      cornerBottomRight: {
        borderBottomWidth: scale(4),
        borderRightWidth: scale(4),
        borderBottomRightRadius: scale(12),
        bottom: 0,
        right: 0,
      },
      absoluteRight: {
        position: 'absolute',
        right: scale(16),
      },
      absoluteBottomRight: {
        position: 'absolute',
        right: scale(16),
        bottom: scale(12),
      },
      absoluteTop: {
        right: 0,
        left: 0,
        position: 'absolute',
      },
      absoluteBottom: {
        right: 0,
        left: 0,
        position: 'absolute',
        bottom: 0,
      },
      bottomJobCardView: {
        position: 'absolute',
        top: verticleSale(100),
        borderBottomEndRadius: scale(16),
        borderBottomStartRadius: scale(16),
        height: verticleSale(210),
        borderWidth: 1,
        borderColor: Colors.gray999,
        backgroundColor: Colors.white,
      },
      topCornerJobCard: {
        position: 'absolute',
        right: 0,
        backgroundColor: Colors.identity5,
        borderBottomLeftRadius: scale(16),
        borderTopRightRadius: scale(16),
      },
      bottomCornerJobCard: {
        position: 'absolute',
        left: scale(20),
        top: scale(70),
      },
      gradientJobCard: {
        position: 'absolute',
        height: verticleSale(100),
      },
      rightCityCardView: {
        position: 'absolute',
        left: scale(95),
        borderTopEndRadius: scale(16),
        borderBottomEndRadius: scale(16),
        width: BaseDimention.screenWidth - scale(32) - scale(95),
        borderWidth: 1,
        borderColor: Colors.gray999,
        backgroundColor: Colors.white,
      },
      bottomLine: {
        borderBottomWidth: scale(2),
        borderBottomColor: Colors.shade04,
      },
      lineSeparator: {
        height: scale(1),
        backgroundColor: Colors.shade07,
      },
      lightShadow1: {
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        shadowColor: Colors.gray100,
        marginTop: scale(3),
      },
      textShadow1: {
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 4,
        color: Colors.white,
      },
      lightShadow2: {
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
        shadowColor: Colors.gray100,
      },
      blendDarken: {
        position: 'absolute',
        backgroundColor: Colors.black,
        opacity: 0.6,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      flagStyle: {
        width: 0,
        height: 0,
        backgroundColor: Colors.backgroundPrimary,
      },
      opacity50: {
        opacity: 0.5,
      },
      opacity60: {
        opacity: 0.6,
      },
      opacity70: {
        opacity: 0.7,
      },
      opacity80: {
        opacity: 0.8,
      },
      paddingBottom: {
        paddingBottom: BaseDimention.tabBarPaddingBottom,
      },
      lineTimeView: {
        position: 'absolute',
        width: 0.4,
        backgroundColor: Colors.gray300,
        left: -scale(10),
        top: scale(22),
        bottom: 0,
      },
      timeDotView: {
        position: 'absolute',
        left: -scale(12.5),
        backgroundColor: Colors.backgroundPrimary,
        paddingVertical: scale(4),
        top: scale(16),
      },
      timeDot: {
        width: scale(6),
        height: scale(6),
        borderRadius: scale(6),
        backgroundColor: Colors.identity,
      },
      marginBottom: {
        marginBottom: scale(108) + BaseDimention.tabBarPaddingBottom,
      },
      keyboardHeight: {
        height: scale(291),
      },
      tabbarHeight: {
        height: scale(50),
      },
      tabbarElevation: {
        elevation: 0,
      },
      tabbarIndicator: {
        height: scale(2),
        backgroundColor: Colors.shade01,
      },
      centerLineSeparator: {
        width: scale(1),
        height: scale(24),
        backgroundColor: Colors.gray100,
      },
      matchRateView: {
        width: scale(32),
        height: scale(32),
        backgroundColor: Colors.identity4,
        borderRadius: scale(9),
      },
    }),
  }
}

export type ThemeCommon = ReturnType<typeof Common>
