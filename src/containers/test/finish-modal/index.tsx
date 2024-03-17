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

type FinishModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function FinishModal({
  isOpen,
  onClose,
}: FinishModalProps): React.ReactNode {
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
          <Button variant="outline" onClick={onClose} mr={3}>
            Cancel
          </Button>
          <Button colorScheme="blue" variant="solid">
            Finish
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
