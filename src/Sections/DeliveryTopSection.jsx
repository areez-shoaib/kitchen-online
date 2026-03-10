import React from "react";
import { Box,Typography } from "@mui/material";
export default function DeliveryTopSection() {
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
            fontSize: { lg: "48px", xs: "20px" },
            fontWeight: "bold",
            color: "rgb(243 148 10)",
            fontFamily: "Times New Roman, serif",
          }}
        >
          Food Delivery Coverage in DG Khan
        </Typography>
        <Typography
          sx={{
            color: "rgb(208 208 208)",
            fontSize: { lg: "20px", xs: "14px" },

            fontFamily: "Times New Roman, serif",
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Check if we deliver homemade food to your area in Dera Ghazi Khan.
          Fast, reliable online food ordering with doorstep delivery.
        </Typography>
      </Box>
    </>
  );
}
