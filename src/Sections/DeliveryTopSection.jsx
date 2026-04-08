import React from "react";
import { Box, Typography } from "@mui/material";

export default function DeliveryTopSection() {
  return (
    <Box sx={{
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      pt: { xs: 4, sm: 5 }, pb: { xs: 1, sm: 2 },
      px: { xs: 2, sm: 4 },
      textAlign: "center",
    }}>
      <Typography sx={{
        fontSize: { xs: "1.3rem", sm: "1.8rem", md: "2.4rem", lg: "3rem" },
        fontWeight: "bold",
        color: "#ff8c00",
        fontFamily: "Times New Roman, serif",
        lineHeight: 1.2, mb: 1.5,
      }}>
        Food Delivery Coverage in DG Khan
      </Typography>
      <Box sx={{
        width: { xs: 60, sm: 80 }, height: 3,
        background: "linear-gradient(90deg, transparent, #daa520, transparent)",
        mb: 1.5,
      }} />
      <Typography sx={{
        color: "rgba(208,208,208,0.8)",
        fontSize: { xs: "0.85rem", sm: "1rem", md: "1.1rem" },
        fontFamily: "Times New Roman, serif",
        maxWidth: 600,
        lineHeight: 1.6,
      }}>
        Check if we deliver homemade food to your area in Dera Ghazi Khan.
        Fast, reliable online food ordering with doorstep delivery.
      </Typography>
    </Box>
  );
}
