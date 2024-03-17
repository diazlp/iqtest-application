import React from 'react'
import Image from 'next/image'
import { Box, Button, Flex, Grid, GridItem } from '@chakra-ui/react'

export default function QuestionCard(): React.ReactNode {
  return (
    <Flex mt={10} align="center">
      <Box>
        <Image
          src={'/assets/question-1/question-1.png'}
          alt="Question 1"
          width={450}
          height={300}
          className="max-w-[100%]"
        />
      </Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
        <GridItem w="100%">
          <Button h="100%" variant="outline" outline="1px">
            <Image
              src={'/assets/question-1/answer-a.png'}
              alt="Answer 1"
              width={130}
              height={130}
              className="object-cover"
            />
          </Button>
        </GridItem>
        <GridItem w="100%">
          <Button h="100%" variant="outline" outline="1px">
            <Image
              src={'/assets/question-1/answer-a.png'}
              alt="Answer 1"
              width={130}
              height={130}
              className="object-cover"
            />
          </Button>
        </GridItem>
        <GridItem w="100%">
          <Button h="100%" variant="outline" outline="1px">
            <Image
              src={'/assets/question-1/answer-a.png'}
              alt="Answer 1"
              width={130}
              height={130}
              className="object-cover"
            />
          </Button>
        </GridItem>
        <GridItem w="100%">
          <Button h="100%" variant="outline" outline="1px">
            <Image
              src={'/assets/question-1/answer-a.png'}
              alt="Answer 1"
              width={130}
              height={130}
              className="object-cover"
            />
          </Button>
        </GridItem>
        <GridItem w="100%">
          <Button h="100%" variant="outline" outline="1px">
            <Image
              src={'/assets/question-1/answer-a.png'}
              alt="Answer 1"
              width={130}
              height={130}
              className="object-cover"
            />
          </Button>
        </GridItem>
        <GridItem w="100%">
          <Button h="100%" variant="outline" outline="1px">
            <Image
              src={'/assets/question-1/answer-a.png'}
              alt="Answer 1"
              width={130}
              height={130}
              className="object-cover"
            />
          </Button>
        </GridItem>
      </Grid>
    </Flex>
  )
}
