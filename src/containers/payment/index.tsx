import React from 'react'
import {
  Container,
  Stack,
  Heading,
  Text,
  Flex,
  ListIcon,
  ListItem,
  Button,
} from '@chakra-ui/react'
import Layout from '@/components/layout'
import PaymentCard from '@/components/payment-card'
import { MdCheckCircle } from 'react-icons/md'

export default function PaymentContainer(): React.ReactNode {
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
          <Button variant="outline">See Score Instead</Button>
        </Stack>
      </Container>
    </Layout>
  )
}
