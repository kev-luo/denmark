import React from "react";

import { Container } from "../../components/Container";
import GameCanvas from "../../components/SnakeGame/GameCanvas"

export default function SnakeGame() {

  return (
    <Container>
      <div>Snake Game</div>
      <GameCanvas />
    </Container>
  );
}
