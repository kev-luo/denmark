import React from "react";
import { Heading, List } from "@chakra-ui/react";
import { Container } from "../components/Container";
import FunZoneAccordion from "../components/FunZoneAccordion";
import { AnimateSharedLayout, motion } from "framer-motion";
import { games } from "../../data/games";

const MotionList = motion.custom(List);

export default function FunZone() {
  return (
    <Container>
      <Heading>Welcome to the Fun Zone</Heading>
      <AnimateSharedLayout>
        <MotionList layout initial={{ borderRadius: 25 }} spacing={2}>
          {games.map((game) => (
            <FunZoneAccordion
              name={game.name}
              description={game.description}
              key={game.id}
            />
          ))}
        </MotionList>
      </AnimateSharedLayout>
    </Container>
  );
}
