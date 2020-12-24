import React from "react";
import Image from "next/image";
import { GridItem, Box, Flex, Heading, Text } from "@chakra-ui/react";

import { Container } from "../components/Container";

export default function Tacococo() {
  return (
    <Container title="Tacococo" cols="repeat(8, 1fr)" rows="repeat(5, 1fr)">
      {/* belly image */}
      <GridItem
        colSpan={2}
        rowSpan={5}
        pos="relative"
        h="50%"
        w="55%"
        alignSelf="center"
        justifySelf="end"
      >
        <Image src="/tacococo.png" layout="fill" objectFit="contain" />
      </GridItem>
      {/* title */}
      <GridItem colSpan={4} rowSpan={1} justifySelf="center">
        <Heading zIndex={1} mt={10}>
          A Tribute to My Beloved Tacococo:
        </Heading>
      </GridItem>
      {/* corona danny */}
      <GridItem
        colSpan={2}
        rowSpan={5}
        pos="relative"
        h="70%"
        w="45%"
        alignSelf="center"
        justifySelf="start"
      >
        <Image src="/senorDenmark.png" layout="fill" objectFit="contain" />
      </GridItem>
      {/* main image */}
      <GridItem colSpan={4} rowSpan={4} justifySelf="center" w="100%">
        <Box pos="relative">
          <Box w="50%" h={400} pos="absolute" p={0} left="20%" top="20%">
            <Image
              src="/tacococo-description.png"
              alt="tacococo description background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </Box>
          <Flex
            zIndex={5}
            w="20%"
            direction="column"
            color="white"
            pl={6}
            pt={2}
            pos="absolute"
            left="20%"
            top="20%"
          >
            <Text zIndex={1}>
              "This site was inspired by the old 90's Taco Bells to contribute
              how in the 90's I was birthed, as are you when Taco Bell is in the
              relationship, and hence with the 90's and Taco Bell together you
              are formed again and again."
            </Text>
            <Text zIndex={1} mt={3}>
              - Daniel Josef Denmark
            </Text>
          </Flex>
        </Box>
      </GridItem>
    </Container>
  );
}
