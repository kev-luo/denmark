import React, { useState } from 'react'
import { Box } from "@chakra-ui/react"

import Snake from "./Snake";

export default function GameCanvas() {
  const [snakeDots, setSnakeDots] = useState([
    [0,0],
    [2.5,0]
  ])
  return (
    <Box border="1px solid black" position="relative" w={600} h={600} my={50} mx="auto">
      <Snake snakeDots={snakeDots}/>
    </Box>
  )
}
