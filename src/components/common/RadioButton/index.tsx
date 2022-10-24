import React from 'react'
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native'
import { useTheme } from '@/theme'
import { Text, Touchable } from '@/components'

export type Props = {
  style?: StyleProp<ViewStyle>
  text?: string
  isSelect?: boolean
  handleClick?: () => void | undefined
  textStyle?: StyleProp<TextStyle>
  radioStyle?: StyleProp<ViewStyle>
}

const RadioButton: React.FC<Props> = ({
  isSelect,
  text,
  handleClick,
  style,
  textStyle,
  radioStyle,
}) => {
  const { Common, Layout, Gutters } = useTheme()

  return (
    <Touchable
      style={style}
      disabled={handleClick ? false : true}
      onPress={handleClick}
    >
      <View style={Layout.rowHCenter}>
        <View style={[Common.radioButton, Common.borderShade01, radioStyle]}>
          {isSelect ? (
            <View style={[Common.radioSelect, Common.backgroundShade01]} />
          ) : null}
        </View>
        {!!text && (
          <Text style={[Gutters.smallLMargin, textStyle]} numberOfLines={1}>
            {text}
          </Text>
        )}
      </View>
    </Touchable>
  )
}
export default RadioButton
