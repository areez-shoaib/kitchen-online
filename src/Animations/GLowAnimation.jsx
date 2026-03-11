// utils/animations.js
import { Box } from "@mui/material";

export const glowEffect = {
  transition: "all 0.3s ease",
  boxShadow: "0 2px 5px rgba(0,0,0,0.3)",

  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 20px rgba(244, 148, 10, 0.6)",
    borderColor: "rgb(244, 148, 10)",
  },

  "&:active": {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 15px rgba(244, 148, 10, 0.8)",
    bgcolor: "rgb(36, 36, 36)",
  },
};

export const AnimatedBox = ({ children, ...props }) => (
  <Box
    sx={{
      display: "flex",
      border: "1px solid rgb(61, 51, 26)",
      borderRadius: "10px",
      bgcolor: "rgb(15, 15, 15)",
      height: "60px",
      width: "200px",
      ...glowEffect,
      ...props.sx,
    }}
  >
    {children}
  </Box>
);

