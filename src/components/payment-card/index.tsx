import React from 'react'
import {
  Heading,
  Card,
  CardHeader,
  CardBody,
  List,
  Button,
  useColorModeValue,
  Tag,
} from '@chakra-ui/react'

type PaymentCardProps = {
  children: React.ReactNode | string
  price: string
  isPopular?: boolean
}

export default function PaymentCard({
  children,
  price,
  isPopular,
}: PaymentCardProps): React.ReactNode {
  const cardBodyColor = useColorModeValue('gray.50', 'gray.700')

  return (
    <Card size={{ base: 'sm', lg: 'lg' }} variant="outline" mt={5}>
      <CardHeader textAlign="center">
        {isPopular ? (
          <Tag colorScheme="red" maxW="200px" opacity="1">
            Most Popular
          </Tag>
        ) : null}
        <Heading size="xl">USD {price}</Heading>
      </CardHeader>
      <CardBody
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={5}
        backgroundColor={cardBodyColor}
      >
        <List spacing={2} wordBreak="break-word">
          {children}
        </List>

        <Button colorScheme="red">Choose Payment</Button>
      </CardBody>
    </Card>
  )
}
