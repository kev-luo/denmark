import React from "react";
import { Box } from "@chakra-ui/react";

export default function Snake({ snakeDots }) {
  return (
    <>
      {snakeDots.map((pos) => {
        return (
          <Box
            pos="absolute"
            w="2%"
            h="2%"
            left={`${pos[0]}%`}
            top={`${pos[1]}%`}
            bg="black"
            zIndex={2}
          />
        );
      })}
    </>
  );
}
