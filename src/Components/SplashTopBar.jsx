import React from "react";
import { Box, Typography } from "@mui/material";

export default function SplashTopBar() {
  return (
    <Box
      sx={{
     
      
        color: "white",
        flexDirection: { xs: "row", md: "column", lg: "row" },
   
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: { lg: 3, xs: 2, md: 0 },
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          fontFamily: "New Times Roman, serif",
          fontSize: { xs: "28px", md: "34px", lg: "40px" },
          color: "rgb(237 161 15)",
          fontWeight: "bold",
          letterSpacing: 2,

          opacity: 0,
          animation: "slideFade 1.2s ease forwards",

          textShadow: "0 0 10px rgba(237,161,15,0.6)",

          "@keyframes slideFade": {
            from: {
              opacity: 0,
              transform: "translateY(-30px)",
            },
            to: {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
        }}
      >
        HI!!!
      </Typography>
    </Box>
  );
}
