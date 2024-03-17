import React from 'react'
import { useRouter } from 'next/router'
import { Button, Container, Heading, Stack, Text } from '@chakra-ui/react'
import Layout from '@/components/layout'

export default function HomeContainer(): React.ReactNode {
  const router = useRouter()

  return (
    <Layout>
      <Container
        display="flex"
        maxW="container.lg"
        maxH={{ base: 'auto', md: '100vh' }}
        px={{ base: 4, lg: 8 }}
        centerContent
        justifyContent="center"
        alignItems="center"
      >
        <Stack align="center" justify="center" h="70vh" w="100%">
          <Heading as="h1">Welcome to IQ Test</Heading>
          <Text fontSize="xl">
            The world&apos;s premier Intelligence Quotient testing service
          </Text>
          <Button mt={5} onClick={() => router.push('/start-test')}>
            Take our Personal IQ Test now
          </Button>
        </Stack>
      </Container>
    </Layout>
  )
}
