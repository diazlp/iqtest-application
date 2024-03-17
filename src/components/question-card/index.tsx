import React from 'react'
import Image from 'next/image'
import { Box, Button, Flex, Grid, GridItem } from '@chakra-ui/react'
import useIQTest from '@/hooks/useIQTest'

export default function QuestionCard(): React.ReactNode {
  const answerChoices: string[] = ['1', '2', '3', '4', '5', '6']

  const {
    activeQuestion,
    questions,
    handleChoiceSelection,
    handleNextQuestion,
  } = useIQTest()

  const selectedChoice = questions.find(
    (question) => question.id === activeQuestion,
  )?.selectedChoice

  const onSelectedChoice = (choice: string) => {
    handleChoiceSelection(activeQuestion, choice)
    handleNextQuestion()
  }

  return (
    <Flex mt={10} align="center" direction={{ base: 'column', lg: 'row' }}>
      <Box>
        <Image
          src={`/assets/question-${activeQuestion}/${activeQuestion}_0_0.png`}
          alt={`Question ${activeQuestion}`}
          width={450}
          height={300}
          className="max-w-[100%] select-none"
          priority
        />
      </Box>
      <Grid
        templateColumns={{ base: 'repeat(3, 1fr)', lg: 'repeat(2, 1fr)' }}
        gap={3}
        mt={{ base: 10, lg: 0 }}
      >
        {answerChoices.map((choice: string, index) => (
          <GridItem key={index} w="100%">
            <Button
              h="100%"
              variant={selectedChoice === choice ? 'solid' : 'outline'}
              outline="1px"
              onClick={() => onSelectedChoice(choice)}
            >
              <Image
                src={`/assets/question-${activeQuestion}/${activeQuestion}_${choice}_0.png`}
                alt={choice}
                width={130}
                height={130}
                priority
              />
            </Button>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  )
}
