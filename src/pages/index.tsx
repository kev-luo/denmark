import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from "next/link";

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Text>
        Where to go for <Code>Food</Code> + <Code>Fun</Code> +{' '}
        <Code>Intrigue</Code>.
      </Text>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <Link href="/recipes">
            <ChakraLink
              flexGrow={1}
              mr={2}
            >
              Recipes <LinkIcon />
            </ChakraLink>
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <Link href="/funzone">
            <ChakraLink
              flexGrow={1}
              mr={2}
            >
              Fun Zone <LinkIcon />
            </ChakraLink>
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <Link href="/funzone">
            <ChakraLink
              flexGrow={1}
              mr={2}
            >
              Intrigue <LinkIcon />
            </ChakraLink>
          </Link>
        </ListItem>
      </List>
    </Main>

    <Footer>
      <Text>❤️</Text>
    </Footer>
    <CTA />
  </Container>
)

export default Index
