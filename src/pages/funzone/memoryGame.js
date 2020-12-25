import React, { useState } from "react";
import { Grid, Button, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { images } from "../../../data/memoryGame";
import { Container } from "../../components/Container";
import Item from "../../components/MemoryGame/Item";

const MotionGrid = motion.custom(Grid);

export default function memoryGame() {
  const initialState = images;

  const [clicked, setClicked] = useState(initialState);
  const [score, setScore] = useState(0);

  const handleClick = (imgName, imgId) => {
    const imgIndex = imgId - 1;
    if (clicked[imgIndex]["clicked"]) {
      setScore(() => 0);
      setClicked(initialState);
    } else {
      setClicked((clicked) => {
        return clicked.map((image) => {
          if (image.name === imgName) {
            return {
              ...image,
              clicked: true,
            };
          } else {
            return image
          }
        });
      });
      setScore((score) => (score += 1));
    }
  };

  return (
    <Container title="Memory Game">
      <Heading justifySelf="center" alignSelf="center">
        Score: {score}
      </Heading>
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
          <Item key={image.id} image={image} handleClick={handleClick} />
        ))}
      </MotionGrid>
      <Button>Restart</Button>
    </Container>
  );
}
