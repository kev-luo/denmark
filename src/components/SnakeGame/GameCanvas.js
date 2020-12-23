import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

import Snake from "./Snake";
import Food from "./Food";

const getFoodPos = () => {
  const x = Math.floor(Math.random() * 99);
  const y = Math.floor(Math.random() * 99);
  return [x,y]
};

export default function GameCanvas() {
  const [gameDeets, setGameDeets] = useState({
    snakeDots: [
      [0, 0],
      [2.5, 0],
    ],
    food: getFoodPos(),
    direction: 'right' // initial snake direction is right
  });
  return (
    <Box
      border="1px solid black"
      pos="relative"
      w={600}
      h={600}
      my={50}
      mx="auto"
    >
      <Snake snakeDots={gameDeets.snakeDots} />
      <Food food={gameDeets.food} />
    </Box>
  );
}
