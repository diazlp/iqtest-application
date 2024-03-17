import { Button, Flex, HStack, Heading } from '@chakra-ui/react'
import React from 'react'
import ThemeButton from './theme-button'
import { useRouter } from 'next/router'

export default function Header(): React.ReactNode {
  const router = useRouter()

  return (
    <HStack
      as="header"
      px={8}
      py={6}
      zIndex="tooltip"
      justify="space-between"
      align="center"
      alignItems="center"
      w="100%"
    >
      <Heading
        as="h1"
        cursor="pointer"
        userSelect="none"
        onClick={() => router.push('/')}
      >
        IQ Test
      </Heading>

      <Flex as="div" align="center" justify="space-between" gap={5}>
        <Button variant="ghost">Contact</Button>
        <ThemeButton />
      </Flex>
    </HStack>
  )
}
