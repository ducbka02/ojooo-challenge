import React, { useRef, useMemo, useState } from 'react'
import { View, FlatList, ListRenderItem } from 'react-native'
import { useTheme } from '@/theme'
import {
  CheckboxAnswer,
  RadioGroupAnswer,
  SliderAnswer,
  DatePickerAnswer,
  QuestionComponent,
  SummaryComponent,
} from '@/components'
import { BaseDimention } from '@/helpers/dimention'

type Props = {
  questions: Question[]
}

const SurveyComponent: React.FC<Props> = ({ questions }) => {
  const { Layout, Gutters } = useTheme()

  const flRef = useRef<FlatList>(null)
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0)
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
      answers[currentQuestionIndex] &&
      answers[currentQuestionIndex].filter(answer => answer.selected).length > 0
    )
  }, [answers, currentQuestionIndex])

  const canActiveChildQuestion = useMemo(() => {
    return (
      answers &&
      answers[currentQuestionIndex] &&
      answers[currentQuestionIndex].filter(
        answer => answer.selected && answer.activeChild,
      ).length > 0 &&
      currentQuestionIndex < questions.length - 1
    )
  }, [answers, currentQuestionIndex, questions])

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
      currentQuestionIndex === lastParentQuestionIndex
    ) {
      return true
    }
    if (
      currentQuestionIndex >= lastParentQuestionIndex &&
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
      currentQuestionIndex >= lastParentQuestionIndex &&
      answers &&
      answers[lastParentQuestionIndex] &&
      answers[lastParentQuestionIndex].filter(answer => answer.selected)
        .length > 0 &&
      answers[lastParentQuestionIndex].filter(
        answer => answer.selected && answer.activeChild,
      ).length === 0
    )
  }, [
    answers,
    currentQuestionIndex,
    questions,
    canActiveChildQuestion,
    editMode,
  ])

  const goNextQuestion = () => {
    if (hasSelectedAllAnswers) {
      handleSubmitButton()
      return
    }
    const currQuestion: Question = questions[currentQuestionIndex]
    let step = 1
    if (!canActiveChildQuestion && !currQuestion.isChild) {
      step += currQuestion.childNums
    }
    const nextIndex = currentQuestionIndex + step
    if (currentQuestionIndex < questions.length - 1) {
      setcurrentQuestionIndex(nextIndex)
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

  const selectAnswer = (selectedIndex: number) => () => {
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

  const onDateChange = (date: Date) => {
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

  const onSliderValueChange = (value: number) => {
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

  const onEditAnswer = (originalIndex: number) => {
    setSummaryView(false)
    flRef.current?.scrollToIndex({
      animated: false,
      index: originalIndex,
    })
    setcurrentQuestionIndex(originalIndex)
    setEditMode(true)
  }

  const generateAnswerComponent = () => {
    const question = questions[currentQuestionIndex]
    const { questionType } = question
    switch (questionType) {
      case 'select':
        return (
          <RadioGroupAnswer
            onChange={selectAnswer}
            choices={answers[currentQuestionIndex]}
          />
        )
      case 'multi-select':
        return (
          <CheckboxAnswer
            onChange={selectAnswer}
            choices={answers[currentQuestionIndex]}
          />
        )
      case 'slider':
        return (
          <SliderAnswer
            ranges={question.ranges}
            onChange={onSliderValueChange}
          />
        )
      case 'date':
        return (
          <DatePickerAnswer
            value={answers[currentQuestionIndex][0].text}
            maximumDate={question.date?.validate?.maximumDate}
            onChange={onDateChange}
          />
        )
      default:
        break
    }
  }

  const renderQuestion: ListRenderItem<Question> = ({ item, index }) => {
    return (
      <QuestionComponent
        data={item}
        answers={answers}
        currentQuestionIndex={index}
        canGoNext={canGoNext}
        hasSelectedAllAnswers={hasSelectedAllAnswers}
        goNextQuestion={goNextQuestion}
        answersComponent={generateAnswerComponent()}
      />
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
      <SummaryComponent
        showSummaryView={showSummaryView}
        result={result}
        onEditAnswer={onEditAnswer}
      />
    </View>
  )
}

export default SurveyComponent
