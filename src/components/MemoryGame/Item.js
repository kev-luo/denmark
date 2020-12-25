import React from "react";
import Image from "next/image";
import { GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionGridItem = motion.custom(GridItem);

export default function Item({ image }) {
  return (
    <MotionGridItem
      key={image.id}
      border="1px solid black"
      whileHover={{ scale: 1.1, boxShadow: "5px 5px 5px 2px rgba(0,0,0,0.5)", cursor: "pointer" }}
      layout
    >
      <Image src={image.url} width={200} height={200} />
    </MotionGridItem>
  );
}
