import React from 'react'
import { Stack, Progress, HStack, Text, Button } from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'

export default function TestProgress(): React.ReactNode {
  return (
    <Stack w="100%">
      <Progress width="100%" value={10} size="md" />
      <HStack justifyContent="space-between" fontWeight="medium">
        <Text>1/40</Text>
        <Text>1/40</Text>
      </HStack>
      <HStack justifyContent="center">
        <Button
          variant="outline"
          display="inline-flex"
          w="15%"
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
