import React from "react";
import Image from "next/image";
import { GridItem, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionGridItem = motion.custom(GridItem);
const boxShadowClr = { light: "rgba(0, 0, 0, 0.5)", dark: "rgba(255, 255, 255, 0.1)"}

export default function Item({ image, handleClick }) {
  const { colorMode } = useColorMode();

  return (
    <MotionGridItem
      key={image.id}
      borderRadius="5px"
      whileHover={{ scale: 1.1, boxShadow: `2px 3px 5px 2px ${boxShadowClr[colorMode]}`, cursor: "pointer" }}
      layout
      onClick={() => handleClick(image.name, image.id)}
      height={150}
      width={150}
    >
      <Image src={image.url} width={150} height={150} />
    </MotionGridItem>
  );
}
