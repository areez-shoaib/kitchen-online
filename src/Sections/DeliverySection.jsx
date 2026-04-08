import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { glowEffect } from "../Animations/GLowAnimation";

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

export default function DeliverySection() {
  const locations = [
    "Gulberg Colony",
    "Model Town",
    "Johar Town",
    "DHA Society",
    "Banks",
    "Faisal Town",
    "Timber Market",
    "Satellite Town",
    "New Town",
    "University Area",
    "Police Colony",
    "All Offices",
  ];

  return (
    <Box
      sx={{
        minHeight: "400px",
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        bgcolor: "rgb(26 26 26)", gap: 4,
        px: 2, pb: { xs: 4, lg: 0 },
      }}
    >
      {/* Heading */}
      <Box textAlign="center">
        <Typography
          sx={{
            color: "white",
            fontSize: { lg: "34px", xs: "22px" },
            fontWeight: "bold",
            fontFamily: "Times New Roman, serif",
          }}
        >
          We Deliver{" "}
          <Typography
            component="span"
            sx={{
              color: "rgb(255 140 0)",
              fontSize: { lg: "34px", xs: "22px" },
              fontWeight: "bold",
              fontFamily: "Times New Roman, serif",
            }}
          >
            Across DG Khan
          </Typography>
        </Typography>

        <Typography
          sx={{
            color: "white",
            fontSize: { lg: "20px", xs: "14px" },
            fontWeight: "500",
            fontFamily: "Times New Roman, serif",
          }}
        >
          Fast delivery to your area
        </Typography>
      </Box>

      {/* Responsive Boxes */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
          maxWidth: "800px",
        }}
      >
        {locations.map((location, index) => (
          <AnimatedBox
            key={index}
            sx={{
              width: "100%",
              height: "40px",

              bgcolor: "rgb(15 15 15)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                color: "rgb(162 162 162)",
              }}
            >
              ✓ {location}
            </Typography>
          </AnimatedBox>
        ))}
      </Box>

      {/* Button */}
      <Button
        disableRipple
        disableFocusRipple
        sx={{
          color: "rgb(218 165 32)",
          border: "1px solid rgb(244 148 10)",
          borderRadius: "7px",
          px: 3,
          fontSize: { lg: "15px", xs: "12px" },
          animation: "glow 2s infinite alternate",

          "@keyframes glow": {
            "0%": { boxShadow: "0 0 5px rgba(255, 193, 7, 0.3)" },
            "50%": {
              transform: "translateY(0px)",
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            },
            "100%": { boxShadow: "0 0 20px rgba(255, 193, 7, 0.8)" },
          },
        }}
      >
        CHECK YOUR AREA
      </Button>
    </Box>
  );
}
