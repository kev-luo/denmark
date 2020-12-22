import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import Link from "next/link";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import React from "react";

const Index = () => (
  <Container title="Home">

    <Hero />
    <Flex direction="column">
      <Text>
        <Code>Food</Code> + <Code>Fun</Code> + <Code>Mystery</Code> ft. <Code>Tacococo</Code>
      </Text>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <Link href="/recipes">
            <ChakraLink flexGrow={1} mr={2}>
              Recipes <LinkIcon />
            </ChakraLink>
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <Link href="/funzone">
            <ChakraLink flexGrow={1} mr={2}>
              Fun Zone <LinkIcon />
            </ChakraLink>
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <Link href="/mystery">
            <ChakraLink flexGrow={1} mr={2}>
              Mystery <LinkIcon />
            </ChakraLink>
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <Link href="/tacococo">
            <ChakraLink flexGrow={1} mr={2}>
              Tacococo <LinkIcon />
            </ChakraLink>
          </Link>
        </ListItem>
      </List>
    </Flex>

    <Footer>
      <Text>❤️</Text>
    </Footer>
  </Container>
);

export default Index;
