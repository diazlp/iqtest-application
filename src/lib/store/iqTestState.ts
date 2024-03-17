import { atom } from 'recoil'

interface Question {
  id: number
  selectedChoice?: string
}

export interface IQTestState {
  questions: Question[]
  activeQuestion: number
}

export const iqTestState = atom<IQTestState>({
  key: 'iqTestState',
  default: {
    questions: Array.from({ length: 40 }, (_, index) => ({
      id: index + 1,
      selectedChoice: undefined,
    })),
    activeQuestion: 1,
  },
})
