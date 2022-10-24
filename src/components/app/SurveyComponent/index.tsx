import React, { useRef, useMemo, useState } from 'react'
import { View, FlatList, ScrollView, ListRenderItem } from 'react-native'
import { useTranslation } from 'react-i18next'
import FastImage from 'react-native-fast-image'
import { Checkbox, RadioButton } from 'react-native-ui-lib'
import DatePicker from 'react-native-date-picker'
import { useTheme } from '@/theme'
import { Text, Touchable, BalloonSlider } from '@/components'
import { BaseDimention, scale } from '@/helpers/dimention'

type Props = {
  questions: Question[]
}

const SurveyComponent: React.FC<Props> = ({ questions }) => {
  const { t } = useTranslation()
  const { Layout, Common, Fonts, Gutters, Images } = useTheme()

  const flRef = useRef<FlatList>(null)
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
  const [showSummaryView, setSummaryView] = useState<boolean>(false)
  const [editMode, setEditMode] = useState<boolean>(false)
  const [result, setResult] = useState<Result[]>([])

  const memoizedAnswers = useMemo(() => {
    const choicesMap: { [key: number]: Answer[] } = {}
    const cloneQuizzes = [...questions]
    cloneQuizzes.forEach((question, index) => {
      const { questionType, choices, date, ranges, _id } = question
      choicesMap[index] = []
      if (choices) {
        const { choicesA, choicesB, choicesC, choicesD } = choices
        if (choicesA && choicesA.text.trim()) {
          choicesMap[index].push({
            questionType: questionType,
            text: choicesA.text,
            selected: false,
            questionId: _id,
            name: 'A',
            activeChild: choicesA.activeChild,
            marked: false,
          })
        }

        if (choicesB && choicesB.text.trim()) {
          choicesMap[index].push({
            questionType: questionType,
            text: choicesB.text,
            selected: false,
            questionId: _id,
            name: 'B',
            activeChild: choicesB.activeChild,
            marked: false,
          })
        }

        if (choicesC && choicesC.text.trim()) {
          choicesMap[index].push({
            questionType: questionType,
            text: choicesC.text,
            selected: false,
            questionId: _id,
            name: 'C',
            activeChild: choicesC.activeChild,
            marked: false,
          })
        }

        if (choicesD && choicesD.text.trim()) {
          choicesMap[index].push({
            questionType: questionType,
            text: choicesD.text,
            selected: false,
            questionId: _id,
            name: 'D',
            activeChild: choicesD.activeChild,
            marked: false,
          })
        }
      }
      if (date) {
        choicesMap[index].push({
          questionType: questionType,
          text: date.initialValue,
          selected: true,
          questionId: _id,
          name: 'A',
          activeChild: false,
          marked: true,
        })
      }
      if (ranges) {
        choicesMap[index].push({
          questionType: questionType,
          text: ranges.start.toString(),
          selected: true,
          questionId: _id,
          name: 'A',
          activeChild: false,
          marked: true,
        })
      }
    })
    return choicesMap
  }, [questions])

  const [answers, setAnswers] = useState<{ [key: number]: Answer[] }>(
    memoizedAnswers,
  )

  const canGoNext = useMemo(() => {
    return (
      answers &&
      answers[currentQuizIndex] &&
      answers[currentQuizIndex].filter(answer => answer.selected).length > 0
    )
  }, [answers, currentQuizIndex])

  const canActiveChildQuestion = useMemo(() => {
    return (
      answers &&
      answers[currentQuizIndex] &&
      answers[currentQuizIndex].filter(
        answer => answer.selected && answer.activeChild,
      ).length > 0 &&
      currentQuizIndex < questions.length - 1
    )
  }, [answers, currentQuizIndex, questions])

  const hasSelectedAllAnswers: boolean = useMemo(() => {
    const lastQuestionIndex = questions.length - 1
    let lastParentQuestionIndex = 0
    for (let i = lastQuestionIndex; i >= 0; i--) {
      if (!questions[i].isChild) {
        lastParentQuestionIndex = i
        break
      }
    }
    if (
      lastParentQuestionIndex === lastQuestionIndex &&
      currentQuizIndex === lastParentQuestionIndex
    ) {
      return true
    }
    if (
      currentQuizIndex >= lastParentQuestionIndex &&
      questions[lastQuestionIndex] &&
      answers[lastQuestionIndex].filter(answer => answer.selected).length > 0
    ) {
      return true
    }

    //for edit mode
    if (editMode && !canActiveChildQuestion) {
      return true
    }

    return (
      currentQuizIndex >= lastParentQuestionIndex &&
      answers &&
      answers[lastParentQuestionIndex] &&
      answers[lastParentQuestionIndex].filter(answer => answer.selected)
        .length > 0 &&
      answers[lastParentQuestionIndex].filter(
        answer => answer.selected && answer.activeChild,
      ).length === 0
    )
  }, [answers, currentQuizIndex, questions, canActiveChildQuestion, editMode])

  const goNextQuestion = () => {
    if (hasSelectedAllAnswers) {
      handleSubmitButton()
      return
    }
    const currQuestion: Question = questions[currentQuizIndex]
    let step = 1
    if (!canActiveChildQuestion && !currQuestion.isChild) {
      step += currQuestion.childNums
    }
    const nextIndex = currentQuizIndex + step
    if (currentQuizIndex < questions.length - 1) {
      setCurrentQuizIndex(nextIndex)
      flRef?.current?.scrollToIndex({
        index: nextIndex,
        animated: false,
      })
    }
  }

  const handleSubmitButton = () => {
    setSummaryView(true)
    setResult(
      questions
        .filter((_, index) => {
          return (
            answers[index] &&
            answers[index].filter(answer => answer.selected && answer.marked)
              .length > 0
          )
        })
        .map((question, _) => {
          const originalIndex = questions.indexOf(question)
          return {
            question: question,
            answer: answers[originalIndex].filter(a => a.selected),
            originalIndex: originalIndex,
          }
        }),
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

  const selectAnswer =
    (selectedIndex: number, currentQuestionIndex: number) => () => {
      const question = questions[currentQuestionIndex]
      const { questionType } = question
      const cloneAnswers = { ...answers }
      const currenAnswers = cloneAnswers[currentQuestionIndex]
      if (questionType === 'select') {
        currenAnswers.forEach((answer, index) => {
          answer.selected = selectedIndex === index
          answer.marked = true
        })
      }
      if (questionType === 'multi-select') {
        currenAnswers.forEach((answer, index) => {
          if (selectedIndex === index) {
            answer.selected = !answer.selected
            answer.marked = true
          }
        })
      }
      setAnswers(cloneAnswers)
    }

  const onDateChange = (date: Date, currentQuestionIndex: number) => {
    const cloneAnswers = { ...answers }
    const currenAnswers = cloneAnswers[currentQuestionIndex]
    let activeChild = false
    if (
      questions[currentQuestionIndex].date &&
      typeof questions[currentQuestionIndex].date?.regexForActiveChild ===
        'string'
    ) {
      const regexStr = questions[currentQuestionIndex].date?.regexForActiveChild
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const regex = new RegExp(regexStr)
      if (regex.test(date.toString())) {
        activeChild = true
      }
    }
    currenAnswers[0] = {
      ...currenAnswers[0],
      text: date.toString(),
      selected: true,
      marked: true,
      activeChild: activeChild,
    }
    setAnswers(cloneAnswers)
  }

  const onSliderValueChange = (value: number, currentQuestionIndex: number) => {
    const cloneAnswers = { ...answers }
    const currenAnswers = cloneAnswers[currentQuestionIndex]
    let activeChild = false
    if (
      questions[currentQuestionIndex].ranges &&
      typeof questions[currentQuestionIndex].ranges?.regexForActiveChild ===
        'string'
    ) {
      const regexStr =
        questions[currentQuestionIndex].ranges?.regexForActiveChild
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const regex = new RegExp(regexStr)
      if (regex.test(value.toString())) {
        activeChild = true
      }
    }
    currenAnswers[0] = {
      ...currenAnswers[0],
      text: value.toString(),
      selected: true,
      marked: true,
      activeChild: activeChild,
    }
    setAnswers(cloneAnswers)
  }

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

  const renderAnswer = (currentQuestionIndex: number) => {
    const question = questions[currentQuestionIndex]
    const { questionType } = question
    if (questionType === 'select' || questionType === 'multi-select') {
      return (
        <View style={[Layout.fill, Layout.alignItemsCenter]}>
          {answers[currentQuestionIndex].map((answer, idx) => (
            <Touchable
              key={idx}
              onPress={selectAnswer(idx, currentQuestionIndex)}
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
              <View
                style={[Layout.row, Layout.fill, Gutters.xxregularRPadding]}
              >
                {questionType === 'select' ? (
                  <RadioButton selected={answer.selected} />
                ) : (
                  <Checkbox value={answer.selected} />
                )}
                <Text style={[Gutters.smallHPadding]}>{answer.text}</Text>
              </View>
            </Touchable>
          ))}
        </View>
      )
    }
    if (questionType === 'slider') {
      return (
        <View
          style={[Layout.fill, Layout.alignItemsCenter, Gutters.xxLargeTMargin]}
        >
          <BalloonSlider
            onValueChange={(value: number) => {
              if (question.ranges) {
                onSliderValueChange(
                  question.ranges.start +
                    (question.ranges.stop - question.ranges.start) *
                      value *
                      0.01,
                  currentQuestionIndex,
                )
              }
            }}
          />
        </View>
      )
    }
    return (
      <View
        style={[Layout.fill, Layout.alignItemsCenter, Gutters.xxLargeTMargin]}
      >
        <DatePicker
          date={new Date(answers[currentQuestionIndex][0].text)}
          textColor="white"
          mode="date"
          onDateChange={date => onDateChange(date, currentQuestionIndex)}
          maximumDate={
            new Date(question.date?.validate?.maximumDate || '2006-01-01')
          }
        />
      </View>
    )
  }

  const renderQuestion: ListRenderItem<Question> = ({ item, index }) => {
    return (
      <View style={[Layout.fill, Layout.fullWidth, Gutters.xregularHPadding]}>
        {renderQuestionDescription(item.content)}
        {renderAnswer(index)}
        {renderBottomCTAs()}
      </View>
    )
  }

  const renderSummaryView = () => {
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
                      setSummaryView(false)
                      flRef.current?.scrollToIndex({
                        animated: false,
                        index: r.originalIndex,
                      })
                      setCurrentQuizIndex(r.originalIndex)
                      setEditMode(true)
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

  return (
    <View style={[Layout.fill, Gutters.xregularBPadding]}>
      <FlatList
        ref={flRef}
        keyExtractor={(item, index) => index.toString()}
        data={questions}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        renderItem={renderQuestion}
        getItemLayout={(_, index) => ({
          length: BaseDimention.screenWidth,
          offset: BaseDimention.screenWidth * index,
          index,
        })}
      />
      {renderSummaryView()}
    </View>
  )
}

export default SurveyComponent
