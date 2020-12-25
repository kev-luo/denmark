import React from "react";
import { Heading, Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "../components/Container";
const MotionBox = motion.custom(Box);

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
    <Container title="Mystery">
      <Box textAlign="center" py={4}>
        <Heading>Mystery Section</Heading>
      </Box>
      <Flex direction="column" alignItems="center">
        <MotionBox
          h="50%"
          justifySelf="center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image src="/idek.png" height={500} width={400} />
        </MotionBox>
        <Box>
          <Button>Call The Spooky Dude</Button>
        </Box>
      </Flex>
    </Container>
  );
}
