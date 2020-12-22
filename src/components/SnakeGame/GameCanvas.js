import React from 'react'
import { Box } from "@chakra-ui/react"

import SnakeDot from "./SnakeDot";

export default function GameCanvas() {
  return (
    <Box border="1px solid black" position="relative" w="600px" h="600px" my={50} mx="auto">
      <SnakeDot />
    </Box>
  )
}
