import React from "react";
import { Center, useColorMode } from "@chakra-ui/react";

const tileColors = {
  2: "#EEE4DA",
  4: "#EDE0C8",
  8: "#F2B179",
  16: "#F59563",
  32: "#F67C60",
  64: "#F65E3B",
  128: "#EDCF73",
  256: "#EDCC62",
  512: "#EDC850",
  1024: "#EDC53F",
  2048: "#EDC22D",
};

export default function Tile({ item, borderColor }) {
  return (
    <Center border={`1px solid ${borderColor}`} h={90} bgColor={`${tileColors[item]}`} color="black">
      {item === 0 ? null : item}
    </Center>
  );
}
