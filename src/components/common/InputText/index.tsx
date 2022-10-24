import React from 'react'
import {
  StyleProp,
  ViewStyle,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native'
import { useTheme } from '@/theme'

export interface InputBaseProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  showIcon?: boolean
}

const InputText: React.FC<InputBaseProps> = ({
  value,
  onChangeText,
  ...rest
}) => {
  const { Fonts, Colors, darkMode } = useTheme()
  return (
    <TextInput
      keyboardAppearance={darkMode ? 'dark' : 'light'}
      onChangeText={onChangeText}
      style={[Fonts.paragraphP1, Fonts.textGray100]}
      placeholderTextColor={Colors.gray300}
      selectionColor={Colors.app}
      value={value}
      {...rest}
    />
  )
}

export default InputText
