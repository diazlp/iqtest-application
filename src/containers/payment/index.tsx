import React, { useState } from 'react'
import {
  Container,
  Stack,
  Heading,
  Text,
  Flex,
  ListIcon,
  ListItem,
  Button,
  Fade,
  VStack,
} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
import useIQTest from '@/hooks/useIQTest'
import Layout from '@/components/layout'
import PaymentCard from '@/components/payment-card'
import Particle from '@/components/particles'

export default function PaymentContainer(): React.ReactNode {
  const { totalCorrectAnswers } = useIQTest()
  const [showScore, setShowScore] = useState<boolean>(false)

  return (
    <Layout noParticle>
      <Container
        display="flex"
        maxW="container.lg"
        maxH={{ base: 'auto', md: '100vh' }}
        px={{ base: 4, lg: 8 }}
        centerContent
        justifyContent="center"
        alignItems="center"
        my={{ base: 52, lg: 0 }}
      >
        <Stack
          align="center"
          justify="center"
          h="80vh"
          w="100%"
          userSelect="none"
          cursor="default"
        >
          <Heading>IQ Test Complete</Heading>
          <Text fontSize="lg" color="gray.500">
            Please choose a payment option. Results are instant.
          </Text>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            justify={{ base: 'center', lg: 'initial' }}
            align={{ base: 'center', lg: 'start' }}
            gap={5}
          >
            <PaymentCard price="$5">
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                IQ Assessment
              </ListItem>
            </PaymentCard>
            <PaymentCard price="$20" isPopular>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                IQ Assessment
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Multiple Intelligences Report
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                IQ Certificate
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Analysis of cognitive strengths/weaknesses
              </ListItem>
            </PaymentCard>
            <PaymentCard price="$10">
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                IQ Assessment
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                IQ Certificate
              </ListItem>
            </PaymentCard>
          </Flex>
          <Button
            variant="outline"
            onClick={() => setShowScore(!showScore)}
            p={5}
          >
            See Score Instead
          </Button>
          {showScore ? (
            <Fade in={showScore}>
              <Particle />
              <VStack>
                <Text fontSize="xl" fontWeight="medium">
                  Your score is:
                </Text>
                <Text fontSize="3xl" fontWeight="bold">
                  {totalCorrectAnswers}/40
                </Text>
              </VStack>
            </Fade>
          ) : null}
        </Stack>
      </Container>
    </Layout>
  )
}
