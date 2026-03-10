import React from "react";
import { Box, Typography } from "@mui/material";
export default function ContactUsSection() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
        }}
      >
        <Typography
          sx={{
            color: "rgb(218 165 32)",
            fontSize: { lg: "30px", xs: "18px" },
            fontWeight: "bold",
            fontFamily: "Times New Roman, serif",
          }}
        >
          Contact US
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: { lg: "20px", xs: "10px" },
            fontWeight: "500",
            fontFamily: "Times New Roman, serif",
          }}
        >
          Have questions? We'd love to hear from you! Reach out anytime.
        </Typography>
      </Box>
    </>
  );
}
