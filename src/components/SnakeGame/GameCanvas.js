import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

import Snake from "./Snake";
import Food from "./Food";

const getFoodPos = () => {
  const x = Math.floor(Math.random() * 99);
  const y = Math.floor(Math.random() * 99);
  return [x, y];
};

export default function GameCanvas() {
  const [gameDeets, setGameDeets] = useState({
    snakeDots: [
      [0, 0],
      [2.5, 0],
    ],
    food: getFoodPos(),
    direction: "right", // initial snake direction is right
  });

  const keyDown = (e) => {
    const { key } = e;
    switch (key) {
      case "ArrowUp":
        setGameDeets((gameDeets) => {
          return { ...gameDeets, direction: "up" };
        });
        break;
      case "ArrowDown":
        setGameDeets((gameDeets) => {
          return { ...gameDeets, direction: "down" };
        });
        break;
      case "ArrowLeft":
        setGameDeets((gameDeets) => {
          return { ...gameDeets, direction: "left" };
        });
        break;
      case "ArrowRight":
        setGameDeets((gameDeets) => {
          return { ...gameDeets, direction: "right" };
        });
        break;
      default:
        setGameDeets((gameDeets) => {
          return { ...gameDeets };
        });
        break;
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", keyDown);
    return () => document.removeEventListener("keydown", keyDown);
  }, [keyDown]);
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
