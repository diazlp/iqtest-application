import React from 'react'
import {
  Stack,
  Progress,
  HStack,
  Text,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Utils } from '@/lib/utils'
import useTimer from '@/hooks/useTimer'
import useIQTest from '@/hooks/useIQTest'
import ConfirmationModal from '../confirmation-modal'

export default function TestProgress(): React.ReactNode {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { timer } = useTimer()
  const { activeQuestion, handleNextQuestion, handlePreviousQuestion } =
    useIQTest()

  const onFinishTest = () => {
    onOpen()
  }

  return (
    <Stack w="100%">
      <Progress width="100%" value={(activeQuestion / 40) * 100} size="md" />
      <HStack justifyContent="space-between" fontWeight="medium">
        <Text>{activeQuestion}/40</Text>
        <Text>{Utils.formatTime(timer)}</Text>
      </HStack>
      <HStack justifyContent="center">
        {activeQuestion > 1 ? (
          <Button
            variant="outline"
            display="inline-flex"
            alignItems="center"
            gap={3}
            leftIcon={<FaArrowLeft size={13} />}
            onClick={handlePreviousQuestion}
          >
            Back
          </Button>
        ) : null}
        {activeQuestion < 40 ? (
          <Button
            variant="outline"
            display="inline-flex"
            alignItems="center"
            gap={3}
            rightIcon={<FaArrowRight size={13} />}
            onClick={handleNextQuestion}
          >
            Next
          </Button>
        ) : null}
        {activeQuestion === 40 ? (
          <Button
            variant="outline"
            display="inline-flex"
            alignItems="center"
            gap={3}
            rightIcon={<FaArrowRight size={13} />}
            onClick={onFinishTest}
          >
            Finish
          </Button>
        ) : null}
      </HStack>
      <ConfirmationModal isOpen={isOpen} onClose={onClose} />
    </Stack>
  )
}
