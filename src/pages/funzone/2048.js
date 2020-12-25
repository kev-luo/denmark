import React, { useState, useEffect } from "react";
import { GridItem, SimpleGrid, Button, useColorMode } from "@chakra-ui/react";

import { Container } from "../../components/Container";
import {
  randomAdd,
  boardMove,
} from "../../utils/twentyFourtyEight/boardChange";
import Tile from "../../components/TwentyFourtyEight/Tile";

export default function TwentyFourtyEight() {

  const { colorMode } = useColorMode();

  const borderColor = { light: "black", dark: "white"}
  const initialBoard = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const [board, setBoard] = useState(initialBoard);

  const restart = () => {
    setBoard(() => {
      return randomAdd(randomAdd([...initialBoard]));
    });
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
            let nextStep = randomAdd(boardMove(prevBoard, dir));
            if (JSON.stringify(prevBoard) !== JSON.stringify(nextStep)) {
              isGameOver = false;
            }
          });
          if (isGameOver) {
            window.alert("Game Over");
            return [...prevBoard];
          }

          //window.alert(JSON.stringify(prevBoard));
          let newBoard1 = boardMove(prevBoard, direction);
          //window.alert(JSON.stringify(prevBoard));
          if (JSON.stringify(prevBoard) === JSON.stringify(newBoard1)) {
            //window.alert("no change");
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
      <GridItem justifySelf="center">
        <SimpleGrid
          columns={4}
          spacing={1}
          border={`1px solid ${borderColor[colorMode]}`}
          w={400}
          mt={10}
          p={1}
        >
          {board.flat().map((item, index) => (
            <Tile key={index} item={item} borderColor={borderColor[colorMode]}/>
          ))}
        </SimpleGrid>
      </GridItem>
      <GridItem justifySelf="center">
        <Button onClick={restart}>Restart</Button>
      </GridItem>
    </Container>
  );
}
