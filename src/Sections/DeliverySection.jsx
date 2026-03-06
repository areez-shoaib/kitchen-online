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
  const chunkSize = 4;
  const lines = [];

  for (let i = 0; i < locations.length; i += chunkSize) {
    lines.push(locations.slice(i, i + chunkSize));
  }
  return (
    <>
      <Box
        sx={{
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "rgb(26 26 26)",
          gap: 2,
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
              color: "white",
              fontSize: { lg: "34px", xs: "20px" },
              fontWeight: "bold",
              fontFamily: "Times New Roman, serif",
            }}
          >
            We Deliver{" "}
            <Typography
              component={"span"}
              sx={{
                color: "rgb(255 140 0)",
                fontSize: { lg: "34px", xs: "20px" },
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
              fontSize: { lg: "20px", xs: "15px" },
              fontWeight: "500",
              fontFamily: "Times New Roman, serif",
            }}
          >
            Fast delivery to your area
          </Typography>
        </Box>
        {/* ////////////////////////////////boxes */}

        {lines.map((line, lineIndex) => (
          <Box key={lineIndex} sx={{ display: "flex", gap: 1, mb: 1 }}>
            {line.map((location, index) => (
              <AnimatedBox
                key={index}
                sx={{
                  width: "150px",
                  height: "40px",
                  bgcolor: "rgb(15 15 15)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "rgb(162 162 162)",
                  }}
                >
                  ✓ {location}
                </Typography>
              </AnimatedBox>
            ))}
          </Box>
        ))}
        <Button
          disableRipple
          disableFocusRipple
          sx={{
            color: "rgb(218 165 32)",
            border: "1px solid rgb(244 148 10)",
            borderRadius: "7px",
            px: 2,
            fontSize: { lg: "15px", xs: "11px" },
            animation: "glow 2s infinite alternate",
            WebkitTapHighlightColor: "transparent",

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
          CHECK YOUR AREA
        </Button>
      </Box>
    </>
  );
}
