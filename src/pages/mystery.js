import React from "react";
import { Heading, Box, Button, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "../components/Container";
const MotionGridItem = motion.custom(GridItem);

export default function Mystery() {
  const imageVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
      },
    },
  };
  return (
    <Container title="Mystery" cols="repeat(2, 1fr)" rows="repeat(5, 1fr)">
      <GridItem colSpan={2} rowSpan={1} justifySelf="center">
        <Heading>Mystery Section</Heading>
      </GridItem>
      <MotionGridItem colSpan={1} rowSpan={2} h="50%" justifySelf="center" variants={imageVariants} initial="hidden" animate="visible">
        <Image src="/idek.png" height={500} width={400} />
      </MotionGridItem>
      <GridItem colSpan={1}>
        <Button>Call The Spooky Dude</Button>
      </GridItem>
    </Container>
  );
}
