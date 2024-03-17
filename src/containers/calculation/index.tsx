import React, { useState, useEffect } from 'react'
import {
  Container,
  Stack,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Button,
  ScaleFade,
} from '@chakra-ui/react'
import Layout from '@/components/layout'
import { useRouter } from 'next/router'

export default function CalculationContainer(): React.ReactNode {
  const router = useRouter()
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1
        } else {
          clearInterval(interval)
          return 100
        }
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

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
          h="50vh"
          w="100%"
          userSelect="none"
          cursor="default"
        >
          <Text fontSize="xl" fontWeight="medium">
            Please wait a moment while we calculate your results
          </Text>
          <CircularProgress
            value={progress}
            size="130px"
            color="green"
            thickness="7px"
            mt={5}
          >
            <CircularProgressLabel fontSize="1.8rem" fontWeight="medium">
              {progress}%
            </CircularProgressLabel>
          </CircularProgress>
          <ScaleFade in={progress === 100}>
            <Button
              mt={5}
              variant="solid"
              onClick={() => router.push('/payment')}
            >
              View Your Result
            </Button>
          </ScaleFade>
        </Stack>
      </Container>
    </Layout>
  )
}
