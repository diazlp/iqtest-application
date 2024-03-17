import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { timerState } from '@/lib/store'

interface useTimerResult {
  timer: number
}

const useTimer = (): useTimerResult => {
  const [timer, setTimer] = useRecoilState<number>(timerState)

  useEffect(() => {
    const timer: NodeJS.Timeout = setInterval(() => {
      setTimer((prevTime: number) => prevTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return {
    timer,
  }
}

export default useTimer
