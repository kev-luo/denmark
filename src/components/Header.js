import { Flex, Heading, Switch, useColorMode, HStack, Link as ChakraLink } from '@chakra-ui/react'
import Link from "next/link"
import React from 'react'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const bgColor = { light: 'gray.200', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }

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
      zIndex={1}
      bgColor={bgColor[colorMode]}
      color={color[colorMode]}
    >
      <Link href="/">
        <ChakraLink>
          <Heading>The Den</Heading>
        </ChakraLink>
      </Link>

      <HStack spacing="24px">
        <Link href="/recipes">
          <ChakraLink>Recipes</ChakraLink>
        </Link>
        <Link href="/funzone">
          <ChakraLink>Fun Zone</ChakraLink>
        </Link>
        <Link href="/mystery">
          <ChakraLink>Mystery</ChakraLink>
        </Link>
        <Link href="/tacococo">
          <ChakraLink>Tacococo</ChakraLink>
        </Link>
        <Switch
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
        />
      </HStack>
    </Flex>
  )
}
