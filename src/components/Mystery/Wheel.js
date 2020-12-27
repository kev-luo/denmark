import React from "react";
import Image from "next/image";
import { List, ListItem, Box, Center, Button } from "@chakra-ui/react";

const colors = [
  "#F0F8FF",
  "#00FFFF",
  "#8A2BE2",
  "#A52A2A",
  "#5F9EA0",
  "#7FFF00",
  "#FF7F50",
  "#B22222",
  "#FF69B4",
  "#008000",
  "#E0FFFF",
  "#BA55D3",
];

export default function Wheel() {
  return (
    <Box mt={20}>
      <Box
        pos="absolute"
        top="4rem"
        left="48%"
        zIndex={1}
        transform="rotate(180deg)"
      >
        <Image src="/attention.png" width={45} height={120} />
      </Box>
      <List
        className="circle"
        w="25em"
        h="25em"
        border="1px solid black"
        pos="relative"
        p={0}
        m="1em auto"
        borderRadius="50%"
        overflow="hidden"
      >
        {colors.map((color, index) => {
          return (
            <ListItem
              overflow="hidden"
              pos="absolute"
              top={0}
              right={0}
              w="50%"
              h="50%"
              transformOrigin="0% 100%"
              bgColor={color}
              transform={`rotate(${index * 30}deg) skewY(-60deg)`}
            >
              <Box
                spellCheck="false"
                contentEditable="true"
                pos="absolute"
                left="-100%"
                w="200%"
                h="200%"
                textAlign="center"
                display="block"
                transform="skewY(60deg) rotate(15deg)"
                pt={2}
                cursor="pointer"
                fontWeight="bold"
                fontSize={18}
              >
                {index + 1}
              </Box>
            </ListItem>
          );
        })}
      </List>
      <Center>
        <Button w={120}>Spin</Button>
      </Center>
    </Box>
  );
}
