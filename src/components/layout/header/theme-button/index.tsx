import React from 'react'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa6'

export default function ThemeButton(): React.ReactNode {
  const { toggleColorMode } = useColorMode()

  const themeButtonKey = useColorModeValue('light', 'dark')
  const themeButtonIcon = useColorModeValue(
    <FaMoon size={20} />,
    <FaSun size={20} />,
  )

  return (
    <IconButton
      aria-label="Theme button mode"
      size="md"
      variant="ghost"
      key={themeButtonKey}
      icon={themeButtonIcon}
      onClick={toggleColorMode}
    />
  )
}
