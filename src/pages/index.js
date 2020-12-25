import React, { useState } from "react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import {
  Center,
  Heading,
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem,
  Text,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "../components/Container";
import { Footer } from "../components/Footer";

const MotionBox = motion.custom(Box);

const boxVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function Home() {
  const [display, setDisplay] = useState(false);
  const initialState = {
    imgOne: false,
    imgTwo: false,
    imgThree: false,
    imgFour: false,
  };

  const handleHover = (img, e) => {
    const isMouseEnter = e.type === "mouseenter";
    setDisplay((display) => {
      return {
        ...display,
        [img]: isMouseEnter,
      };
    });
  };
  
  return (
    <Container title="Home">
      <Center py={10}>
        <Heading>Food + Fun + Mystery ft. Tacococo</Heading>
      </Center>
      <Center my={5}>
        <List spacing={8} my={0} fontSize="1.5rem">
          <ListItem
            position="relative"
            onMouseEnter={(e) => handleHover("imgOne", e)}
            onMouseLeave={(e) => handleHover("imgOne", e)}
          >
            {display.imgOne && (
              <MotionBox
                position="absolute"
                transform="rotate(90deg)"
                left="-6rem"
                top="-3rem"
                variants={boxVariants}
                initial="hidden"
                animate="visible"
              >
                <Image src="/attention.png" width={45} height={120} />
              </MotionBox>
            )}
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <Link href="/recipes">
              <ChakraLink flexGrow={1} mr={2}>
                Recipes <LinkIcon />
              </ChakraLink>
            </Link>
          </ListItem>
          <ListItem
            position="relative"
            onMouseEnter={(e) => handleHover("imgTwo", e)}
            onMouseLeave={(e) => handleHover("imgTwo", e)}
          >
            {display.imgTwo && (
              <MotionBox
                position="absolute"
                transform="rotate(90deg)"
                left="-6rem"
                top="-3rem"
                variants={boxVariants}
                initial="hidden"
                animate="visible"
              >
                <Image src="/attention.png" width={45} height={120} />
              </MotionBox>
            )}
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <Link href="/funzone">
              <ChakraLink flexGrow={1} mr={2}>
                Fun Zone <LinkIcon />
              </ChakraLink>
            </Link>
          </ListItem>
          <ListItem
            position="relative"
            onMouseEnter={(e) => handleHover("imgThree", e)}
            onMouseLeave={(e) => handleHover("imgThree", e)}
          >
            {display.imgThree && (
              <MotionBox
                position="absolute"
                transform="rotate(90deg)"
                left="-6rem"
                top="-3rem"
                variants={boxVariants}
                initial="hidden"
                animate="visible"
              >
                <Image src="/attention.png" width={45} height={120} />
              </MotionBox>
            )}
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <Link href="/mystery">
              <ChakraLink flexGrow={1} mr={2}>
                Mystery <LinkIcon />
              </ChakraLink>
            </Link>
          </ListItem>
          <ListItem
            position="relative"
            onMouseEnter={(e) => handleHover("imgFour", e)}
            onMouseLeave={(e) => handleHover("imgFour", e)}
          >
            {display.imgFour && (
              <MotionBox
                position="absolute"
                transform="rotate(90deg)"
                left="-6rem"
                top="-3rem"
                variants={boxVariants}
                initial="hidden"
                animate="visible"
              >
                <Image src="/attention.png" width={45} height={120} />
              </MotionBox>
            )}
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <Link href="/tacococo">
              <ChakraLink flexGrow={1} mr={2}>
                Tacococo <LinkIcon />
              </ChakraLink>
            </Link>
          </ListItem>
        </List>
      </Center>

      <Footer>
        <Text>❤️</Text>
      </Footer>
    </Container>
  );
}
