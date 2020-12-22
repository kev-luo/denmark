import React, { useState } from "react";
import { ListItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useMeasurePosition } from "../utils/useMeasurePosition";

export default function RecipeItem({ recipe, i, updatePosition, updateOrder }) {
  const [isDragging, setDragging] = useState(false);
  const ref = useMeasurePosition((pos) => updatePosition(i, pos));
  return (
    <ListItem p="0" zIndex={isDragging ? 3 : 1}>
      <motion.div
        ref={ref}
        layout
        initial={false}
        style={{background: "darkseagreen"}}
        whileHover={{ scale: 1.03, boxShadow: "0px 3px 3px rgba(0,0,0,0.15)" }}
        whileTap={{ scale: 1.12, boxShadow: "0px 5px 5px rgba(0,0,0,0.1)" }}
        drag="y"
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        onViewportBoxUpdate={(_viewportBox, delta) => {
          isDragging && updateOrder(i, delta.y.translate);
        }}
      >
        {recipe.title}
      </motion.div>
    </ListItem>
  );
}
