import React, { useMemo } from 'react'
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  Keyboard,
  ViewStyle,
} from 'react-native'
import { enhance } from '@/helpers/styles'

export interface TouchableXProps extends TouchableWithoutFeedbackProps {
  disabled?: boolean
  onPress?: any

  /**
   * Children of component
   * @default undefined
   */
  children?: React.ReactNode
}

const KeyboardWrapper = (props: TouchableXProps) => {
  const { disabled, children, style, onPress, ...rest } = props

  const viewStyle = useMemo(
    () => enhance<ViewStyle>([style as ViewStyle]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [disabled, style],
  )

  return (
    <TouchableWithoutFeedback
      {...rest}
      onPress={() => {
        Keyboard.dismiss()
        if (onPress) {
          onPress()
        }
      }}
      style={viewStyle}
    >
      {children}
    </TouchableWithoutFeedback>
  )
}
export default KeyboardWrapper
