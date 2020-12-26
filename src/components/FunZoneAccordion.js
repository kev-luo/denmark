import React, { useState } from "react";
import {
  Heading,
  ListItem,
  Text,
  IconButton,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGamepad } from "react-icons/fa";

const MotionListItem = motion.custom(ListItem);
const MotionHeading = motion.custom(Heading);

export default function FunZoneAccordion({ game }) {
  const [open, setOpen] = useState(false);
  const headingVariants = {
    hover: {
      cursor: "pointer",
    },
  };
  return (
    <MotionListItem layout>
      <MotionHeading
        as="h4"
        size="lg"
        layout
        onClick={() => setOpen(!open)}
        variants={headingVariants}
        whileHover="hover"
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
