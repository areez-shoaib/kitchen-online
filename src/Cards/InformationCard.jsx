import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { glowEffect } from "../Animations/GLowAnimation";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import OutSideLocationCard from "./OutSideLocationCard";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const AnimatedBox = ({ children, ...props }) => (
  <Box sx={{
    display: "flex", flexDirection: "column",
    border: "3px solid rgb(218,165,32)",
    borderRadius: "9px", bgcolor: "rgb(26,26,26)",
    ...glowEffect, ...props.sx,
  }}>
    {children}
  </Box>
);

const innerBox = {
  border: "2px solid rgb(91,73,28)",
  bgcolor: "rgb(36,33,27)",
  p: { xs: 2, sm: 3 },
  gap: { xs: 1.5, sm: 2 },
  boxSizing: "border-box",
};

const steps = [
  { emoji: "🍽️", step: "Step 1", text: "Browse our menu and select your favorite homemade dishes" },
  { emoji: "📱", step: "Step 2", text: "Contact us via WhatsApp or phone with your order and delivery address" },
  { emoji: "✅", step: "Step 3", text: "Confirm your delivery zone, time slot, and payment method" },
  { emoji: "🚚", step: "Step 4", text: "Receive your fresh, hot meal at your doorstep" },
];

export default function InformationCard() {
  return (
    <AnimatedBox sx={{
      width: { xs: "92%", sm: "85%", md: "80%", lg: "70%" },
      mx: "auto",
      p: { xs: 2, sm: 3 },
      gap: { xs: 2, sm: 3 },
    }}>
      {/* Title */}
      <Typography sx={{
        fontSize: { xs: "1rem", sm: "1.4rem", md: "1.6rem", lg: "2rem" },
        fontWeight: "bold",
        color: "rgb(218,165,32)",
        fontFamily: "Times New Roman, serif",
        lineHeight: 1.3,
      }}>
        📋 Complete Delivery Information Guide
      </Typography>

      {/* Top two boxes */}
      <Box sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 2, sm: 2 },
      }}>
        {/* Delivery Hours */}
        <AnimatedBox sx={{ ...innerBox, flex: 1 }}>
          <Typography sx={{
            color: "rgb(218,165,32)",
            fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.3rem" },
            fontFamily: "Times New Roman, serif", fontWeight: "bold",
          }}>
            ⏰ Delivery Hours & Schedule
          </Typography>

          {[
            { emoji: "🍽️", label: "Lunch Service:", time: "12:00 PM - 2:00 PM" },
            { emoji: "🍲", label: "Dinner Service:", time: "6:00 PM - 8:00 PM" },
          ].map((item, i) => (
            <Typography key={i} sx={{
              color: "rgb(208,208,208)",
              fontSize: { xs: "0.8rem", sm: "0.95rem", md: "1.05rem" },
              fontFamily: "Times New Roman, serif",
              display: "flex", gap: 1, alignItems: "center", flexWrap: "wrap",
            }}>
              {item.emoji}{" "}
              <Typography component="span" sx={{ fontWeight: "bold", fontSize: "inherit" }}>
                {item.label}
              </Typography>{" "}
              {item.time}
            </Typography>
          ))}

          <Button startIcon={<TaskAltIcon sx={{ color: "rgb(33,140,224)" }} />} sx={{
            border: "1px solid rgb(35,76,107)", outline: "none", pointerEvents: "none",
            bgcolor: "rgb(35,45,49)", fontSize: { xs: "0.65rem", sm: "0.75rem" },
            borderRadius: "9px", color: "rgb(197,208,198)", userSelect: "text",
            textTransform: "none", py: { xs: 0.8, sm: 1 }, px: 1,
            justifyContent: "flex-start", whiteSpace: "normal", textAlign: "left",
          }}>
            Orders are accepted during lunch and dinner hours only
          </Button>
        </AnimatedBox>

        {/* Delivery Fees */}
        <AnimatedBox sx={{ ...innerBox, flex: 1 }}>
          <Typography sx={{
            color: "rgb(218,165,32)",
            fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.3rem" },
            fontFamily: "Times New Roman, serif", fontWeight: "bold",
          }}>
            💰 Affordable Delivery Fees
          </Typography>

          {[
            { text: "✓ Zone A & B (Central & North): Rs. 50", border: "rgb(118,73,17)", bg: "rgb(58,44,24)" },
            { text: "✓ Zone C & D (South & East): Rs. 75", border: "rgb(52,87,47)", bg: "rgb(40,48,32)" },
          ].map((item, i) => (
            <Button key={i} sx={{
              border: `1px solid ${item.border}`, color: "white", outline: "none",
              pointerEvents: "none", bgcolor: item.bg, justifyContent: "flex-start",
              fontWeight: "bold", borderRadius: "9px", userSelect: "text",
              textTransform: "none", fontSize: { xs: "0.65rem", sm: "0.75rem" },
              py: { xs: 0.8, sm: 1 }, px: 1.5, whiteSpace: "normal", textAlign: "left",
            }}>
              {item.text}
            </Button>
          ))}

          <Button startIcon={<TaskAltIcon sx={{ color: "rgb(72,161,75)" }} />} sx={{
            border: "1px solid rgb(52,87,47)", color: "rgb(208,208,208)", outline: "none",
            pointerEvents: "none", bgcolor: "rgb(40,48,32)", justifyContent: "flex-start",
            userSelect: "text", fontSize: { xs: "0.65rem", sm: "0.75rem" },
            borderRadius: "9px", textTransform: "none",
            py: { xs: 0.8, sm: 1 }, px: 1, whiteSpace: "normal", textAlign: "left",
          }}>
            Best delivery rates in DG Khan - Fresh food at your doorstep!
          </Button>
        </AnimatedBox>
      </Box>

      {/* 4-Step Process */}
      <AnimatedBox sx={{ ...innerBox, width: "100%" }}>
        <Typography sx={{
          fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.3rem" },
          fontWeight: "bold", color: "rgb(218,165,32)",
          fontFamily: "Times New Roman, serif",
        }}>
          📝 How to Order - Simple 4-Step Process
        </Typography>

        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
          gap: { xs: 1.5, sm: 2 },
        }}>
          {steps.map((s, i) => (
            <AnimatedBox key={i} sx={{ border: "1px solid rgb(91,73,28)", bgcolor: "rgb(36,33,27)" }}>
              <Box sx={{
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                p: { xs: 1.5, sm: 2.5 }, gap: { xs: 0.8, sm: 1 },
              }}>
                <Typography sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem" } }}>{s.emoji}</Typography>
                <Button variant="contained" sx={{
                  color: "black",
                  background: "linear-gradient(45deg, rgb(225,160,25), rgb(246,146,8))",
                  fontSize: { xs: "0.6rem", sm: "0.7rem" },
                  fontWeight: 600, textTransform: "none",
                  borderRadius: "13px", pointerEvents: "none",
                  px: { xs: 0.8, sm: 1 }, py: 0.4, minWidth: "auto",
                }}>
                  {s.step}
                </Button>
                <Typography sx={{
                  color: "rgb(208,208,208)",
                  fontSize: { xs: "0.65rem", sm: "0.8rem", md: "0.85rem" },
                  textAlign: "center", lineHeight: 1.4,
                }}>
                  {s.text}
                </Typography>
              </Box>
            </AnimatedBox>
          ))}
        </Box>
      </AnimatedBox>

      <OutSideLocationCard />
    </AnimatedBox>
  );
}
