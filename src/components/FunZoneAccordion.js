import React, { useState } from "react";
import { Heading, ListItem, Text, IconButton, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GamePad } from "./svg/GamePad";

const MotionListItem = motion.custom(ListItem);
const MotionHeading = motion.custom(Heading);

export default function FunZoneAccordion({ game }) {
  const [open, setOpen] = useState(false);
  return (
    <MotionListItem layout backgroundColor="darkseagreen">
      <MotionHeading layout onClick={() => setOpen(!open)} _hover={{textDecoration: "underline", cursor: "pointer"}}>
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
            <Text>{game.description}</Text>
            <Link href={`${game.page}`} passHref>
              <ChakraLink>
                <IconButton as={GamePad} />
              </ChakraLink>
            </Link>
          </motion.section>
        )}
      </AnimatePresence>
    </MotionListItem>
  );
}
