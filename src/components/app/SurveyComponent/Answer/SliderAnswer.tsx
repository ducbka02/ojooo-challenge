import React from 'react'
import { View } from 'react-native'
import { useTheme } from '@/theme'
import { BalloonSlider } from '@/components'

export type Props = {
  ranges: Range | undefined
  onChange: (value: number) => void
}

const SliderAnswer: React.FC<Props> = ({ ranges, onChange }) => {
  const { Layout, Gutters } = useTheme()

  return (
    <View
      style={[Layout.fill, Layout.alignItemsCenter, Gutters.xxLargeTMargin]}
    >
      <BalloonSlider
        onValueChange={(value: number) => {
          if (ranges) {
            onChange(ranges.start + (ranges.stop - ranges.start) * value * 0.01)
          }
        }}
      />
    </View>
  )
}

export default SliderAnswer
