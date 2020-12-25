import React from "react";
import { Heading, List, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { Container } from "../components/Container";
import FunZoneAccordion from "../components/FunZoneAccordion";
import { AnimateSharedLayout, motion } from "framer-motion";
import { games } from "../../data/games";

const MotionList = motion.custom(List);

export default function FunZone() {
  return (
    <Container title="Fun Zone" cols="repeat(2, 1fr)" rows="repeat(10, 1fr)">
      <GridItem rowSpan={1} colSpan={2} justifySelf="center">
        <Heading mt={10}>Fun Zone: You Best Have Fun</Heading>
      </GridItem>
      <GridItem rowSpan={9} colSpan={1} justifySelf="center" alignSelf="center">
        <AnimateSharedLayout>
          <MotionList layout="true" initial={{ borderRadius: 25 }} spacing={2}>
            {games.map((game) => (
              <FunZoneAccordion game={game} key={game.id} />
            ))}
          </MotionList>
        </AnimateSharedLayout>
      </GridItem>
      <GridItem rowSpan={9} colSpan={1} justifySelf="start" alignSelf="start">
        <Image src="/funGuy.png"  layout="intrinsic" width={400} height={600}/>
      </GridItem>
    </Container>
  );
}
