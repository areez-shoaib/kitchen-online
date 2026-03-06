import React from "react";
import { Box, Grid, Paper, Divider, Typography, Button } from "@mui/material";

import HeroSection from "../Components/HeroSection";

export default function ImageSection() {
  return (
    <>
      <Box
        sx={{
          height: { lg: "480px", xs: "100%" },
          width: "100%",
          position: "relative",
          bgcolor: "pink",
        }}
      >
        <HeroSection />
      </Box>
    </>
  );
}
