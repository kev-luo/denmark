import { Grid, useColorMode } from "@chakra-ui/react";
import Head from "next/head";

import Header from "./Header";

export const Container = ({ children, title, cols, rows }) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.800" };

  const color = { light: "black", dark: "white" };
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Grid
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        w="100%"
        h="94vh"
        mt="6vh"
        templateColumns={`${cols}`}
        templateRows={`${rows}`}
      >
        {children}
      </Grid>
    </>
  );
};
