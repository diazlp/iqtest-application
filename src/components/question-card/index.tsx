import React from 'react'
import Image from 'next/image'
import { Box, Button, Flex, Grid, GridItem } from '@chakra-ui/react'

export default function QuestionCard(): React.ReactNode {
  const answerChoice: string[] = ['1', '2', '3', '4', '5', '6']

  return (
    <Flex mt={10} align="center" direction={{ base: 'column', lg: 'row' }}>
      <Box>
        <Image
          src={'/assets/question-1/1_0_0.png'}
          alt="Question 1"
          width={450}
          height={300}
          className="max-w-[100%]"
        />
      </Box>
      <Grid
        templateColumns={{ base: 'repeat(3, 1fr)', lg: 'repeat(2, 1fr)' }}
        gap={3}
        mt={{ base: 10, lg: 0 }}
      >
        {answerChoice.map((choice: string, index) => (
          <GridItem key={index} w="100%">
            <Button h="100%" variant="outline" outline="1px">
              <Image
                src={`/assets/question-1/1_${choice}_0.png`}
                alt={choice}
                width={130}
                height={130}
              />
            </Button>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  )
}
