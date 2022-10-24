import React from 'react'
import {
  Text as ReactNativeText,
  TextProps as TextProperties,
} from 'react-native'
import { useTheme } from '@/theme'

export interface TextProps extends TextProperties {
  /**
   * Children of text
   * @default undefined
   */
  children?: React.ReactNode
}

const Text = (props: TextProps) => {
  const { children, style, ...rest } = props
  const { Fonts } = useTheme()

  return (
    <ReactNativeText
      allowFontScaling={false}
      {...rest}
      style={[Fonts.subtitleS1, Fonts.identityText, style]}
    >
      {children}
    </ReactNativeText>
  )
}
export default Text
