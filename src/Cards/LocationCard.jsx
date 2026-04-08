import React from "react";
import { Box, Grid, Paper, Divider, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DeliveryButtons from "../Components/Buttons/DeliveryButtons";
import { glowEffect } from "../Animations/GLowAnimation";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import OutSideLocationCard from "./OutSideLocationCard";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
const AnimatedBox = ({ children, ...props }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      border: "3px solid rgb(218 165 32)",
      borderRadius: "9px",
      bgcolor: "rgb(26 26 26)",

      ...glowEffect,
      ...props.sx,
    }}
  >
    {children}
  </Box>
);
export default function LocationCard() {
  return (
    <>
      <AnimatedBox sx={{
        width: { xs: "92%", sm: "85%", md: "80%", lg: "73%" },
        height: "auto", gap: 3, boxSizing: "border-box",
      }}>
        
        <Box sx={{ width: "100%", height: { xs: 250, sm: 350, md: 500 } }}>
          <iframe
            src="https://www.google.com/maps?q=Dera%20Ghazi%20Khan&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </Box>

        {/* TEXT */}
        <Box
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt:-4
          }}
        >
          <Typography
            sx={{
              color: "rgb(218 165 32)",
              fontSize: "20px",
              fontFamily: "Times New Roman, serif",
            }}
          >
            🗺️ Explore DG Khan Delivery Areas
          </Typography>

          <Typography sx={{ color: "rgb(176 176 176)", fontSize: "12px" }}>
            Interactive map showing our complete food delivery coverage across
            Dera Ghazi Khan city
          </Typography>
        </Box>
      </AnimatedBox>
    </>
  );
}
