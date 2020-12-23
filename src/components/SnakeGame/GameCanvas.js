import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

import Snake from "./Snake";
import Food from "./Food";

const getFoodPos = () => {
  const x = Math.floor((Math.random() * 98 + 1)/2)*2;
  const y = Math.floor((Math.random() * 98 + 1)/2)*2;
  return [x, y];
};

export default function GameCanvas() {
  const initialState = {
    snakeDots: [
      [50, 50],
      [52, 50],
    ],
    food: getFoodPos(),
    direction: "right", // initial snake direction is right
    snakeSpeed: 200,
  };
  const [gameDeets, setGameDeets] = useState(initialState);

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
        head = [head[0], head[1] - 2]; // move the head up one step
        break;
      case "down":
        head = [head[0], head[1] + 2]; // move the head down one step
        break;
      case "left":
        head = [head[0] - 2, head[1]]; // move the head left one step
        break;
      case "right":
        head = [head[0] + 2, head[1]]; // move the head right one step
        break;
    }
    // add new head to snake and remove the tail
    snakeDots.push(head);
    snakeDots.shift();
    setGameDeets((gameDeets) => {
      return {
        ...gameDeets,
        snakeDots,
      };
    });
  };

  const resetGame = () => {
    clearInterval(gameStart);
    setGameDeets(gameDeets => {
      return {
        ...gameDeets,
        ...initialState
      }
    })
  }

  const checkBorderCollision = () => {
    const { snakeDots } = gameDeets;
    const head = snakeDots[snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] <= 0 || head[1] <= 0) {
      resetGame()
    }
  };

  const checkAteSelf = () => {
    const snake = [...gameDeets.snakeDots ];
    const head = snake[snake.length-1];
    snake.pop();
    snake.forEach(dot => {
      if(head[0] === dot[0] && head[1] === dot[1]) {
        resetGame();
      }
    })
  }

  useEffect(() => {
    document.addEventListener("keydown", keyDown);
    return () => document.removeEventListener("keydown", keyDown);
  }, [keyDown]);
  
  let gameStart;
  useEffect(() => {
    gameStart = setInterval(moveSnake, gameDeets.snakeSpeed);
    return () => clearInterval(gameStart);
  });
  
  useEffect(() => {
    checkBorderCollision();
    checkAteSelf();
  }, [gameDeets.snakeDots]);
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
