import { Box, Modal } from "@mui/material";
import Lottie from "react-lottie";
import * as React from "react";
import * as animationData from "./easterEggAnimation.json";

export const useEasterEggModal = () => {
  const [open, setOpen] = React.useState(false);

  const EasterEggModal = () => (
    <Modal keepMounted open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          p: 4,
        }}
      >
        <Lottie
          options={{
            loop: false,
            autoplay: true,
            animationData: animationData,
          }}
          height={250}
          width={300}
          isPaused={!open}
          eventListeners={[
            {
              eventName: "complete",
              callback: () => setTimeout(() => setOpen(false), 1000),
            },
          ]}
        />
      </Box>
    </Modal>
  );

  return {
    setOpen,
    EasterEggModal,
  };
};
