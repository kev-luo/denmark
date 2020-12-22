import React, { useState } from "react";
import { Heading, ListItem, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionListItem = motion.custom(ListItem);
const MotionHeading = motion.custom(Heading);
const MotionText = motion.custom(Text);

export default function FunZoneAccordion({ name, description }) {
  const [open, setOpen] = useState(false);
  return (
    <MotionListItem
      layout
      onClick={() => setOpen(!open)}
      backgroundColor="darkseagreen"
    >
      <MotionHeading layout>{name}</MotionHeading>
      <AnimatePresence>
        {open && (
          <motion.section
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Text>{description}</Text>
          </motion.section>
        )}
      </AnimatePresence>
    </MotionListItem>
  );
}
