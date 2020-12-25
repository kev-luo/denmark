import React from "react";
import { Grid, Box, Flex, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { images } from "../../../data/memoryGame";
import { Container } from "../../components/Container";
import Item from "../../components/MemoryGame/Item";

const MotionGrid = motion.custom(Grid);

export default function memoryGame() {
  return (
    <Container>
      <MotionGrid
        w="50%"
        h="50%"
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(4, 1fr)"
        gap={4}
        mx="auto"
        my={10}
        layout
      >
        {images.map((image) => (
          <Item key={image.id} image={image}/>
        ))}
      </MotionGrid>
      <Flex direction="column" justifySelf="center">
        <Box >Score:</Box>
        <Button>Restart</Button>
      </Flex>
    </Container>
  );
}
