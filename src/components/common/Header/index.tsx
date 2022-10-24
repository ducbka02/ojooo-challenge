/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, ViewStyle, StyleProp, Image } from 'react-native'
import { useTheme } from '@/theme'
import { goBack } from '@/helpers/navigation'
import { Touchable, Text } from '@/components'
import { Colors } from '@/theme/Variables'

export type Props = {
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<ViewStyle>
  noShadow?: boolean
  title?: string
  leftItem?: React.ReactNode
  rightItem?: React.ReactNode
  tintColor?: any
  customBackAction?: () => void | undefined
}

const LeftItems: React.FC<Props> = ({ customBackAction }) => {
  const { Images, Common, Layout, Gutters } = useTheme()
  const onBack = () => {
    if (customBackAction) {
      customBackAction()
    } else {
      goBack()
    }
  }
  return (
    <Touchable
      style={[
        Gutters.xsmallRPadding,
        Gutters.xsmallVPadding,
        Layout.justifyContentCenter,
      ]}
      onPress={onBack}
    >
      <Image
        source={Images.IC_LEFT_ARROW}
        resizeMode={'contain'}
        style={Common.image.buttonArrowLeft}
      />
    </Touchable>
  )
}

const RightItems = () => {
  const { Gutters } = useTheme()
  return <View style={Gutters.largeRMargin} />
}

const NavigationHeader: React.FC<Props> = ({
  style,
  title,
  leftItem,
  rightItem,
  noShadow,
  customBackAction,
  textStyle,
}) => {
  const { Layout, Gutters, Common, Fonts } = useTheme()

  return (
    <View
      style={[
        !noShadow && {
          borderBottomWidth: 1,
          borderColor: Colors.gray999,
        },
        Common.navbarStyle,
        Common.backgroundPrimary,
        style,
      ]}
    >
      <View
        style={[
          Layout.rowBetween,
          Gutters.xregularHPadding,
          Layout.fill,
          Layout.rowHCenter,
        ]}
      >
        {leftItem ? (
          leftItem
        ) : (
          <LeftItems customBackAction={customBackAction} />
        )}
        <Text
          style={[
            Fonts.headingH3,
            Fonts.textCapsLock,
            Fonts.textCenter,
            textStyle,
          ]}
          numberOfLines={1}
        >
          {title}
        </Text>
        {rightItem ? rightItem : <RightItems />}
      </View>
    </View>
  )
}

export default NavigationHeader
