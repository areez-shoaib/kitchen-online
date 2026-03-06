import React from "react";
import { Box, Grid, Paper, Divider, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DeliveryButtons from "../Components/Buttons/DeliveryButtons";
import { glowEffect } from "../Animations/GLowAnimation";
const AnimatedBox = ({ children, ...props }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      border: "2px solid rgb(218 165 32)",
      borderRadius: "9px",
      bgcolor: "rgb(26 26 26)",
      height: "200px",
      width: "300px",
      ...glowEffect,
      ...props.sx,
    }}
  >
    {children}
  </Box>
);
export default function AvailabilityCard() {
  return (
    <>
      <AnimatedBox sx={{ width: "70%", p: 3, height: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <LocationOnIcon sx={{ color: "rgb(243 148 10)" }} />

              <Typography
                sx={{
                  fontSize: { lg: "28px", xs: "20px" },
                  fontWeight: "bold",
                  color: "rgb(243 148 10)",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Check Delivery Availability in Your Area
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "rgb(208 208 208)",
                  fontSize: { lg: "20px", xs: "14px" },
                  fontWeight: "500",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Use our free delivery checker to see if we deliver homemade food
                to your location in DG Khan
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              startIcon={<LocationOnIcon />}
              sx={{
                bgcolor: "rgb(234 154 18)",
                color: "black",
                fontSize: "16px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                outline: "none",
                "& .MuiButton-startIcon svg": {
                  fontSize: "20px",
                },
                "&:focus": {
                  outline: "none",
                },
                "&:active": {
                  outline: "none",
                },
              }}
            >
              📍 Check My Location
            </Button>
          </Box>
        </Box>
      </AnimatedBox>
    </>
  );
}
