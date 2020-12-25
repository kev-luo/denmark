import { List, Heading, Flex, Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

import { recipes } from "../../data/recipes";
import { Container } from "../components/Container";
import RecipeItem from "../components/RecipeItem";
import { usePositionReorder } from "../utils/usePositionReorder";

const colors = [
  "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
  "linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)",
];

const listVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    when: "beforeChildren",
    staggerChildren: 0.4,
  },
};

const MotionList = motion.custom(List);

export default function Recipes() {
  const [order, updatePosition, updateOrder] = usePositionReorder(recipes);
  return (
    <Container title="Recipes">
      <Box border="1px solid black" textAlign="center" py={4}>
        <Heading>
          Getcho' Grub On
        </Heading>
      </Box>
      <Flex justifySelf="center" border="1px solid black" justifyContent="center">
        <MotionList
          spacing={3}
          variants={listVariants}
          initial="hidden"
          animate="visible"
          colSpan={2}
        >
          {order.map((recipe, index) => {
            const color = colors[Math.floor(Math.random() * colors.length)];
            return (
              <RecipeItem
                key={recipe.id}
                recipe={recipe}
                i={index}
                updatePosition={updatePosition}
                updateOrder={updateOrder}
                color={color}
              />
            );
          })}
        </MotionList>
      </Flex>
    </Container>
  );
}
