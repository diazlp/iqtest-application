import React from 'react'
import { Text, UnorderedList, ListItem } from '@chakra-ui/react'

export default function InstructionItem(): React.ReactNode {
  return (
    <UnorderedList spacing={2}>
      <ListItem>
        <Text fontSize="xl" fontWeight="thin">
          You will have 40 minutes to answer the 40 questions.
        </Text>
      </ListItem>
      <ListItem>
        <Text fontSize="xl" fontWeight="thin">
          For each question choose the appropriate shape to replace the shape
          that is missing.
        </Text>
      </ListItem>
      <ListItem>
        <Text fontSize="xl" fontWeight="thin">
          You can skip questions and return back to them later.
        </Text>
      </ListItem>
      <ListItem>
        <Text fontSize="xl" fontWeight="thin">
          Take your time. We weigh number of correct answers significantly more
          than completion time.
        </Text>
      </ListItem>
    </UnorderedList>
  )
}
