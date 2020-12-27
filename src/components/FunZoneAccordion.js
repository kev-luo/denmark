import React, { useState } from "react";
import {
  Heading,
  ListItem,
  Text,
  IconButton,
  useColorMode,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGamepad } from "react-icons/fa";

const MotionListItem = motion.custom(ListItem);
const MotionHeading = motion.custom(Heading);

export default function FunZoneAccordion({ game }) {
  const { colorMode } = useColorMode();
  const [open, setOpen] = useState(false);
  const containerVariants={
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6
      }
    }
  }
  const headingVariants = {
    initial: {
      color: colorMode === "dark" ? "#fff" : "#000"
    },
    hover: {
      cursor: "pointer",
      scale: 1.1
    },
  };
  return (
    <MotionListItem layout variants={containerVariants} initial="hidden" animate="visible">
      <MotionHeading
        as="h4"
        size="lg"
        color= {colorMode === "dark" ? "#fff" : "#000"}
        layout
        onClick={() => setOpen(!open)}
        variants={headingVariants}
        whileHover="hover"
        fontFamily="bungee-outline"
      >
        {game.name}
      </MotionHeading>
      <AnimatePresence>
        {open && (
          <motion.section
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Text mb={2}>{game.description}</Text>
            <Link href={`${game.page}`} passHref>
              <ChakraLink>
                <IconButton
                  variant="outline"
                  colorScheme="teal"
                  icon={<FaGamepad />}
                  fontSize="24px"
                />
              </ChakraLink>
            </Link>
          </motion.section>
        )}
      </AnimatePresence>
    </MotionListItem>
  );
}
