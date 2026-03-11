import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import "./MiniTopBar.css"; // yahan aapka .btn-line css file ka path
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
export default function TopBar({ activeCategory = 0, setActiveCategory }) {
  const portions = [
    "ALL",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snack",
    "Desserts",
    "Bevengers",
  ];

  return (
    <Box
      sx={{
        height: "50px",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: { lg: "row", xs: "column" },
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: {
            lg: "none",
            xs: "flex",
            md:"none",
            gap: 5,
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Times New Roman, serif",
            fontWeight: "bold",
            fontSize: "18px",
            borderBottom: "2px solid rgb(218 165 32)", // 👈 line
            display: "inline-block",
            pb: "3px",
          }}
        >
          Please Select Your Choice!
        </Typography>
        <EmojiEmotionsIcon sx={{ color: "rgb(225 160 25)" }} />
      </Box>
      <div className="btn-line">
        {portions.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className={`portion ${activeCategory === index ? "active" : ""}`}
              onClick={() => setActiveCategory && setActiveCategory(index)}
            >
              {item}
            </div>

            {index !== portions.length - 1 && (
              <span className="divider">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </Box>
  );
}
