import React, { useState, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Button,
  useColorMode,
  Heading,
  Center,
} from "@chakra-ui/react";
import _ from "lodash";

import { Container } from "../../components/Container";
import {
  randomAdd,
  boardMove,
} from "../../utils/twentyFourtyEight/boardChange";
import Tile from "../../components/TwentyFourtyEight/Tile";

export default function TwentyFourtyEight() {
  const { colorMode } = useColorMode();

  const borderColor = { light: "black", dark: "white" };
  const initialBoard = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const [board, setBoard] = useState(initialBoard);
  const [score, setScore] = useState(0);

  const restart = () => {
    setBoard(() => {
      return randomAdd(randomAdd([...initialBoard]));
    });
    setScore(() => 0)
  };

  let valid = true;
  const onKeyDown = (e) => {
    if (valid) {
      valid = false;
      let direction = e.code;
      let directionArray = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
      if (
        direction === "ArrowUp" ||
        direction === "ArrowDown" ||
        direction === "ArrowLeft" ||
        direction === "ArrowRight"
      ) {
        setBoard((prevBoard) => {
          let isGameOver = true;
          directionArray.forEach((dir) => {
            let { boardCopy } = boardMove(prevBoard, dir);
            let nextStep = randomAdd(boardCopy);
            // let nextStep = randomAdd(boardMove(prevBoard, dir));
            if (JSON.stringify(prevBoard) !== JSON.stringify(nextStep)) {
              isGameOver = false;
            }
          });
          if (isGameOver) {
            window.alert("Game Over");
            return [...prevBoard];
          }

          let { boardCopy: newBoard1, addToScore } = boardMove(
            prevBoard,
            direction
          );
          if (addToScore.length > 0) {
            setScore((prevScore) => (prevScore += _.sum(addToScore)));
          }
          // check if board changed when user clicks an arrow
          if (JSON.stringify(prevBoard) === JSON.stringify(newBoard1)) {
            return [...newBoard1];
          }
          let newBoard2 = randomAdd(newBoard1);
          return [...newBoard2];
        });
      }
      setTimeout(() => (valid = true), 100);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  });

  return (
    <Container>
      <Center>
        <Heading my={4}>2048</Heading>
      </Center>
      <Center>
        <Heading as="h5" size="md" >
          {`Score: ${score}`}
        </Heading>
      </Center>
      <Center>
        <SimpleGrid
          columns={4}
          spacing={1}
          border={`1px solid ${borderColor[colorMode]}`}
          w={400}
          mt={10}
          p={1}
        >
          {board.flat().map((item, index) => (
            <Tile
              key={index}
              item={item}
              borderColor={borderColor[colorMode]}
            />
          ))}
        </SimpleGrid>
      </Center>
      <Center>
        <Button onClick={restart} my={4}>
          Restart
        </Button>
      </Center>
    </Container>
  );
}
