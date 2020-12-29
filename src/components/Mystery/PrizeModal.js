import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import { videos } from "../../../data/videos";

export default function PrizeModal({ open, setOpen, num }) {
  return (
    <Modal isOpen={open} onClose={() => setOpen(false)} isCentered>
      <ModalOverlay />
      <ModalContent bgColor="transparent" boxShadow="none">
        <ModalBody>
          <Box width="50vw">
            <ReactPlayer
              url={videos[num]['url']}
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
