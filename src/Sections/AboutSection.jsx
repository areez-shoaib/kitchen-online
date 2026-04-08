import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const points = [
  "Kitchen Online brings authentic Pakistani homemade cuisine.",
  "Fresh meals daily using premium ingredients.",
  "Perfect for students and professionals.",
  "Highest hygiene standards.",
];

export default function AboutSection() {
  const navigate = useNavigate();
  return (
    <Box sx={{
      bgcolor: "rgb(26,26,26)",
      py: { xs: 4, sm: 5, md: 6 },
      px: { xs: 2, sm: 4, md: 6, lg: 10 },
    }}>
      <Box sx={{ maxWidth: 700 }}>
        {/* Badge */}
        <Button sx={{
          color: "#0a0a0a",
          borderRadius: "20px",
          background: "linear-gradient(135deg, #daa520, #ff8c00)",
          fontWeight: "bold",
          fontSize: { xs: "0.7rem", sm: "0.8rem" },
          pointerEvents: "none",
          textTransform: "none",
          px: 2, py: 0.5, mb: 2,
        }}>
          About Us
        </Button>

        {/* Heading */}
        <Typography sx={{
          color: "white",
          fontSize: { xs: "1.2rem", sm: "1.6rem", md: "1.9rem" },
          fontWeight: "bold",
          fontFamily: "Times New Roman, serif",
          mb: 2, lineHeight: 1.3,
        }}>
          Authentic{" "}
          <Typography component="span" sx={{
            color: "#daa520",
            fontSize: "inherit", fontWeight: "inherit", fontFamily: "inherit",
          }}>
            Pakistani Homemade{" "}
          </Typography>
          Food
        </Typography>

        {/* Points */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8, mb: 3 }}>
          {points.map((p, i) => (
            <Typography key={i} sx={{
              color: "rgba(208,208,208,0.85)",
              fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
              display: "flex", alignItems: "flex-start", gap: 1,
            }}>
              <span style={{ color: "#daa520", flexShrink: 0 }}>✓</span> {p}
            </Typography>
          ))}
        </Box>

        {/* Buttons */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button
            onClick={() => navigate("/MenuScreen")}
            variant="contained"
            sx={{
              bgcolor: "#f49408", color: "black", fontWeight: "bold",
              borderRadius: "8px", textTransform: "none",
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              px: { xs: 2.5, sm: 3 }, py: { xs: 0.7, sm: 1 },
              boxShadow: "0 4px 15px rgba(218,165,32,0.4)",
              transition: "all 0.3s ease",
              "&:hover": { transform: "translateY(-2px)", boxShadow: "0 6px 20px rgba(218,165,32,0.6)" },
              "&:focus": { outline: "none" },
            }}
          >
            Explore Menu
          </Button>
          <Button
            onClick={() => navigate("/ContactScreen")}
            sx={{
              color: "#daa520", border: "1px solid rgba(218,165,32,0.5)",
              borderRadius: "8px", textTransform: "none",
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              px: { xs: 2.5, sm: 3 }, py: { xs: 0.7, sm: 1 },
              transition: "all 0.3s ease",
              "&:hover": { bgcolor: "rgba(218,165,32,0.08)", borderColor: "#daa520" },
              "&:focus": { outline: "none" },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
