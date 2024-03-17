import React, { useState } from 'react'
import { Container } from '@chakra-ui/react'
import Layout from '@/components/layout'
import QuestionCard from '@/components/question-card'
import TestProgress from './test-progress'

export default function TestContainer(): React.ReactNode {
  return (
    <Layout noParticle>
      <Container
        display="flex"
        maxW="container.md"
        maxH={{ base: 'auto', md: '100vh' }}
        px={{ base: 4, lg: 8 }}
        centerContent
        justifyContent="center"
        alignItems="center"
      >
        <TestProgress />
        <QuestionCard />
      </Container>
    </Layout>
  )
}
