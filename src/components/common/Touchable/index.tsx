import React, { useMemo } from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'
import { enhance } from '@/helpers/styles'

export interface TouchableProps extends TouchableOpacityProps {
  disabled?: boolean
  loading?: boolean
  checkAuthBefore?: boolean
  onPress?: any

  /**
   * Children of component
   * @default undefined
   */
  children?: React.ReactNode
}

const Touchable = (props: TouchableProps) => {
  const { disabled, loading, children, style, onPress, ...rest } = props

  const viewStyle = useMemo(
    () => enhance<ViewStyle>([style as ViewStyle]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [disabled, style],
  )

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled || loading}
      {...rest}
      onPress={() => {
        if (onPress && !loading) {
          onPress()
        }
      }}
      style={viewStyle}
    >
      {children}
    </TouchableOpacity>
  )
}
export default Touchable
