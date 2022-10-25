import React from 'react'
import { View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/theme'
import { Touchable, Text } from '@/components'

export type Props = {
  answers: { [key: number]: Answer[] }
  data: Question
  currentQuestionIndex: number
  answersComponent: React.ReactNode
  canGoNext: boolean
  hasSelectedAllAnswers: boolean
  goNextQuestion: () => void | undefined
}

const QuestionComponent: React.FC<Props> = ({
  answersComponent,
  canGoNext,
  hasSelectedAllAnswers,
  goNextQuestion,
  data,
}) => {
  const { t } = useTranslation()
  const { Layout, Gutters, Common, Fonts } = useTheme()

  const renderQuestionDescription = (content: string) => {
    return (
      <Text
        style={[
          Fonts.buttonB1,
          Gutters.largeTPadding,
          Gutters.xxregularBPadding,
        ]}
      >
        {content}
      </Text>
    )
  }

  const renderBottomCTAs = () => (
    <View
      style={[
        Common.absoluteBottom,
        Layout.fullWidth,
        Layout.zIndex1,
        Layout.center,
      ]}
    >
      <Touchable
        disabled={!canGoNext}
        onPress={goNextQuestion}
        style={[
          Common.ctaButton,
          Layout.center,
          !canGoNext && [Common.backgroundShade04],
        ]}
      >
        <Text style={Fonts.headingH3}>
          {t(hasSelectedAllAnswers ? 'common.submit' : 'common.next')}
        </Text>
      </Touchable>
    </View>
  )

  return (
    <View style={[Layout.fill, Layout.fullWidth, Gutters.xregularHPadding]}>
      {renderQuestionDescription(data.content)}
      {answersComponent}
      {renderBottomCTAs()}
    </View>
  )
}

export default QuestionComponent
