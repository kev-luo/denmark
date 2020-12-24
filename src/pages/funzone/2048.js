import React, { useState } from "react";
import { GridItem, SimpleGrid, Box, Center } from "@chakra-ui/react";

import { Container } from "../../components/Container";

export default function TwentyFourtyEight() {
  const initialBoard = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const [board, setBoard] = useState(initialBoard);
  return (
    <Container>
      <GridItem justifySelf="center">
        <SimpleGrid columns={4} spacing={1} border="1px solid green" w={400} mt={10}>
          {board.flat().map((items, index) => (
            <Center key={index} border="1px solid black" h={90} >Hi</Center>
          ))}
        </SimpleGrid>
      </GridItem>
    </Container>
  );
}
