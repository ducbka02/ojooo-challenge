/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native'
import { ThemeVariables } from '@/theme/theme.type'
import { scale } from '@/helpers/dimention'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function Fonts({
  FontSize,
  FontFamily,
  Colors,
}: ThemeVariables) {
  return StyleSheet.create({
    textWeight100: {
      fontFamily: FontFamily.w100,
    },
    textWeight200: {
      fontFamily: FontFamily.w200,
    },
    textWeight300: {
      fontFamily: FontFamily.w300,
    },
    textWeight400: {
      fontFamily: FontFamily.w400,
    },
    textWeight500: {
      fontFamily: FontFamily.w500,
    },
    textWeight600: {
      fontFamily: FontFamily.w600,
    },
    textWeight700: {
      fontFamily: FontFamily.w700,
    },
    textWeight800: {
      fontFamily: FontFamily.w800,
    },
    textWeight900: {
      fontFamily: FontFamily.w900,
    },
    titleT1: {
      fontSize: FontSize.text40,
      lineHeight: scale(52),
      fontFamily: FontFamily.w700,
    },
    titleT2: {
      fontSize: FontSize.text32,
      lineHeight: scale(44),
      fontFamily: FontFamily.w700,
    },
    titleT3: {
      fontSize: FontSize.text24,
      lineHeight: scale(32),
      fontFamily: FontFamily.w700,
    },
    titleT4: {
      fontSize: FontSize.text20,
      lineHeight: scale(30),
      fontFamily: FontFamily.w700,
    },
    titleT5: {
      fontSize: FontSize.text18,
      lineHeight: scale(24),
      fontFamily: FontFamily.w700,
    },
    titleT6: {
      fontSize: FontSize.text30,
      lineHeight: scale(42),
      fontFamily: FontFamily.w700,
    },
    title1: {
      fontSize: FontSize.text16,
      lineHeight: scale(20),
      fontFamily: FontFamily.w600,
    },
    headingH1: {
      fontSize: FontSize.text18,
      lineHeight: scale(20),
      fontFamily: FontFamily.w400,
    },
    headingH1M: {
      fontSize: FontSize.text24,
      lineHeight: scale(24),
      fontFamily: FontFamily.w600,
      marginBottom: -scale(1),
    },
    headingH2: {
      fontSize: FontSize.text20,
      lineHeight: scale(26),
      fontFamily: FontFamily.w600,
    },
    headingH3: {
      fontSize: FontSize.text16,
      lineHeight: scale(32),
      fontFamily: FontFamily.w500,
    },
    headingH4: {
      fontSize: FontSize.text14,
      lineHeight: scale(22),
      fontFamily: FontFamily.w600,
    },
    subtitleS1: {
      fontSize: FontSize.text16,
      lineHeight: scale(24),
      fontFamily: FontFamily.w400,
    },
    subtitleS2: {
      fontSize: FontSize.text14,
      lineHeight: scale(20),
      fontFamily: FontFamily.w400,
    },
    paragraphP1: {
      fontSize: FontSize.text17,
      lineHeight: scale(26),
      fontFamily: FontFamily.w400,
    },
    paragraphP1sb: {
      fontSize: FontSize.text17,
      lineHeight: scale(26),
      fontFamily: FontFamily.w600,
    },
    paragraphP1i: {
      fontSize: FontSize.text12,
      lineHeight: scale(20),
      fontFamily: FontFamily.w400,
      color: Colors.black,
      fontStyle: 'italic',
    },
    paragraphP1u: {
      fontSize: FontSize.text17,
      lineHeight: scale(26),
      fontFamily: FontFamily.w600,
      textDecorationLine: 'underline',
    },
    paragraphP2: {
      fontSize: FontSize.text14,
      lineHeight: scale(20),
      fontFamily: FontFamily.w400,
    },
    paragraphP2sb: {
      fontSize: FontSize.text14,
      lineHeight: scale(20),
      fontFamily: FontFamily.w600,
    },
    paragraphP2i: {
      fontSize: FontSize.text14,
      lineHeight: scale(20),
      fontFamily: FontFamily.w400,
      fontStyle: 'italic',
    },
    paragraphP2u: {
      fontSize: FontSize.text14,
      lineHeight: scale(20),
      fontFamily: FontFamily.w600,
      color: Colors.identityInverted,
    },
    buttonKey: {
      fontSize: FontSize.text16,
      lineHeight: scale(28),
      fontFamily: FontFamily.w500,
      color: Colors.gray100,
    },
    buttonKey1: {
      fontSize: FontSize.text16,
      fontFamily: FontFamily.w500,
      color: Colors.gray100,
    },
    buttonB1: {
      fontSize: FontSize.text16,
      lineHeight: scale(24),
      fontFamily: FontFamily.w600,
    },
    buttonB2: {
      fontSize: FontSize.text14,
      lineHeight: scale(20),
      fontFamily: FontFamily.w600,
    },
    buttonB3: {
      fontSize: FontSize.text10,
      lineHeight: scale(24),
      fontFamily: FontFamily.w600,
    },
    linkButtonL1: {
      fontSize: FontSize.text17,
      lineHeight: scale(36),
      fontFamily: FontFamily.w400,
      color: Colors.identityInverted,
    },
    linkButtonL1sb: {
      fontSize: FontSize.text17,
      lineHeight: scale(36),
      fontFamily: FontFamily.w600,
      color: Colors.identityInverted,
    },
    linkButtonL2: {
      fontSize: FontSize.text15,
      lineHeight: scale(32),
      fontFamily: FontFamily.w400,
      color: Colors.identityInverted,
    },
    linkButtonL2sb: {
      fontSize: FontSize.text15,
      lineHeight: scale(32),
      fontFamily: FontFamily.w600,
      color: Colors.identityInverted,
    },
    captionC1: {
      fontSize: FontSize.text14,
      lineHeight: scale(18),
      fontFamily: FontFamily.w400,
    },
    captionC1sb: {
      fontSize: FontSize.text14,
      lineHeight: scale(22),
      fontFamily: FontFamily.w500,
    },
    captionC2: {
      fontSize: FontSize.text12,
      lineHeight: scale(18),
      fontFamily: FontFamily.w400,
    },
    captionC2sb: {
      fontSize: FontSize.text12,
      lineHeight: scale(16),
      fontFamily: FontFamily.w500,
    },
    captionC3: {
      fontSize: FontSize.text10,
      lineHeight: scale(14),
      fontFamily: FontFamily.w400,
    },
    captionC3sb: {
      fontSize: FontSize.text10,
      lineHeight: scale(16),
      fontFamily: FontFamily.w500,
    },
    textUnderline: {
      textDecorationLine: 'underline',
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    transparentColor: {
      color: 'transparent',
    },
    textGray100: {
      color: Colors.gray100,
    },
    textGray200: {
      color: Colors.gray200,
    },
    textGray300: {
      color: Colors.gray300,
    },
    textGray400: {
      color: Colors.gray400,
    },
    textGray600: {
      color: Colors.gray600,
    },
    redText: {
      color: Colors.redBase,
    },
    textBlueBase: {
      color: Colors.blueBase,
    },
    textOrangeL20: {
      color: Colors.orangeL20,
    },
    textOrangeBase: {
      color: Colors.orangeBase,
    },
    textBlueL20: {
      color: Colors.blueL20,
    },
    textGray999: {
      color: Colors.gray999,
    },
    whiteText: {
      color: Colors.white,
    },
    whiteText100: {
      color: Colors.white100,
    },
    identityText: {
      color: Colors.identity,
    },
    identity3Text: {
      color: Colors.identity3,
    },
    identityInvertedText: {
      color: Colors.identityInverted,
    },
    textModerateBlue: {
      color: Colors.moderateBlue,
    },
    textPrimary: {
      color: Colors.backgroundPrimary,
    },
    textGreenL20: {
      color: Colors.greenL20,
    },
    textShade01: {
      color: Colors.shade01,
    },
    textShade03: {
      color: Colors.shade03,
    },
    textShade05: {
      color: Colors.shade05,
    },
    textShade04: {
      color: Colors.shade04,
    },
    textShade06: {
      color: Colors.shade06,
    },
    textShade07: {
      color: Colors.shade07,
    },
    textShade08: {
      color: Colors.shade08,
    },
    textInput: {
      color: Colors.moderateBlue,
      fontSize: FontSize.text14,
      lineHeight: FontSize.text18,
      fontFamily: FontFamily.w400,
      paddingVertical: 0,
      textAlignVertical: 'center',
      includeFontPadding: false,
    },
    textInputSemi: {
      color: Colors.gray100,
      fontSize: FontSize.text20,
      fontWeight: '600',
      paddingVertical: 0,
    },
    textLineThrough: {
      textDecorationLine: 'line-through',
    },
    textKeyboard: {
      fontSize: FontSize.text25,
      lineHeight: scale(30),
      fontFamily: FontFamily.w400,
      color: Colors.black,
    },
    textCapsLock: {
      textTransform: 'uppercase',
    },
    normalLineHeight: {
      lineHeight: scale(20),
    },
  })
}

export type ThemeFonts = ReturnType<typeof Fonts>
