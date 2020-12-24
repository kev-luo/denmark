import React, { useState } from "react";
import { GridItem, SimpleGrid, Button, Center } from "@chakra-ui/react";

import { Container } from "../../components/Container";
import { randomAdd } from "../../utils/twentyFourtyEight/boardChange";

export default function TwentyFourtyEight() {
  // const initialBoard = [
  //   [0, 0, 0, 0],
  //   [0, 0, 0, 0],
  //   [0, 0, 0, 0],
  //   [0, 0, 0, 0],
  // ];

  const initialBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const [board, setBoard] = useState(initialBoard);

  const restart = () => {
    // randomAdd(board.flat());
    setBoard(board => {
      return randomAdd(randomAdd([...board]));
    })
  };

  console.log([...randomAdd(randomAdd([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))])

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
          {board.map((item, index) => (
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
