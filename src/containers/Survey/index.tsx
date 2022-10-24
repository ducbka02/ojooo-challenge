import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StackList } from '@/navigators/type'
import { useTheme } from '@/theme'
import { SurveyComponent } from '@/components'
import { data } from '@/services/data'

type Props = StackScreenProps<StackList, 'SurveyScreen'>

const SurveyScreen: React.FC<Props> = () => {
  const { Layout, Gutters } = useTheme()

  return (
    <SafeAreaView style={[Layout.fill, Gutters.xregularBPadding]}>
      <SurveyComponent questions={data} />
    </SafeAreaView>
  )
}

export default SurveyScreen
