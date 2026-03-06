import React from "react";

import { Box, Typography } from "@mui/material";

export default function StatusSection() {
  return (
    <>
      <Box
        sx={{
          height: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          bgcolor: "rgb(0 0 0)",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: { lg: 29, xs: 4 } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "30px", xs: "18px" },
                color: "rgb(224 161 26)",
                fontWeight: "bold",
                fontFamily: "Times New Roman, serif",
              }}
            >
              500+
            </Typography>
            <Typography
              sx={{
                color: "rgb(208 208 208)",
                fontSize: { lg: "14px", xs: "11px" },
              }}
            >
              Happy Customers
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
            <Typography
              sx={{
                fontSize: { lg: "30px", xs: "18px" },
                color: "rgb(224 161 26)",
                fontWeight: "bold",
                fontFamily: "Times New Roman, serif",
              }}
            >
              5000+
            </Typography>
            <Typography
              sx={{
                color: "rgb(208 208 208)",
                fontSize: { lg: "14px", xs: "11px" },
              }}
            >
              Orders
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
            <Typography
              sx={{
                fontSize: { lg: "30px", xs: "18px" },
                color: "rgb(224 161 26)",
                fontWeight: "bold",
                fontFamily: "Times New Roman, serif",
              }}
            >
              4.8★
            </Typography>
            <Typography
              sx={{
                color: "rgb(208 208 208)",
                fontSize: { lg: "14px", xs: "11px" },
              }}
            >
              Rating
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: { lg: "30px", xs: "18px" },
                color: "rgb(224 161 26)",
                fontWeight: "bold",
                fontFamily: "Times New Roman, serif",
              }}
            >
              15+
            </Typography>
            <Typography
              sx={{
                color: "rgb(208 208 208)",
                fontSize: { lg: "14px", xs: "11px" },
              }}
            >
              Areas
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
