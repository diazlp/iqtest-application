import { useRecoilState, useRecoilValue } from 'recoil'
import {
  type IQTestState,
  iqTestState,
  totalCorrectAnswersSelector,
} from '@/lib/store'

const useIQTest = () => {
  const [iqTest, setIqTest] = useRecoilState<IQTestState>(iqTestState)

  const handleChoiceSelection = (questionId: number, choice: string): void => {
    setIqTest((prevQuiz) => ({
      ...prevQuiz,
      questions: prevQuiz.questions.map((question) =>
        question.id === questionId
          ? { ...question, selectedChoice: choice }
          : question,
      ),
    }))
  }

  const handlePreviousQuestion = (): void => {
    setIqTest((prevQuiz) => ({
      ...prevQuiz,
      activeQuestion: Math.max(prevQuiz.activeQuestion - 1, 1),
    }))
  }

  const handleNextQuestion = (): void => {
    setIqTest((prevQuiz) => ({
      ...prevQuiz,
      activeQuestion: Math.min(
        prevQuiz.activeQuestion + 1,
        iqTest.questions.length,
      ),
    }))
  }

  const verifyAllQuestions = (callbackFn: () => void): void => {
    for (const question of iqTest.questions) {
      if (question.selectedChoice === undefined) {
        return setIqTest((prevQuiz) => ({
          ...prevQuiz,
          activeQuestion: question.id,
        }))
      }
    }

    callbackFn()
  }

  const totalCorrectAnswers = useRecoilValue(totalCorrectAnswersSelector)

  return {
    activeQuestion: iqTest.activeQuestion,
    questions: iqTest.questions,
    handleChoiceSelection,
    handlePreviousQuestion,
    handleNextQuestion,
    verifyAllQuestions,
    totalCorrectAnswers,
  }
}

export default useIQTest
