import React from "react";
import { Heading, List, Flex, Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import { Container } from "../components/Container";
import FunZoneAccordion from "../components/FunZoneAccordion";
import { AnimateSharedLayout, motion } from "framer-motion";
import { games } from "../../data/games";

const MotionList = motion.custom(List);

export default function FunZone() {
  return (
    <Container title="Fun Zone">
      <Center py={4}>
        <Heading>Fun Zone - You Best Have Fun 😤</Heading>
      </Center>
      <Flex justifyContent="space-around" w="40%" m="auto">
        <Box alignSelf="center" w="400px">
          <AnimateSharedLayout>
            <MotionList
              layout="true"
              initial={{ borderRadius: 25 }}
              spacing={2}
            >
              <Flex direction="column">
                {games.map((game) => (
                  <FunZoneAccordion game={game} key={game.id} />
                ))}
              </Flex>
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
