import React from "react";
import { Box } from "@mui/material";
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

export default function HomeScreen() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: { lg: "100%", md: "100%" },
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
