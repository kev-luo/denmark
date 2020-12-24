import React from "react";
import { Button } from "@chakra-ui/react"

import { Container } from "../../components/Container";
import GameCanvas from "../../components/SnakeGame/GameCanvas"

export default function SnakeGame() {

  return (
    <Container>
      <div>Snake Game</div>
      <GameCanvas />
      <Button>Start Game</Button>
    </Container>
  );
}
