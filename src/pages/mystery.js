import React from "react";
import { Box, Button, Flex, Center } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";

import Wheel from "../components/Mystery/Wheel";
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
      <Center py={4} fontSize={30}>
        Mystery Section {"\u2728"}
      </Center>
      <Flex direction="column" alignItems="center">
        {/* <MotionBox
          h="50%"
          justifySelf="center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image src="/idek.png" height={500} width={400} />
        </MotionBox> */}
        <Wheel />
        <Box>
          <Button>Call The Spooky Dude</Button>
        </Box>
      </Flex>
    </Container>
  );
}
