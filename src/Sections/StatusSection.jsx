import React from "react";
import { Box, Typography } from "@mui/material";

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "5000+", label: "Orders" },
  { value: "4.8★", label: "Rating" },
  { value: "15+", label: "Areas" },
];

export default function StatusSection() {
  return (
    <Box sx={{
      background: "linear-gradient(90deg, #000 0%, #0d0d0d 50%, #000 100%)",
      borderTop: "1px solid rgba(218,165,32,0.1)",
      borderBottom: "1px solid rgba(218,165,32,0.1)",
      py: { xs: 2.5, sm: 3 },
      px: { xs: 2, sm: 4 },
    }}>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 3, sm: 5, md: 8, lg: 12 },
        flexWrap: "wrap",
        maxWidth: 900,
        mx: "auto",
      }}>
        {stats.map((s, i) => (
          <Box key={i} sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0.3 }}>
            <Typography sx={{
              fontSize: { xs: "1.3rem", sm: "1.6rem", md: "1.9rem" },
              color: "#daa520",
              fontWeight: "bold",
              fontFamily: "Times New Roman, serif",
              lineHeight: 1,
            }}>
              {s.value}
            </Typography>
            <Typography sx={{
              color: "rgba(208,208,208,0.7)",
              fontSize: { xs: "0.65rem", sm: "0.75rem", md: "0.85rem" },
              letterSpacing: 0.5,
            }}>
              {s.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
