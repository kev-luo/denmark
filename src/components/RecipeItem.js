import React from "react";
import { ListItem, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionListItem = motion.custom(ListItem);

const listItemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function RecipeItem({ recipe, color }) {
  return (
    <MotionListItem
      w="100%"
      h="20"
      p={2}
      layout
      variants={listItemVariants}
      style={{ background: `${color}` }}
      whileHover={{ scale: 1.03, boxShadow: "0px 3px 3px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 1.12, boxShadow: "0px 5px 5px rgba(0,0,0,0.1)" }}
    >
      {recipe.title}
    </MotionListItem>
  );
}
