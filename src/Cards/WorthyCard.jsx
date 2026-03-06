import React from "react";
import { Box, Grid, Paper, Divider, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DeliveryButtons from "../Components/Buttons/DeliveryButtons";
import { glowEffect } from "../Animations/GLowAnimation";
const AnimatedBox = ({ children, ...props }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      border: "2px solid rgb(61 51 26)",
      borderRadius: "12px",
      bgcolor: "rgb(25 22 16)",
      height: "200px",
      width: "300px",
      ...glowEffect,
      ...props.sx,
    }}
  >
    {children}
  </Box>
);
export default function WorthyCard() {
  return (
    <>
      <AnimatedBox sx={{ width: "70%", p: 3, height: "auto" }}>
        <Typography
          sx={{
            color: "rgb(208 208 208)",
            fontSize: { lg: "14px", xs: "14px" },
            fontWeight: "500",

            textAlign: "center",
            maxWidth: "1800px",
            margin: "0 auto",
          }}
        >
          Looking for{" "}
          <Typography
            component={"span"}
            sx={{
              color: "rgb(208 208 208)",
              fontSize: { lg: "15px", xs: "14px" },
              fontWeight: "bold",
            }}
          >
            home-made food delivery in DG Khan?
          </Typography>{" "}
          Kitchen Online delivers fresh, hygienic meals to your doorstep. Check
          our{" "}
          <Typography
            component={"span"}
            sx={{
              color: "rgb(208 208 208)",
              fontSize: { lg: "15px", xs: "14px" },
              fontWeight: "bold",
            }}
          >
            delivery coverage areas
          </Typography>
          {"  "}
          delivery coverage areas including Gulberg, Model Town, Civil Lines,
          University Area, and more. Order online and enjoy delicious homemade
          food with fast delivery across Dera Ghazi Khan.
        </Typography>
      </AnimatedBox>
    </>
  );
}
