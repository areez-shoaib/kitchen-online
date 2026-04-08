import React from "react";
import { Box, Button } from "@mui/material";
import TimerIcon from "@mui/icons-material/Timer";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const badges = [
  { icon: <CheckCircleIcon sx={{ fontSize: 16 }} />, label: "Fresh & Homemade", color: "rgb(76,175,80)", bg: "rgba(76,175,80,0.1)", border: "rgb(76,175,80)" },
  { icon: <TimerIcon sx={{ fontSize: 16 }} />, label: "30-65 Min Delivery", color: "rgb(255,140,4)", bg: "rgba(255,140,4,0.1)", border: "rgb(255,140,4)" },
  { icon: <LocalShippingIcon sx={{ fontSize: 16 }} />, label: "Free Delivery Zone Check", color: "rgb(33,150,243)", bg: "rgba(33,150,243,0.1)", border: "rgb(33,150,243)" },
];

export default function DeliveryButtons() {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: { xs: 1, sm: 1.5 },
      px: { xs: 2, sm: 4 },
    }}>
      {badges.map((b, i) => (
        <Button key={i} startIcon={b.icon} sx={{
          color: b.color,
          fontWeight: "bold",
          fontSize: { xs: "0.7rem", sm: "0.8rem" },
          borderRadius: "20px",
          bgcolor: b.bg,
          border: `1px solid ${b.border}`,
          pointerEvents: "none",
          userSelect: "text",
          textTransform: "none",
          px: { xs: 1.5, sm: 2 },
          py: { xs: 0.5, sm: 0.7 },
          whiteSpace: "nowrap",
        }}>
          {b.label}
        </Button>
      ))}
    </Box>
  );
}
