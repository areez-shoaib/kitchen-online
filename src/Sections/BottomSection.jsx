import React from "react";
import { Box, Typography, Button } from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
export default function BottomSection() {
  return (
    <>
      <Box
        sx={{
          height: "280px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "radial-gradient(circle, rgba(81, 61, 11, 0.49) 0%,  #1a1a1a 60%)",
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
            Hungry? Order{" "}
            <Typography
              component={"span"}
              sx={{
                color: "rgb(255 140 0)",
                fontSize: { lg: "34px", xs: "20px" },
                fontWeight: "bold",
                fontFamily: "Times New Roman, serif",
              }}
            >
              Now!
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: { lg: "20px", xs: "12px" },
              fontWeight: "500",
              fontFamily: "Times New Roman, serif",
            }}
          >
            Fresh homemade food delivered hot in 30-45 minutes
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            sx={{
              bgcolor: "rgb(37 211 102)",
              color: "white",
              fontWeight: "bold",
              fontSize: { lg: "14px", xs: "10px" },
              borderRadius: "7px",
              py: { lg: 1.3, xs: 1 },
              px: { lg: 4, xs: 1 },
              transition: "all 0.3s ease",
              animation: "pulseGlow 2s infinite alternate",
              "@keyframes pulseGlow": {
                "0%": { boxShadow: "0 0 5px rgba(37, 211, 102, 0.3)" },
                "50%": { boxShadow: "0 0 15px rgba(37, 211, 102, 0.5)" },
                "100%": { boxShadow: "0 0 20px rgba(37, 211, 102, 0.7)" },
              },
              "&:hover": {
                transform: "translateY(-2px)", // extra lift on hover
                boxShadow: "0 0 25px rgba(37, 211, 102, 0.8)", // stronger glow
              },
            }}
          >
            WhatsApp
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "rgb(244 148 10)",
              color: "black",
              fontWeight: "bold",
              borderRadius: "7px",
              fontSize: { lg: "14px", xs: "10px" },
              py: { lg: 1.3, xs: 0.1 },
              px: { lg: 4, xs: 0.9 },
              animation: "glow 2s infinite alternate",
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
            View Menu
          </Button>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ color: "rgb(208 208 208)", fontSize: "12px" }}>
              Delivery
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "13px", xs: "11px" },
                color: "rgb(224 161 26)",
                fontWeight: "bold",
              }}
            >
              30-45 Min
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ color: "rgb(208 208 208)", fontSize: "12px" }}>
              Rating
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "13px", xs: "11px" },
                color: "rgb(224 161 26)",
                fontWeight: "bold",
              }}
            >
              4.8 ★
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ color: "rgb(208 208 208)", fontSize: "12px" }}>
              Orders
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "13px", xs: "11px" },
                color: "rgb(224 161 26)",
                fontWeight: "bold",
              }}
            >
              5000+
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
