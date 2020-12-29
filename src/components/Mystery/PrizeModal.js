import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";

export default function PrizeModal({ open, setOpen }) {
  return (
    <Modal isOpen={open} onClose={() => setOpen(false)} isCentered>
      <ModalOverlay />
      <ModalContent bgColor="transparent" boxShadow="none">
        <ModalBody>
          <Box width="50vw">
            <ReactPlayer
              url="/videos/what_are_ya_doin.mov"
              playing
              width="50%"
              height="50%"
            />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
