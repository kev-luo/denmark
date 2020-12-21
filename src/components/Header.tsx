import { Flex, Heading, Switch, useColorMode } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <Flex
      position="fixed"
      top="0rem"
      left="0rem"
      justify="space-between"
      align="center"
      width="100vw"
      px={8}
      py={3}
    >
      <Heading>The Den</Heading>

      <Flex>
        
        <Switch
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
        />
      </Flex>
    </Flex>
  )
}
