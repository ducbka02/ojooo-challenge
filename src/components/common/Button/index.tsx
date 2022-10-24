import React, { useMemo } from 'react'
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'
import { enhance } from '@/helpers/styles'
import { useTheme } from '@/theme'
import { BaseDimention } from '@/helpers/dimention'
import Text from '@/components/common/Text'

export interface ButtonProps extends TouchableOpacityProps {
  disabled?: boolean
  loading?: boolean
  onPress?: any
  title?: string
  style?: StyleProp<ViewStyle>
  titleStyle?: StyleProp<TextStyle>
}

const Button = (props: ButtonProps) => {
  const {
    disabled,
    loading,
    title = '',
    style,
    titleStyle,
    onPress,
    ...rest
  } = props
  const { Layout, Common, Fonts, Gutters } = useTheme()

  const viewStyle = useMemo(
    () => enhance<ViewStyle>([style as ViewStyle]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [disabled, style],
  )

  const isDisabled = disabled || loading

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isDisabled}
      {...rest}
      onPress={() => {
        if (onPress && !loading) {
          onPress()
        }
      }}
      style={[
        Layout.center,
        Gutters.xregularVPadding,
        { borderRadius: BaseDimention.borderRadius },
        isDisabled ? Common.backgroundShade05 : null,
        Common.backgroundIdentity1,
        Common.borderIdentityInverted,
        Common.bigBorder,
        viewStyle,
      ]}
    >
      <Text
        style={[
          Fonts.headingH3,
          Fonts.textWeight400,
          Fonts.textRight,
          Fonts.textShade01,
          Fonts.identityText,
          isDisabled ? Fonts.textShade06 : null,
          titleStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}
export default Button
