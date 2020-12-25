import { Box, useColorMode } from "@chakra-ui/react";
import Head from "next/head";

import Header from "./Header";

export const Container = ({ children, title }) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.800" };

  const color = { light: "black", dark: "white" };
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Box
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        w="100%"
        h="94vh"
        mt="6vh"
      >
        {children}
      </Box>
    </>
  );
};
