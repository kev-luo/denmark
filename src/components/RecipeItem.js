import React, { useState } from "react";
import { ListItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useMeasurePosition } from "../utils/useMeasurePosition";

const onTop = { zIndex: 1 };
const flat = { zIndex: 0, transition: { delay: 0.3 } };
const MotionListItem = motion.custom(ListItem);

const listItemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function RecipeItem({ recipe, i, updatePosition, updateOrder, color }) {
  const [isDragging, setDragging] = useState(false);
  const ref = useMeasurePosition((pos) => updatePosition(i, pos));
  return (
    <MotionListItem
      ref={ref}
      py={2}
      px={1}
      layout
      initial="false"
      animate={isDragging ? onTop : flat}
      style={{ background: `${color}` }}
      whileHover={{ scale: 1.03, boxShadow: "0px 3px 3px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 1.12, boxShadow: "0px 5px 5px rgba(0,0,0,0.1)" }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0}}
      dragElastic={1}
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      onViewportBoxUpdate={(_viewportBox, delta) => {
        isDragging && updateOrder(i, delta.y.translate);
      }}
    >
      {recipe.title}
    </MotionListItem>
  );
}
