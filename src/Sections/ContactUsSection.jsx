import React from "react";
import { Box, Typography } from "@mui/material";

export default function ContactUsSection() {
  return (
    <Box sx={{
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      pt: { xs: 4, sm: 5 }, pb: { xs: 1, sm: 2 },
      px: { xs: 2, sm: 4 },
      textAlign: "center",
    }}>
      <Typography sx={{
        color: "#daa520",
        fontSize: { xs: "1.5rem", sm: "2rem", md: "2.4rem" },
        fontWeight: "bold",
        fontFamily: "Times New Roman, serif",
        mb: 1,
      }}>
        Contact Us
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
        maxWidth: 500,
      }}>
        Have questions? We'd love to hear from you! Reach out anytime.
      </Typography>
    </Box>
  );
}
