import { StyleSheet } from 'react-native'
import { ThemeCommonParams } from '@/theme/theme.type'
import { BaseDimention, scale, verticleSale } from '@/helpers/dimention'

export default function ({ Colors }: ThemeCommonParams) {
  return StyleSheet.create({
    buttonArrowLeft: {
      width: scale(10),
      height: scale(20),
    },
    notiIcon: {
      width: scale(15.17),
      height: scale(19.5),
      tintColor: Colors.gray200,
    },
    foodBigTheme: {
      height: scale(116),
      width: scale(116),
      borderRadius: scale(16),
    },
    foodTheme: {
      height: scale(80),
      width: scale(80),
      borderRadius: scale(8),
    },
    menuItemTheme: {
      height: scale(84),
      width: scale(84),
      borderRadius: scale(4),
    },
    foodMonth: {
      height: scale(140),
      width: scale(200),
      borderRadius: scale(16),
    },
    iconFavorite: {
      tintColor: Colors.gray200,
      height: scale(16.18),
      width: scale(18.34),
    },
    tintColorGray: {
      tintColor: Colors.gray200,
    },
    tintColorGray100: {
      tintColor: Colors.gray100,
    },
    iconCheck: {
      tintColor: Colors.white,
      height: scale(9.59),
      width: scale(13.16),
    },
    tintColorBlueBase: {
      tintColor: Colors.blueBase,
    },
    tintColorRedL20: {
      tintColor: Colors.redL20,
    },
    tintMatterhorn: {
      tintColor: Colors.matterhorn,
    },
    tintIdentity: {
      tintColor: Colors.identity,
    },
    loadingImage: {
      width: scale(50),
      height: scale(50),
    },
    btnChefbro: {
      width: scale(235.35),
      height: scale(220),
    },
    imgPanaRefund: {
      width: scale(284.33),
      height: scale(200),
    },
    imgFailedConnect: {
      width: scale(328.8),
      height: scale(220),
    },
    imgProcessing: {
      width: scale(172.54),
      height: scale(203.42),
    },
    imgPlayMusicbro: {
      width: scale(238.21),
      height: scale(220),
    },
    homeCard: {
      width: verticleSale(55),
      height: verticleSale(62),
    },
    viewCardWallet: {
      width: verticleSale(367),
      marginHorizontal: verticleSale(4),
      marginTop: verticleSale(4),
    },
    imgIllustration: {
      width: scale(108.28),
      height: scale(120),
    },
    imgGiftCode: {
      width: scale(191.52),
      height: scale(191.75),
    },
    imgaAmicoGift: {
      width: scale(218.88),
      height: scale(220),
    },
    imgMobieUpdate: {
      width: scale(212.17),
      height: scale(199.3),
    },
    imgPopup: {
      width: scale(236.15),
      height: scale(210.3),
    },
    jobCardImage: {
      width: BaseDimention.screenWidth - scale(32),
      height: verticleSale(310),
      borderRadius: scale(16),
    },
    cityCardImage: {
      width: BaseDimention.screenWidth - scale(32),
      height: verticleSale(90),
      borderRadius: scale(16),
    },
    tintOrangeBase: {
      tintColor: Colors.orangeBase,
    },
    tintPrimary: {
      tintColor: Colors.backgroundPrimary,
    },
    tintGreenL40: {
      tintColor: Colors.greenL40,
    },
    tintOrangeL40: {
      tintColor: Colors.orangeL40,
    },
    tintOrangeL20: {
      tintColor: Colors.orangeL20,
    },
    tintGreenL20: {
      tintColor: Colors.greenL20,
    },
    tintBlueL20: {
      tintColor: Colors.blueL20,
    },
    tintRedL60: {
      tintColor: Colors.redL60,
    },
    tintGreenL60: {
      tintColor: Colors.greenL60,
    },
    tintBlueL60: {
      tintColor: Colors.blueL60,
    },
    tintGray300: {
      tintColor: Colors.gray300,
    },
    tintRed1D60: {
      tintColor: Colors.red1D60,
    },
    tintBlue1D60: {
      tintColor: Colors.blue1D60,
    },
    tintGreen1D60: {
      tintColor: Colors.green1D60,
    },
    tintIdentityInverted: {
      tintColor: Colors.identityInverted,
    },
    tintSalomie: {
      tintColor: Colors.salomie,
    },
    tintModerateBlue: {
      tintColor: Colors.moderateBlue,
    },
    tintColorWhite: {
      tintColor: Colors.white,
    },
    tintRedBase: {
      tintColor: Colors.redBase,
    },
    tintGreenBase: {
      borderColor: Colors.greenBase,
    },
    tintShade01: {
      tintColor: Colors.shade01,
    },
    tintShade06: {
      tintColor: Colors.shade06,
    },
    tintIdentity2: {
      tintColor: Colors.identity2,
    },
    loadMore: {
      width: scale(30),
      height: scale(30),
    },
    stateIcon: {
      height: scale(24),
      width: scale(24),
    },
    icon10: {
      height: scale(10),
      width: scale(10),
    },
    icon12: {
      height: scale(12),
      width: scale(12),
    },
    icon15: {
      height: scale(15),
      width: scale(15),
    },
    icon16: {
      height: scale(16),
      width: scale(16),
    },
    icon18: {
      height: scale(18),
      width: scale(18),
    },
    icon20: {
      height: scale(20),
      width: scale(20),
    },
    icon24: {
      height: scale(24),
      width: scale(24),
    },
    icon28: {
      height: scale(28),
      width: scale(28),
    },
    icon32: {
      height: scale(32),
      width: scale(32),
    },
    icon36: {
      height: scale(36),
      width: scale(36),
    },
    icon40: {
      height: scale(40),
      width: scale(40),
    },
    icon48: {
      height: scale(48),
      width: scale(48),
    },
    icon60: {
      height: scale(60),
      width: scale(60),
    },
    icon64: {
      height: scale(64),
      width: scale(64),
    },
    icon68: {
      height: scale(68),
      width: scale(68),
    },
    icon72: {
      height: scale(72),
      width: scale(72),
    },
    icon112: {
      height: scale(112),
      width: scale(112),
    },
    icon90: {
      height: scale(90),
      width: scale(90),
    },
    icon180: {
      height: scale(180),
      width: scale(180),
    },
    icon140: {
      height: scale(140),
      width: scale(140),
    },
    icon52: {
      width: scale(52),
      height: scale(52),
    },
    icon56: {
      width: scale(56),
      height: scale(56),
    },
    icon44: {
      width: scale(44),
      height: scale(44),
    },
    icon100: {
      width: scale(100),
      height: scale(100),
    },
    iconNoti: {
      width: scale(44),
      height: scale(44),
      borderRadius: scale(22),
    },
    smallDotNoti: {
      width: scale(6),
      height: scale(6),
      borderRadius: scale(6),
      backgroundColor: Colors.identity,
      position: 'absolute',
      left: -scale(13),
      top: scale(20),
    },
    colorHolder: {
      backgroundColor: Colors.gainsboro,
    },
    flag: {
      width: scale(24),
      height: scale(18),
      borderRadius: scale(2),
    },
    feedBackTheme: {
      height: scale(200),
      width: scale(200),
      borderRadius: scale(100),
    },
    feedBackReview: {
      width: scale(225),
      height: scale(302.61),
    },
    vectorFeedback: {
      width: scale(95.12),
      height: scale(155),
      position: 'absolute',
      top: -scale(100),
      right: scale(35),
    },
    checkNote: {
      height: scale(24),
      width: scale(27),
    },
    mapPin: {
      height: scale(38),
      width: scale(24.82),
    },
    mapPin1: {
      height: scale(24.4),
      width: scale(16),
    },
  })
}
