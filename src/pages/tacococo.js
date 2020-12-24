import React from "react";
import Image from "next/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { Container } from "../components/Container";

export default function Tacococo() {
  return (
    <Container title="Tacococo">
      <Box w="25%" pos="relative" h="70%" alignSelf="center">
        <Image src="/tacococo.png" layout="fill" objectFit="contain" />
      </Box>

      <Box w="50%" pos="relative">
        <Heading zIndex={1}>A Tribute to My Beloved Tacococo:</Heading>
        <Box w="50%" h={400} pos="absolute" border="1px solid black" p={0}>
          <Image
            src="/tacococo-description.png"
            alt="tacococo description background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Box>
        <Flex zIndex={5} w="20%" direction="column" color="white" pl={6} pt={2}>
          <Text zIndex={1}>
            "This site was inspired by the old 90's Taco Bells
            to contribute how in the 90's I was birthed, as are you when Taco
            Bell is in the relationship, and hence with the 90's and Taco Bell
            together you are formed again and again."
          </Text>
          <Text zIndex={1} mt={3}>
          - Danny
          </Text>
        </Flex>
      </Box>
      
      <Box w="25%" pos="relative" h="80%" alignSelf="flexStart">
        <Image src="/senorDenmark.png" layout="fill" objectFit="fill" />
      </Box>
    </Container>
  );
}
