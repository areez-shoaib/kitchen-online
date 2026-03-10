import React from "react";
import { Box } from "@mui/material";
import ContactUsCard from "../Cards/ContactUsCard";
import ContactUsSection from "../Sections/ContactUsSection";

export default function ContactScreen() {
  return (
    <>
      <Box
        sx={{
          display: "flex",

          flexDirection: "column",

          gap: 3,
        }}
      >
        <ContactUsSection />
        <ContactUsCard />
      </Box>
    </>
  );
}
