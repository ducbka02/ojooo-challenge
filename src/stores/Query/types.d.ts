interface QuizResponse {
  timeStart: number
  listQuestion: Question[]
  gameHistoryId: string
}

interface Question {
  _id: string
  content: string
  description?: null
  illustrationImage?: string
  questionType: QuestionType
  choices?: Choices
  ranges?: Range
  date?: DataDate
  childNums: number
  isChild?: boolean
  parentID?: string
}

interface Answer {
  questionId: string
  questionType: QuestionType
  text: string
  selected: boolean
  name: Choice
  activeChild: boolean
  marked: boolean
}

interface Choices {
  choicesA?: {
    text: string
    activeChild: boolean
  }
  choicesB?: {
    text: string
    activeChild: boolean
  }
  choicesC?: {
    text: string
    activeChild: boolean
  }
  choicesD?: {
    text: string
    activeChild: boolean
  }
}

interface Range {
  start: number
  stop: number
  regexForActiveChild?: string
}

interface DataDate {
  initialValue: string
  validate?: {
    maximumDate?: string
    minimumDate?: string
  }
  regexForActiveChild?: string
}

type Choice = 'A' | 'B' | 'C' | 'D' | ''

type QuestionType = 'select' | 'multi-select' | 'date' | 'slider'

interface Result {
  question: Question
  answer: Answer[]
  originalIndex: number
}
