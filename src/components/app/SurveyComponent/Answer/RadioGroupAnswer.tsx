import React from 'react'
import { View } from 'react-native'
import { RadioButton } from 'react-native-ui-lib'
import { useTheme } from '@/theme'
import { Touchable, Text } from '@/components'
import { scale } from '@/helpers/dimention'

export type Props = {
  choices: Answer[]
  onChange: (idx: number) => void
}

const RadioGroupAnswer: React.FC<Props> = ({ choices, onChange }) => {
  const { Layout, Gutters, Common } = useTheme()

  return (
    <View style={[Layout.fill, Layout.alignItemsCenter]}>
      {choices.map((answer, idx) => (
        <Touchable
          key={idx}
          onPress={onChange(idx)}
          style={[
            Layout.fullWidthPercent,
            Layout.rowHCenter,
            Gutters.xregularPadding,

            Gutters.smallVMargin,
            Common.borderRadius12,
            Common.backgroundShade04,
            { minHeight: scale(56) },
            answer.selected && [
              Common.borderBlue,
              Common.backgroundSelectedAnswer,
            ],
          ]}
        >
          <View style={[Layout.row, Layout.fill, Gutters.xxregularRPadding]}>
            <RadioButton selected={answer.selected} />
            <Text style={[Gutters.smallHPadding]}>{answer.text}</Text>
          </View>
        </Touchable>
      ))}
    </View>
  )
}

export default RadioGroupAnswer
