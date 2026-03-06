import React from "react";
import { Box, Grid, Paper, Divider, Typography, Button } from "@mui/material";
import TimerIcon from "@mui/icons-material/Timer";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function DeliveryButtons() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Button
          startIcon={<CheckCircleIcon />}
          sx={{
            color: "rgb(76 175 80)",
            fontWeight: "bold",
            fontSize: "12px",
            borderRadius: "20px",
            bgcolor: "rgb(27 47 28)",
            border: "1px solid rgb(76 175 80)",
            pointerEvents: "none",
            userSelect: "text",
          }}
        >
          ✓ Fresh & Homemade
        </Button>
        <Button
          startIcon={<TimerIcon />}
          sx={{
            color: "rgb(255 140 4)",
            fontWeight: "bold",
            fontSize: "12px",
            borderRadius: "20px",
            bgcolor: "rgb(63 40 12)",
            border: "1px solid rgb(255 140 4)",
            pointerEvents: "none",
            userSelect: "text",
          }}
        >
          ⏱️ 30-65 Min Delivery
        </Button>
        <Button
          startIcon={<LocalShippingIcon />}
          sx={{
            color: "rgb(33 150 243)",
            fontWeight: "bold",
            fontSize: "12px",
            borderRadius: "20px",
            bgcolor: "rgb(19 42 61)",
            border: "1px solid rgb(33 150 243)",
            pointerEvents: "none",
            userSelect: "text",
          }}
        >
          🚚 Free Delivery Zone Check
        </Button>
      </Box>
    </>
  );
}
