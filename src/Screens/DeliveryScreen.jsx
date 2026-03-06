import React from "react";
import { Box, Grid, Paper, Divider, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DeliveryButtons from "../Components/Buttons/DeliveryButtons";
import { glowEffect } from "../Animations/GLowAnimation";
import AvailabilityCard from "../Cards/AvailabilityCard";
import WorthyCard from "../Cards/WorthyCard";
import DeliveryZoneCard from "../Cards/DeliveryZoneCard";
import InsuranceCard from "../Cards/InsuranceCard";
import InformationCard from "../Cards/InformationCard";
import LocationCard from "../Cards/LocationCard";
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
export default function DeliveryScreen() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
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

        <DeliveryButtons />

        <AvailabilityCard />

        <WorthyCard />

        <LocationCard />

        <DeliveryZoneCard />
        <InformationCard />
        <InsuranceCard />
      </Box>
    </>
  );
}
