import React, { useState } from "react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import {
  Center,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  Box,
  useColorMode,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimateSharedLayout } from "framer-motion";

import { sitePages } from "../../data/pages";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";

const MotionBox = motion.custom(Box);
const MotionContainer = motion.custom(Box);
const MotionImage = motion.custom(Box);

const boxVariants = {
  hidden: {
    x: "-5rem",
    opacity: 0,
    rotate: [90],
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 500, damping: 30 },
  },
};
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

const imgVariants = {
  hidden: {
    opacity: 0,
    y: -100
  },
  visible: {
    opacity: 1,
    y: 0,
  }
}

const imgIds = [0, 1, 2, 3, 4, 5, 6];
const initialLeft = -25.2;

export default function Home() {
  const { colorMode } = useColorMode();
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
      <MotionContainer h="4rem" w="50%" mx="auto" pos="relative" top={20} variants={containerVariants} initial="hidden" animate="visible">
        <Box h="20%" w="100%" bgColor={colorMode === "dark" ? "#fff" : "#000"} />
        {imgIds.map((id) => {
          return (
            <MotionImage
              pos="absolute"
              h="200%"
              w="100%"
              top="-5.2rem"
              left={`${initialLeft + 8.4 * id}rem`}
              variants={imgVariants} 
            >
              <Image
                src="/stunnahShades.png"
                layout="fill"
                objectFit="contain"
              />
            </MotionImage>
          );
        })}
      </MotionContainer>
      <Center py={20}>
        <Heading>Food + Fun + Mystery ft. Tacococo</Heading>
      </Center>
      <Center my={0}>
        <AnimateSharedLayout>
          <List spacing={8} my={0} fontSize="1.5rem">
            {sitePages.map((page) => {
              return (
                <ListItem
                  position="relative"
                  onMouseEnter={(e) => handleHover(page.alias, e)}
                  onMouseLeave={(e) => handleHover(page.alias, e)}
                >
                  {display[page.alias] && (
                    <MotionBox
                      position="absolute"
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
                  <Link href={`${page.path}`}>
                    <ChakraLink flexGrow={1} mr={2}>
                      {page.name} <LinkIcon />
                    </ChakraLink>
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </AnimateSharedLayout>
      </Center>

      <Footer>
        <Text>❤️</Text>
      </Footer>
    </Container>
  );
}
