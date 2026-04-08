import React from "react";
import { Box } from "@mui/material";
import DeliveryButtons from "../Components/Buttons/DeliveryButtons";
import AvailabilityCard from "../Cards/AvailabilityCard";
import WorthyCard from "../Cards/WorthyCard";
import DeliveryZoneCard from "../Cards/DeliveryZoneCard";
import InsuranceCard from "../Cards/InsuranceCard";
import InformationCard from "../Cards/InformationCard";
import LocationCard from "../Cards/LocationCard";
import DeliveryTopSection from "../Sections/DeliveryTopSection";

export default function DeliveryScreen() {
  return (
    <>
      <Box sx={{
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: { xs: 3, sm: 5 },
        width: "100%", overflowX: "hidden", boxSizing: "border-box",
      }}>
        <DeliveryTopSection />
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
