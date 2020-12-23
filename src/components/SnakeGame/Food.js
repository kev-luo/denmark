import React from "react";
import { Box } from "@chakra-ui/react";

export default function Food({ food }) {
  return (
    <Box
      pos="absolute"
      w="2%"
      h="2%"
      left={`${food[0]}%`}
      top={`${food[1]}%`}
      bg="red.200"
      zIndex={1}
    />
  );
}
