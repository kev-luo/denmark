import React from "react";
import { Heading, List, Flex, Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import { Container } from "../components/Container";
import FunZoneAccordion from "../components/FunZoneAccordion";
import { AnimateSharedLayout, motion } from "framer-motion";
import { games } from "../../data/games";

const MotionList = motion.custom(List);

export default function FunZone() {
  const textColor = "#f40";
  const borderColor = "#08f";
  return (
    <Container title="Fun Zone">
      <Center py={4}>
        <Heading
          as="h1"
          fontFamily="exo-2"
          color="#fff"
          border="0.3rem solid #fff"
          borderRadius="1rem"
          p="2rem 3rem 2rem"
          fontSize="2.5rem"
          textShadow="-0.1rem -0.1rem .5rem #fff,
            0.1rem 0.1rem .5rem #fff,
            0 0 1rem #f40,
            0 0 2rem #f40,
            0 0 3rem #f40,
            0 0 4rem #f40,
            0 0 5rem #f40"
          boxShadow="0 0 .5rem #fff,
            inset 0 0 .5rem #fff,
            0 0 .5rem #08f,
            inset 0 0 .5rem #08f,
            0 0 1rem #08f,
            inset 0 0 1rem #08f"
        >
          FUN ZONE
        </Heading>
      </Center>
      <Flex justifyContent="space-around" w="40%" m="auto">
        <Box alignSelf="center" w="400px">
          <AnimateSharedLayout>
            <MotionList
              layout="true"
              initial={{ borderRadius: 25 }}
              spacing={4}
            >
              {games.map((game) => (
                <FunZoneAccordion game={game} key={game.id} />
              ))}
            </MotionList>
          </AnimateSharedLayout>
        </Box>
        <Box>
          <Image
            src="/funGuy.png"
            layout="intrinsic"
            width={400}
            height={600}
          />
        </Box>
      </Flex>
    </Container>
  );
}
