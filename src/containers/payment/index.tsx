import React from 'react'
import {
  Container,
  Stack,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  List,
  ListIcon,
  ListItem,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import Layout from '@/components/layout'
import { MdCheckCircle } from 'react-icons/md'

export default function PaymentContainer(): React.ReactNode {
  const cardBodyColor = useColorModeValue('gray.50', 'gray.700')

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
      >
        <Stack
          align="center"
          justify="center"
          h="80vh"
          w="100%"
          userSelect="none"
          cursor="default"
        >
          <Heading>IQ Test Completee</Heading>
          <Text fontSize="lg" color="gray.500">
            Choose payment option. Results are instant.
          </Text>
          <Card size="lg" variant="outline" mt={5}>
            <CardHeader textAlign="center">
              <Heading size="xl">USD $20</Heading>
            </CardHeader>
            <CardBody
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={5}
              backgroundColor={cardBodyColor}
            >
              <List spacing={2} wordBreak="break-word">
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
              </List>

              <Button colorScheme="red">Choose Payment</Button>
            </CardBody>
          </Card>
        </Stack>
      </Container>
    </Layout>
  )
}
