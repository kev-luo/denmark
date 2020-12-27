import { Grid, List, Center, Box } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { recipes } from "../../data/recipes";
import { Container } from "../components/Container";
import RecipeItem from "../components/RecipeItem";

const colors = [
  "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
  "linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)",
];

const gridVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    when: "beforeChildren",
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const MotionGrid = motion.custom(Grid);

export default function Recipes() {
  return (
    <Container title="Recipes">
      <Center fontSize={30} py={4}>
        Getcho' Grub On
      </Center>
      <Box pos="relative">
        <List pl="10%" pr="30%">
          <MotionGrid
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            gap={4}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
          >
            {recipes.map((recipe) => {
              const color = colors[Math.floor(Math.random() * colors.length)];
              return (
                <RecipeItem key={recipe.id} recipe={recipe} color={color} />
              );
            })}
          </MotionGrid>
        </List>
        <Box pos="absolute" right="18rem" top="10%" h="80%" w="15%">
          <Image src="/checkThisOut.png" layout="fill" objectPosition="contain" />
        </Box>
      </Box>
    </Container>
  );
}
