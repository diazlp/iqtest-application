import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

type FinishModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function ConfirmationModal({
  isOpen,
  onClose,
}: FinishModalProps): React.ReactNode {
  const router = useRouter()

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Finish IQ Test</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          Are you sure? You won&apos;t be able to change your answers
          afterwards.
        </ModalBody>

        <ModalFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            variant="solid"
            onClick={() => router.push('/calculation')}
          >
            Finish
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
