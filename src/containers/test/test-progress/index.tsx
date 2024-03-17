import React, { useState, useEffect } from 'react'
import { Stack, Progress, HStack, Text, Button } from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
import { Utils } from '@/lib/utils'

export default function TestProgress(): React.ReactNode {
  const [timeLeft, setTimeLeft] = useState<number>(40 * 60)

  useEffect(() => {
    const timer: NodeJS.Timeout = setInterval(() => {
      setTimeLeft((prevTime: number) => prevTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Stack w="100%">
      <Progress width="100%" value={(1 / 40) * 100} size="md" />
      <HStack justifyContent="space-between" fontWeight="medium">
        <Text>1/40</Text>
        <Text>{Utils.formatTime(timeLeft)}</Text>
      </HStack>
      <HStack justifyContent="center">
        <Button
          variant="outline"
          display="inline-flex"
          w={{ base: '30%', lg: '15%' }}
          alignItems="center"
          gap={3}
        >
          Next
          <FaArrowRight size={13} />
        </Button>
      </HStack>
    </Stack>
  )
}
