import { atom, selector } from 'recoil'

interface Question {
  id: number
  selectedChoice?: string
  correctChoice: string
}

export interface IQTestState {
  questions: Question[]
  activeQuestion: number
}

const correctAnswers: { [key: number]: string } = {
  1: '2',
  2: '5',
  3: '2',
  4: '1',
  5: '3',
  6: '4',
  7: '2',
  8: '1',
  9: '1',
  10: '1',
  11: '2',
  12: '2',
  13: '5',
  14: '3',
  15: '1',
  16: '2',
  17: '4',
  18: '6',
  19: '1',
  20: '2',
  21: '3',
  22: '2',
  23: '1',
  24: '4',
  25: '1',
  26: '5',
  27: '4',
  28: '4',
  29: '1',
  30: '3',
  31: '2',
  32: '3',
  33: '1',
  34: '4',
  35: '3',
  36: '2',
  37: '4',
  38: '-', // No answer for question 38
  39: '2',
  40: '1',
}

export const iqTestState = atom<IQTestState>({
  key: 'iqTestState',
  default: {
    questions: Array.from({ length: 40 }, (_, index) => ({
      id: index + 1,
      selectedChoice: undefined,
      correctChoice: correctAnswers[index + 1] || '',
    })),
    activeQuestion: 1,
  },
})

export const totalCorrectAnswersSelector = selector({
  key: 'totalCorrectAnswersKey',
  get: ({ get }) => {
    const iqTest = get(iqTestState)
    let totalCorrectAnswers = 1

    // Iterate through questions and check if selected choice matches the correct choice
    iqTest.questions.forEach((question) => {
      if (question.selectedChoice === question.correctChoice) {
        totalCorrectAnswers++
      }
    })

    return totalCorrectAnswers
  },
})
