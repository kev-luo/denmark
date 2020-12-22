import React from "react";
import { Heading, ListItem, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionHeading = motion.custom(Heading);
const MotionText = motion.custom(Text);

export default function FunZoneAccordion({ i, expanded, setExpanded }) {
  const isOpen = i === expanded;
  return (
    <ListItem>
      <MotionHeading
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        Game Name
      </MotionHeading>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <MotionText
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.8 }}
            >
              Hello
            </MotionText>
          </motion.section>
        )}
      </AnimatePresence>
    </ListItem>
  );
}
