import React from "react";
import Image from "next/image";
import { List, ListItem, Box, Center, Button } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

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

const MotionList = motion.custom(List);

export default function Wheel() {
  const controls = useAnimation();
  const handleClick = () => {
    controls.start({
      rotate: 720,
      transition: { type: "inertia", velocity: Math.floor(Math.random() * 1000) + 900, timeConstant: 1000},
    });
    controls.rese;
  };
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
      <MotionList
        className="circle"
        w="25em"
        h="25em"
        border="1px solid black"
        pos="relative"
        p={0}
        m="1em auto"
        borderRadius="50%"
        overflow="hidden"
        animate={controls}
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
      </MotionList>
      <Center>
        <Button onClick={handleClick} w={120}>
          Spin
        </Button>
      </Center>
    </Box>
  );
}
