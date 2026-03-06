import React from "react";
import { Box, Grid, Paper, Divider, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DeliveryButtons from "../Components/Buttons/DeliveryButtons";
import TimerIcon from "@mui/icons-material/Timer";
import { glowEffect } from "../Animations/GLowAnimation";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
const AnimatedBox = ({ children, ...props }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      border: "3px solid rgb(33 150 243)",
      borderRadius: "9px",
      bgcolor: "rgb(27 44 58)",

      ...glowEffect,
      ...props.sx,
    }}
  >
    {children}
  </Box>
);
export default function OutSideLocationCard() {
  return (
    <>
      <AnimatedBox
        sx={{
          width: "100%",
          border: "2px solid rgb(33 150 243)",
          bgcolor: "rgb(27 44 58)",
          boxSizing: "border-box",
          height: "auto",
          p: 3,
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: "18px", xs: "20px" },
            fontWeight: "bold",
            color: "white",
            fontFamily: "Times New Roman, serif",
            display: "flex",
            gap: 1,
            textAlign: "center",
          }}
        >
          <ErrorOutlineIcon sx={{ color: "grey" }} /> ❓ Not in Our Delivery
          Area? No Problem!
        </Typography>
        <Typography
          sx={{
            color: "rgb(208 208 208)",
            fontSize: { lg: "20px", xs: "14px" },
            fontWeight: "500",
            fontFamily: "Times New Roman, serif",
          }}
        >
          Use our free delivery checker to see if we deliver homemade food to
          your location in DG Khan
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            startIcon={<LocalShippingIcon />}
            sx={{
              bgcolor: "rgb(37 211 102)",
              color: "white",
              fontWeight: "bold",
              fontSize: { lg: "14px", xs: "10px" },
              borderRadius: "7px",
              py: { lg: 1.3, xs: 1 },
              px: { lg: 4, xs: 1 },
              outline: "none",
              "&:focus": {
                outline: "none",
              },
              "&:active": {
                outline: "none",
              },
              transition: "all 0.3s ease",
              animation: "pulseGlow 2s infinite alternate",
              "@keyframes pulseGlow": {
                "0%": { boxShadow: "0 0 5px rgba(37, 211, 102, 0.3)" },
                "50%": { boxShadow: "0 0 15px rgba(37, 211, 102, 0.5)" },
                "100%": { boxShadow: "0 0 20px rgba(37, 211, 102, 0.7)" },
              },
              "&:hover": {
                transform: "translateY(-2px)", // extra lift on hover
                boxShadow: "0 0 25px rgba(37, 211, 102, 0.8)", // stronger glow
              },
            }}
          >
            📞 Call Us Now
          </Button>
          <Button
            startIcon={<TimerIcon />}
            sx={{
              border: "1px solid rgb(218 165 32)",
              color: "rgb(218 165 32)",
              fontSize: "12px",

              textTransform: "none",
              outline: "none",
              borderRadius: "7px",
              py: { lg: 1.3, xs: 1 },
              px: { lg: 4, xs: 1 },

              "&:active": {
                outline: "none",
              },
              "&:focus": {
                outline: "none",
              },
              animation: "glow 2s infinite alternate",

              "&:hover": {
                backgroundColor: "rgb(45 40 26)", // blue remove
                border: "1px solid rgb(255 140 0)",
                color: "rgb(255 140 0)",
              },

              "@keyframes glow": {
                "0%": {
                  boxShadow: "0 0 5px rgba(255, 193, 7, 0.3)",
                },
                "50%": {
                  transform: "translateY(0px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                },
                "100%": {
                  boxShadow: "0 0 20px rgba(255, 193, 7, 0.8)",
                },
              },
            }}
          >
            {" "}
            💬 WhatsApp Inquiry
          </Button>
        </Box>
      </AnimatedBox>
    </>
  );
}
