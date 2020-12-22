import React, { useState } from "react";
import { Heading, List } from "@chakra-ui/react";
import { Container } from "../components/Container";
import FunZoneAccordion from "../components/FunZoneAccordion";

const accordionIds = [0, 1, 2, 3];

export default function FunZone() {
  const [expanded, setExpanded] = useState(0);
  return (
    <Container>
      <Heading>Welcome to the Fun Zone</Heading>
      <List>
        {accordionIds.map((i) => (
          <FunZoneAccordion i={i} expanded={expanded} setExpanded={setExpanded} />
        ))}
      </List>
    </Container>
  );
}
