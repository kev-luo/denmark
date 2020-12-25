import React from 'react'
import Image from "next/image";
import { GridItem, Grid, Box } from "@chakra-ui/react";

import { images } from "../../../data/memoryGame";
import { Container } from "../../components/Container";

export default function memoryGame() {
  return (
    <Container>
      <Grid w="50%" h="50%" templateColumns="repeat(3, 1fr)" templateRows="repeat(4, 1fr)" gap={2} mx="auto" my={10}>
        {images.map(image => (
          <GridItem key={image.id} border="1px solid black">
            <Image src={image.url} width={200} height={200} />
          </GridItem>
        ))}
      </Grid>
      <Box justifySelf="center">
        Score: 
      </Box>
    </Container>
  )
}
