import { Box, useColorMode } from "@chakra-ui/react";

import Header from "./Header";

export const Container = ({ children, variant = "regular" }) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.800" };

  const color = { light: "black", dark: "white" };
  return (
    <Box bg={bgColor[colorMode]} color={color[colorMode]} w="100%" h="100vh">
      <Header />
      <Box
        pt={20}
        mx="auto"
        w="100%"
        maxW={variant === "regular" ? "800px" : "400px"}
      >
        {children}
      </Box>
    </Box>
  );
};
