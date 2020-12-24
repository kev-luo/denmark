import React from "react";
import { Heading, Box, Button, GridItem } from "@chakra-ui/react";
import Image from "next/image";

import { Container } from "../components/Container";

export default function Mystery() {
  return (
    <Container title="Mystery" cols="repeat(2, 1fr)" rows="repeat(5, 1fr)">
      <GridItem colSpan={2} rowSpan={1} justifySelf="center">
        <Heading>Mystery Section</Heading>
      </GridItem>
      <GridItem colSpan={1} rowSpan={2} h="50%" justifySelf="center">
        <Image src="/idek.png" height={500} width={400} />
      </GridItem>
      <GridItem colSpan={1}>
        <Button>Call The Spooky Dude</Button>
      </GridItem>
    </Container>
  );
}
