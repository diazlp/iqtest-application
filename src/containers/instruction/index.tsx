import React from 'react'
import {
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Layout from '@/components/layout'
import InstructionItem from './instruction-item'
import { useRouter } from 'next/router'

export default function InstructionContainer(): React.ReactNode {
  const router = useRouter()
  const instructionColor = useColorModeValue('white', 'gray.800')

  return (
    <Layout>
      <Container
        display="flex"
        maxW="container.sm"
        maxH={{ base: 'auto', md: '100vh' }}
        px={{ base: 4, lg: 8 }}
        centerContent
        justifyContent="center"
        alignItems="center"
        shadow="xl"
        backgroundColor={instructionColor}
      >
        <Stack align="center" justify="center" h="75vh" w="100%">
          <Heading as="h2" size="lg" fontWeight="medium">
            Test Intructions
          </Heading>
          <Text fontSize="xl" color="gray.500" fontWeight="medium">
            Read each of the following instructions carefully
          </Text>
          <InstructionItem />
          <Button mt={5} size="lg" onClick={() => router.push('/iq-test')}>
            Start the Test
          </Button>
        </Stack>
      </Container>
    </Layout>
  )
}
