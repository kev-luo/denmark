import React, { useState, useEffect } from "react";
import { GridItem, SimpleGrid, Button, Center } from "@chakra-ui/react";

import { Container } from "../../components/Container";
import { randomAdd, boardMove } from "../../utils/twentyFourtyEight/boardChange";

export default function TwentyFourtyEight() {
  const initialBoard = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const [board, setBoard] = useState(initialBoard);

  const restart = () => {
    setBoard(() => {
      return randomAdd(randomAdd([...initialBoard]));
    })
  };

  const onKeyDown = (e) => {
    boardMove(board, e.key)
  }

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown);
  })

  return (
    <Container>
      <GridItem justifySelf="center">
        <SimpleGrid
          columns={4}
          spacing={1}
          border="1px solid green"
          w={400}
          mt={10}
        >
          {board.flat().map((item, index) => (
            <Center key={index} border="1px solid black" h={90}>{item === 0 ? null : item}</Center>
          ))}
        </SimpleGrid>
      </GridItem>
      <GridItem>
        <Button onClick={restart}>Restart</Button>
      </GridItem>
    </Container>
  );
}
