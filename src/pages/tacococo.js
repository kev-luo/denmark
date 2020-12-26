import React from "react";
import Image from "next/image";
import { GridItem, Box, Flex, Heading, Text } from "@chakra-ui/react";

import { Container } from "../components/Container";

export default function Tacococo() {
  return (
    <Container title="Tacococo">
      {/* title */}
      <Box textAlign="center" py={4}>
        <Heading fontFamily="permanent-marker">A Tribute to My Beloved Tacococo:</Heading>
      </Box>
      <Flex justifyContent="space-around">
        {/* belly image */}
        <Box pos="relative" h="500px" w="500px">
          <Image src="/tacococo.png" layout="fill" objectFit="contain" />
        </Box>
        {/* main image */}
        <Box pos="relative" h="500px" w="500px" >
          <Box h="500px" w="500px" pos="absolute" p={0}>
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
            w="40%"
            direction="column"
            color="white"
            pl={6}
            pt={2}
            pos="absolute"
            top="10%"
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
        {/* corona danny */}
        <Box pos="relative" h="500px" w="500px">
          <Image src="/senorDenmark.png" layout="fill" objectFit="contain" />
        </Box>
      </Flex>
    </Container>
  );
}
