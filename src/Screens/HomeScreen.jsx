import React from "react";
import { Box, Grid, Paper, Divider, Typography, Button } from "@mui/material";
import { glowEffect } from "../Animations/GLowAnimation";
import MealsCard from "../Cards/MealsCard";
import Dividers from "../Components/Dividers";
import StatusSection from "../Sections/StatusSection";
import DealsCard from "../Cards/DealsCard";
import TrustCard from "../Cards/TrustCard";
import DeliverySection from "../Sections/DeliverySection";
import BottomSection from "../Sections/BottomSection";
import ReviewCard from "../Cards/ReviewCard";
import CustomerCard from "../Cards/CustomerCard";
import AboutSection from "../Sections/AboutSection";
import ImageSection from "../Sections/ImageSection";
const AnimatedBox = ({ children, ...props }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      border: "2px solid rgb(61 51 26)",
      borderRadius: "12px",
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
export default function HomeScreen() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ImageSection />
        <StatusSection />
        <Dividers />
        <DealsCard />
        <TrustCard />
        <AboutSection />
        <MealsCard />
        <CustomerCard />
        <ReviewCard />
        <DeliverySection />
        <BottomSection />
      </Box>
    </>
  );
}
