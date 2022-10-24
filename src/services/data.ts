export const data: Question[] = [
  {
    _id: '1',
    content: 'What is your favorite PROGRAMMING LANGUAGE?',
    questionType: 'multi-select',
    childNums: 1,
    choices: {
      choicesA: {
        text: 'Javascript/TypeScript',
        activeChild: true,
      },
      choicesB: {
        text: 'C/C++',
        activeChild: false,
      },
      choicesC: {
        text: 'Python',
        activeChild: false,
      },
      choicesD: {
        text: 'Golang',
        activeChild: false,
      },
    },
  },
  {
    _id: '2',
    content: 'Do you have experience with React Native?',
    questionType: 'select',
    childNums: 0,
    isChild: true,
    choices: {
      choicesA: {
        text: 'YES',
        activeChild: false,
      },
      choicesB: {
        text: 'NO',
        activeChild: false,
      },
    },
  },
  {
    _id: '3',
    content: 'When did you start using computers?',
    questionType: 'date',
    childNums: 0,
    date: {
      initialValue: '2005-01-01',
      validate: {
        maximumDate: '2020-01-01',
      },
    },
  },
  {
    _id: '4',
    content: 'How many years of programming experience do you have?',
    questionType: 'slider',
    childNums: 0,
    ranges: {
      start: 0,
      stop: 100,
    },
  },
]
