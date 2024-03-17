import { VStack, Text, Flex, Box } from '@chakra-ui/react'
import React from 'react'

export default function Footer(): React.ReactNode {
  const currYear = new Date().getFullYear()

  return (
    <Box as="div" mt={20} mb={5}>
      <Flex align="center" gap={5} justify="center">
        <div className="flex-1 h-[0.05rem] bg-gray-500 opacity-40" />
        <Text fontSize="2xl" fontWeight="bold">
          IQ Test
        </Text>
        <div className="flex-1 h-[0.05rem] bg-gray-500 opacity-40" />
      </Flex>
      <Text textAlign="center" fontSize="sm" mt={5}>
        Copyright &copy; {currYear} Diaz Linggaputra. All Rights Reserved.
      </Text>
    </Box>
  )
}
