import React from "react";

import { List, ListItem, Box } from "@chakra-ui/react";

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
    <div>
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
              <Box spellCheck="false" contentEditable="true">
                {index + 1}
              </Box>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
