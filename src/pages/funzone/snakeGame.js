import React from "react";
import { Center, Heading } from "@chakra-ui/react"

import { Container } from "../../components/Container";
import GameCanvas from "../../components/SnakeGame/GameCanvas"

export default function SnakeGame() {

  return (
    <Container>
      <Center>
        <Heading my={4}>Snakeeee</Heading>
      </Center>
      <GameCanvas />
    </Container>
  );
}
