import React, { useState, useEffect } from "react";
import { Box, useColorMode, Button, Center, Heading } from "@chakra-ui/react";

import Snake from "./Snake";
import Food from "./Food";

const getFoodPos = () => {
  const x = Math.floor((Math.random() * 98 + 1) / 2) * 2;
  const y = Math.floor((Math.random() * 98 + 1) / 2) * 2;
  return [x, y];
};

export default function GameCanvas() {
  const { colorMode } = useColorMode();
  const borderColor = { light: "black", dark: "white" };
  const initialState = {
    snakeDots: [
      [50, 50],
      [52, 50],
    ],
    food: getFoodPos(),
    direction: "right", // initial snake direction is right
    snakeSpeed: 150,
    score: 0,
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
    setGameDeets((gameDeets) => {
      return {
        ...gameDeets,
        ...initialState,
      };
    });
  };

  const checkBorderCollision = () => {
    const { snakeDots } = gameDeets;
    const head = snakeDots[snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] <= 0 || head[1] <= 0) {
      resetGame();
    }
  };

  const checkAteSelf = () => {
    const snake = [...gameDeets.snakeDots];
    const head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        resetGame();
      }
    });
  };

  const eatFood = () => {
    const head = gameDeets.snakeDots[gameDeets.snakeDots.length - 1];
    const food = gameDeets.food;
    if (head[0] == food[0] && head[1] == food[1]) {
      setGameDeets((gameDeets) => {
        return {
          ...gameDeets,
          food: getFoodPos(),
        };
      });
      addToSnake();
      incrementScore();
    }
  };

  const addToSnake = () => {
    const newSnake = [...gameDeets.snakeDots];
    newSnake.unshift([]);
    setGameDeets((gameDeets) => {
      const { snakeSpeed } = gameDeets;
      const speedStep = snakeSpeed < 90 ? 1 : snakeSpeed <= 100 ? 5 : 10;
      return {
        ...gameDeets,
        snakeDots: newSnake,
        snakeSpeed: gameDeets.snakeSpeed - speedStep,
      };
    });
  };

  const incrementScore = () => {
    setGameDeets(gameDeets => {
      return {
        ...gameDeets,
        score: gameDeets.score + 1
      }
    })
  }

  useEffect(() => {
    document.addEventListener("keyup", keyDown);
    return () => document.removeEventListener("keyup", keyDown);
  }, [keyDown]);

  let gameStart;
  useEffect(() => {
    gameStart = setInterval(moveSnake, gameDeets.snakeSpeed);
    return () => clearInterval(gameStart);
  });

  useEffect(() => {
    checkBorderCollision();
    checkAteSelf();
    eatFood();
  }, [gameDeets.snakeDots]);

  return (
    <>
      <Center>
        <Heading as="h5" size="md" mb={8}>
          {`Score: ${gameDeets.score}`}
        </Heading>
      </Center>
      <Box
        border={`1px solid ${borderColor[colorMode]}`}
        pos="relative"
        w={600}
        h={600}
        mx="auto"
      >
        <Snake snakeDots={gameDeets.snakeDots} color={borderColor[colorMode]} />
        <Food food={gameDeets.food} />
      </Box>
    </>
  );
}
