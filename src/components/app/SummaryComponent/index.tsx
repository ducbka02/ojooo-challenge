import React from 'react'
import { View, ScrollView } from 'react-native'
import FastImage from 'react-native-fast-image'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/theme'
import { Touchable, Text } from '@/components'
import { scale } from '@/helpers/dimention'

export type Props = {
  result: Result[]
  showSummaryView: boolean
  onEditAnswer: (idx: number) => void
}

const SummaryComponent: React.FC<Props> = ({
  result,
  showSummaryView,
  onEditAnswer,
}) => {
  const { t } = useTranslation()
  const { Layout, Common, Fonts, Gutters, Images } = useTheme()

  if (!showSummaryView) {
    return null
  }

  return (
    <View
      style={[
        Layout.fill,
        Common.absoluteView,
        Layout.fullScreen,
        Common.backgroundIdentity,
        Common.backgroundBlack,
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          Layout.alignItemsCenter,
          Gutters.xregularHPadding,
          Gutters.xxxLargeBPadding,
          Gutters.xLargeTPadding,
        ]}
      >
        <FastImage
          source={Images.CONGRATZ}
          resizeMode="contain"
          style={{ width: scale(140), height: scale(140) }}
        />
        <View
          style={[
            Common.backgroundShade04,
            Gutters.xregularPadding,
            Layout.fullWidthPercent,
            Gutters.xregularBMargin,
            Gutters.xregularTMargin,
            Common.borderRadius,
            Gutters.xregularHMargin,
          ]}
        >
          <Text style={[Fonts.captionC2sb, Fonts.textShade06]}>
            {t('common.my_answers')}
          </Text>
          <View style={[Gutters.xxregularVPadding]}>
            {result.map((r, idx) => {
              return (
                <Touchable
                  key={r.question._id}
                  style={[Layout.row, Gutters.regularBPadding]}
                  onPress={() => {
                    onEditAnswer(r.originalIndex)
                  }}
                >
                  <FastImage
                    source={Images.IC_CORRECT}
                    resizeMode="contain"
                    style={[Common.image.icon16]}
                  />
                  <View style={[Gutters.tinyHPadding]}>
                    <Text style={[Fonts.captionC2sb, Fonts.textShade05]}>
                      {t('common.question')} {idx + 1}
                    </Text>
                    <Text style={[Fonts.captionC1sb, Gutters.tinyVPadding]}>
                      {r.question.content}
                    </Text>
                    {r.answer.map((a, i) => (
                      <Text
                        key={i.toString() + 'answer'}
                        style={[Fonts.captionC1, Fonts.textShade05]}
                      >
                        {a.text}
                      </Text>
                    ))}
                  </View>
                </Touchable>
              )
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default SummaryComponent
