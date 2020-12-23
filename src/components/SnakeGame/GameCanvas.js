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
      [2, 0],
    ],
    food: getFoodPos(),
    direction: "right", // initial snake direction is right
    snakeSpeed: 200
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

  const moveSnake = () => {
    const snakeDots = [...gameDeets.snakeDots];
    let head = snakeDots[snakeDots.length - 1];
    switch (gameDeets.direction) {
      case "up":
        head = [head[0], head[1] - 2];
        break;
      case "down":
        head = [head[0], head[1] + 2];
        break;
      case "left":
        head = [head[0] - 2, head[1]];
        break;
      case "right":
        head = [head[0] + 2, head[1]];
        break;
    }
    snakeDots.push(head);
    snakeDots.shift();
    setGameDeets((gameDeets) => {
      return {
        ...gameDeets,
        snakeDots,
      };
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", keyDown);
    return () => document.removeEventListener("keydown", keyDown);
  }, [keyDown]);

  // useEffect(() => {
  //   const startSnake = setInterval(moveSnake, gameDeets.snakeSpeed);
  //   return () => clearInterval(startSnake);
  // })
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
